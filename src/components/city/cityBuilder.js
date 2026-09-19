import * as THREE from 'three';

/**
 * Grand High-Fidelity PBR Material Palette for 3D Digital Twin City
 * Tuned for architectural realism, realistic traffic flow, high-speed rail, and grand bridges.
 */
export function createCityMaterials() {
  return {
    // Water & Ocean
    water: new THREE.MeshStandardMaterial({
      color: 0x0a3866,
      roughness: 0.12,
      metalness: 0.88,
      transparent: true,
      opacity: 0.94
    }),

    // Terrain & Landscapes
    groundGrass: new THREE.MeshStandardMaterial({
      color: 0x22543d,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: true
    }),
    groundSand: new THREE.MeshStandardMaterial({
      color: 0xd4a373,
      roughness: 0.9,
      metalness: 0.05,
      flatShading: true
    }),
    groundRock: new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.85,
      metalness: 0.15,
      flatShading: true
    }),
    groundQuarry: new THREE.MeshStandardMaterial({
      color: 0x713f12,
      roughness: 0.9,
      metalness: 0.05,
      flatShading: true
    }),
    farmlandLoam: new THREE.MeshStandardMaterial({
      color: 0x3d2817,
      roughness: 0.95,
      metalness: 0.02,
      flatShading: true
    }),
    substationGravel: new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true
    }),

    // Roads, Bridges & Rails
    roadAsphalt: new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.7,
      metalness: 0.2,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    }),
    roadMarkingWhite: new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.1,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2
    }),
    roadMarkingYellow: new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      roughness: 0.3,
      metalness: 0.1,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2
    }),
    concretePlaza: new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.65,
      metalness: 0.1,
      polygonOffset: true,
      polygonOffsetFactor: -0.5,
      polygonOffsetUnits: -0.5
    }),
    bridgeSteelWhite: new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.3,
      metalness: 0.4
    }),
    bridgeSteelOrange: new THREE.MeshStandardMaterial({
      color: 0xea580c,
      roughness: 0.4,
      metalness: 0.6
    }),
    railTrackSteel: new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.3,
      metalness: 0.9
    }),

    // Architectural Facades & Glass
    buildingWhite: new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.35,
      metalness: 0.1
    }),
    buildingWarmGray: new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.4,
      metalness: 0.15
    }),
    buildingDarkSteel: new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.3,
      metalness: 0.85
    }),
    buildingGlassAzure: new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      roughness: 0.05,
      metalness: 0.92,
      transparent: true,
      opacity: 0.85
    }),
    buildingGlassCyan: new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.05,
      metalness: 0.9,
      transparent: true,
      opacity: 0.82
    }),
    buildingGlassEmerald: new THREE.MeshStandardMaterial({
      color: 0x059669,
      roughness: 0.08,
      metalness: 0.88,
      transparent: true,
      opacity: 0.85
    }),

    // Trains & Rapid Transit
    trainBodySilver: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.2, metalness: 0.85 }),
    trainStripeCyan: new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.2, metalness: 0.8 }),
    trainGlass: new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.85 }),

    // Agriculture & Crops
    cropWheatGold: new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.85, metalness: 0.05 }),
    cropLushGreen: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.85, metalness: 0.05 }),
    barnRed: new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.5, metalness: 0.1 }),
    siloGalvanized: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.25, metalness: 0.85 }),
    tractorGreen: new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.3, metalness: 0.4 }),
    tractorYellowWheel: new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.4, metalness: 0.2 }),

    // Power Grid & High Voltage
    transformerBody: new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.35, metalness: 0.7 }),
    pylonSteel: new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.3, metalness: 0.85 }),
    insulatorCeramic: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.2, metalness: 0.3 }),
    solarPanel: new THREE.MeshStandardMaterial({ color: 0x1e1b4b, roughness: 0.1, metalness: 0.95 }),
    powerLineCable: new THREE.LineBasicMaterial({ color: 0x1e293b, transparent: true, opacity: 0.85 }),

    // Vehicles & Traffic
    carPaintRed: new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.2, metalness: 0.8 }),
    carPaintBlue: new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.2, metalness: 0.8 }),
    carPaintYellow: new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.25, metalness: 0.6 }),
    carPaintWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2, metalness: 0.7 }),
    carPaintBlack: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.15, metalness: 0.9 }),
    carPaintSilver: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.2, metalness: 0.9 }),
    carGlass: new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.85 }),
    carTire: new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.9, metalness: 0.1 }),
    headlightGlow: new THREE.MeshBasicMaterial({ color: 0xfffbeb }),
    taillightGlow: new THREE.MeshBasicMaterial({ color: 0xff0000 }),

    // Boats & Maritime
    boatHullWhite: new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3, metalness: 0.2 }),
    boatHullNavy: new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.3, metalness: 0.6 }),
    boatHullRed: new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.35, metalness: 0.4 }),

    // Pedestrians
    personSkin: new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.8 }),
    personCloth1: new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.7 }),
    personCloth2: new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.7 }),
    personCloth3: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.7 }),
    personCloth4: new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.7 }),

    // Cargo & Industry
    industrialSteel: new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4, metalness: 0.75 }),
    industrialYellow: new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.45, metalness: 0.4 }),
    containerBlue: new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.5, metalness: 0.3 }),
    containerRed: new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.5, metalness: 0.3 }),
    containerGreen: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.5, metalness: 0.3 }),
    containerOrange: new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.5, metalness: 0.3 }),

    // Foliage
    treeTrunk: new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9, metalness: 0.05 }),
    treeLeaves1: new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85, metalness: 0.05, flatShading: true }),
    treeLeaves2: new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85, metalness: 0.05, flatShading: true }),

    // Lighting & Accents
    streetlightEmissive: new THREE.MeshBasicMaterial({ color: 0xfef08a }),
    accentRed: new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3, metalness: 0.3 }),
    accentCyan: new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.2, metalness: 0.8 }),
    cableLine: new THREE.LineBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.8 })
  };
}

/**
 * Builds the spacious 3D Grand Digital Twin City with moving trains, bridges, and road-aligned traffic.
 */
