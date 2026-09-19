import * as THREE from 'three';

/**
 * Grand High-Fidelity PBR Material Palette for 3D Digital Twin City
 * Tuned for architectural realism, expanded city layout, autonomous drone delivery vertiport,
 * high-speed rail viaduct, Walmart DC hub, and deepwater maritime port.
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

    // Walmart Branding & Logistics
    walmartBlue: new THREE.MeshStandardMaterial({ color: 0x0071ce, roughness: 0.3, metalness: 0.3 }),
    walmartYellow: new THREE.MeshStandardMaterial({ color: 0xffc220, roughness: 0.25, metalness: 0.4 }),
    trailerWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3, metalness: 0.5 }),
    palletWood: new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.85 }),

    // Drone Vertiport Materials
    dronePadRing: new THREE.MeshBasicMaterial({ color: 0x00f2fe, side: THREE.DoubleSide }),
    dronePadTarmac: new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6, metalness: 0.2 }),
    droneBodyMat: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.8 }),
    droneRotorMat: new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 }),
    dronePayloadBox: new THREE.MeshStandardMaterial({ color: 0x0071ce, roughness: 0.3, metalness: 0.4 }),
    droneBeaconCyan: new THREE.MeshBasicMaterial({ color: 0x00f2fe }),
    droneBeaconRed: new THREE.MeshBasicMaterial({ color: 0xef4444 }),
    droneBeaconGreen: new THREE.MeshBasicMaterial({ color: 0x10b981 }),

    // Trains & Rapid Transit
    trainBodySilver: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.2, metalness: 0.85 }),
    trainStripeCyan: new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.2, metalness: 0.8 }),
    trainGlass: new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.85 }),
    stationCanopy: new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.75 }),

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
    cableLine: new THREE.LineBasicMaterial({ color: 0x1e293b, linewidth: 2 }),

    // Industrial Machinery & Vehicles
    industrialYellow: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.35, metalness: 0.5 }),
    industrialSteel: new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4, metalness: 0.8 }),
    carTire: new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.9, metalness: 0.1 }),
    headlightGlow: new THREE.MeshBasicMaterial({ color: 0xffffff }),
    taillightGlow: new THREE.MeshBasicMaterial({ color: 0xff0033 }),

    // Intermodal Containers
    containerBlue: new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4, metalness: 0.3 }),
    containerRed: new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4, metalness: 0.3 }),
    containerGreen: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.4, metalness: 0.3 }),
    containerOrange: new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.4, metalness: 0.3 }),
    containerYellow: new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.4, metalness: 0.3 }),

    // Vegetation & Foliage
    treeLeaves1: new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8, metalness: 0.05, flatShading: true }),
    treeLeaves2: new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.8, metalness: 0.05, flatShading: true }),
    treeTrunk: new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9, metalness: 0.02 }),

    // Holograms & Digital Twin Accents
    accentCyan: new THREE.MeshBasicMaterial({ color: 0x00f2fe }),
    accentPurple: new THREE.MeshBasicMaterial({ color: 0xa855f7 }),
    accentRed: new THREE.MeshBasicMaterial({ color: 0xf43f5e }),
    accentEmerald: new THREE.MeshBasicMaterial({ color: 0x10b981 }),
    accentAmber: new THREE.MeshBasicMaterial({ color: 0xf59e0b }),
    haloRingMat: new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55
    })
  };
}

/**
 * Main 3D City Builder
 * Assembles all 13 GCC districts across an expanded, grand island terrain with realistic infrastructure.
 */
