import * as THREE from 'three';

/**
 * High-Fidelity PBR Material Palette for 3D Digital Twin City
 * Tuned for architectural realism, realistic vehicles, people, and zero Z-fighting.
 */
export function createCityMaterials() {
  return {
    // Water & Marine
    water: new THREE.MeshStandardMaterial({
      color: 0x0a3b66,
      roughness: 0.15,
      metalness: 0.85,
      transparent: true,
      opacity: 0.92
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

    // Roads & Markings (with polygonOffset to prevent any Z-fighting)
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
    curbStone: new THREE.MeshStandardMaterial({
      color: 0xcfd8dc,
      roughness: 0.7,
      metalness: 0.1
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

    // Vehicles & Transportation
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

    // Boats & Ships
    boatHullWhite: new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3, metalness: 0.2 }),
    boatHullNavy: new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.3, metalness: 0.6 }),
    boatHullRed: new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.35, metalness: 0.4 }),
    boatDeckWood: new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.75, metalness: 0.05 }),

    // Pedestrians & People
    personSkin: new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.8 }),
    personCloth1: new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.7 }),
    personCloth2: new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.7 }),
    personCloth3: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.7 }),
    personCloth4: new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.7 }),
    personCloth5: new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.7 }),

    // Industrial & Energy
    industrialSteel: new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4, metalness: 0.75 }),
    industrialYellow: new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.45, metalness: 0.4 }),
    containerBlue: new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.5, metalness: 0.3 }),
    containerRed: new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.5, metalness: 0.3 }),
    containerGreen: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.5, metalness: 0.3 }),
    containerOrange: new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.5, metalness: 0.3 }),
    solarPanel: new THREE.MeshStandardMaterial({ color: 0x1e1b4b, roughness: 0.1, metalness: 0.95 }),

    // Foliage & Nature
    treeTrunk: new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9, metalness: 0.05 }),
    cropFieldGreen: new THREE.MeshStandardMaterial({ 
      color: 0x4d7c0f, 
      roughness: 0.85, 
      metalness: 0.05, 
      flatShading: true,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    }),
    cropFieldGold: new THREE.MeshStandardMaterial({ 
      color: 0xca8a04, 
      roughness: 0.85, 
      metalness: 0.05, 
      flatShading: true,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    }),

    // Accents & Streetlights
    streetlightEmissive: new THREE.MeshBasicMaterial({ color: 0xfef08a }),
    accentRed: new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3, metalness: 0.3 }),
    accentCyan: new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.2, metalness: 0.8 })
  };
}

/**
 * Builds the realistic 3D city scene with moving vehicles, boats, and pedestrians.
 */