export function buildCityScene(scene, materials) {
  const mat = materials || createCityMaterials();
  const cityGroup = new THREE.Group();
  cityGroup.name = "CityMainGroup";

  // Dynamic animated entities list
  const animatedItems = {
    vehicles: [],
    trains: [],
    boats: [],
    pedestrians: [],
    windTurbines: [],
    drones: []
  };

  // 1. Vast Water Plane Base
  const waterGeo = new THREE.PlaneGeometry(380, 380, 1, 1);
  const waterMesh = new THREE.Mesh(waterGeo, mat.water);
  waterMesh.rotation.x = -Math.PI / 2;
  waterMesh.position.y = 0;
  waterMesh.receiveShadow = true;
  cityGroup.add(waterMesh);

  // 2. Expanded Archipelago Islands & Topography
  buildTerrain(cityGroup, mat);

  // 3. Roads, Grand Bridges & Railway Viaducts
  buildRoadsAndBridges(cityGroup, mat);

  // 4. Moving Trains on Elevated Viaduct
  buildMovingTrains(cityGroup, mat, animatedItems);

  // 5. Moving City Traffic (100% Forward Tangent Motion)
  buildMovingVehicles(cityGroup, mat, animatedItems);

  // 6. Moving Maritime Vessels
  buildMovingBoats(cityGroup, mat, animatedItems);

  // 7. Walking Pedestrians
  buildPedestrians(cityGroup, mat, animatedItems);

  // 8. Spacious Industry Districts
  buildCommercialDistrict(cityGroup, mat);
  buildManufacturingDistrict(cityGroup, mat);
  buildHealthcareDistrict(cityGroup, mat);
  buildBiotechDistrict(cityGroup, mat);
  buildPortsDistrict(cityGroup, mat);
  buildMiningDistrict(cityGroup, mat);
  buildAgricultureDistrict(cityGroup, mat);
  buildEnergyGridDistrict(cityGroup, mat, animatedItems);
  buildWarehousingDistrict(cityGroup, mat);
  buildAdditiveDistrict(cityGroup, mat);
  buildDroneOperations(cityGroup, mat, animatedItems);
  buildVegetation(cityGroup, mat);

  scene.add(cityGroup);

  // High-Performance Animation Update Callback
  const updateCity = (time) => {
    // 1. Update Road Vehicles with Accurate Forward Orientation
    animatedItems.vehicles.forEach((v) => {
      if (v.type === 'ring') {
        const delta = v.speed * 0.04;
        const currentAngle = v.startAngle + time * v.speed;
        const currentX = Math.cos(currentAngle) * v.radius;
        const currentZ = Math.sin(currentAngle) * v.radius;

        // Calculate next lookAt position along circle tangent
        const nextAngle = currentAngle + (v.speed > 0 ? delta : -delta);
        const nextX = Math.cos(nextAngle) * v.radius;
        const nextZ = Math.sin(nextAngle) * v.radius;

        v.mesh.position.set(currentX, 3.04, currentZ);
        v.mesh.lookAt(nextX, 3.04, nextZ); // 100% Guaranteed Forward Heading!
      } else if (v.type === 'straight_ns') {
        const span = 72;
        const progress = (time * v.speed + v.offset) % span;
        const z = -span / 2 + progress;
        const posZ = v.direction > 0 ? z : -z;
        v.mesh.position.set(v.laneX, 3.04, posZ);
        v.mesh.rotation.y = v.direction > 0 ? 0 : Math.PI;
      } else if (v.type === 'straight_ew') {
        const span = 72;
        const progress = (time * v.speed + v.offset) % span;
        const x = -span / 2 + progress;
        const posX = v.direction > 0 ? x : -x;
        v.mesh.position.set(posX, 3.04, v.laneZ);
        v.mesh.rotation.y = v.direction > 0 ? Math.PI / 2 : -Math.PI / 2;
      } else if (v.type === 'port_spur') {
        const span = 24;
        const progress = (time * v.speed + v.offset) % span;
        const x = -56 + progress;
        const posX = v.direction > 0 ? x : -32 - progress;
        v.mesh.position.set(posX, 3.04, v.laneZ);
        v.mesh.rotation.y = v.direction > 0 ? Math.PI / 2 : -Math.PI / 2;
      }
    });

    // 2. Update Moving Trains along Viaduct
    animatedItems.trains.forEach((t) => {
      const span = 90;
      const progress = (time * t.speed + t.offset) % span;
      const z = -45 + progress;
      const posZ = t.direction > 0 ? z : -z;
      t.mesh.position.set(t.trackX, 6.8, posZ);
      t.mesh.rotation.y = t.direction > 0 ? 0 : Math.PI;
    });

    // 3. Update Moving Boats in Water
    animatedItems.boats.forEach((b) => {
      const currentAngle = b.startAngle + time * b.speed;
      const nextAngle = currentAngle + 0.05;
      const currentX = b.centerX + Math.cos(currentAngle) * b.radiusX;
      const currentZ = b.centerZ + Math.sin(currentAngle) * b.radiusZ;
      const nextX = b.centerX + Math.cos(nextAngle) * b.radiusX;
      const nextZ = b.centerZ + Math.sin(nextAngle) * b.radiusZ;

      b.mesh.position.set(currentX, 0.4, currentZ);
      b.mesh.lookAt(nextX, 0.4, nextZ);
      // Gentle roll and pitch
      b.mesh.rotation.z += Math.sin(time * 1.8 + b.startAngle) * 0.03;
      b.mesh.rotation.x += Math.cos(time * 1.5 + b.startAngle) * 0.02;
    });

    // 4. Update Pedestrians
    animatedItems.pedestrians.forEach((p) => {
      const cycle = Math.sin(time * p.walkSpeed + p.offset);
      p.mesh.position.x = p.startX + cycle * p.rangeX;
      p.mesh.position.z = p.startZ + cycle * p.rangeZ;
      p.mesh.rotation.y = cycle > 0 ? p.targetAngle : p.targetAngle + Math.PI;
    });

    // 5. Update Wind Turbines
    animatedItems.windTurbines.forEach((rotor) => {
      rotor.rotation.z = time * 2.4;
    });

    // 6. Update Drones
    animatedItems.drones.forEach((drone) => {
      const radius = 22;
      const speed = 0.35;
      drone.position.x = Math.cos(time * speed) * radius;
      drone.position.z = Math.sin(time * speed) * radius;
      drone.position.y = 18 + Math.sin(time * 1.5) * 0.8;
      drone.rotation.y = -(time * speed) + Math.PI / 2;
    });
  };

  return {
    group: cityGroup,
    updateCity,
    interactiveObjects: [cityGroup]
  };
}