export function buildCityScene(scene, mat) {
  const cityRoot = new THREE.Group();
  scene.add(cityRoot);

  const interactiveObjects = [];
  const animatedItems = {
    vehicles: [],
    trains: [],
    drones: [],
    rotors: [],
    turbines: [],
    radars: [],
    craneCables: []
  };

  // 1. Terrain & Ocean
  buildTerrain(cityRoot, mat);

  // 2. Road Network, Bridges & Rail Viaduct
  buildRoadAndRailInfrastructure(cityRoot, mat);

  // 3. Moving Bullet Train (Ping-Pong between Stations)
  buildMovingTrains(cityRoot, mat, animatedItems);

  // 4. Moving Road Vehicles (100% Tangent Forward Orientation)
  buildMovingVehicles(cityRoot, mat, animatedItems);

  // 5. Center Commercial Real Estate & GCC Tech HQ [0, 3, 0]
  buildCommercialDistrict(cityRoot, mat);

  // 6. Manufacturing & Robotics Hub [-30, 3, -32]
  buildManufacturingDistrict(cityRoot, mat, animatedItems);

  // 7. Additive 3D Prototyping Lab [-6, 3, -48]
  buildAdditiveDistrict(cityRoot, mat);

  // 8. Disaster Response & Satellite Intel [-36, 3, -60]
  buildDisasterDistrict(cityRoot, mat, animatedItems);

  // 9. Healthcare & Medical Technology Campus [-26, 3, 38]
  buildHealthcareDistrict(cityRoot, mat);

  // 10. Biotechnology & Biosphere Research Labs [34, 3, -28]
  buildBiotechDistrict(cityRoot, mat);

  // 11. Smart Deepwater Maritime Port [-72, 1.8, -26]
  buildPortsDistrict(cityRoot, mat, animatedItems);

  // 12. Smart Electrical Substation & Power Grid [58, 3, -48]
  buildPowerGridDistrict(cityRoot, mat);

  // 13. Mining & Subsurface Quarry [24, 10, -70]
  buildMiningDistrict(cityRoot, mat);

  // 14. Smart Agriculture & Precision Farming [66, 3, 22]
  buildAgricultureDistrict(cityRoot, mat, animatedItems);

  // 15. Walmart Distribution Center & Logistics Yard [-58, 3, 6]
  buildWalmartDistrict(cityRoot, mat);

  // 16. Autonomous Drone Delivery Station & Multi-Stop Air Fleet [-54, 3, 28]
  buildDroneVertiportHub(cityRoot, mat, animatedItems);

  // 17. Urban Greenery & Landscaping
  buildVegetation(cityRoot, mat);

  // Collect Interactive District Meshes for Raycaster
  cityRoot.traverse((child) => {
    if (child.userData && child.userData.districtId) {
      interactiveObjects.push(child);
    }
  });

  // Animation Update Function called on each render frame
  const updateCity = (time) => {
    // 1. Vehicles Road Tangent Motion
    animatedItems.vehicles.forEach((veh) => {
      const angle = (time * veh.speed + veh.offset) % (Math.PI * 2);
      const r = veh.radius;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      veh.mesh.position.set(x, veh.y, z);

      const lookAngle = angle + 0.04;
      const nextX = Math.cos(lookAngle) * r;
      const nextZ = Math.sin(lookAngle) * r;
      veh.mesh.lookAt(nextX, veh.y, nextZ);
    });

    // 2. High-Speed Bullet Train Ping-Pong Motion
    animatedItems.trains.forEach((train) => {
      const cycleZ = Math.cos(time * train.speed) * 44.0;
      const velocityZ = -Math.sin(time * train.speed);
      train.mesh.position.set(train.trackX, 7.1, cycleZ);
      train.mesh.rotation.y = velocityZ >= 0 ? 0 : Math.PI;
    });

    // 3. Autonomous Drone Delivery Fleet (Multi-stop delivery routes)
    animatedItems.drones.forEach((drone) => {
      const progress = (time * drone.speed + drone.offset) % 1.0;
      const point = drone.curve.getPointAt(progress);
      const tangent = drone.curve.getTangentAt(progress);
      
      drone.group.position.copy(point);
      
      // Look forward along flight path tangent
      const targetLook = point.clone().add(tangent);
      drone.group.lookAt(targetLook);

      // Subtle banking tilt when turning
      drone.group.rotation.z = Math.sin(time * 2.0 + drone.offset) * 0.08;
    });

    // 4. Drone Spinning Propeller Rotors
    animatedItems.rotors.forEach((rotor) => {
      rotor.rotation.y += 0.85;
    });

    // 5. Wind Turbine Rotations
    animatedItems.turbines.forEach((rotor) => {
      rotor.rotation.z += 0.025;
    });

    // 6. Rotating Radar Antennas
    animatedItems.radars.forEach((radar) => {
      radar.rotation.y += 0.04;
    });

    // 7. Active Quay Crane Container Hoisting
    animatedItems.craneCables.forEach((crane) => {
      const cycle = Math.sin(time * 0.6 + crane.baseZ);
      crane.trolley.position.z = crane.baseZ + cycle * 3.5;
      crane.container.position.z = crane.baseZ + cycle * 3.5;
      crane.container.position.y = crane.baseY + Math.sin(time * 1.2) * 1.6;
    });
  };

  return {
    cityRoot,
    interactiveObjects,
    updateCity
  };
}

// --------------------------------------------------------------------------
// 1. Terrain & Water Topography
// --------------------------------------------------------------------------
function buildTerrain(group, mat) {
  // Ocean Floor
  const ocean = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), mat.water);
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.y = 0.5;
  ocean.receiveShadow = true;
  group.add(ocean);

  // Expanded Island Foundation (Radius = 92)
  const island = new THREE.Mesh(new THREE.CylinderGeometry(92, 98, 3.0, 48), mat.groundGrass);
  island.position.y = 1.5;
  island.receiveShadow = true;
  group.add(island);

  // Sandy Coastal Beach Shorelines
  const beach = new THREE.Mesh(new THREE.CylinderGeometry(94, 98, 0.6, 48), mat.groundSand);
  beach.position.y = 0.8;
  beach.receiveShadow = true;
  group.add(beach);

  // Rocky Mountainous Escarpment for Mining & Quarry (North-West)
  const mountain = new THREE.Mesh(new THREE.ConeGeometry(38, 26, 12), mat.groundRock);
  mountain.position.set(24, 13, -70);
  mountain.castShadow = true;
  mountain.receiveShadow = true;
  group.add(mountain);

  const subRidge = new THREE.Mesh(new THREE.ConeGeometry(24, 16, 10), mat.groundRock);
  subRidge.position.set(44, 8, -62);
  subRidge.castShadow = true;
  subRidge.receiveShadow = true;
  group.add(subRidge);

  // Agricultural Loam Soil Pad
  const farmSoil = new THREE.Mesh(new THREE.PlaneGeometry(36, 32), mat.farmlandLoam);
  farmSoil.rotation.x = -Math.PI / 2;
  farmSoil.position.set(66, 3.01, 22);
  farmSoil.receiveShadow = true;
  group.add(farmSoil);

  // Deepwater Port Quayside Concrete Berth
  const wharf = new THREE.Mesh(new THREE.BoxGeometry(42, 2.0, 36), mat.concretePlaza);
  wharf.position.set(-72, 1.0, -26);
  wharf.receiveShadow = true;
  group.add(wharf);

  // Central Metropolis Plaza
  const downtownPlaza = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 0.05, 32), mat.concretePlaza);
  downtownPlaza.position.set(0, 3.01, 0);
  downtownPlaza.receiveShadow = true;
  group.add(downtownPlaza);
}