export function buildCityScene(scene, materials) {
  const mat = materials || createCityMaterials();
  const cityGroup = new THREE.Group();
  cityGroup.name = "CityMainGroup";

  // Dynamic animated entities list
  const animatedItems = {
    vehicles: [],
    boats: [],
    pedestrians: [],
    windTurbines: [],
    drones: []
  };

  // 1. Water Plane Base
  const waterGeo = new THREE.PlaneGeometry(260, 260, 1, 1);
  const waterMesh = new THREE.Mesh(waterGeo, mat.water);
  waterMesh.rotation.x = -Math.PI / 2;
  waterMesh.position.y = 0;
  waterMesh.receiveShadow = true;
  cityGroup.add(waterMesh);

  // 2. Terrain & Island Topography
  buildTerrain(cityGroup, mat);

  // 3. Roads, Bridges & Street Furniture
  buildRoadsAndBridges(cityGroup, mat);

  // 4. Moving City Traffic (Cars, Trucks, Buses)
  buildMovingVehicles(cityGroup, mat, animatedItems);

  // 5. Moving Boats & Maritime Vessels
  buildMovingBoats(cityGroup, mat, animatedItems);

  // 6. Walking Pedestrians in Plazas & Walkways
  buildPedestrians(cityGroup, mat, animatedItems);

  // 7. Industry Districts
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

  // High-Performance Smooth Animation Loop Callback
  const updateCity = (time) => {
    // 1. Update Moving Vehicles
    animatedItems.vehicles.forEach((v) => {
      if (v.type === 'ring') {
        const angle = v.startAngle + time * v.speed;
        v.mesh.position.x = Math.cos(angle) * v.radius;
        v.mesh.position.z = Math.sin(angle) * v.radius;
        v.mesh.rotation.y = -angle + (v.speed > 0 ? Math.PI / 2 : -Math.PI / 2);
      } else if (v.type === 'straight_ns') {
        const span = 56;
        const progress = (time * v.speed + v.offset) % span;
        const z = -span / 2 + progress;
        v.mesh.position.z = v.direction > 0 ? z : -z;
        v.mesh.position.x = v.laneX;
        v.mesh.rotation.y = v.direction > 0 ? 0 : Math.PI;
      } else if (v.type === 'straight_ew') {
        const span = 56;
        const progress = (time * v.speed + v.offset) % span;
        const x = -span / 2 + progress;
        v.mesh.position.x = v.direction > 0 ? x : -x;
        v.mesh.position.z = v.laneZ;
        v.mesh.rotation.y = v.direction > 0 ? Math.PI / 2 : -Math.PI / 2;
      }
    });

    // 2. Update Moving Boats in Water
    animatedItems.boats.forEach((b) => {
      const angle = b.startAngle + time * b.speed;
      b.mesh.position.x = b.centerX + Math.cos(angle) * b.radiusX;
      b.mesh.position.z = b.centerZ + Math.sin(angle) * b.radiusZ;
      b.mesh.rotation.y = -angle + Math.PI / 2;
      // Gentle nautical roll & pitch
      b.mesh.rotation.z = Math.sin(time * 1.8 + b.startAngle) * 0.03;
      b.mesh.rotation.x = Math.cos(time * 1.5 + b.startAngle) * 0.02;
    });

    // 3. Update Walking Pedestrians
    animatedItems.pedestrians.forEach((p) => {
      const cycle = Math.sin(time * p.walkSpeed + p.offset);
      p.mesh.position.x = p.startX + cycle * p.rangeX;
      p.mesh.position.z = p.startZ + cycle * p.rangeZ;
      if (cycle > 0.05) {
        p.mesh.rotation.y = p.targetAngle;
      } else if (cycle < -0.05) {
        p.mesh.rotation.y = p.targetAngle + Math.PI;
      }
    });

    // 4. Update Wind Turbines
    animatedItems.windTurbines.forEach((rotor) => {
      rotor.rotation.z = time * 2.2;
    });

    // 5. Update Drone Flight Corridor
    animatedItems.drones.forEach((drone) => {
      const radius = 18;
      const speed = 0.35;
      drone.position.x = Math.cos(time * speed) * radius;
      drone.position.z = Math.sin(time * speed) * radius;
      drone.position.y = 12 + Math.sin(time * 1.5) * 0.7;
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
// 1. Terrain & Islands
// --------------------------------------------------------------------------
function buildTerrain(group, mat) {
  // Main Central Island
  const mainIslandGeo = new THREE.CylinderGeometry(44, 46, 2.8, 48);
  const mainIsland = new THREE.Mesh(mainIslandGeo, mat.groundGrass);
  mainIsland.position.set(0, 1.4, 0);
  mainIsland.receiveShadow = true;
  group.add(mainIsland);

  // Sandy Coastal Fringe
  const coastGeo = new THREE.CylinderGeometry(46, 48.5, 2.4, 48);
  const coast = new THREE.Mesh(coastGeo, mat.groundSand);
  coast.position.set(0, 1.2, 0);
  coast.receiveShadow = true;
  group.add(coast);

  // Western Port Pier
  const portQuayGeo = new THREE.BoxGeometry(28, 2.9, 30);
  const portQuay = new THREE.Mesh(portQuayGeo, mat.concretePlaza);
  portQuay.position.set(-36, 1.45, -16);
  portQuay.receiveShadow = true;
  group.add(portQuay);

  // Northern Quarry Mountains
  const m1 = new THREE.Mesh(new THREE.ConeGeometry(19, 17, 8), mat.groundRock);
  m1.position.set(12, 8.5, -38);
  m1.castShadow = true;
  m1.receiveShadow = true;
  group.add(m1);

  const m2 = new THREE.Mesh(new THREE.ConeGeometry(15, 13, 7), mat.groundQuarry);
  m2.position.set(-8, 6.5, -40);
  m2.castShadow = true;
  m2.receiveShadow = true;
  group.add(m2);

  const m3 = new THREE.Mesh(new THREE.ConeGeometry(13, 10, 6), mat.groundRock);
  m3.position.set(26, 5, -34);
  m3.castShadow = true;
  group.add(m3);

  // Eastern Farmland Plateau (Terraced at y = 3.1 to avoid any coplanar z-fighting)
  const farmPlateau = new THREE.Mesh(new THREE.BoxGeometry(28, 3.1, 30), mat.cropFieldGreen);
  farmPlateau.position.set(30, 1.55, 12);
  farmPlateau.receiveShadow = true;
  group.add(farmPlateau);
}

// --------------------------------------------------------------------------
// 2. Realistic Roads, Markings & Streetlights
// --------------------------------------------------------------------------
function buildRoadsAndBridges(group, mat) {
  // Main Ring Highway
  const ringRoad = new THREE.Mesh(new THREE.RingGeometry(22, 26, 48), mat.roadAsphalt);
  ringRoad.rotation.x = -Math.PI / 2;
  ringRoad.position.set(0, 2.82, 0);
  ringRoad.receiveShadow = true;
  group.add(ringRoad);

  // Ring Road Center Divider (Yellow)
  const ringDivider = new THREE.Mesh(new THREE.RingGeometry(23.95, 24.05, 48), mat.roadMarkingYellow);
  ringDivider.rotation.x = -Math.PI / 2;
  ringDivider.position.set(0, 2.83, 0);
  group.add(ringDivider);

  // North-South Arterial
  const roadNS = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 70), mat.roadAsphalt);
  roadNS.rotation.x = -Math.PI / 2;
  roadNS.position.set(0, 2.82, 0);
  roadNS.receiveShadow = true;
  group.add(roadNS);

  // North-South White Dashed Center Line
  for (let z = -32; z <= 32; z += 3.5) {
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 1.8), mat.roadMarkingWhite);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(0, 2.83, z);
    group.add(dash);
  }

  // East-West Arterial
  const roadEW = new THREE.Mesh(new THREE.PlaneGeometry(70, 6.2), mat.roadAsphalt);
  roadEW.rotation.x = -Math.PI / 2;
  roadEW.position.set(0, 2.82, 0);
  roadEW.receiveShadow = true;
  group.add(roadEW);

  // East-West White Dashed Center Line
  for (let x = -32; x <= 32; x += 3.5) {
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.2), mat.roadMarkingWhite);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(x, 2.83, 0);
    group.add(dash);
  }

  // Pedestrian Zebra Crosswalks at Ring Road Intersections
  const crosswalkPositions = [
    { x: 0, z: 22, rot: 0 },
    { x: 0, z: -22, rot: 0 },
    { x: 22, z: 0, rot: Math.PI / 2 },
    { x: -22, z: 0, rot: Math.PI / 2 }
  ];

  crosswalkPositions.forEach(cw => {
    const cwGroup = new THREE.Group();
    cwGroup.position.set(cw.x, 2.83, cw.z);
    cwGroup.rotation.y = cw.rot;

    for (let s = -2.4; s <= 2.4; s += 0.8) {
      const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 3.5), mat.roadMarkingWhite);
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(s, 0, 0);
      cwGroup.add(stripe);
    }
    group.add(cwGroup);
  });

  // Streetlamps along Ring Highway
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
    const lampGroup = new THREE.Group();
    const lx = Math.cos(a) * 26.8;
    const lz = Math.sin(a) * 26.8;
    lampGroup.position.set(lx, 2.8, lz);
    lampGroup.rotation.y = -a;

    // Pole
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 4.2, 8), mat.industrialSteel);
    pole.position.y = 2.1;
    lampGroup.add(pole);

    // Overhang Arm
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.08, 0.08), mat.industrialSteel);
    arm.position.set(-0.35, 4.15, 0);
    lampGroup.add(arm);

    // Glowing Light Fixture
    const fixture = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), mat.streetlightEmissive);
    fixture.position.set(-0.7, 4.05, 0);
    lampGroup.add(fixture);

    group.add(lampGroup);
  }

  // Suspension Bridge to Western Port
  const bridgeDeck = new THREE.Mesh(new THREE.BoxGeometry(22, 0.6, 5.5), mat.roadAsphalt);
  bridgeDeck.position.set(-28, 3.1, 16);
  bridgeDeck.castShadow = true;
  group.add(bridgeDeck);

  const pylon1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 9, 6), mat.buildingWhite);
  pylon1.position.set(-32, 6, 16);
  pylon1.castShadow = true;
  group.add(pylon1);

  const pylon2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 9, 6), mat.buildingWhite);
  pylon2.position.set(-24, 6, 16);
  pylon2.castShadow = true;
  group.add(pylon2);
}