// --------------------------------------------------------------------------
// 1. Expanded Archipelago Terrain & Islands
// --------------------------------------------------------------------------
function buildTerrain(group, mat) {
  // Main Central Island (Grand radius R = 72, Surface at y = 3.0)
  const mainIslandGeo = new THREE.CylinderGeometry(72, 75, 3.0, 64);
  const mainIsland = new THREE.Mesh(mainIslandGeo, mat.groundGrass);
  mainIsland.position.set(0, 1.5, 0);
  mainIsland.receiveShadow = true;
  group.add(mainIsland);

  // Sandy Coastal Fringe
  const coastGeo = new THREE.CylinderGeometry(75, 78.5, 2.6, 64);
  const coast = new THREE.Mesh(coastGeo, mat.groundSand);
  coast.position.set(0, 1.3, 0);
  coast.receiveShadow = true;
  group.add(coast);

  // Western Deepwater Port Wharf Pier (x = -58, y = 1.8)
  const portQuayGeo = new THREE.BoxGeometry(34, 1.8, 38);
  const portQuay = new THREE.Mesh(portQuayGeo, mat.concretePlaza);
  portQuay.position.set(-58, 0.9, -20);
  portQuay.receiveShadow = true;
  group.add(portQuay);

  // Northern Mountain Range (Mining Peaks)
  const m1 = new THREE.Mesh(new THREE.ConeGeometry(24, 24, 8), mat.groundRock);
  m1.position.set(15, 12, -56);
  m1.castShadow = true;
  m1.receiveShadow = true;
  group.add(m1);

  const m2 = new THREE.Mesh(new THREE.ConeGeometry(18, 18, 7), mat.groundQuarry);
  m2.position.set(-10, 9, -58);
  m2.castShadow = true;
  m2.receiveShadow = true;
  group.add(m2);

  const m3 = new THREE.Mesh(new THREE.ConeGeometry(16, 14, 6), mat.groundRock);
  m3.position.set(36, 7, -50);
  m3.castShadow = true;
  group.add(m3);
}

// --------------------------------------------------------------------------
// 2. Roads, Grand Bridges & Railway Viaduct
// --------------------------------------------------------------------------
function buildRoadsAndBridges(group, mat) {
  // 1. Grand Ring Highway (Radius R = 40.0, Width = 6.5)
  const ringRoad = new THREE.Mesh(new THREE.RingGeometry(36.75, 43.25, 64), mat.roadAsphalt);
  ringRoad.rotation.x = -Math.PI / 2;
  ringRoad.position.set(0, 3.02, 0);
  ringRoad.receiveShadow = true;
  group.add(ringRoad);

  // Yellow Center Double-Divider Line
  const ringDivider = new THREE.Mesh(new THREE.RingGeometry(39.92, 40.08, 64), mat.roadMarkingYellow);
  ringDivider.rotation.x = -Math.PI / 2;
  ringDivider.position.set(0, 3.03, 0);
  group.add(ringDivider);

  // 2. North-South Grand Avenue (from z = -40 to +40, width = 7.0)
  const roadNS = new THREE.Mesh(new THREE.PlaneGeometry(7.0, 80), mat.roadAsphalt);
  roadNS.rotation.x = -Math.PI / 2;
  roadNS.position.set(0, 3.02, 0);
  roadNS.receiveShadow = true;
  group.add(roadNS);

  for (let z = -36; z <= 36; z += 4.5) {
    if (Math.abs(z) < 3.5) continue;
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 2.4), mat.roadMarkingWhite);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(0, 3.03, z);
    group.add(dash);
  }

  // 3. East-West Grand Avenue (from x = -40 to +40, width = 7.0)
  const roadEW = new THREE.Mesh(new THREE.PlaneGeometry(80, 7.0), mat.roadAsphalt);
  roadEW.rotation.x = -Math.PI / 2;
  roadEW.position.set(0, 3.02, 0);
  roadEW.receiveShadow = true;
  group.add(roadEW);

  for (let x = -36; x <= 36; x += 4.5) {
    if (Math.abs(x) < 3.5) continue;
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.25), mat.roadMarkingWhite);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(x, 3.03, 0);
    group.add(dash);
  }

  // 4. Western Port Spur Road & Grand Suspension Bridge (Connecting x = -40 to -58 at z = -20)
  const bridgeDeck = new THREE.Mesh(new THREE.BoxGeometry(26, 0.8, 6.5), mat.roadAsphalt);
  bridgeDeck.position.set(-47, 3.3, -20);
  bridgeDeck.castShadow = true;
  group.add(bridgeDeck);

  // Suspension Bridge Towers (18m tall white towers)
  [-54, -40].forEach((px) => {
    const towerGroup = new THREE.Group();
    towerGroup.position.set(px, 3.0, -20);

    const leg1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 18, 1.2), mat.bridgeSteelWhite);
    leg1.position.set(0, 9, -3.8);
    leg1.castShadow = true;
    towerGroup.add(leg1);

    const leg2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 18, 1.2), mat.bridgeSteelWhite);
    leg2.position.set(0, 9, 3.8);
    leg2.castShadow = true;
    towerGroup.add(leg2);

    const crossbeam = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.2, 8.8), mat.bridgeSteelWhite);
    crossbeam.position.set(0, 16, 0);
    towerGroup.add(crossbeam);

    group.add(towerGroup);
  });

  // Glowing Suspension Cables
  [-3.8, 3.8].forEach((zOff) => {
    const cableGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-60, 3.3, -20 + zOff),
      new THREE.Vector3(-54, 19, -20 + zOff),
      new THREE.Vector3(-47, 4.5, -20 + zOff),
      new THREE.Vector3(-40, 19, -20 + zOff),
      new THREE.Vector3(-34, 3.3, -20 + zOff)
    ]);
    const cable = new THREE.Line(cableGeo, mat.cableLine);
    group.add(cable);
  });

  // 5. Eastern Agricultural Highway Bridge (Connecting mainland to farm at z = 20)
  const farmBridge = new THREE.Mesh(new THREE.BoxGeometry(18, 0.8, 5.5), mat.roadAsphalt);
  farmBridge.position.set(47, 3.2, 20);
  farmBridge.castShadow = true;
  group.add(farmBridge);

  // 6. Elevated High-Speed Rail Viaduct System (along x = -30, height y = 6.5)
  const viaductDeck = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.6, 90), mat.buildingWarmGray);
  viaductDeck.position.set(-30, 6.5, 0);
  viaductDeck.castShadow = true;
  group.add(viaductDeck);

  // Steel Rails on Viaduct
  [-0.9, 0.9].forEach((rx) => {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, 90), mat.railTrackSteel);
    rail.position.set(-30 + rx, 6.9, 0);
    group.add(rail);
  });

  // Viaduct Concrete Support Pillars
  for (let pz = -40; pz <= 40; pz += 10) {
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 6.5, 12), mat.concretePlaza);
    pillar.position.set(-30, 3.25, pz);
    pillar.castShadow = true;
    group.add(pillar);
  }

  // 7. Downtown Glass Skybridge (Connecting Skyscrapers at x = -6 to +6 at y = 14)
  const skybridge = new THREE.Mesh(new THREE.BoxGeometry(12, 1.8, 2.4), mat.buildingGlassAzure);
  skybridge.position.set(0, 14, -6);
  skybridge.castShadow = true;
  group.add(skybridge);

  // Streetlamps along Ring Highway
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
    const lampGroup = new THREE.Group();
    const lx = Math.cos(a) * 44.2;
    const lz = Math.sin(a) * 44.2;
    lampGroup.position.set(lx, 3.0, lz);
    lampGroup.rotation.y = -a;

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 4.5, 8), mat.industrialSteel);
    pole.position.y = 2.25;
    lampGroup.add(pole);

    const arm = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.09, 0.09), mat.industrialSteel);
    arm.position.set(-0.45, 4.45, 0);
    lampGroup.add(arm);

    const fixture = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), mat.streetlightEmissive);
    fixture.position.set(-0.85, 4.35, 0);
    lampGroup.add(fixture);

    group.add(lampGroup);
  }
}