// --------------------------------------------------------------------------
// 2. Road Network, Bridges & Rail Viaduct Infrastructure
// --------------------------------------------------------------------------
function buildRoadAndRailInfrastructure(group, mat) {
  // 1. Primary Outer Ring Highway (Radius = 52.0, Width = 7.0)
  const ringGeo = new THREE.RingGeometry(48.5, 55.5, 64);
  const ringRoad = new THREE.Mesh(ringGeo, mat.roadAsphalt);
  ringRoad.rotation.x = -Math.PI / 2;
  ringRoad.position.y = 3.02;
  ringRoad.receiveShadow = true;
  group.add(ringRoad);

  // Highway Center Double-Yellow Dividers
  const yLine1 = new THREE.Mesh(new THREE.RingGeometry(51.9, 52.1, 64), mat.roadMarkingYellow);
  yLine1.rotation.x = -Math.PI / 2;
  yLine1.position.y = 3.03;
  group.add(yLine1);

  // Highway Outer White Boundary Lines
  const wLineOut = new THREE.Mesh(new THREE.RingGeometry(55.1, 55.3, 64), mat.roadMarkingWhite);
  wLineOut.rotation.x = -Math.PI / 2;
  wLineOut.position.y = 3.03;
  group.add(wLineOut);

  const wLineIn = new THREE.Mesh(new THREE.RingGeometry(48.7, 48.9, 64), mat.roadMarkingWhite);
  wLineIn.rotation.x = -Math.PI / 2;
  wLineIn.position.y = 3.03;
  group.add(wLineIn);

  // 2. Major Cross-City Arterial Boulevards (North-South & East-West)
  const nsAvenue = new THREE.Mesh(new THREE.PlaneGeometry(6.5, 104), mat.roadAsphalt);
  nsAvenue.rotation.x = -Math.PI / 2;
  nsAvenue.position.set(0, 3.02, 0);
  nsAvenue.receiveShadow = true;
  group.add(nsAvenue);

  const ewAvenue = new THREE.Mesh(new THREE.PlaneGeometry(104, 6.5), mat.roadAsphalt);
  ewAvenue.rotation.x = -Math.PI / 2;
  ewAvenue.position.set(0, 3.02, 0);
  ewAvenue.receiveShadow = true;
  group.add(ewAvenue);

  // 3. Port & Logistics Access Highway Branch
  const portAccess = new THREE.Mesh(new THREE.PlaneGeometry(28, 6.0), mat.roadAsphalt);
  portAccess.rotation.x = -Math.PI / 2;
  portAccess.position.set(-60, 3.02, 6);
  portAccess.receiveShadow = true;
  group.add(portAccess);

  // 4. Agricultural Access Highway Branch
  const farmAccess = new THREE.Mesh(new THREE.PlaneGeometry(22, 5.5), mat.roadAsphalt);
  farmAccess.rotation.x = -Math.PI / 2;
  farmAccess.position.set(58, 3.02, 22);
  farmAccess.receiveShadow = true;
  group.add(farmAccess);

  // 5. Elevated High-Speed Rail Viaduct System (along x = -38)
  const viaductDeck = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.6, 96), mat.buildingWarmGray);
  viaductDeck.position.set(-38, 6.5, 0);
  viaductDeck.castShadow = true;
  group.add(viaductDeck);

  // Dual Steel Track Rails
  [-1.0, 1.0].forEach((rx) => {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.2, 96), mat.railTrackSteel);
    rail.position.set(-38 + rx, 6.9, 0);
    group.add(rail);
  });

  // Viaduct Support Pillars
  for (let pz = -46; pz <= 46; pz += 12) {
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.95, 6.5, 12), mat.concretePlaza);
    pillar.position.set(-38, 3.25, pz);
    pillar.castShadow = true;
    group.add(pillar);
  }

  // 6. Station 1: "CENTRAL DOWNTOWN STATION" (at z = -46, x = -38)
  const st1 = new THREE.Group();
  st1.position.set(-38, 6.8, -46);

  const st1Platform = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.5, 14), mat.concretePlaza);
  st1.add(st1Platform);

  const st1Canopy = new THREE.Mesh(new THREE.BoxGeometry(8.0, 0.3, 15), mat.stationCanopy);
  st1Canopy.position.set(0, 3.4, 0);
  st1.add(st1Canopy);

  [-3.4, 3.4].forEach(cx => {
    [-6, 6].forEach(cz => {
      const cp = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.4, 8), mat.industrialSteel);
      cp.position.set(cx, 1.7, cz);
      st1.add(cp);
    });
  });

  const sign1 = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.8, 0.2), mat.walmartBlue);
  sign1.position.set(0, 4.0, 0);
  st1.add(sign1);
  group.add(st1);

  // 7. Station 2: "SOUTH METRO STATION" (at z = +46, x = -38)
  const st2 = new THREE.Group();
  st2.position.set(-38, 6.8, 46);

  const st2Platform = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.5, 14), mat.concretePlaza);
  st2.add(st2Platform);

  const st2Canopy = new THREE.Mesh(new THREE.BoxGeometry(8.0, 0.3, 15), mat.stationCanopy);
  st2Canopy.position.set(0, 3.4, 0);
  st2.add(st2Canopy);

  [-3.4, 3.4].forEach(cx => {
    [-6, 6].forEach(cz => {
      const cp = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.4, 8), mat.industrialSteel);
      cp.position.set(cx, 1.7, cz);
      st2.add(cp);
    });
  });

  const sign2 = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.8, 0.2), mat.walmartBlue);
  sign2.position.set(0, 4.0, 0);
  st2.add(sign2);
  group.add(st2);
}

// --------------------------------------------------------------------------
// 3. Moving Bullet Train (Ping-Pong between Stations)
// --------------------------------------------------------------------------
function buildMovingTrains(group, mat, animatedItems) {
  function createBulletTrain() {
    const train = new THREE.Group();

    // Front Nose Locomotive
    const loco = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 6.5), mat.trainBodySilver);
    loco.position.set(0, 0.9, 5.5);
    loco.castShadow = true;
    train.add(loco);

    const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.3, 6.4), mat.trainStripeCyan);
    stripe.position.set(0, 0.8, 5.5);
    train.add(stripe);

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

    // Rear Locomotive / Coach 2
    const coach2 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 6.5), mat.trainBodySilver);
    coach2.position.set(0, 0.9, -7.5);
    coach2.castShadow = true;
    train.add(coach2);

    const glass3 = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.4, 5.2), mat.trainGlass);
    glass3.position.set(0, 1.15, -7.5);
    train.add(glass3);

    // Headlights
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.1), mat.headlightGlow);
    hl.position.set(0, 0.7, 8.8);
    train.add(hl);

    return train;
  }

  const trainMesh = createBulletTrain();
  group.add(trainMesh);

  animatedItems.trains.push({
    mesh: trainMesh,
    trackX: -38,
    speed: 0.22,
    offset: 0
  });
}

