import * as THREE from 'three';

/**
 * Builds Natural Landscape, Mountain Ranges, Cascading Waterfall, Plunge Pool & Winding River
 */
export function buildLandscapeAndRiver(parent, mat, animatedItems) {
  const landscapeGroup = new THREE.Group();
  landscapeGroup.name = "LandscapeAndRiver";

  // A. Main Urban Mainland Ground (Top surface at y = 0)
  const mainlandGeo = new THREE.CylinderGeometry(130, 135, 4, 48);
  const mainlandMesh = new THREE.Mesh(mainlandGeo, mat.groundGrass);
  mainlandMesh.position.set(10, -2, 0);
  mainlandMesh.receiveShadow = true;
  landscapeGroup.add(mainlandMesh);

  // B. Deepwater Maritime Bay & Offshore Ocean Waters (West Sea, y = 0.04)
  const oceanGeo = new THREE.PlaneGeometry(160, 260);
  const oceanMesh = new THREE.Mesh(oceanGeo, mat.water);
  oceanMesh.rotation.x = -Math.PI / 2;
  oceanMesh.position.set(-150, 0.04, 0);
  oceanMesh.receiveShadow = true;
  landscapeGroup.add(oceanMesh);

  // C. Concrete Harbor Seawall & Quayside (x = -76)
  const quayGeo = new THREE.BoxGeometry(6, 1.8, 90);
  const quayMesh = new THREE.Mesh(quayGeo, mat.concretePlaza);
  quayMesh.position.set(-76, 0.3, -20);
  quayMesh.receiveShadow = true;
  quayMesh.castShadow = true;
  landscapeGroup.add(quayMesh);

  // D. Realistic Alpine Mountain Range, Pine Forests & Cascading Waterfall
  const mountainGroup = new THREE.Group();
  mountainGroup.position.set(0, 0, -96);

  // 1. Multi-Peak Mountain Ridge with Organic Rocky Contours
  const mountainPeaksData = [
    { x: -44, z: -12, radius: 18, height: 26, segments: 7, snowCap: 10 },
    { x: -26, z: -8,  radius: 22, height: 32, segments: 6, snowCap: 12 },
    { x: -6,  z: -16, radius: 24, height: 36, segments: 8, snowCap: 14 },
    { x: 14,  z: -10, radius: 20, height: 30, segments: 7, snowCap: 11 },
    { x: 34,  z: -14, radius: 22, height: 34, segments: 6, snowCap: 13 },
    { x: 52,  z: -8,  radius: 18, height: 25, segments: 7, snowCap: 9 },
    { x: -16, z: 2,   radius: 14, height: 18, segments: 5, snowCap: 6 },
    { x: 26,  z: 4,   radius: 15, height: 20, segments: 6, snowCap: 7 }
  ];

  mountainPeaksData.forEach(p => {
    // Rocky Mountain Body
    const peakGeo = new THREE.ConeGeometry(p.radius, p.height, p.segments);
    const peakMesh = new THREE.Mesh(peakGeo, mat.groundRock);
    peakMesh.position.set(p.x, p.height / 2, p.z);
    peakMesh.rotation.y = (p.x * 0.15);
    peakMesh.castShadow = true;
    peakMesh.receiveShadow = true;
    mountainGroup.add(peakMesh);

    // Snow-Capped Mountain Tip
    const capHeight = p.snowCap;
    const capRadius = p.radius * (capHeight / p.height);
    const capGeo = new THREE.ConeGeometry(capRadius, capHeight, p.segments);
    const capMesh = new THREE.Mesh(capGeo, mat.buildingWhite);
    capMesh.position.set(p.x, p.height - capHeight / 2 + 0.1, p.z);
    capMesh.rotation.y = peakMesh.rotation.y;
    mountainGroup.add(capMesh);
  });

  // 2. Natural Granite Boulders & Rock Formations along Foothills
  const boulderGeo = new THREE.DodecahedronGeometry(1.8, 1);
  for (let b = 0; b < 18; b++) {
    const boulder = new THREE.Mesh(boulderGeo, mat.groundRock);
    const bx = -48 + (b * 6.0) + (Math.sin(b * 3.7) * 4);
    const bz = 6 + (Math.cos(b * 2.1) * 6);
    const scale = 0.8 + Math.sin(b * 1.5) * 0.5;
    boulder.position.set(bx, scale * 1.2, bz);
    boulder.scale.set(scale, scale * 0.9, scale);
    boulder.rotation.set(b * 0.4, b * 0.9, b * 0.2);
    boulder.castShadow = true;
    mountainGroup.add(boulder);
  }

  // 3. Evergreen Pine Forests Across the Mountain Slopes
  for (let t = 0; t < 36; t++) {
    const treeGroup = new THREE.Group();
    const tx = -52 + (t * 3.2) + Math.sin(t * 4.3) * 3;
    const tz = 8 + Math.cos(t * 2.7) * 8;
    // Don't spawn trees directly in waterfall gorge (-22 to -8) or mining quarry road (26 to 42)
    if ((tx > -24 && tx < -6 && tz < 16) || (tx > 26 && tx < 42)) continue;

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.25, 1.4, 6),
      mat.treeTrunkWood || mat.treeTrunk
    );
    trunk.position.set(0, 0.7, 0);
    treeGroup.add(trunk);

    for (let c = 0; c < 3; c++) {
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(1.6 - c * 0.35, 1.6, 6),
        mat.treeLeaves || mat.treeFoliageA
      );
      cone.position.set(0, 1.6 + c * 1.0, 0);
      cone.castShadow = true;
      treeGroup.add(cone);
    }
    treeGroup.position.set(tx, 0, tz);
    mountainGroup.add(treeGroup);
  }

  // 4. Natural Cascading Waterfall (Stepped Rocky Cascade at x = -16, z = -78)
  const shelfHeights = [
    { y: 16, z: -2, width: 9.0, depth: 6.0 },
    { y: 10, z: 4,  width: 10.0, depth: 6.0 },
    { y: 4,  z: 10, width: 11.0, depth: 6.0 }
  ];
  shelfHeights.forEach(s => {
    const shelfGeo = new THREE.BoxGeometry(s.width, 2.5, s.depth);
    const shelf = new THREE.Mesh(shelfGeo, mat.groundRock);
    shelf.position.set(-16, s.y - 1.25, s.z);
    shelf.receiveShadow = true;
    mountainGroup.add(shelf);
  });

  // Flowing waterfall chutes (3 Tiers dropping from y = 22 down to plunge pool)
  const chuteData = [
    { y: 18, z: 1,  height: 8.0, width: 5.5, rotX: 0.25 },
    { y: 11, z: 7,  height: 8.0, width: 6.5, rotX: 0.28 },
    { y: 4.5, z: 13, height: 7.0, width: 7.5, rotX: 0.30 }
  ];
  chuteData.forEach((ch) => {
    const chuteGeo = new THREE.PlaneGeometry(ch.width, ch.height);
    const chute = new THREE.Mesh(chuteGeo, mat.waterfallFoam);
    chute.position.set(-16, ch.y, ch.z);
    chute.rotation.x = ch.rotX;
    chute.userData = { baseY: ch.y };
    mountainGroup.add(chute);
    animatedItems.waterfallStreams.push(chute);

    // Water Splash Spray Foam at shelf landing
    const sprayGeo = new THREE.RingGeometry(ch.width * 0.4, ch.width * 0.7, 16);
    const spray = new THREE.Mesh(sprayGeo, mat.waterfallFoam);
    spray.rotation.x = -Math.PI / 2;
    spray.position.set(-16, ch.y - ch.height / 2 + 0.1, ch.z + 1.5);
    mountainGroup.add(spray);
  });

  // Natural Stone Plunge Pool Basin
  const poolGeo = new THREE.CylinderGeometry(8, 9, 1.2, 24);
  const pool = new THREE.Mesh(poolGeo, mat.riverWater);
  pool.position.set(-16, 0.1, 20);
  pool.receiveShadow = true;
  mountainGroup.add(pool);

  landscapeGroup.add(mountainGroup);

  // E. Natural Winding River Carving Across the Terrain
  const riverPoints = [
    new THREE.Vector3(-16, 0.05, -74),
    new THREE.Vector3(-16, 0.05, -60),
    new THREE.Vector3(-28, 0.05, -52),
    new THREE.Vector3(-45, 0.05, -50),
    new THREE.Vector3(-65, -0.2, -50),
    new THREE.Vector3(-85, -0.6, -50)
  ];
  const riverCurve = new THREE.CatmullRomCurve3(riverPoints);

  const riverShape = new THREE.Shape();
  riverShape.moveTo(-3.5, 0);
  riverShape.lineTo(3.5, 0);
  riverShape.lineTo(3.5, -0.4);
  riverShape.lineTo(-3.5, -0.4);
  riverShape.closePath();

  const riverGeo = new THREE.ExtrudeGeometry(riverShape, {
    steps: 24,
    bevelEnabled: false,
    extrudePath: riverCurve
  });
  const riverMesh = new THREE.Mesh(riverGeo, mat.riverWater);
  riverMesh.receiveShadow = true;
  landscapeGroup.add(riverMesh);

  // Concrete Flood Defense Sluice Embankment across River at x = -16, z = -66
  const sluiceGeo = new THREE.BoxGeometry(10, 3.2, 2.5);
  const sluiceMesh = new THREE.Mesh(sluiceGeo, mat.floodBarrierMat);
  sluiceMesh.position.set(-16, 1.6, -66);
  sluiceMesh.castShadow = true;
  landscapeGroup.add(sluiceMesh);

  // F. Farmland Soil Inset
  const farmSoilGeo = new THREE.PlaneGeometry(56, 48);
  const farmSoilMesh = new THREE.Mesh(farmSoilGeo, mat.farmlandLoam);
  farmSoilMesh.rotation.x = -Math.PI / 2;
  farmSoilMesh.position.set(92, 0.05, 28);
  farmSoilMesh.receiveShadow = true;
  landscapeGroup.add(farmSoilMesh);

  // G. Substation Crushed Gravel Inset
  const subGravelGeo = new THREE.PlaneGeometry(42, 34);
  const subGravelMesh = new THREE.Mesh(subGravelGeo, mat.substationGravel);
  subGravelMesh.rotation.x = -Math.PI / 2;
  subGravelMesh.position.set(68, 0.05, -42);
  subGravelMesh.receiveShadow = true;
  landscapeGroup.add(subGravelMesh);

  parent.add(landscapeGroup);
}