// --------------------------------------------------------------------------
// 3. Moving High-Speed Bullet Trains
// --------------------------------------------------------------------------
function buildMovingTrains(group, mat, animatedItems) {
  function createBulletTrain() {
    const train = new THREE.Group();

    // Aerodynamic Nose Locomotive
    const loco = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 6.5), mat.trainBodySilver);
    loco.position.set(0, 0.9, 5.5);
    loco.castShadow = true;
    train.add(loco);

    // Cyan High-Speed Stripe
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.3, 6.4), mat.trainStripeCyan);
    stripe.position.set(0, 0.8, 5.5);
    train.add(stripe);

    // Window Glass Strip
    const glass1 = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.4, 5.2), mat.trainGlass);
    glass1.position.set(0, 1.15, 5.5);
    train.add(glass1);

    // Passenger Coach 1
    const coach1 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 6.0), mat.trainBodySilver);
    coach1.position.set(0, 0.9, -1.0);
    coach1.castShadow = true;
    train.add(coach1);

    const glass2 = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.4, 5.2), mat.trainGlass);
    glass2.position.set(0, 1.15, -1.0);
    train.add(glass2);

    // Passenger Coach 2
    const coach2 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 6.0), mat.trainBodySilver);
    coach2.position.set(0, 0.9, -7.5);
    coach2.castShadow = true;
    train.add(coach2);

    const glass3 = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.4, 5.2), mat.trainGlass);
    glass3.position.set(0, 1.15, -7.5);
    train.add(glass3);

    // Headlight Beam
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.1), mat.headlightGlow);
    hl.position.set(0, 0.7, 8.8);
    train.add(hl);

    return train;
  }

  const trainMesh = createBulletTrain();
  group.add(trainMesh);

  animatedItems.trains.push({
    mesh: trainMesh,
    trackX: -30,
    speed: 12.0,
    direction: 1,
    offset: 0
  });
}

// --------------------------------------------------------------------------
// 4. Moving Road Vehicles (100% Tangent-Aligned Forward Motion)
// --------------------------------------------------------------------------
function buildMovingVehicles(group, mat, animatedItems) {
  const carPaints = [
    mat.carPaintRed, 
    mat.carPaintBlue, 
    mat.carPaintYellow, 
    mat.carPaintWhite, 
    mat.carPaintBlack, 
    mat.carPaintSilver
  ];

  function createCarMesh(paintMaterial, isBus = false, isVan = false) {
    const car = new THREE.Group();

    if (isBus) {
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 5.2), mat.carPaintBlue);
      body.position.y = 0.95;
      body.castShadow = true;
      car.add(body);

      const glass = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.45, 4.6), mat.carGlass);
      glass.position.set(0, 1.2, 0);
      car.add(glass);
    } else if (isVan) {
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.1, 1.4), mat.carPaintWhite);
      cab.position.set(0, 0.85, 1.0);
      cab.castShadow = true;
      car.add(cab);

      const box = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 2.5), mat.buildingWarmGray);
      box.position.set(0, 1.0, -0.6);
      box.castShadow = true;
      car.add(box);
    } else {
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.55, 3.0), paintMaterial);
      chassis.position.y = 0.45;
      chassis.castShadow = true;
      car.add(chassis);

      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.45, 1.6), mat.carGlass);
      cabin.position.set(0, 0.82, -0.2);
      cabin.castShadow = true;
      car.add(cabin);
    }

    // Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.2, 10);
    wheelGeo.rotateZ(Math.PI / 2);

    [
      [-0.72, 0.26, 0.9],
      [0.72, 0.26, 0.9],
      [-0.72, 0.26, -0.9],
      [0.72, 0.26, -0.9]
    ].forEach(([wx, wy, wz]) => {
      const wheel = new THREE.Mesh(wheelGeo, mat.carTire);
      wheel.position.set(wx, wy, wz);
      car.add(wheel);
    });

    // Headlights (at front +Z)
    const hl1 = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.05), mat.headlightGlow);
    hl1.position.set(-0.45, 0.48, 1.52);
    car.add(hl1);

    const hl2 = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.05), mat.headlightGlow);
    hl2.position.set(0.45, 0.48, 1.52);
    car.add(hl2);

    // Taillights (at rear -Z)
    const tl = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.12, 0.05), mat.taillightGlow);
    tl.position.set(0, 0.48, -1.52);
    car.add(tl);

    return car;
  }

  // 1. Ring Highway Traffic (Outer Lane R = 41.5 Clockwise, Inner Lane R = 38.5 Counter-Clockwise)
  const ringTraffic = [
    { radius: 41.5, speed: 0.28, startAngle: 0, isBus: false, isVan: false },
    { radius: 41.5, speed: 0.26, startAngle: Math.PI * 0.5, isBus: true, isVan: false },
    { radius: 41.5, speed: 0.30, startAngle: Math.PI * 1.1, isBus: false, isVan: false },
    { radius: 41.5, speed: 0.27, startAngle: Math.PI * 1.6, isBus: false, isVan: true },
    { radius: 38.5, speed: -0.27, startAngle: Math.PI * 0.2, isBus: false, isVan: false },
    { radius: 38.5, speed: -0.29, startAngle: Math.PI * 0.8, isBus: false, isVan: false },
    { radius: 38.5, speed: -0.25, startAngle: Math.PI * 1.4, isBus: false, isVan: true },
    { radius: 38.5, speed: -0.28, startAngle: Math.PI * 1.8, isBus: false, isVan: false }
  ];

  ringTraffic.forEach((cfg, idx) => {
    const paint = carPaints[idx % carPaints.length];
    const mesh = createCarMesh(paint, cfg.isBus, cfg.isVan);
    group.add(mesh);

    animatedItems.vehicles.push({
      type: 'ring',
      mesh,
      radius: cfg.radius,
      speed: cfg.speed,
      startAngle: cfg.startAngle
    });
  });

  // 2. North-South & East-West Avenues
  const avenueTraffic = [
    { type: 'straight_ns', laneX: 1.8, direction: 1, speed: 7.5, offset: 0, paintIdx: 0 },
    { type: 'straight_ns', laneX: -1.8, direction: -1, speed: 7.0, offset: 18, paintIdx: 1 },
    { type: 'straight_ew', laneZ: 1.8, direction: 1, speed: 7.2, offset: 6, paintIdx: 2 },
    { type: 'straight_ew', laneZ: -1.8, direction: -1, speed: 6.8, offset: 24, paintIdx: 3 }
  ];

  avenueTraffic.forEach((cfg) => {
    const paint = carPaints[cfg.paintIdx % carPaints.length];
    const mesh = createCarMesh(paint, false, false);
    group.add(mesh);

    animatedItems.vehicles.push({
      type: cfg.type,
      mesh,
      laneX: cfg.laneX,
      laneZ: cfg.laneZ,
      direction: cfg.direction,
      speed: cfg.speed,
      offset: cfg.offset
    });
  });

  // 3. Port Logistics Freight Trucks
  const portTrucks = [
    { laneZ: -19.2, direction: 1, speed: 5.5, offset: 0, paintIdx: 4 },
    { laneZ: -20.8, direction: -1, speed: 5.2, offset: 10, paintIdx: 5 }
  ];

  portTrucks.forEach((cfg) => {
    const paint = carPaints[cfg.paintIdx % carPaints.length];
    const mesh = createCarMesh(paint, false, true);
    group.add(mesh);

    animatedItems.vehicles.push({
      type: 'port_spur',
      mesh,
      laneZ: cfg.laneZ,
      direction: cfg.direction,
      speed: cfg.speed,
      offset: cfg.offset
    });
  });
}

