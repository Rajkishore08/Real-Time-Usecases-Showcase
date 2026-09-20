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

  // D. Smooth Organic Alpine Mountain Range, Pine Forests & Cascading Waterfall
  const mountainGroup = new THREE.Group();
  mountainGroup.position.set(0, 0, -112); // Pushed back to ensure 100% clearance of Disaster building at z = -76

  // 1. Smooth Organic Alpine Mountain Peaks with Natural Rolling Slopes (All sitting behind z = -94)
  const smoothMountainPeaks = [
    { x: -50, z: -8,  rx: 28, rz: 22, height: 34, snowScale: 0.45 },
    { x: -30, z: -12, rx: 28, rz: 22, height: 38, snowScale: 0.48 },
    { x: -5,  z: -18, rx: 34, rz: 26, height: 45, snowScale: 0.52 },
    { x: 20,  z: -10, rx: 28, rz: 22, height: 36, snowScale: 0.46 },
    { x: 44,  z: -14, rx: 32, rz: 24, height: 42, snowScale: 0.50 },
    { x: 65,  z: -8,  rx: 26, rz: 20, height: 30, snowScale: 0.42 },
    { x: 30,  z: 4,   rx: 20, rz: 16, height: 24, snowScale: 0.38 },
    // Interlocking Smooth Alpine Ridges (Connecting peaks smoothly)
    { x: -40, z: -10, rx: 22, rz: 18, height: 28, snowScale: 0.36 },
    { x: 8,   z: -14, rx: 24, rz: 20, height: 32, snowScale: 0.40 },
    { x: 54,  z: -11, rx: 22, rz: 18, height: 26, snowScale: 0.36 }
  ];

  // Shared high-segment smooth hemisphere geometry
  const smoothDomeGeo = new THREE.SphereGeometry(1.0, 36, 24, 0, Math.PI * 2, 0, Math.PI * 0.5);

  smoothMountainPeaks.forEach((p) => {
    const peakGroup = new THREE.Group();
    peakGroup.position.set(p.x, 0, p.z);

    // Smooth Rocky Mountain Body (Curved Alpine Massif)
    const rockMesh = new THREE.Mesh(smoothDomeGeo, mat.mountainRockSmooth);
    rockMesh.scale.set(p.rx, p.height, p.rz);
    rockMesh.castShadow = true;
    rockMesh.receiveShadow = true;
    peakGroup.add(rockMesh);

    // Smooth Snow Cap Mantle (Seamlessly draped over the upper alpine crest)
    const snowMesh = new THREE.Mesh(smoothDomeGeo, mat.mountainSnowSmooth);
    const snowH = p.height * p.snowScale;
    const snowRx = p.rx * p.snowScale;
    const snowRz = p.rz * p.snowScale;
    snowMesh.scale.set(snowRx, snowH, snowRz);
    snowMesh.position.y = p.height - snowH + 0.15;
    snowMesh.castShadow = true;
    peakGroup.add(snowMesh);

    mountainGroup.add(peakGroup);
  });

  // 2. Smooth Rolling Granite Boulders along the Mountain Base
  const smoothBoulderGeo = new THREE.SphereGeometry(1.4, 20, 14);
  for (let b = 0; b < 24; b++) {
    const boulder = new THREE.Mesh(smoothBoulderGeo, mat.mountainRockSmooth);
    const bx = -54 + (b * 4.8) + (Math.sin(b * 3.7) * 4);
    const bz = 4 + (Math.cos(b * 2.1) * 7);
    const scale = 0.75 + Math.sin(b * 1.5) * 0.55;
    boulder.position.set(bx, scale * 0.9, bz);
    boulder.scale.set(scale * 1.3, scale * 0.8, scale * 1.1);
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

  // 4. Natural Cascading Waterfall (Stepped Rocky Cascade from Mountain at z = -112 down to river head)
  const shelfHeights = [
    { y: 16, z: 14, width: 8.0, depth: 5.0 },
    { y: 10, z: 20, width: 9.0, depth: 5.0 },
    { y: 4,  z: 26, width: 10.0, depth: 5.0 }
  ];
  shelfHeights.forEach(s => {
    const shelfGeo = new THREE.BoxGeometry(s.width, 2.5, s.depth);
    const shelf = new THREE.Mesh(shelfGeo, mat.mountainRockSmooth);
    shelf.position.set(-16, s.y - 1.25, s.z);
    shelf.receiveShadow = true;
    mountainGroup.add(shelf);
  });

  // Flowing waterfall chutes (3 Tiers dropping down into plunge pool)
  const chuteData = [
    { y: 18, z: 17, height: 8.0, width: 5.0, rotX: 0.25 },
    { y: 11, z: 23, height: 8.0, width: 6.0, rotX: 0.28 },
    { y: 4.5, z: 29, height: 7.0, width: 7.0, rotX: 0.30 }
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

  // Natural Stone Plunge Pool Basin (At world Z = -76, connecting to river at z = -74)
  const poolGeo = new THREE.CylinderGeometry(7, 8, 1.2, 24);
  const pool = new THREE.Mesh(poolGeo, mat.riverWater);
  pool.position.set(-16, 0.1, 36);
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