// --------------------------------------------------------------------------
// 4. Moving Road Vehicles (100% Tangent Forward Motion)
// --------------------------------------------------------------------------
function buildMovingVehicles(group, mat, animatedItems) {
  const carPaints = [
    mat.walmartBlue, mat.accentCyan, mat.accentRed, mat.buildingWhite, mat.industrialYellow, mat.accentEmerald
  ];

  function createCarMesh(colorMat) {
    const car = new THREE.Group();

    // Chassis
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.75, 3.4), colorMat);
    body.position.y = 0.55;
    body.castShadow = true;
    car.add(body);

    // Cabin Roof & Windshield
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.6, 1.8), mat.buildingDarkSteel);
    cabin.position.set(0, 1.1, -0.2);
    car.add(cabin);

    // Headlights (Front is +Z)
    const hl = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.15, 0.1), mat.headlightGlow);
    hl.position.set(0, 0.55, 1.72);
    car.add(hl);

    // Taillights (Rear is -Z)
    const tl = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.15, 0.1), mat.taillightGlow);
    tl.position.set(0, 0.55, -1.72);
    car.add(tl);

    // Wheels
    const wGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.18, 10);
    wGeo.rotateZ(Math.PI / 2);
    [-0.8, 0.8].forEach(wx => {
      [-1.0, 1.0].forEach(wz => {
        const w = new THREE.Mesh(wGeo, mat.carTire);
        w.position.set(wx, 0.3, wz);
        car.add(w);
      });
    });

    return car;
  }

  // Outer Lane Vehicles (Counter-Clockwise, Radius = 53.6)
  for (let i = 0; i < 7; i++) {
    const carMesh = createCarMesh(carPaints[i % carPaints.length]);
    group.add(carMesh);

    animatedItems.vehicles.push({
      mesh: carMesh,
      radius: 53.6,
      speed: 0.16,
      offset: (i * Math.PI * 2) / 7,
      y: 3.04
    });
  }

  // Inner Lane Vehicles (Clockwise, Radius = 50.4)
  for (let i = 0; i < 7; i++) {
    const carMesh = createCarMesh(carPaints[(i + 3) % carPaints.length]);
    group.add(carMesh);

    animatedItems.vehicles.push({
      mesh: carMesh,
      radius: 50.4,
      speed: -0.14,
      offset: (i * Math.PI * 2) / 7 + 0.35,
      y: 3.04
    });
  }
}

// --------------------------------------------------------------------------
// 5. Commercial Real Estate & GCC Tech Center [0, 3, 0]
// --------------------------------------------------------------------------
function buildCommercialDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(0, 3.0, 0);
  dGroup.userData = { districtId: "commercial" };

  // Tower A - High-Rise Glass Skyscraper
  const tA = new THREE.Mesh(new THREE.BoxGeometry(8, 26, 8), mat.buildingGlassAzure);
  tA.position.set(-4, 13, 0);
  tA.castShadow = true;
  tA.receiveShadow = true;
  dGroup.add(tA);

  // Tower B - Architectural Spire
  const tB = new THREE.Mesh(new THREE.BoxGeometry(6, 18, 6), mat.buildingDarkSteel);
  tB.position.set(4, 9, 3);
  tB.castShadow = true;
  tB.receiveShadow = true;
  dGroup.add(tB);

  // Rooftop Communication Spire
  const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.4, 8, 8), mat.accentCyan);
  spire.position.set(-4, 30, 0);
  dGroup.add(spire);

  // Rooftop Drone Delivery Hub Pad
  const roofPad = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.2, 16), mat.dronePadTarmac);
  roofPad.position.set(4, 18.1, 3);
  dGroup.add(roofPad);

  const roofRing = new THREE.Mesh(new THREE.RingGeometry(1.8, 2.2, 16), mat.dronePadRing);
  roofRing.rotation.x = -Math.PI / 2;
  roofRing.position.set(4, 18.22, 3);
  dGroup.add(roofRing);

  // Central Fountain
  const fountain = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, 0.4, 24), mat.concretePlaza);
  fountain.position.set(0, 0.2, -7);
  dGroup.add(fountain);

  const waterF = new THREE.Mesh(new THREE.CylinderGeometry(3.0, 3.0, 0.5, 24), mat.water);
  waterF.position.set(0, 0.3, -7);
  dGroup.add(waterF);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 6. Manufacturing & Robotics Hub [-30, 3, -32]
// --------------------------------------------------------------------------
function buildManufacturingDistrict(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-30, 3.0, -32);
  dGroup.userData = { districtId: "manufacturing" };

  // Main High-Bay Factory Hall
  const hall = new THREE.Mesh(new THREE.BoxGeometry(16, 7.5, 12), mat.buildingDarkSteel);
  hall.position.set(0, 3.75, 0);
  hall.castShadow = true;
  dGroup.add(hall);

  // Sawtooth Skylights
  for (let z = -4.0; z <= 4.0; z += 2.8) {
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 16, 3), mat.buildingGlassCyan);
    roof.rotation.z = Math.PI / 2;
    roof.position.set(0, 8.0, z);
    dGroup.add(roof);
  }

  // Solar Rooftop Panels
  const solar = new THREE.Mesh(new THREE.PlaneGeometry(14, 4), mat.buildingGlassAzure);
  solar.rotation.x = -Math.PI / 2;
  solar.position.set(0, 7.6, 0);
  dGroup.add(solar);

  // Industrial Exhaust Silos
  [-5, 5].forEach((sx) => {
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 10, 16), mat.industrialSteel);
    silo.position.set(sx, 5.0, -8);
    silo.castShadow = true;
    dGroup.add(silo);
  });

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 7. Additive 3D Prototyping Lab [-6, 3, -48]
// --------------------------------------------------------------------------
function buildAdditiveDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-6, 3.0, -48);
  dGroup.userData = { districtId: "additive" };

  const cleanroom = new THREE.Mesh(new THREE.BoxGeometry(13, 6.0, 9.5), mat.buildingWhite);
  cleanroom.position.set(0, 3.0, 0);
  cleanroom.castShadow = true;
  dGroup.add(cleanroom);

  const laserLab = new THREE.Mesh(new THREE.SphereGeometry(3.5, 20, 16, 0, Math.PI * 2, 0, Math.PI / 2), mat.buildingGlassCyan);
  laserLab.position.set(0, 6.0, 0);
  dGroup.add(laserLab);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 8. Disaster Response & Satellite Intel [-36, 3, -60]