// --------------------------------------------------------------------------
// 5. Moving Boats in Deepwater Channels
// --------------------------------------------------------------------------
function buildMovingBoats(group, mat, animatedItems) {
  function createBoat(isFerry = false, isPatrol = false) {
    const boat = new THREE.Group();

    if (isFerry) {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(4.5, 1.3, 11), mat.boatHullNavy);
      hull.position.y = 0.4;
      hull.castShadow = true;
      boat.add(hull);

      const cabin = new THREE.Mesh(new THREE.BoxGeometry(3.8, 1.5, 8), mat.boatHullWhite);
      cabin.position.set(0, 1.5, -0.5);
      boat.add(cabin);

      const glass = new THREE.Mesh(new THREE.BoxGeometry(3.85, 0.6, 7.2), mat.carGlass);
      glass.position.set(0, 1.6, -0.5);
      boat.add(glass);
    } else if (isPatrol) {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.1, 8), mat.boatHullRed);
      hull.position.y = 0.4;
      hull.castShadow = true;
      boat.add(hull);

      const wheelhouse = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.5, 3.2), mat.boatHullWhite);
      wheelhouse.position.set(0, 1.5, 0.5);
      boat.add(wheelhouse);
    } else {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(5.2, 1.4, 15), mat.buildingDarkSteel);
      hull.position.y = 0.4;
      hull.castShadow = true;
      boat.add(hull);

      const colors = [mat.containerBlue, mat.containerRed, mat.containerGreen];
      for (let z = -4.5; z <= 3.5; z += 3.2) {
        const c = new THREE.Mesh(new THREE.BoxGeometry(4.0, 1.5, 2.8), colors[(Math.abs(z)) % colors.length]);
        c.position.set(0, 1.6, z);
        c.castShadow = true;
        boat.add(c);
      }
    }

    return boat;
  }

  const boatConfigs = [
    { isFerry: true, isPatrol: false, centerX: 0, centerZ: 0, radiusX: 92, radiusZ: 92, speed: 0.08, startAngle: 0 },
    { isFerry: false, isPatrol: false, centerX: -25, centerZ: -15, radiusX: 86, radiusZ: 80, speed: 0.06, startAngle: Math.PI * 0.6 },
    { isFerry: false, isPatrol: true, centerX: 25, centerZ: 25, radiusX: 84, radiusZ: 86, speed: 0.10, startAngle: Math.PI * 1.3 }
  ];

  boatConfigs.forEach(cfg => {
    const mesh = createBoat(cfg.isFerry, cfg.isPatrol);
    group.add(mesh);

    animatedItems.boats.push({
      mesh,
      centerX: cfg.centerX,
      centerZ: cfg.centerZ,
      radiusX: cfg.radiusX,
      radiusZ: cfg.radiusZ,
      speed: cfg.speed,
      startAngle: cfg.startAngle
    });
  });
}

// --------------------------------------------------------------------------
// 6. Walking Pedestrians
// --------------------------------------------------------------------------
function buildPedestrians(group, mat, animatedItems) {
  const clothMats = [mat.personCloth1, mat.personCloth2, mat.personCloth3, mat.personCloth4];

  function createPersonMesh(clothMat) {
    const person = new THREE.Group();

    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.75, 8), clothMat);
    torso.position.y = 0.58;
    torso.castShadow = true;
    person.add(torso);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), mat.personSkin);
    head.position.y = 1.1;
    head.castShadow = true;
    person.add(head);

    const legGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.48, 6);
    const leg1 = new THREE.Mesh(legGeo, mat.buildingDarkSteel);
    leg1.position.set(-0.08, 0.24, 0);
    person.add(leg1);

    const leg2 = new THREE.Mesh(legGeo, mat.buildingDarkSteel);
    leg2.position.set(0.08, 0.24, 0);
    person.add(leg2);

    return person;
  }

  const spots = [
    { startX: 4, startZ: 6, rangeX: 4.5, rangeZ: 0.5, walkSpeed: 1.6, targetAngle: 0, offset: 0 },
    { startX: -5, startZ: 8, rangeX: 0.5, rangeZ: 5.0, walkSpeed: 1.4, targetAngle: Math.PI / 2, offset: 1.2 },
    { startX: 8, startZ: -4, rangeX: 3.5, rangeZ: 2.5, walkSpeed: 1.5, targetAngle: Math.PI / 4, offset: 2.5 },
    { startX: -18, startZ: 20, rangeX: 4.5, rangeZ: 0.5, walkSpeed: 1.5, targetAngle: 0, offset: 0.8 },
    { startX: 18, startZ: -16, rangeX: 0.5, rangeZ: 4.5, walkSpeed: 1.7, targetAngle: Math.PI / 2, offset: 3.1 }
  ];

  spots.forEach((spot, idx) => {
    const cloth = clothMats[idx % clothMats.length];
    const mesh = createPersonMesh(cloth);
    mesh.position.set(spot.startX, 3.02, spot.startZ);
    group.add(mesh);

    animatedItems.pedestrians.push({
      mesh,
      startX: spot.startX,
      startZ: spot.startZ,
      rangeX: spot.rangeX,
      rangeZ: spot.rangeZ,
      walkSpeed: spot.walkSpeed,
      targetAngle: spot.targetAngle,
      offset: spot.offset
    });
  });
}