// --------------------------------------------------------------------------
// 3. Moving Vehicles (Cars, Delivery Vans, Buses)
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
      // City Bus
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 5.5), mat.carPaintBlue);
      body.position.y = 1.0;
      body.castShadow = true;
      car.add(body);

      // Glass Strip
      const glass = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.5, 4.8), mat.carGlass);
      glass.position.set(0, 1.25, 0);
      car.add(glass);
    } else if (isVan) {
      // Delivery Box Van
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.1, 1.4), mat.carPaintWhite);
      cab.position.set(0, 0.85, 1.1);
      cab.castShadow = true;
      car.add(cab);

      const box = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 2.5), mat.buildingWarmGray);
      box.position.set(0, 1.05, -0.6);
      box.castShadow = true;
      car.add(box);
    } else {
      // Sedan / Sportscar
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.55, 3.2), paintMaterial);
      chassis.position.y = 0.45;
      chassis.castShadow = true;
      car.add(chassis);

      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.45, 1.7), mat.carGlass);
      cabin.position.set(0, 0.85, -0.2);
      cabin.castShadow = true;
      car.add(cabin);
    }

    // Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.2, 12);
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

    // Headlights
    const hl1 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.05), mat.headlightGlow);
    hl1.position.set(-0.45, 0.5, 1.62);
    car.add(hl1);

    const hl2 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.05), mat.headlightGlow);
    hl2.position.set(0.45, 0.5, 1.62);
    car.add(hl2);

    // Taillights
    const tl = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.12, 0.05), mat.taillightGlow);
    tl.position.set(0, 0.5, -1.62);
    car.add(tl);

    return car;
  }

  // 1. Ring Highway Vehicles (Inner & Outer Lanes)
  const ringVehicles = [
    { radius: 24.8, speed: 0.38, startAngle: 0, isBus: false, isVan: false },
    { radius: 24.8, speed: 0.35, startAngle: Math.PI * 0.5, isBus: true, isVan: false },
    { radius: 24.8, speed: 0.42, startAngle: Math.PI * 1.1, isBus: false, isVan: false },
    { radius: 24.8, speed: 0.36, startAngle: Math.PI * 1.6, isBus: false, isVan: true },
    { radius: 23.2, speed: -0.36, startAngle: Math.PI * 0.2, isBus: false, isVan: false },
    { radius: 23.2, speed: -0.40, startAngle: Math.PI * 0.8, isBus: false, isVan: false },
    { radius: 23.2, speed: -0.34, startAngle: Math.PI * 1.4, isBus: false, isVan: true },
    { radius: 23.2, speed: -0.37, startAngle: Math.PI * 1.8, isBus: false, isVan: false }
  ];

  ringVehicles.forEach((cfg, idx) => {
    const paint = carPaints[idx % carPaints.length];
    const mesh = createCarMesh(paint, cfg.isBus, cfg.isVan);
    mesh.position.y = 2.85;
    group.add(mesh);

    animatedItems.vehicles.push({
      type: 'ring',
      mesh,
      radius: cfg.radius,
      speed: cfg.speed,
      startAngle: cfg.startAngle
    });
  });

  // 2. Straight North-South & East-West Avenues
  const straightVehicles = [
    { type: 'straight_ns', laneX: 1.5, direction: 1, speed: 7.5, offset: 0, paintIdx: 0 },
    { type: 'straight_ns', laneX: -1.5, direction: -1, speed: 6.8, offset: 15, paintIdx: 1 },
    { type: 'straight_ew', laneZ: 1.5, direction: 1, speed: 7.2, offset: 5, paintIdx: 2 },
    { type: 'straight_ew', laneZ: -1.5, direction: -1, speed: 6.5, offset: 22, paintIdx: 3 }
  ];

  straightVehicles.forEach((cfg) => {
    const paint = carPaints[cfg.paintIdx % carPaints.length];
    const mesh = createCarMesh(paint, false, false);
    mesh.position.y = 2.85;
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
}

// --------------------------------------------------------------------------
// 4. Moving Boats in Water
// --------------------------------------------------------------------------
function buildMovingBoats(group, mat, animatedItems) {
  function createBoat(isFerry = false, isPatrol = false) {
    const boat = new THREE.Group();

    if (isFerry) {
      // Passenger Ferry
      const hull = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.2, 10), mat.boatHullNavy);
      hull.position.y = 0.4;
      hull.castShadow = true;
      boat.add(hull);

      const cabin = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.4, 7), mat.boatHullWhite);
      cabin.position.set(0, 1.4, -0.5);
      boat.add(cabin);

      const glass = new THREE.Mesh(new THREE.BoxGeometry(3.65, 0.6, 6.2), mat.carGlass);
      glass.position.set(0, 1.5, -0.5);
      boat.add(glass);
    } else if (isPatrol) {
      // Harbor Tug / Patrol Boat
      const hull = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.1, 7.5), mat.boatHullRed);
      hull.position.y = 0.4;
      hull.castShadow = true;
      boat.add(hull);

      const wheelhouse = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 3), mat.boatHullWhite);
      wheelhouse.position.set(0, 1.4, 0.5);
      boat.add(wheelhouse);

      const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.4, 10), mat.industrialYellow);
      stack.position.set(0, 2.4, -0.8);
      boat.add(stack);
    } else {
      // Container Feeder Barge
      const hull = new THREE.Mesh(new THREE.BoxGeometry(4.8, 1.3, 14), mat.buildingDarkSteel);
      hull.position.y = 0.4;
      hull.castShadow = true;
      boat.add(hull);

      // Containers on Barge
      const colors = [mat.containerBlue, mat.containerRed, mat.containerGreen];
      for (let z = -4; z <= 3; z += 3.2) {
        const c = new THREE.Mesh(new THREE.BoxGeometry(3.8, 1.5, 2.8), colors[(Math.abs(z)) % colors.length]);
        c.position.set(0, 1.6, z);
        c.castShadow = true;
        boat.add(c);
      }
    }

    return boat;
  }

  const boatConfigs = [
    { isFerry: true, isPatrol: false, centerX: 0, centerZ: 0, radiusX: 58, radiusZ: 58, speed: 0.12, startAngle: 0 },
    { isFerry: false, isPatrol: false, centerX: -20, centerZ: -10, radiusX: 52, radiusZ: 44, speed: 0.09, startAngle: Math.PI * 0.6 },
    { isFerry: false, isPatrol: true, centerX: 15, centerZ: 20, radiusX: 48, radiusZ: 50, speed: 0.14, startAngle: Math.PI * 1.3 }
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
// 5. Walking Pedestrians in Plazas & Walkways
// --------------------------------------------------------------------------
function buildPedestrians(group, mat, animatedItems) {
  const clothMats = [
    mat.personCloth1,
    mat.personCloth2,
    mat.personCloth3,
    mat.personCloth4,
    mat.personCloth5
  ];

  function createPersonMesh(clothMat) {
    const person = new THREE.Group();

    // Body / Torso
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.7, 8), clothMat);
    torso.position.y = 0.55;
    torso.castShadow = true;
    person.add(torso);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), mat.personSkin);
    head.position.y = 1.02;
    head.castShadow = true;
    person.add(head);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.45, 6);
    const leg1 = new THREE.Mesh(legGeo, mat.buildingDarkSteel);
    leg1.position.set(-0.08, 0.22, 0);
    person.add(leg1);

    const leg2 = new THREE.Mesh(legGeo, mat.buildingDarkSteel);
    leg2.position.set(0.08, 0.22, 0);
    person.add(leg2);

    return person;
  }

  // Pedestrian walk paths across plazas & sidewalks
  const personSpots = [
    { startX: 2, startZ: 5, rangeX: 4, rangeZ: 1, walkSpeed: 1.8, targetAngle: 0, offset: 0 },
    { startX: -3, startZ: 7, rangeX: 1, rangeZ: 5, walkSpeed: 1.5, targetAngle: Math.PI / 2, offset: 1.2 },
    { startX: 6, startZ: -2, rangeX: 3, rangeZ: 3, walkSpeed: 1.7, targetAngle: Math.PI / 4, offset: 2.5 },
    { startX: -10, startZ: 14, rangeX: 4, rangeZ: 0.5, walkSpeed: 1.6, targetAngle: 0, offset: 0.8 },
    { startX: 12, startZ: -8, rangeX: 0.5, rangeZ: 4, walkSpeed: 1.9, targetAngle: Math.PI / 2, offset: 3.1 },
    { startX: -16, startZ: 2, rangeX: 3, rangeZ: 2, walkSpeed: 1.4, targetAngle: Math.PI / 3, offset: 1.9 }
  ];

  personSpots.forEach((spot, idx) => {
    const cloth = clothMats[idx % clothMats.length];
    const mesh = createPersonMesh(cloth);
    mesh.position.set(spot.startX, 2.82, spot.startZ);
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
// 6. Commercial Real Estate & City Core
// --------------------------------------------------------------------------
function buildCommercialDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(0, 2.8, 2);
  dGroup.userData = { districtId: "commercial" };

  // Plaza Base
  const plaza = new THREE.Mesh(new THREE.BoxGeometry(18, 0.3, 18), mat.concretePlaza);
  plaza.position.set(0, 0.15, 0);
  plaza.receiveShadow = true;
  dGroup.add(plaza);

  // Tower 1 (Main Glass Headquarters)
  const t1 = new THREE.Mesh(new THREE.BoxGeometry(5.5, 20, 5.5), mat.buildingGlassAzure);
  t1.position.set(-3.5, 10, -3.5);
  t1.castShadow = true;
  dGroup.add(t1);

  // Tower 2 (Modern Stepped Tower)
  const t2Base = new THREE.Mesh(new THREE.BoxGeometry(6, 11, 6), mat.buildingWhite);
  t2Base.position.set(3.5, 5.5, -3.5);
  t2Base.castShadow = true;
  dGroup.add(t2Base);

  const t2Top = new THREE.Mesh(new THREE.BoxGeometry(4.2, 7, 4.2), mat.buildingGlassCyan);
  t2Top.position.set(3.5, 14.5, -3.5);
  t2Top.castShadow = true;
  dGroup.add(t2Top);

  // Tower 3 (Executive Dark Slate Tower)
  const t3 = new THREE.Mesh(new THREE.BoxGeometry(5, 15, 5), mat.buildingDarkSteel);
  t3.position.set(-3.5, 7.5, 4);
  t3.castShadow = true;
  dGroup.add(t3);

  // Tower 4 (Innovation Hub)
  const t4 = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 3.2, 12, 16), mat.buildingWhite);
  t4.position.set(4, 6, 4);
  t4.castShadow = true;
  dGroup.add(t4);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 7. Manufacturing & Robotics District