// --------------------------------------------------------------------------
function buildDisasterDistrict(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-36, 3.0, -60);
  dGroup.userData = { districtId: "disaster" };

  const bunker = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 6.5, 4.5, 8), mat.buildingDarkSteel);
  bunker.position.set(0, 2.25, 0);
  bunker.castShadow = true;
  dGroup.add(bunker);

  // Rotating Satellite Radar Dish
  const radarGroup = new THREE.Group();
  radarGroup.position.set(0, 5.5, 0);

  const dish = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 0.4, 0.8, 16, 1, true), mat.industrialSteel);
  dish.rotation.x = Math.PI / 3;
  radarGroup.add(dish);

  dGroup.add(radarGroup);
  group.add(dGroup);

  if (animatedItems && animatedItems.radars) {
    animatedItems.radars.push(radarGroup);
  }
}

// --------------------------------------------------------------------------
// 9. Healthcare & Medical Technology Campus [-26, 3, 38]
// --------------------------------------------------------------------------
function buildHealthcareDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-26, 3.0, 38);
  dGroup.userData = { districtId: "healthcare" };

  const hMain = new THREE.Mesh(new THREE.BoxGeometry(14, 9.0, 8.0), mat.buildingWhite);
  hMain.position.set(0, 4.5, 0);
  hMain.castShadow = true;
  dGroup.add(hMain);

  const hWing = new THREE.Mesh(new THREE.BoxGeometry(7.0, 9.0, 14), mat.buildingGlassCyan);
  hWing.position.set(0, 4.5, 0);
  hWing.castShadow = true;
  dGroup.add(hWing);

  // Rooftop Helipad
  const helipad = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 0.3, 20), mat.concretePlaza);
  helipad.position.set(0, 9.15, 0);
  dGroup.add(helipad);

  const crossH = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.1, 0.7), mat.accentRed);
  crossH.position.set(0, 9.35, 0);
  dGroup.add(crossH);

  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.1, 2.6), mat.accentRed);
  crossV.position.set(0, 9.35, 0);
  dGroup.add(crossV);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 10. Biotechnology & Biosphere Research Labs [34, 3, -28]
// --------------------------------------------------------------------------
function buildBiotechDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(34, 3.0, -28);
  dGroup.userData = { districtId: "biotech" };

  const dome = new THREE.Mesh(new THREE.SphereGeometry(6.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), mat.buildingGlassEmerald);
  dome.position.set(0, 0, 0);
  dome.castShadow = true;
  dGroup.add(dome);

  const lab1 = new THREE.Mesh(new THREE.BoxGeometry(8.0, 5.5, 5.0), mat.buildingWhite);
  lab1.position.set(8.5, 2.75, 0);
  lab1.castShadow = true;
  dGroup.add(lab1);

  const lab2 = new THREE.Mesh(new THREE.BoxGeometry(8.0, 5.5, 5.0), mat.buildingWhite);
  lab2.position.set(-8.5, 2.75, 0);
  lab2.castShadow = true;
  dGroup.add(lab2);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 11. Smart Deepwater Maritime Port [-72, 1.8, -26]
