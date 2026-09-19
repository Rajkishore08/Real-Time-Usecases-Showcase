import * as THREE from 'three';

/**
 * Builds Dynamic Urban & Rural Vegetation with Programmatic Road Clearance Validation
 */
export function buildCityVegetation(parent, mat) {
  const vegGroup = new THREE.Group();
  vegGroup.name = "CityVegetation";

  const foliageMats = [mat.treeFoliageA, mat.treeFoliageB, mat.treeFoliageC];

  // Helper A: Strict Road Geometry Clearance Validator
  function isPointOnRoad(x, z, buffer = 4.2) {
    const r = Math.hypot(x, z);
    // 1. Outer Arterial Ring Highway (Radius 49.5m - 58.5m)
    if (r >= (49.5 - buffer) && r <= (58.5 + buffer)) {
      return true;
    }
    // 2. North-South Central Grand Boulevard (x = 0, width 8.5m)
    if (Math.abs(x) <= (4.25 + buffer) && Math.abs(z) <= (52.0 + buffer)) {
      return true;
    }
    // 3. East-West Tech Avenue (z = 0, width 8.5m)
    if (Math.abs(z) <= (4.25 + buffer) && Math.abs(x) <= (52.0 + buffer)) {
      return true;
    }
    // 4. Port Connector Parkway (x in [-74, -50], z in [-4, 4])
    if (x >= (-74.0 - buffer) && x <= (-50.0 + buffer) && Math.abs(z) <= (4.0 + buffer)) {
      return true;
    }
    // 5. Mining Access Quarry Road (x in [30, 38], z in [-92, -60])
    if (x >= (28.0 - buffer) && x <= (40.0 + buffer) && z >= (-94.0 - buffer) && z <= (-58.0 + buffer)) {
      return true;
    }
    return false;
  }

  // Helper B: Water Body Overlap Check
  function isPointInWater(x, z) {
    if (x < -72) return true; // Maritime harbor & ocean bay
    if (x >= -88 && x <= -20 && z >= -56 && z <= -44) return true; // River channel
    if (x >= -24 && x <= -8 && z >= -78 && z <= -52) return true; // Waterfall gorge
    return false;
  }

  // Helper C: District Footprint Check
  function isPointInBuilding(x, z) {
    if (Math.abs(x) < 14 && Math.abs(z) < 14) return true; // Commercial Center
    if (x >= -38 && x <= -10 && z >= 12 && z <= 40) return true; // Healthcare
    if (x >= 14 && x <= 42 && z >= -40 && z <= -12) return true; // Biotech
    if (x >= -38 && x <= -10 && z >= -40 && z <= -12) return true; // Manufacturing
    if (x >= -40 && x <= -8 && z >= 52 && z <= 84) return true; // Drone Vertiport
    if (x >= 10 && x <= 42 && z >= 52 && z <= 84) return true; // Walmart DC
    if (x >= 45 && x <= 91 && z >= -61 && z <= -23) return true; // Power Substation
    if (x >= 64 && x <= 118 && z >= 6 && z <= 50) return true; // Smart Agriculture Field
    if (x >= 24 && x <= 60 && z >= 70 && z <= 98) return true; // Inland Farmstead
    return false;
  }

  // 1. Curated Forest & Woodland Tree Coordinates across all quadrants & greenbelts
  const rawTreeCoords = [
    // A. Urban Quadrant Pocket Parks (Cleanly between 15m and 42m away from roads)
    [-18, -18], [-14, -22], [-22, -14], [-28, -20],
    [18, -18], [14, -22], [22, -14], [28, -20],
    [-18, 18], [-14, 22], [-22, 14], [-28, 20],
    [18, 18], [14, 22], [22, 14], [28, 20],
    [-34, -18], [-18, -34], [34, -18], [18, -34],
    [-34, 18], [-18, 34], [34, 18], [18, 34],

    // B. Inner Ring Buffer (R = 36 to 43 - Completely inside inner ring road curb)
    [30, 24], [24, 30], [-30, 24], [-24, 30],
    [30, -24], [24, -30], [-30, -24], [-24, -30],
    [38, 12], [38, -12], [-38, 12], [-38, -12],
    [12, 38], [-12, 38], [12, -38], [-12, -38],

    // C. Outer Ring Forest Belts (R = 66 to 110 - Deep outside outer ring road)
    [58, 48], [64, 54], [72, 60], [80, 64], [88, 66], [96, 62],
    [104, 54], [108, 44], [112, 32], [114, 18], [112, 4], [108, -8],
    [102, -20], [96, -30], [90, -48], [82, -58], [72, -66], [62, -72],
    [48, -78], [20, -78], [8, -76], [-8, -78], [-28, -74], [-38, -72],
    [-48, -68], [-58, -62], [-66, -56], [-72, -42], [-70, -28], [-68, -14],
    [-68, 14], [-70, 28], [-72, 42], [-68, 56], [-62, 68], [-54, 78],
    [-44, 86], [-32, 92], [-18, 96], [-4, 98], [10, 98], [22, 96],
    [64, 76], [76, 78], [88, 74], [98, 68], [106, 58],

    // D. Riverbank Woodlands & Waterfall Valley (Strictly along river banks, not inside water)
    [-26, -60], [-32, -60], [-40, -60], [-48, -60], [-56, -60], [-64, -60],
    [-26, -38], [-34, -38], [-42, -38], [-50, -38], [-58, -38], [-66, -38],
    [-10, -62], [-8, -70], [-24, -76], [-28, -66],

    // E. Southern Pastures & Estuary Nature Reserve
    [-24, 72], [-16, 76], [-8, 80], [4, 82], [12, 84],
    [-34, 82], [-28, 88], [-20, 92], [-10, 94], [2, 94],
    [66, 88], [74, 90], [82, 86], [90, 80], [96, 74],

    // F. Northeast Highland Pine Forest
    [48, -56], [54, -64], [60, -70], [68, -74], [78, -70], [86, -64],
    [52, -22], [58, -16], [62, -8], [66, 0], [70, 8]
  ];

  // Filter all tree candidates through strict geometry validators
  const safeTreeCoords = rawTreeCoords.filter(([tx, tz]) => {
    if (isPointOnRoad(tx, tz, 4.2)) return false;
    if (isPointInWater(tx, tz)) return false;
    if (isPointInBuilding(tx, tz)) return false;
    return true;
  });

  safeTreeCoords.forEach(([tx, tz], i) => {
    const isPine = (i % 3 === 0) || (tz < -30) || (tx < -55);
    const tree = new THREE.Group();
    tree.position.set(tx, 0, tz);

    if (isPine) {
      // Coniferous Mountain / Coastal Pine Tree
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.26, 1.8, 6),
        mat.treeTrunk
      );
      trunk.position.set(0, 0.9, 0);
      tree.add(trunk);

      for (let c = 0; c < 3; c++) {
        const coneGeo = new THREE.ConeGeometry(1.7 - c * 0.38, 1.7, 6);
        const cone = new THREE.Mesh(coneGeo, foliageMats[i % foliageMats.length]);
        cone.position.set(0, 1.9 + c * 1.1, 0);
        cone.castShadow = true;
        tree.add(cone);
      }
    } else {
      // Deciduous Oak / Maple Tree
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.3, 2.4, 8),
        mat.treeTrunk
      );
      trunk.position.set(0, 1.2, 0);
      trunk.castShadow = true;
      tree.add(trunk);

      const foliageGeo = new THREE.DodecahedronGeometry(1.7 + (i % 4) * 0.25);
      const fMat = foliageMats[i % foliageMats.length];
      const foliage = new THREE.Mesh(foliageGeo, fMat);
      foliage.position.set(0, 3.1, 0);
      foliage.castShadow = true;
      tree.add(foliage);
    }

    vegGroup.add(tree);
  });

  // 2. Dense Undergrowth Shrubs & Flowering Bushes (Filtered with strict clearance)
  const bushGeo = new THREE.DodecahedronGeometry(0.9);
  for (let b = 0; b < 90; b++) {
    const bx = -90 + (b * 2.1) + Math.sin(b * 3.7) * 9;
    const bz = -80 + Math.cos(b * 2.3) * 75;

    // Strict road, water, building clearance
    if (isPointOnRoad(bx, bz, 3.8)) continue;
    if (isPointInWater(bx, bz)) continue;
    if (isPointInBuilding(bx, bz)) continue;

    const bMat = foliageMats[b % foliageMats.length];
    const bush = new THREE.Mesh(bushGeo, bMat);
    const bScale = 0.6 + (b % 5) * 0.15;
    bush.scale.set(bScale * 1.2, bScale * 0.8, bScale);
    bush.position.set(bx, bScale * 0.6, bz);
    bush.castShadow = true;
    vegGroup.add(bush);
  }

  // 3. Natural Granite Woodland Boulders (Filtered with strict clearance)
  const rockGeo = new THREE.DodecahedronGeometry(1.2, 1);
  for (let r = 0; r < 40; r++) {
    const rx = -80 + (r * 4.2) + Math.cos(r * 4.1) * 12;
    const rz = -70 + Math.sin(r * 3.1) * 65;

    if (isPointOnRoad(rx, rz, 3.8)) continue;
    if (isPointInWater(rx, rz)) continue;
    if (isPointInBuilding(rx, rz)) continue;

    const rock = new THREE.Mesh(rockGeo, mat.groundRock);
    const rScale = 0.7 + (r % 4) * 0.3;
    rock.scale.set(rScale * 1.3, rScale * 0.7, rScale * 1.1);
    rock.position.set(rx, rScale * 0.5, rz);
    rock.rotation.set(r * 0.5, r * 0.8, r * 0.3);
    rock.castShadow = true;
    vegGroup.add(rock);
  }

  parent.add(vegGroup);
}