// --------------------------------------------------------------------------
// 7. Commercial Real Estate & Downtown City Core
// --------------------------------------------------------------------------
function buildCommercialDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(0, 3.0, 0);
  dGroup.userData = { districtId: "commercial" };

  // Central Pedestrian Plaza
  const plaza = new THREE.Mesh(new THREE.BoxGeometry(22, 0.2, 22), mat.concretePlaza);
  plaza.position.set(0, 0.1, 0);
  plaza.receiveShadow = true;
  dGroup.add(plaza);

  // Tower 1 (Main Glass Headquarters Skyscraper)
  const t1 = new THREE.Mesh(new THREE.BoxGeometry(6.5, 24, 6.5), mat.buildingGlassAzure);
  t1.position.set(-6, 12, -6);
  t1.castShadow = true;
  dGroup.add(t1);

  // Tower 2 (Stepped Modern Corporate Tower)
  const t2Base = new THREE.Mesh(new THREE.BoxGeometry(7, 14, 7), mat.buildingWhite);
  t2Base.position.set(6, 7, -6);
  t2Base.castShadow = true;
  dGroup.add(t2Base);

  const t2Top = new THREE.Mesh(new THREE.BoxGeometry(5.0, 8, 5.0), mat.buildingGlassCyan);
  t2Top.position.set(6, 18, -6);
  t2Top.castShadow = true;
  dGroup.add(t2Top);

  // Tower 3 (Dark Slate Tower)
  const t3 = new THREE.Mesh(new THREE.BoxGeometry(6.0, 18, 6.0), mat.buildingDarkSteel);
  t3.position.set(-6, 9, 6);
  t3.castShadow = true;
  dGroup.add(t3);

  // Tower 4 (Innovation Atrium)
  const t4 = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 4.0, 14, 18), mat.buildingWhite);
  t4.position.set(6, 7, 6);
  t4.castShadow = true;
  dGroup.add(t4);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 8. Manufacturing & Robotics District
// --------------------------------------------------------------------------
function buildManufacturingDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-26, 3.0, -20);
  dGroup.userData = { districtId: "manufacturing" };

  // Main High-Bay Assembly Plant
  const plant = new THREE.Mesh(new THREE.BoxGeometry(16, 6.5, 10), mat.buildingDarkSteel);
  plant.position.set(0, 3.25, 0);
  plant.castShadow = true;
  plant.receiveShadow = true;
  dGroup.add(plant);

  // Sawtooth Roof Skylights
  for (let i = -6; i <= 6; i += 3.0) {
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.6, 1.4, 4), mat.buildingGlassCyan);
    roof.position.set(i, 7.2, 0);
    roof.rotation.y = Math.PI / 4;
    dGroup.add(roof);
  }

  // Cylindrical Material Storage Silos
  for (let s = -2.5; s <= 2.5; s += 2.5) {
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 7.0, 16), mat.industrialSteel);
    silo.position.set(-10.5, 3.5, s);
    silo.castShadow = true;
    dGroup.add(silo);
  }

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 9. Healthcare & Medical Technology Campus
// --------------------------------------------------------------------------
function buildHealthcareDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-22, 3.0, 22);
  dGroup.userData = { districtId: "healthcare" };

  // Hospital Main Cross-Shaped Pavilion
  const hMain = new THREE.Mesh(new THREE.BoxGeometry(13, 8.5, 6.5), mat.buildingWhite);
  hMain.position.set(0, 4.25, 0);
  hMain.castShadow = true;
  dGroup.add(hMain);

  const hWing = new THREE.Mesh(new THREE.BoxGeometry(6.5, 8.5, 13), mat.buildingGlassCyan);
  hWing.position.set(0, 4.25, 0);
  hWing.castShadow = true;
  dGroup.add(hWing);

  // Rooftop Helipad
  const helipad = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.8, 0.3, 18), mat.concretePlaza);
  helipad.position.set(0, 8.65, 0);
  dGroup.add(helipad);

  const crossH = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.1, 0.6), mat.accentRed);
  crossH.position.set(0, 8.85, 0);
  dGroup.add(crossH);

  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 2.2), mat.accentRed);
  crossV.position.set(0, 8.85, 0);
  dGroup.add(crossV);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 10. Biotechnology & Research Labs Campus
// --------------------------------------------------------------------------
function buildBiotechDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(24, 3.0, -22);
  dGroup.userData = { districtId: "biotech" };

  // Center Geodesic Bio-Dome
  const dome = new THREE.Mesh(new THREE.SphereGeometry(5.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), mat.buildingGlassEmerald);
  dome.position.set(0, 0, 0);
  dome.castShadow = true;
  dGroup.add(dome);

  // Research Lab Wings
  const lab1 = new THREE.Mesh(new THREE.BoxGeometry(7.0, 5.0, 4.2), mat.buildingWhite);
  lab1.position.set(7.0, 2.5, 0);
  lab1.castShadow = true;
  dGroup.add(lab1);

  const lab2 = new THREE.Mesh(new THREE.BoxGeometry(7.0, 5.0, 4.2), mat.buildingWhite);
  lab2.position.set(-7.0, 2.5, 0);
  lab2.castShadow = true;
  dGroup.add(lab2);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 11. Smart Maritime Port & Automated Terminal