// --------------------------------------------------------------------------
function buildManufacturingDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-18, 2.8, -8);
  dGroup.userData = { districtId: "manufacturing" };

  // Main High-Bay Assembly Plant
  const plant = new THREE.Mesh(new THREE.BoxGeometry(14, 5.5, 9), mat.buildingDarkSteel);
  plant.position.set(0, 2.75, 0);
  plant.castShadow = true;
  plant.receiveShadow = true;
  dGroup.add(plant);

  // Sawtooth Roof Skylights
  for (let i = -5; i <= 5; i += 2.5) {
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.4, 1.2, 4), mat.buildingGlassCyan);
    roof.position.set(i, 6.1, 0);
    roof.rotation.y = Math.PI / 4;
    dGroup.add(roof);
  }

  // Cylindrical Material Silos
  for (let s = -2; s <= 2; s += 2) {
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 6, 16), mat.industrialSteel);
    silo.position.set(-8.5, 3, s);
    silo.castShadow = true;
    dGroup.add(silo);
  }

  // Robotics Gantry Beam
  const gantryBeam = new THREE.Mesh(new THREE.BoxGeometry(12, 0.4, 0.4), mat.industrialYellow);
  gantryBeam.position.set(0, 7.5, 5.5);
  dGroup.add(gantryBeam);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 8. Healthcare & Medical Technology Campus