// --------------------------------------------------------------------------
function buildPortsDistrict(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-72, 1.8, -26);
  dGroup.userData = { districtId: "ports" };

  // 1. Large Container Cargo Freighter Docked at Berth
  const hull = new THREE.Mesh(new THREE.BoxGeometry(34, 4.0, 9.0), mat.buildingDarkSteel);
  hull.position.set(0, 1.0, -14);
  hull.castShadow = true;
  dGroup.add(hull);

  // Ship Bridge / Command Tower
  const shipBridge = new THREE.Mesh(new THREE.BoxGeometry(6.5, 5.0, 8.0), mat.buildingWhite);
  shipBridge.position.set(13, 4.5, -14);
  shipBridge.castShadow = true;
  dGroup.add(shipBridge);

  // Stacked Containers on Cargo Freighter
  const colors = [mat.containerBlue, mat.containerRed, mat.containerGreen, mat.containerOrange, mat.containerYellow];
  for (let x = -13; x <= 7; x += 3.8) {
    for (let y = 0; y < 3; y++) {
      const c = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.35, 2.7), colors[(Math.abs(x * 2 + y)) % colors.length]);
      c.position.set(x, 3.1 + y * 1.4, -14);
      c.castShadow = true;
      dGroup.add(c);
    }
  }

  // 2. Active Quay Gantry Container Cranes
  for (let q = -10; q <= 10; q += 10.0) {
    const craneGroup = new THREE.Group();
    craneGroup.position.set(q, 0, -4);

    // Crane Portal Legs
    const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 13, 0.6), mat.industrialYellow);
    leg1.position.set(-2.4, 6.5, 0);
    craneGroup.add(leg1);

    const leg2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 13, 0.6), mat.industrialYellow);
    leg2.position.set(2.4, 6.5, 0);
    craneGroup.add(leg2);

    // Overhead Crane Boom
    const boom = new THREE.Mesh(new THREE.BoxGeometry(8.0, 0.85, 20), mat.industrialYellow);
    boom.position.set(0, 13, -4);
    boom.castShadow = true;
    craneGroup.add(boom);

    // Animated Crane Trolley & Suspended Container
    const trolley = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.4, 1.3), mat.industrialSteel);
    trolley.position.set(0, 12.4, -4);
    craneGroup.add(trolley);

    const suspendedContainer = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.35, 2.5), colors[(Math.abs(q)) % colors.length]);
    suspendedContainer.position.set(0, 7.0, -4);
    suspendedContainer.castShadow = true;
    craneGroup.add(suspendedContainer);

    dGroup.add(craneGroup);

    if (animatedItems && animatedItems.craneCables) {
      animatedItems.craneCables.push({
        trolley,
        container: suspendedContainer,
        baseY: 5.0,
        baseZ: -4,
        speed: 0.8
      });
    }
  }

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 12. Smart Electrical Substation & Power Grid [58, 3, -48]
// --------------------------------------------------------------------------
function buildPowerGridDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(58, 3.0, -48);
  dGroup.userData = { districtId: "grid" };

  const gravelPad = new THREE.Mesh(new THREE.PlaneGeometry(24, 20), mat.substationGravel);
  gravelPad.rotation.x = -Math.PI / 2;
  gravelPad.position.y = 0.02;
  dGroup.add(gravelPad);

  // 3 High-Voltage Step-Down Transformers
  [-6, 0, 6].forEach((tx) => {
    const tf = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.8, 4.2), mat.transformerBody);
    tf.position.set(tx, 1.9, 0);
    tf.castShadow = true;
    dGroup.add(tf);

    [-1.0, 1.0].forEach(bx => {
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, 1.5, 8), mat.transformerBody);
      b.position.set(tx + bx, 4.4, 0);
      dGroup.add(b);
    });
  });

  // Transmission Lattice Pylons
  const pylonPositions = [[-9, 0, 7], [9, 0, 7], [0, 0, -7]];
  pylonPositions.forEach(([px, py, pz]) => {
    const pylon = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 1.2, 14, 4), mat.pylonSteel);
    pylon.position.set(px, 7.0, pz);
    pylon.castShadow = true;
    dGroup.add(pylon);
  });

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 13. Mining & Subsurface Quarry [24, 10, -70]
// --------------------------------------------------------------------------
function buildMiningDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(24, 10.0, -70);
  dGroup.userData = { districtId: "mining" };

  // Terraced Open-Pit Quarry
  for (let t = 0; t < 3; t++) {
    const tier = new THREE.Mesh(new THREE.CylinderGeometry(14 - t * 3.5, 16 - t * 3.5, 2.5, 16), mat.groundQuarry);
    tier.position.y = -t * 2.5;
    tier.receiveShadow = true;
    dGroup.add(tier);
  }

  // Mining Excavation Tower & Hoist
  const tower = new THREE.Mesh(new THREE.BoxGeometry(3.0, 12, 3.0), mat.industrialSteel);
  tower.position.set(0, 6.0, 0);
  tower.castShadow = true;
  dGroup.add(tower);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 14. Smart Agriculture & Precision Farming [66, 3, 22]
// --------------------------------------------------------------------------
function buildAgricultureDistrict(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(66, 3.0, 22);
  dGroup.userData = { districtId: "agriculture" };

  // Parallel Crop Rows (Wheat & Lush Green)
  for (let z = -12; z <= 12; z += 2.2) {
    const isWheat = Math.abs(z) % 4 === 0;
    const furrow = new THREE.Mesh(
      new THREE.BoxGeometry(26, 0.4, 1.4),
      isWheat ? mat.cropWheatGold : mat.cropLushGreen
    );
    furrow.position.set(0, 0.2, z);
    furrow.castShadow = true;
    dGroup.add(furrow);
  }

  // Traditional Red Barn
  const barn = new THREE.Mesh(new THREE.BoxGeometry(9.0, 6.5, 6.5), mat.barnRed);
  barn.position.set(-10, 3.25, -10);
  barn.castShadow = true;
  dGroup.add(barn);

  // Silos
  [-14, -14].forEach((sx, idx) => {
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 9.0, 16), mat.siloGalvanized);
    silo.position.set(sx, 4.5, -6 - idx * 4);
    silo.castShadow = true;
    dGroup.add(silo);
  });

  // Modern Green Tractor
  const tractor = new THREE.Group();
  tractor.position.set(6, 0, 4);

  const tBody = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.4, 3.2), mat.tractorGreen);
  tBody.position.y = 1.0;
  tractor.add(tBody);

  const tCabin = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 1.4), mat.buildingGlassAzure);
  tCabin.position.set(0, 2.0, -0.6);
  tractor.add(tCabin);

  // Large Rear Wheels & Small Front Wheels
  const rWheelGeo = new THREE.CylinderGeometry(0.7, 0.7, 0.35, 12);
  rWheelGeo.rotateZ(Math.PI / 2);
  [-1.1, 1.1].forEach(wx => {
    const rw = new THREE.Mesh(rWheelGeo, mat.tractorYellowWheel);
    rw.position.set(wx, 0.7, -0.8);
    tractor.add(rw);
  });

  dGroup.add(tractor);
  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 15. Walmart Distribution Center & Logistics Hub [-58, 3, 6]