// --------------------------------------------------------------------------
function buildPortsDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-58, 1.8, -22);
  dGroup.userData = { districtId: "ports" };

  // Cargo Freighter Vessel Docked at Berth
  const hull = new THREE.Mesh(new THREE.BoxGeometry(28, 3.5, 7.5), mat.buildingDarkSteel);
  hull.position.set(0, 0.8, -12);
  hull.castShadow = true;
  dGroup.add(hull);

  // Stacked Containers on Vessel
  const colors = [mat.containerBlue, mat.containerRed, mat.containerGreen, mat.containerOrange];
  for (let x = -10; x <= 8; x += 3.6) {
    for (let y = 0; y < 2; y++) {
      const c = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.3, 2.5), colors[(Math.abs(x * 2 + y)) % colors.length]);
      c.position.set(x, 2.8 + y * 1.4, -12);
      c.castShadow = true;
      dGroup.add(c);
    }
  }

  // Quay Gantry Cranes
  for (let q = -7; q <= 7; q += 8.5) {
    const craneGroup = new THREE.Group();
    craneGroup.position.set(q, 0, -4);

    const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.55, 10, 0.55), mat.industrialYellow);
    leg1.position.set(-2.0, 5, 0);
    craneGroup.add(leg1);

    const leg2 = new THREE.Mesh(new THREE.BoxGeometry(0.55, 10, 0.55), mat.industrialYellow);
    leg2.position.set(2.0, 5, 0);
    craneGroup.add(leg2);

    const boom = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.65, 14), mat.industrialYellow);
    boom.position.set(0, 10, -2.5);
    boom.castShadow = true;
    craneGroup.add(boom);

    dGroup.add(craneGroup);
  }

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 12. Underground Mining & Extraction Ridge
// --------------------------------------------------------------------------
function buildMiningDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(15, 3.0, -54);
  dGroup.userData = { districtId: "mining" };

  // Mine Shaft Headframe Tower
  const tower = new THREE.Mesh(new THREE.BoxGeometry(5.5, 13, 5.5), mat.industrialSteel);
  tower.position.set(0, 6.5, 0);
  tower.castShadow = true;
  dGroup.add(tower);

  // Sheave Wheel
  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 0.45, 16), mat.industrialYellow);
  wheel.rotation.z = Math.PI / 2;
  wheel.position.set(0, 13.2, 0);
  dGroup.add(wheel);

  // Ore Conveyor Ramp
  const ramp = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.45, 12), mat.buildingDarkSteel);
  ramp.position.set(0, 4.2, 6);
  ramp.rotation.x = -Math.PI / 6;
  ramp.castShadow = true;
  dGroup.add(ramp);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 13. Smart Agriculture & Precision Farming (Spacious Rural Zone)
// --------------------------------------------------------------------------
function buildAgricultureDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(54, 3.0, 20);
  dGroup.userData = { districtId: "agriculture" };

  // Farm Loam Soil Bed
  const fieldBed = new THREE.Mesh(new THREE.PlaneGeometry(28, 22), mat.farmlandLoam);
  fieldBed.rotation.x = -Math.PI / 2;
  fieldBed.position.set(0, 0.02, 0);
  fieldBed.receiveShadow = true;
  dGroup.add(fieldBed);

  // Parallel Crop Furrows (Golden Wheat & Lush Green Rows)
  for (let z = -9.0; z <= 9.0; z += 1.8) {
    const isWheat = Math.round(z * 10) % 2 === 0;
    const row = new THREE.Mesh(
      new THREE.BoxGeometry(24, 0.3, 0.9), 
      isWheat ? mat.cropWheatGold : mat.cropLushGreen
    );
    row.position.set(0, 0.18, z);
    row.castShadow = true;
    dGroup.add(row);
  }

  // Red Country Barn with Gambrel Roof
  const barnBody = new THREE.Mesh(new THREE.BoxGeometry(8.5, 4.2, 6.0), mat.barnRed);
  barnBody.position.set(-10, 2.1, -12);
  barnBody.castShadow = true;
  dGroup.add(barnBody);

  const barnRoof = new THREE.Mesh(new THREE.ConeGeometry(5.5, 2.4, 4), mat.buildingWhite);
  barnRoof.position.set(-10, 5.4, -12);
  barnRoof.rotation.y = Math.PI / 4;
  barnRoof.castShadow = true;
  dGroup.add(barnRoof);

  // Galvanized Metal Grain Silos
  for (let s = -2.2; s <= 2.2; s += 3.8) {
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 6.8, 16), mat.siloGalvanized);
    silo.position.set(10, 3.4, s - 12);
    silo.castShadow = true;
    dGroup.add(silo);

    const cap = new THREE.Mesh(new THREE.ConeGeometry(1.7, 1.2, 16), mat.siloGalvanized);
    cap.position.set(10, 7.4, s - 12);
    dGroup.add(cap);
  }

  // Modern Agricultural Tractor
  const tractor = new THREE.Group();
  tractor.position.set(-3, 0.5, 12);
  tractor.rotation.y = Math.PI / 5;

  const tBody = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.0, 2.8), mat.tractorGreen);
  tBody.position.y = 0.65;
  tBody.castShadow = true;
  tractor.add(tBody);

  const tCab = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.9, 1.4), mat.carGlass);
  tCab.position.set(0, 1.5, -0.4);
  tractor.add(tCab);

  // Large Rear Tread Wheels
  const rearWheelGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.35, 14);
  rearWheelGeo.rotateZ(Math.PI / 2);
  const rw1 = new THREE.Mesh(rearWheelGeo, mat.tractorYellowWheel);
  rw1.position.set(-0.95, 0.65, -0.8);
  tractor.add(rw1);
  const rw2 = new THREE.Mesh(rearWheelGeo, mat.tractorYellowWheel);
  rw2.position.set(0.95, 0.65, -0.8);
  tractor.add(rw2);

  // Smaller Front Wheels
  const frontWheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.25, 12);
  frontWheelGeo.rotateZ(Math.PI / 2);
  const fw1 = new THREE.Mesh(frontWheelGeo, mat.tractorYellowWheel);
  fw1.position.set(-0.9, 0.38, 0.9);
  tractor.add(fw1);
  const fw2 = new THREE.Mesh(frontWheelGeo, mat.tractorYellowWheel);
  fw2.position.set(0.9, 0.38, 0.9);
  tractor.add(fw2);

  dGroup.add(tractor);

  // Center-Pivot Irrigation Truss
  const pivotBoom = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 22, 8), mat.industrialSteel);
  pivotBoom.position.set(0, 2.4, 0);
  pivotBoom.rotation.z = Math.PI / 2;
  dGroup.add(pivotBoom);

  [-9, 0, 9].forEach((x) => {
    const aFrame = new THREE.Mesh(new THREE.ConeGeometry(0.8, 2.4, 3), mat.industrialSteel);
    aFrame.position.set(x, 1.2, 0);
    dGroup.add(aFrame);
  });

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 14. High-Voltage Power Grid & Connected Transmission Pylons
// --------------------------------------------------------------------------
function buildEnergyGridDistrict(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(42, 3.0, -42);
  dGroup.userData = { districtId: "grid" };

  // Substation Gravel Switchyard Pad
  const gravelPad = new THREE.Mesh(new THREE.PlaneGeometry(22, 18), mat.substationGravel);
  gravelPad.rotation.x = -Math.PI / 2;
  gravelPad.position.set(0, 0.02, 0);
  gravelPad.receiveShadow = true;
  dGroup.add(gravelPad);

  // High-Voltage Transformers with Cooling Fins
  for (let t = -6; t <= 6; t += 6) {
    const transGroup = new THREE.Group();
    transGroup.position.set(t, 0, 0);

    const body = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.8, 2.8), mat.transformerBody);
    body.position.y = 1.4;
    body.castShadow = true;
    transGroup.add(body);

    const fins = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.0, 0.5), mat.pylonSteel);
    fins.position.set(0, 1.3, 1.5);
    transGroup.add(fins);

    [-0.9, 0, 0.9].forEach((ix) => {
      const ins = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.22, 1.1, 8), mat.insulatorCeramic);
      ins.position.set(ix, 3.35, 0);
      transGroup.add(ins);
    });

    dGroup.add(transGroup);
  }

  // Solar Photovoltaic Array (Tilted at 25 degrees)
  for (let r = -3; r <= 3; r += 3) {
    for (let c = -6; c <= 6; c += 3.2) {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.1, 1.8), mat.solarPanel);
      panel.position.set(c, 0.8, r - 12);
      panel.rotation.x = Math.PI / 7;
      panel.castShadow = true;
      dGroup.add(panel);
    }
  }

  // Wind Turbine Generation Mast
  const wtMast = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.55, 18, 14), mat.buildingWhite);
  wtMast.position.set(12, 9, 8);
  wtMast.castShadow = true;
  dGroup.add(wtMast);

  const wtRotor = new THREE.Group();
  wtRotor.position.set(12, 18, 8.5);

  const hub = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 12), mat.buildingWhite);
  wtRotor.add(hub);

  for (let b = 0; b < 3; b++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.3, 5.8, 0.08), mat.buildingWhite);
    blade.position.y = 2.9;
    blade.rotation.z = (b * Math.PI * 2) / 3;
    blade.rotation.x = 0.1;
    wtRotor.add(blade);
  }

  dGroup.add(wtRotor);
  if (animatedItems && animatedItems.windTurbines) {
    animatedItems.windTurbines.push(wtRotor);
  }

  // 3 High-Voltage Lattice Steel Transmission Pylons
  const pylonPositions = [
    new THREE.Vector3(8, 0, -5),
    new THREE.Vector3(-6, 0, 10),
    new THREE.Vector3(-18, 0, 24)
  ];

  function createTransmissionPylon() {
    const pylon = new THREE.Group();

    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.75, 15, 4), mat.pylonSteel);
    mast.position.y = 7.5;
    mast.castShadow = true;
    pylon.add(mast);

    const arm1 = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.25, 0.25), mat.pylonSteel);
    arm1.position.y = 12.5;
    pylon.add(arm1);

    const arm2 = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.25, 0.25), mat.pylonSteel);
    arm2.position.y = 14.5;
    pylon.add(arm2);

    return pylon;
  }

  pylonPositions.forEach((pos) => {
    const pMesh = createTransmissionPylon();
    pMesh.position.copy(pos);
    dGroup.add(pMesh);
  });

  // Physical 3D High-Voltage Catenary Powerlines
  for (let i = 0; i < pylonPositions.length - 1; i++) {
    const start = pylonPositions[i];
    const end = pylonPositions[i + 1];

    [-2.8, 0, 2.8].forEach((offset) => {
      const p1 = new THREE.Vector3(start.x + offset, 12.5, start.z);
      const p3 = new THREE.Vector3(end.x + offset, 12.5, end.z);
      const mid = new THREE.Vector3(
        (p1.x + p3.x) / 2,
        11.0, // Catenary sag
        (p1.z + p3.z) / 2
      );

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p3);
      const points = curve.getPoints(16);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeo, mat.powerLineCable);
      dGroup.add(line);
    });
  }

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 15. Autonomous Warehousing & AGV Hub
// --------------------------------------------------------------------------
function buildWarehousingDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-42, 3.0, 10);
  dGroup.userData = { districtId: "warehousing" };

  const wh = new THREE.Mesh(new THREE.BoxGeometry(15, 5.0, 9.5), mat.buildingWarmGray);
  wh.position.set(0, 2.5, 0);
  wh.castShadow = true;
  wh.receiveShadow = true;
  dGroup.add(wh);

  for (let b = -5.0; b <= 5.0; b += 2.5) {
    const bay = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.5, 0.1), mat.buildingDarkSteel);
    bay.position.set(b, 1.25, 4.8);
    dGroup.add(bay);
  }

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 16. Additive 3D Manufacturing Hub
// --------------------------------------------------------------------------
function buildAdditiveDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-10, 3.0, -30);
  dGroup.userData = { districtId: "additive" };

  const cleanroom = new THREE.Mesh(new THREE.BoxGeometry(11, 5.5, 8.5), mat.buildingWhite);
  cleanroom.position.set(0, 2.75, 0);
  cleanroom.castShadow = true;
  dGroup.add(cleanroom);

  const t1 = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 6.0, 16), mat.industrialSteel);
  t1.position.set(6.2, 3.0, 0);
  dGroup.add(t1);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 17. Drone Sky Operations & Vertiport