// --------------------------------------------------------------------------
function buildHealthcareDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-12, 2.8, 18);
  dGroup.userData = { districtId: "healthcare" };

  // Hospital Main Pavilion (Cross shape layout)
  const hMain = new THREE.Mesh(new THREE.BoxGeometry(11, 7.5, 5.5), mat.buildingWhite);
  hMain.position.set(0, 3.75, 0);
  hMain.castShadow = true;
  dGroup.add(hMain);

  const hWing = new THREE.Mesh(new THREE.BoxGeometry(5.5, 7.5, 11), mat.buildingGlassCyan);
  hWing.position.set(0, 3.75, 0);
  hWing.castShadow = true;
  dGroup.add(hWing);

  // Rooftop Helipad
  const helipad = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.3, 16), mat.concretePlaza);
  helipad.position.set(0, 7.65, 0);
  dGroup.add(helipad);

  // Red Cross Emblem
  const crossH = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 0.6), mat.accentRed);
  crossH.position.set(0, 7.85, 0);
  dGroup.add(crossH);

  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 2), mat.accentRed);
  crossV.position.set(0, 7.85, 0);
  dGroup.add(crossV);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 9. Biotechnology & Research Labs
// --------------------------------------------------------------------------
function buildBiotechDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(15, 2.8, -12);
  dGroup.userData = { districtId: "biotech" };

  // Center Geodesic Bio-Dome
  const dome = new THREE.Mesh(new THREE.SphereGeometry(4.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), mat.buildingGlassEmerald);
  dome.position.set(0, 0, 0);
  dome.castShadow = true;
  dGroup.add(dome);

  // Research Lab Wings
  const lab1 = new THREE.Mesh(new THREE.BoxGeometry(6, 4.5, 3.5), mat.buildingWhite);
  lab1.position.set(6, 2.25, 0);
  lab1.castShadow = true;
  dGroup.add(lab1);

  const lab2 = new THREE.Mesh(new THREE.BoxGeometry(6, 4.5, 3.5), mat.buildingWhite);
  lab2.position.set(-6, 2.25, 0);
  lab2.castShadow = true;
  dGroup.add(lab2);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 10. Smart Maritime Port & Automated Terminal