// --------------------------------------------------------------------------
function buildWalmartDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-58, 3.0, 6);
  dGroup.userData = { districtId: "warehousing" };

  // 1. Main Walmart Distribution Center Building
  const wh = new THREE.Mesh(new THREE.BoxGeometry(20, 6.0, 12), mat.buildingWarmGray);
  wh.position.set(0, 3.0, -2);
  wh.castShadow = true;
  wh.receiveShadow = true;
  dGroup.add(wh);

  // Walmart Blue Header Trim
  const headerTrim = new THREE.Mesh(new THREE.BoxGeometry(20.2, 1.3, 12.2), mat.walmartBlue);
  headerTrim.position.set(0, 5.5, -2);
  dGroup.add(headerTrim);

  // "WALMART" Signage Plaque on Facade
  const signBase = new THREE.Mesh(new THREE.BoxGeometry(9.0, 1.5, 0.3), mat.walmartBlue);
  signBase.position.set(0, 5.2, 4.15);
  dGroup.add(signBase);

  // Walmart Spark Star Emblem
  const spark = new THREE.Mesh(new THREE.SphereGeometry(0.55, 8, 8), mat.walmartYellow);
  spark.position.set(3.8, 5.2, 4.35);
  dGroup.add(spark);

  // Loading Dock Bay Doors
  for (let b = -7.0; b <= 7.0; b += 2.6) {
    const bay = new THREE.Mesh(new THREE.BoxGeometry(2.0, 3.0, 0.1), mat.buildingDarkSteel);
    bay.position.set(b, 1.5, 4.05);
    dGroup.add(bay);
  }

  // 2. Concrete Truck Yard & Parking Area
  const yardPad = new THREE.Mesh(new THREE.PlaneGeometry(26, 16), mat.concretePlaza);
  yardPad.rotation.x = -Math.PI / 2;
  yardPad.position.set(0, 0.02, 10);
  yardPad.receiveShadow = true;
  dGroup.add(yardPad);

  // 3. Parked Shipping Semi-Trailers Backed into Docks
  const trailerColors = [mat.trailerWhite, mat.walmartBlue, mat.trailerWhite];
  [-5.2, 0, 5.2].forEach((tx, idx) => {
    const trailer = new THREE.Group();
    trailer.position.set(tx, 0, 7.5);

    const box = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.5, 5.8), trailerColors[idx % trailerColors.length]);
    box.position.y = 1.7;
    box.castShadow = true;
    trailer.add(box);

    const twGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.2, 10);
    twGeo.rotateZ(Math.PI / 2);
    [-0.95, 0.95].forEach(wx => {
      [1.6, 2.3].forEach(wz => {
        const tw = new THREE.Mesh(twGeo, mat.carTire);
        tw.position.set(wx, 0.32, wz);
        trailer.add(tw);
      });
    });

    dGroup.add(trailer);
  });

  // 4. Stacks of Cargo Containers in Yard
  const cColors = [mat.containerBlue, mat.containerYellow, mat.containerRed, mat.containerGreen];
  for (let cx = 8.5; cx <= 11; cx += 2.2) {
    for (let cy = 0; cy < 3; cy++) {
      const c = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.3, 4.0), cColors[(Math.floor(cx) + cy) % cColors.length]);
      c.position.set(cx, 0.65 + cy * 1.35, 11);
      c.castShadow = true;
      dGroup.add(c);
    }
  }

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 16. Autonomous Drone Delivery Station & Vertiport Hub [-54, 3, 28]
// --------------------------------------------------------------------------
function buildDroneVertiportHub(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-54, 3.0, 28);
  dGroup.userData = { districtId: "drones" };

  // 1. Tarmac Launchpad Apron
  const apron = new THREE.Mesh(new THREE.PlaneGeometry(24, 18), mat.dronePadTarmac);
  apron.rotation.x = -Math.PI / 2;
  apron.position.y = 0.02;
  apron.receiveShadow = true;
  dGroup.add(apron);

  // Apron Border Striping
  const apronBorder = new THREE.Mesh(new THREE.RingGeometry(11.5, 12, 4), mat.roadMarkingYellow);
  apronBorder.rotation.x = -Math.PI / 2;
  apronBorder.rotation.z = Math.PI / 4;
  apronBorder.position.y = 0.03;
  dGroup.add(apronBorder);

  // 2. Drone Vertiport Operations Terminal & Control Tower
  const terminal = new THREE.Mesh(new THREE.BoxGeometry(10, 4.5, 6.0), mat.buildingDarkSteel);
  terminal.position.set(0, 2.25, -6);
  terminal.castShadow = true;
  dGroup.add(terminal);

  const controlTower = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.2, 5.0, 12), mat.buildingGlassAzure);
  controlTower.position.set(3.5, 6.0, -6);
  dGroup.add(controlTower);

  // Air Traffic Radome
  const radome = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 12), mat.buildingWhite);
  radome.position.set(3.5, 9.0, -6);
  dGroup.add(radome);

  // Automated Package Conveyor linking Walmart DC to Vertiport Launchpads
  const conveyor = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.8, 12), mat.industrialSteel);
  conveyor.position.set(-5.5, 1.2, -10);
  dGroup.add(conveyor);

  // 3. Four Circular Drone Launch / Landing Pads with Glowing Rings
  const padPositions = [
    [-6, 0.04, -0.5],
    [0, 0.04, -0.5],
    [6, 0.04, -0.5],
    [0, 0.04, 5.5]
  ];

  padPositions.forEach(([px, py, pz], idx) => {
    const padPad = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 0.08, 20), mat.concretePlaza);
    padPad.position.set(px, py, pz);
    dGroup.add(padPad);

    const padRing = new THREE.Mesh(new THREE.RingGeometry(1.6, 2.0, 20), mat.dronePadRing);
    padRing.rotation.x = -Math.PI / 2;
    padRing.position.set(px, py + 0.06, pz);
    dGroup.add(padRing);

    // Landing "D" Marking
    const dMark = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.02, 1.2), mat.accentCyan);
    dMark.position.set(px, py + 0.08, pz);
    dGroup.add(dMark);
  });

  // Battery Swap & Recharging Pods
  for (let rx = -7; rx <= 7; rx += 3.5) {
    const pod = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.4, 0.8), mat.walmartBlue);
    pod.position.set(rx, 0.7, -3.2);
    dGroup.add(pod);

    const podLED = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), mat.droneBeaconGreen);
    podLED.position.set(rx, 1.5, -3.2);
    dGroup.add(podLED);
  }

  group.add(dGroup);

  // 4. Build 4 Autonomous Delivery Quadcopters flying across City Routes
  function createDeliveryDrone() {
    const drone = new THREE.Group();

    // Central Core Body
    const core = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.35, 1.4), mat.droneBodyMat);
    core.position.y = 0.4;
    drone.add(core);

    // Quad Arms
    const armMat = mat.industrialSteel;
    const a1 = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.12, 0.12), armMat);
    a1.rotation.y = Math.PI / 4;
    a1.position.y = 0.4;
    drone.add(a1);

    const a2 = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.12, 0.12), armMat);
    a2.rotation.y = -Math.PI / 4;
    a2.position.y = 0.4;
    drone.add(a2);

    // 4 Motor Pods & Spinning Propellers
    const rotorGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.02, 8);
    const motorPositions = [
      [1.0, 0.5, 1.0],
      [-1.0, 0.5, 1.0],
      [1.0, 0.5, -1.0],
      [-1.0, 0.5, -1.0]
    ];

    motorPositions.forEach(([mx, my, mz]) => {
      const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.22, 8), mat.droneBodyMat);
      motor.position.set(mx, my, mz);
      drone.add(motor);

      const prop = new THREE.Mesh(rotorGeo, mat.droneRotorMat);
      prop.position.set(mx, my + 0.14, mz);
      drone.add(prop);

      if (animatedItems && animatedItems.rotors) {
        animatedItems.rotors.push(prop);
      }
    });

    // Medical / Parcel Delivery Payload Box
    const payload = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.65, 0.75), mat.dronePayloadBox);
    payload.position.set(0, 0.05, 0);
    drone.add(payload);

    // Glowing Navigation LEDs
    const led1 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), mat.droneBeaconCyan);
    led1.position.set(0, 0.6, 0.75);
    drone.add(led1);

    const led2 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), mat.droneBeaconRed);
    led2.position.set(-0.75, 0.6, 0);
    drone.add(led2);

    const led3 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), mat.droneBeaconGreen);
    led3.position.set(0.75, 0.6, 0);
    drone.add(led3);

    return drone;
  }

  // Realistic 3D Flight Corridors across the City
  const flightRoutes = [
    // Route 1: Drone Vertiport -> Healthcare Hospital Helipad -> Drone Vertiport
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-54, 3.5, 28),
      new THREE.Vector3(-48, 14.0, 32),
      new THREE.Vector3(-26, 12.8, 38),
      new THREE.Vector3(-26, 12.8, 38),
      new THREE.Vector3(-38, 15.0, 34),
      new THREE.Vector3(-54, 3.5, 28)
    ], true),

    // Route 2: Drone Vertiport -> Commercial Tower Rooftop -> Drone Vertiport
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-54, 3.5, 28),
      new THREE.Vector3(-36, 16.0, 16),
      new THREE.Vector3(4, 18.5, 3),
      new THREE.Vector3(4, 18.5, 3),
      new THREE.Vector3(-24, 17.0, 12),
      new THREE.Vector3(-54, 3.5, 28)
    ], true),

    // Route 3: Drone Vertiport -> Smart Farm Station -> Drone Vertiport
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-54, 3.5, 28),
      new THREE.Vector3(-10, 18.0, 24),
      new THREE.Vector3(40, 16.0, 22),
      new THREE.Vector3(66, 8.0, 22),
      new THREE.Vector3(20, 19.0, 28),
      new THREE.Vector3(-54, 3.5, 28)
    ], true),

    // Route 4: Drone Vertiport -> Biotech Biosphere Dome -> Drone Vertiport
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-54, 3.5, 28),
      new THREE.Vector3(-20, 17.0, -10),
      new THREE.Vector3(15, 18.0, -20),
      new THREE.Vector3(34, 11.0, -28),
      new THREE.Vector3(0, 17.0, -24),
      new THREE.Vector3(-54, 3.5, 28)
    ], true)
  ];

  flightRoutes.forEach((curve, idx) => {
    const droneMesh = createDeliveryDrone();
    group.add(droneMesh);

    animatedItems.drones.push({
      group: droneMesh,
      curve: curve,
      speed: 0.045 + idx * 0.005,
      offset: idx * 0.25
    });
  });
}