// --------------------------------------------------------------------------
function buildDroneOperations(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(0, 18, 0);
  dGroup.userData = { districtId: "drones" };

  const drone = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.26, 1.3), mat.buildingDarkSteel);
  drone.add(body);

  const payload = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), mat.accentCyan);
  payload.position.set(0, -0.38, 0);
  drone.add(payload);

  dGroup.add(drone);
  group.add(dGroup);

  if (animatedItems && animatedItems.drones) {
    animatedItems.drones.push(drone);
  }
}

// --------------------------------------------------------------------------
// 18. Urban Vegetation & Landscaping
// --------------------------------------------------------------------------
function buildVegetation(group, mat) {
  const treeGeo = new THREE.ConeGeometry(1.0, 2.5, 6);
  const trunkGeo = new THREE.CylinderGeometry(0.14, 0.2, 0.7, 6);

  const treePositions = [
    [15, 3.0, 6], [18, 3.0, 9], [21, 3.0, 3], [12, 3.0, -9], [18, 3.0, -15],
    [-21, 3.0, 12], [-24, 3.0, 18], [-27, 3.0, 21], [-9, 3.0, 21], [-6, 3.0, 24],
    [-36, 3.0, -6], [-33, 3.0, -9], [-39, 3.0, -18], [30, 3.0, -30], [24, 3.0, -36],
    [24, 3.0, 21], [27, 3.0, 24], [33, 3.0, 27], [36, 3.0, 33]
  ];

  treePositions.forEach(([x, y, z], idx) => {
    const tree = new THREE.Group();
    tree.position.set(x, y, z);

    const trunk = new THREE.Mesh(trunkGeo, mat.treeTrunk);
    trunk.position.y = 0.35;
    tree.add(trunk);

    const foliage = new THREE.Mesh(treeGeo, idx % 2 === 0 ? mat.treeLeaves1 : mat.treeLeaves2);
    foliage.position.y = 1.6;
    foliage.castShadow = true;
    tree.add(foliage);

    group.add(tree);
  });
}