// --------------------------------------------------------------------------
function buildPortsDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-36, 2.9, -16);
  dGroup.userData = { districtId: "ports" };

  // Container Ship Docked at Berth
  const hull = new THREE.Mesh(new THREE.BoxGeometry(22, 3.2, 6.5), mat.buildingDarkSteel);
  hull.position.set(0, 0.8, -12);
  hull.castShadow = true;
  dGroup.add(hull);

  // Containers on Ship
  const colors = [mat.containerBlue, mat.containerRed, mat.containerGreen, mat.containerOrange];
  for (let x = -8; x <= 6; x += 3.2) {
    for (let y = 0; y < 2; y++) {
      const c = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.2, 2.2), colors[(Math.abs(x * 3 + y)) % colors.length]);
      c.position.set(x, 2.8 + y * 1.3, -12);
      c.castShadow = true;
      dGroup.add(c);
    }
  }

  // Quay Gantry Cranes
  for (let q = -6; q <= 6; q += 8) {
    const craneGroup = new THREE.Group();
    craneGroup.position.set(q, 0, -4);

    const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 9, 0.5), mat.industrialYellow);
    leg1.position.set(-1.8, 4.5, 0);
    craneGroup.add(leg1);

    const leg2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 9, 0.5), mat.industrialYellow);
    leg2.position.set(1.8, 4.5, 0);
    craneGroup.add(leg2);

    const boom = new THREE.Mesh(new THREE.BoxGeometry(5.5, 0.6, 12), mat.industrialYellow);
    boom.position.set(0, 9, -2.5);
    boom.castShadow = true;
    craneGroup.add(boom);

    dGroup.add(craneGroup);
  }

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 11. Underground Mining & Quarry
// --------------------------------------------------------------------------
function buildMiningDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(8, 2.8, -32);
  dGroup.userData = { districtId: "mining" };

  // Mine Shaft Headframe
  const tower = new THREE.Mesh(new THREE.BoxGeometry(4.5, 11, 4.5), mat.industrialSteel);
  tower.position.set(0, 5.5, 0);
  tower.castShadow = true;
  dGroup.add(tower);

  // Sheave Wheel
  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.4, 16), mat.industrialYellow);
  wheel.rotation.z = Math.PI / 2;
  wheel.position.set(0, 11.2, 0);
  dGroup.add(wheel);

  // Conveyor Ramp
  const ramp = new THREE.Mesh(new THREE.BoxGeometry(2, 0.4, 10), mat.buildingDarkSteel);
  ramp.position.set(0, 3.5, 5);
  ramp.rotation.x = -Math.PI / 6;
  ramp.castShadow = true;
  dGroup.add(ramp);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 12. Smart Agriculture & Pivot Irrigation