// --------------------------------------------------------------------------
// 17. Urban Vegetation & Landscaping
// --------------------------------------------------------------------------
function buildVegetation(group, mat) {
  const treeGeo = new THREE.ConeGeometry(1.2, 3.0, 6);
  const trunkGeo = new THREE.CylinderGeometry(0.16, 0.22, 0.8, 6);

  const treePositions = [
    // Green Parks & Avenues
    [18, 3.0, 12], [22, 3.0, 16], [26, 3.0, 10], [14, 3.0, -12], [20, 3.0, -18],
    [-22, 3.0, 16], [-26, 3.0, 22], [-30, 3.0, 26], [-12, 3.0, 26], [-8, 3.0, 30],
    [-42, 3.0, -10], [-38, 3.0, -14], [-46, 3.0, -22], [42, 3.0, -32], [36, 3.0, -38],
    [32, 3.0, 26], [38, 3.0, 30], [44, 3.0, 34], [48, 3.0, 40],
    [-15, 3.0, -18], [-18, 3.0, -24], [16, 3.0, 38], [22, 3.0, 42]
  ];

  treePositions.forEach(([x, y, z], idx) => {
    const tree = new THREE.Group();
    tree.position.set(x, y, z);

    const trunk = new THREE.Mesh(trunkGeo, mat.treeTrunk);
    trunk.position.y = 0.4;
    tree.add(trunk);

    const foliage = new THREE.Mesh(treeGeo, idx % 2 === 0 ? mat.treeLeaves1 : mat.treeLeaves2);
    foliage.position.y = 1.9;
    foliage.castShadow = true;
    tree.add(foliage);

    group.add(tree);
  });
}