// --------------------------------------------------------------------------
function buildAgricultureDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(28, 3.12, 10);
  dGroup.userData = { districtId: "agriculture" };

  // Center-Pivot Irrigation Crop Circles (Elevated with polygonOffset)
  const circle1 = new THREE.Mesh(new THREE.CircleGeometry(5.5, 32), mat.cropFieldGreen);
  circle1.rotation.x = -Math.PI / 2;
  circle1.position.set(-4, 0.04, -4);
  circle1.receiveShadow = true;
  dGroup.add(circle1);

  const circle2 = new THREE.Mesh(new THREE.CircleGeometry(4.5, 32), mat.cropFieldGold);
  circle2.rotation.x = -Math.PI / 2;
  circle2.position.set(4, 0.04, 4);
  circle2.receiveShadow = true;
  dGroup.add(circle2);

  // Irrigation Boom
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 5.5, 8), mat.industrialSteel);
  boom.rotation.z = Math.PI / 2;
  boom.position.set(-4, 0.55, -4);
  dGroup.add(boom);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 13. Energy Grid & Wind / Solar Substation
// --------------------------------------------------------------------------
function buildEnergyGridDistrict(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(22, 2.8, -26);
  dGroup.userData = { districtId: "energy" };

  // Solar Array Panels
  for (let r = -2; r <= 2; r += 2) {
    for (let c = -3; c <= 3; c += 2.5) {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 1.4), mat.solarPanel);
      panel.position.set(c, 0.5, r);
      panel.rotation.x = Math.PI / 7;
      panel.castShadow = true;
      dGroup.add(panel);
    }
  }

  // Wind Turbine 1
  const wtMast = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.45, 14, 12), mat.buildingWhite);
  wtMast.position.set(7, 7, 0);
  wtMast.castShadow = true;
  dGroup.add(wtMast);

  const wtRotor = new THREE.Group();
  wtRotor.position.set(7, 14, 0.4);

  const hub = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), mat.buildingWhite);
  wtRotor.add(hub);

  for (let b = 0; b < 3; b++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.25, 4.5, 0.06), mat.buildingWhite);
    blade.position.y = 2.25;
    blade.rotation.z = (b * Math.PI * 2) / 3;
    blade.rotation.x = 0.1;
    wtRotor.add(blade);
  }

  dGroup.add(wtRotor);
  if (animatedItems && animatedItems.windTurbines) {
    animatedItems.windTurbines.push(wtRotor);
  }

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 14. Autonomous Warehousing & Fleet Dispatch
// --------------------------------------------------------------------------
function buildWarehousingDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-22, 2.8, 6);
  dGroup.userData = { districtId: "warehousing" };

  // Main Fulfillment Center Building
  const wh = new THREE.Mesh(new THREE.BoxGeometry(12, 4.2, 8), mat.buildingWarmGray);
  wh.position.set(0, 2.1, 0);
  wh.castShadow = true;
  wh.receiveShadow = true;
  dGroup.add(wh);

  // Loading Bays with Roll-Up Doors
  for (let b = -4; b <= 4; b += 2.2) {
    const bay = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 0.1), mat.buildingDarkSteel);
    bay.position.set(b, 1.1, 4.05);
    dGroup.add(bay);
  }

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 15. Additive 3D Manufacturing Hub
// --------------------------------------------------------------------------
function buildAdditiveDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-6, 2.8, -20);
  dGroup.userData = { districtId: "additive" };

  // Additive Cleanroom Facility
  const cleanroom = new THREE.Mesh(new THREE.BoxGeometry(9, 4.8, 7), mat.buildingWhite);
  cleanroom.position.set(0, 2.4, 0);
  cleanroom.castShadow = true;
  dGroup.add(cleanroom);

  // Cylindrical Gas Inerting Towers
  const t1 = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 5, 16), mat.industrialSteel);
  t1.position.set(5.2, 2.5, 0);
  dGroup.add(t1);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 16. Drone Operations
// --------------------------------------------------------------------------
function buildDroneOperations(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(0, 12, 0);
  dGroup.userData = { districtId: "drones" };

  const drone = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.25, 1.2), mat.buildingDarkSteel);
  drone.add(body);

  const payload = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), mat.accentCyan);
  payload.position.set(0, -0.35, 0);
  drone.add(payload);

  dGroup.add(drone);
  group.add(dGroup);

  if (animatedItems && animatedItems.drones) {
    animatedItems.drones.push(drone);
  }
}

// --------------------------------------------------------------------------
// 17. Urban Trees & Greenery
// --------------------------------------------------------------------------
function buildVegetation(group, mat) {
  const treeGeo = new THREE.ConeGeometry(0.9, 2.2, 6);
  const trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 0.6, 6);

  const treePositions = [
    [10, 2.8, 4], [12, 2.8, 6], [14, 2.8, 2], [8, 2.8, -6], [12, 2.8, -10],
    [-14, 2.8, 8], [-16, 2.8, 12], [-18, 2.8, 14], [-6, 2.8, 14], [-4, 2.8, 16],
    [-26, 2.8, -4], [-24, 2.8, -6], [-28, 2.8, -12], [22, 2.8, -22], [18, 2.8, -26],
    [16, 2.8, 14], [18, 2.8, 16], [22, 2.8, 18], [24, 2.8, 22]
  ];

  treePositions.forEach(([x, y, z], idx) => {
    const tree = new THREE.Group();
    tree.position.set(x, y, z);

    const trunk = new THREE.Mesh(trunkGeo, mat.treeTrunk);
    trunk.position.y = 0.3;
    tree.add(trunk);

    const foliage = new THREE.Mesh(treeGeo, idx % 2 === 0 ? mat.treeLeaves1 : mat.treeLeaves2);
    foliage.position.y = 1.4;
    foliage.castShadow = true;
    tree.add(foliage);

    group.add(tree);
  });
}
