import * as THREE from 'three';

/**
 * High-Fidelity PBR Material Palette for 3D Digital Twin City
 * Tuned for architectural realism, realistic roads, power grid, agriculture, and zero Z-fighting.
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

    // Agriculture & Crops
    cropWheatGold: new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.85, metalness: 0.05 }),
    cropLushGreen: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.85, metalness: 0.05 }),
    barnRed: new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.5, metalness: 0.1 }),
    siloGalvanized: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.25, metalness: 0.85 }),
    tractorGreen: new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.3, metalness: 0.4 }),
    tractorYellowWheel: new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.4, metalness: 0.2 }),
    timberFence: new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9, metalness: 0.02 }),

    // Power Grid & Electrical
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

    // Industrial Logistics
    industrialSteel: new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4, metalness: 0.75 }),
    industrialYellow: new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.45, metalness: 0.4 }),
    containerBlue: new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.5, metalness: 0.3 }),
    containerRed: new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.5, metalness: 0.3 }),
    containerGreen: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.5, metalness: 0.3 }),
    containerOrange: new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.5, metalness: 0.3 }),

    // Foliage & Nature
    treeTrunk: new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9, metalness: 0.05 }),
    treeLeaves1: new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85, metalness: 0.05, flatShading: true }),
    treeLeaves2: new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85, metalness: 0.05, flatShading: true }),

    // Streetlights & Accents
    streetlightEmissive: new THREE.MeshBasicMaterial({ color: 0xfef08a }),
    accentRed: new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3, metalness: 0.3 }),
    accentCyan: new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.2, metalness: 0.8 })
  };
}

/**
 * Builds the realistic 3D city scene with logical roads, power grid, agriculture, and vehicle movement.
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

  // 3. Roads, Bridges & Street Markings
  buildRoadsAndBridges(cityGroup, mat);

  // 4. Moving City Traffic (100% Road-Aligned)
  buildMovingVehicles(cityGroup, mat, animatedItems);

  // 5. Moving Boats & Maritime Vessels
  buildMovingBoats(cityGroup, mat, animatedItems);

  // 6. Walking Pedestrians in Plazas & Walkways
  buildPedestrians(cityGroup, mat, animatedItems);

  // 7. Industry Districts & Specialized Infrastructure
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
    // 1. Update Road-Aligned Vehicles
    animatedItems.vehicles.forEach((v) => {
      if (v.type === 'ring') {
        const angle = v.startAngle + time * v.speed;
        v.mesh.position.x = Math.cos(angle) * v.radius;
        v.mesh.position.z = Math.sin(angle) * v.radius;
        v.mesh.rotation.y = -angle + (v.speed > 0 ? Math.PI / 2 : -Math.PI / 2);
      } else if (v.type === 'straight_ns') {
        const span = 44;
        const progress = (time * v.speed + v.offset) % span;
        const z = -span / 2 + progress;
        v.mesh.position.z = v.direction > 0 ? z : -z;
        v.mesh.position.x = v.laneX;
        v.mesh.rotation.y = v.direction > 0 ? 0 : Math.PI;
      } else if (v.type === 'straight_ew') {
        const span = 44;
        const progress = (time * v.speed + v.offset) % span;
        const x = -span / 2 + progress;
        v.mesh.position.x = v.direction > 0 ? x : -x;
        v.mesh.position.z = v.laneZ;
        v.mesh.rotation.y = v.direction > 0 ? Math.PI / 2 : -Math.PI / 2;
      } else if (v.type === 'port_spur') {
        const span = 14;
        const progress = (time * v.speed + v.offset) % span;
        const x = -36 + progress;
        v.mesh.position.x = v.direction > 0 ? x : -22 - progress;
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

    // 5. Update Drone Flight Path
    animatedItems.drones.forEach((drone) => {
      const radius = 16;
      const speed = 0.35;
      drone.position.x = Math.cos(time * speed) * radius;
      drone.position.z = Math.sin(time * speed) * radius;
      drone.position.y = 14 + Math.sin(time * 1.5) * 0.7;
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
// 1. Terrain & Natural Geography
// --------------------------------------------------------------------------
function buildTerrain(group, mat) {
  // Main Central Island (Elevation at y = 2.8)
  const mainIslandGeo = new THREE.CylinderGeometry(45, 47, 2.8, 48);
  const mainIsland = new THREE.Mesh(mainIslandGeo, mat.groundGrass);
  mainIsland.position.set(0, 1.4, 0);
  mainIsland.receiveShadow = true;
  group.add(mainIsland);

  // Sandy Shoreline Fringe
  const coastGeo = new THREE.CylinderGeometry(47, 49.5, 2.4, 48);
  const coast = new THREE.Mesh(coastGeo, mat.groundSand);
  coast.position.set(0, 1.2, 0);
  coast.receiveShadow = true;
  group.add(coast);

  // Western Deepwater Port Wharf
  const portQuayGeo = new THREE.BoxGeometry(26, 1.6, 28);
  const portQuay = new THREE.Mesh(portQuayGeo, mat.concretePlaza);
  portQuay.position.set(-36, 0.8, -16);
  portQuay.receiveShadow = true;
  group.add(portQuay);

  // Northern Mountain Range (Mining Elevation)
  const m1 = new THREE.Mesh(new THREE.ConeGeometry(18, 16, 8), mat.groundRock);
  m1.position.set(10, 8.5, -38);
  m1.castShadow = true;
  m1.receiveShadow = true;
  group.add(m1);

  const m2 = new THREE.Mesh(new THREE.ConeGeometry(15, 13, 7), mat.groundQuarry);
  m2.position.set(-8, 6.5, -40);
  m2.castShadow = true;
  m2.receiveShadow = true;
  group.add(m2);

  const m3 = new THREE.Mesh(new THREE.ConeGeometry(12, 10, 6), mat.groundRock);
  m3.position.set(24, 5, -34);
  m3.castShadow = true;
  group.add(m3);
}

// --------------------------------------------------------------------------
// 2. Realistic Road Network & Infrastructure
// --------------------------------------------------------------------------
function buildRoadsAndBridges(group, mat) {
  // 1. Main Ring Highway (R = 24.0, Width = 4.5)
  const ringRoad = new THREE.Mesh(new THREE.RingGeometry(21.75, 26.25, 48), mat.roadAsphalt);
  ringRoad.rotation.x = -Math.PI / 2;
  ringRoad.position.set(0, 2.82, 0);
  ringRoad.receiveShadow = true;
  group.add(ringRoad);

  // Ring Road Yellow Center Divider Line (R = 24.0)
  const ringDivider = new THREE.Mesh(new THREE.RingGeometry(23.94, 24.06, 48), mat.roadMarkingYellow);
  ringDivider.rotation.x = -Math.PI / 2;
  ringDivider.position.set(0, 2.83, 0);
  group.add(ringDivider);

  // 2. North-South Avenue (from z = -24 to +24, width = 5.6)
  const roadNS = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 48), mat.roadAsphalt);
  roadNS.rotation.x = -Math.PI / 2;
  roadNS.position.set(0, 2.82, 0);
  roadNS.receiveShadow = true;
  group.add(roadNS);

  // North-South White Dashed Divider
  for (let z = -21; z <= 21; z += 3.5) {
    if (Math.abs(z) < 2.5) continue; // Intersection gap
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 1.8), mat.roadMarkingWhite);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(0, 2.83, z);
    group.add(dash);
  }

  // 3. East-West Avenue (from x = -24 to +24, width = 5.6)
  const roadEW = new THREE.Mesh(new THREE.PlaneGeometry(48, 5.6), mat.roadAsphalt);
  roadEW.rotation.x = -Math.PI / 2;
  roadEW.position.set(0, 2.82, 0);
  roadEW.receiveShadow = true;
  group.add(roadEW);

  // East-West White Dashed Divider
  for (let x = -21; x <= 21; x += 3.5) {
    if (Math.abs(x) < 2.5) continue; // Intersection gap
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.2), mat.roadMarkingWhite);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(x, 2.83, 0);
    group.add(dash);
  }

  // 4. Western Port Spur Road (connecting Ring Highway to Port at z = -16)
  const portSpur = new THREE.Mesh(new THREE.PlaneGeometry(16, 4.8), mat.roadAsphalt);
  portSpur.rotation.x = -Math.PI / 2;
  portSpur.position.set(-28, 2.82, -16);
  portSpur.receiveShadow = true;
  group.add(portSpur);

  // 5. Eastern Farmland Access Road (connecting Ring Highway to Agriculture at z = 12)
  const farmSpur = new THREE.Mesh(new THREE.PlaneGeometry(12, 4.2), mat.roadAsphalt);
  farmSpur.rotation.x = -Math.PI / 2;
  farmSpur.position.set(26, 2.82, 12);
  farmSpur.receiveShadow = true;
  group.add(farmSpur);

  // 6. Northern Mining Access Road (connecting Ring Highway to Mountains at x = 10)
  const mineSpur = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 14), mat.roadAsphalt);
  mineSpur.rotation.x = -Math.PI / 2;
  mineSpur.position.set(10, 2.82, -28);
  mineSpur.receiveShadow = true;
  group.add(mineSpur);

  // 7. Southwest Suspension Bridge (to Logistics Hub at z = 16)
  const bridgeDeck = new THREE.Mesh(new THREE.BoxGeometry(18, 0.6, 5.2), mat.roadAsphalt);
  bridgeDeck.position.set(-28, 3.1, 16);
  bridgeDeck.castShadow = true;
  group.add(bridgeDeck);

  const pylon1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 8.5, 5.8), mat.buildingWhite);
  pylon1.position.set(-32, 5.8, 16);
  pylon1.castShadow = true;
  group.add(pylon1);

  const pylon2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 8.5, 5.8), mat.buildingWhite);
  pylon2.position.set(-24, 5.8, 16);
  pylon2.castShadow = true;
  group.add(pylon2);

  // Pedestrian Zebra Crosswalks at Ring Intersections
  const crosswalks = [
    { x: 0, z: 21.8, rot: 0 },
    { x: 0, z: -21.8, rot: 0 },
    { x: 21.8, z: 0, rot: Math.PI / 2 },
    { x: -21.8, z: 0, rot: Math.PI / 2 }
  ];

  crosswalks.forEach(cw => {
    const cwGroup = new THREE.Group();
    cwGroup.position.set(cw.x, 2.83, cw.z);
    cwGroup.rotation.y = cw.rot;

    for (let s = -2.0; s <= 2.0; s += 0.8) {
      const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 3.2), mat.roadMarkingWhite);
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(s, 0, 0);
      cwGroup.add(stripe);
    }
    group.add(cwGroup);
  });

  // Modern Streetlamps along Ring Highway Perimeter
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
    const lampGroup = new THREE.Group();
    const lx = Math.cos(a) * 26.8;
    const lz = Math.sin(a) * 26.8;
    lampGroup.position.set(lx, 2.8, lz);
    lampGroup.rotation.y = -a;

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 4.2, 8), mat.industrialSteel);
    pole.position.y = 2.1;
    lampGroup.add(pole);

    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.08, 0.08), mat.industrialSteel);
    arm.position.set(-0.35, 4.15, 0);
    lampGroup.add(arm);

    const fixture = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), mat.streetlightEmissive);
    fixture.position.set(-0.7, 4.05, 0);
    lampGroup.add(fixture);

    group.add(lampGroup);
  }
}

// --------------------------------------------------------------------------
// 3. Moving Vehicles (Strictly Road-Aligned)
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
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.3, 4.8), mat.carPaintBlue);
      body.position.y = 0.95;
      body.castShadow = true;
      car.add(body);

      const glass = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.45, 4.2), mat.carGlass);
      glass.position.set(0, 1.2, 0);
      car.add(glass);
    } else if (isVan) {
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.0, 1.3), mat.carPaintWhite);
      cab.position.set(0, 0.8, 0.9);
      cab.castShadow = true;
      car.add(cab);

      const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.3, 2.2), mat.buildingWarmGray);
      box.position.set(0, 0.95, -0.6);
      box.castShadow = true;
      car.add(box);
    } else {
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.5, 2.8), paintMaterial);
      chassis.position.y = 0.42;
      chassis.castShadow = true;
      car.add(chassis);

      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.4, 1.5), mat.carGlass);
      cabin.position.set(0, 0.78, -0.2);
      cabin.castShadow = true;
      car.add(cabin);
    }

    // Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.18, 10);
    wheelGeo.rotateZ(Math.PI / 2);

    [
      [-0.65, 0.24, 0.8],
      [0.65, 0.24, 0.8],
      [-0.65, 0.24, -0.8],
      [0.65, 0.24, -0.8]
    ].forEach(([wx, wy, wz]) => {
      const wheel = new THREE.Mesh(wheelGeo, mat.carTire);
      wheel.position.set(wx, wy, wz);
      car.add(wheel);
    });

    // Headlights
    const hl1 = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.04), mat.headlightGlow);
    hl1.position.set(-0.4, 0.45, 1.42);
    car.add(hl1);

    const hl2 = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.04), mat.headlightGlow);
    hl2.position.set(0.4, 0.45, 1.42);
    car.add(hl2);

    // Taillights
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.1, 0.04), mat.taillightGlow);
    tl.position.set(0, 0.45, -1.42);
    car.add(tl);

    return car;
  }

  // 1. Ring Highway Traffic (Outer Lane R = 25.0 Clockwise, Inner Lane R = 23.0 Counter-Clockwise)
  const ringTraffic = [
    { radius: 25.0, speed: 0.35, startAngle: 0, isBus: false, isVan: false },
    { radius: 25.0, speed: 0.32, startAngle: Math.PI * 0.5, isBus: true, isVan: false },
    { radius: 25.0, speed: 0.38, startAngle: Math.PI * 1.1, isBus: false, isVan: false },
    { radius: 25.0, speed: 0.34, startAngle: Math.PI * 1.6, isBus: false, isVan: true },
    { radius: 23.0, speed: -0.34, startAngle: Math.PI * 0.2, isBus: false, isVan: false },
    { radius: 23.0, speed: -0.37, startAngle: Math.PI * 0.8, isBus: false, isVan: false },
    { radius: 23.0, speed: -0.31, startAngle: Math.PI * 1.4, isBus: false, isVan: true },
    { radius: 23.0, speed: -0.35, startAngle: Math.PI * 1.8, isBus: false, isVan: false }
  ];

  ringTraffic.forEach((cfg, idx) => {
    const paint = carPaints[idx % carPaints.length];
    const mesh = createCarMesh(paint, cfg.isBus, cfg.isVan);
    mesh.position.y = 2.84;
    group.add(mesh);

    animatedItems.vehicles.push({
      type: 'ring',
      mesh,
      radius: cfg.radius,
      speed: cfg.speed,
      startAngle: cfg.startAngle
    });
  });

  // 2. North-South & East-West Avenues (Right-hand traffic within lane boundaries)
  const avenueTraffic = [
    { type: 'straight_ns', laneX: 1.4, direction: 1, speed: 6.5, offset: 0, paintIdx: 0 },
    { type: 'straight_ns', laneX: -1.4, direction: -1, speed: 6.0, offset: 12, paintIdx: 1 },
    { type: 'straight_ew', laneZ: 1.4, direction: 1, speed: 6.2, offset: 4, paintIdx: 2 },
    { type: 'straight_ew', laneZ: -1.4, direction: -1, speed: 5.8, offset: 18, paintIdx: 3 }
  ];

  avenueTraffic.forEach((cfg) => {
    const paint = carPaints[cfg.paintIdx % carPaints.length];
    const mesh = createCarMesh(paint, false, false);
    mesh.position.y = 2.84;
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

  // 3. Port Logistics Spur Freight Trucks
  const portTrucks = [
    { laneZ: -15.4, direction: 1, speed: 4.5, offset: 0, paintIdx: 4 },
    { laneZ: -16.6, direction: -1, speed: 4.2, offset: 7, paintIdx: 5 }
  ];

  portTrucks.forEach((cfg) => {
    const paint = carPaints[cfg.paintIdx % carPaints.length];
    const mesh = createCarMesh(paint, false, true);
    mesh.position.y = 2.84;
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
// 4. Moving Boats in Open Water
// --------------------------------------------------------------------------
function buildMovingBoats(group, mat, animatedItems) {
  function createBoat(isFerry = false, isPatrol = false) {
    const boat = new THREE.Group();

    if (isFerry) {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(3.8, 1.1, 9), mat.boatHullNavy);
      hull.position.y = 0.35;
      hull.castShadow = true;
      boat.add(hull);

      const cabin = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.3, 6.5), mat.boatHullWhite);
      cabin.position.set(0, 1.3, -0.4);
      boat.add(cabin);

      const glass = new THREE.Mesh(new THREE.BoxGeometry(3.25, 0.5, 5.8), mat.carGlass);
      glass.position.set(0, 1.4, -0.4);
      boat.add(glass);
    } else if (isPatrol) {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.0, 7), mat.boatHullRed);
      hull.position.y = 0.35;
      hull.castShadow = true;
      boat.add(hull);

      const wheelhouse = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.4, 2.8), mat.boatHullWhite);
      wheelhouse.position.set(0, 1.3, 0.4);
      boat.add(wheelhouse);

      const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 1.2, 8), mat.industrialYellow);
      stack.position.set(0, 2.2, -0.7);
      boat.add(stack);
    } else {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.2, 12), mat.buildingDarkSteel);
      hull.position.y = 0.35;
      hull.castShadow = true;
      boat.add(hull);

      const colors = [mat.containerBlue, mat.containerRed, mat.containerGreen];
      for (let z = -3.5; z <= 2.5; z += 2.8) {
        const c = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.3, 2.4), colors[(Math.abs(z)) % colors.length]);
        c.position.set(0, 1.4, z);
        c.castShadow = true;
        boat.add(c);
      }
    }

    return boat;
  }

  const boatConfigs = [
    { isFerry: true, isPatrol: false, centerX: 0, centerZ: 0, radiusX: 58, radiusZ: 58, speed: 0.11, startAngle: 0 },
    { isFerry: false, isPatrol: false, centerX: -15, centerZ: -10, radiusX: 54, radiusZ: 48, speed: 0.08, startAngle: Math.PI * 0.6 },
    { isFerry: false, isPatrol: true, centerX: 15, centerZ: 15, radiusX: 50, radiusZ: 52, speed: 0.13, startAngle: Math.PI * 1.3 }
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
// 5. Walking Pedestrians on Sidewalks & Plazas
// --------------------------------------------------------------------------
function buildPedestrians(group, mat, animatedItems) {
  const clothMats = [mat.personCloth1, mat.personCloth2, mat.personCloth3, mat.personCloth4];

  function createPersonMesh(clothMat) {
    const person = new THREE.Group();

    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.65, 8), clothMat);
    torso.position.y = 0.52;
    torso.castShadow = true;
    person.add(torso);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), mat.personSkin);
    head.position.y = 0.98;
    head.castShadow = true;
    person.add(head);

    const legGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.42, 6);
    const leg1 = new THREE.Mesh(legGeo, mat.buildingDarkSteel);
    leg1.position.set(-0.07, 0.21, 0);
    person.add(leg1);

    const leg2 = new THREE.Mesh(legGeo, mat.buildingDarkSteel);
    leg2.position.set(0.07, 0.21, 0);
    person.add(leg2);

    return person;
  }

  const pedestrianSpots = [
    { startX: 2, startZ: 4, rangeX: 3.5, rangeZ: 0.5, walkSpeed: 1.6, targetAngle: 0, offset: 0 },
    { startX: -3, startZ: 6, rangeX: 0.5, rangeZ: 4, walkSpeed: 1.4, targetAngle: Math.PI / 2, offset: 1.2 },
    { startX: 5, startZ: -2, rangeX: 2.5, rangeZ: 2, walkSpeed: 1.5, targetAngle: Math.PI / 4, offset: 2.5 },
    { startX: -10, startZ: 14, rangeX: 3.5, rangeZ: 0.4, walkSpeed: 1.5, targetAngle: 0, offset: 0.8 },
    { startX: 12, startZ: -8, rangeX: 0.4, rangeZ: 3.5, walkSpeed: 1.7, targetAngle: Math.PI / 2, offset: 3.1 }
  ];

  pedestrianSpots.forEach((spot, idx) => {
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
// 6. Commercial Real Estate & Downtown City Core
// --------------------------------------------------------------------------
function buildCommercialDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(0, 2.8, 0);
  dGroup.userData = { districtId: "commercial" };

  // Central Pedestrian Plaza (Inside ring road, outside vehicle lanes)
  const plaza = new THREE.Mesh(new THREE.BoxGeometry(16, 0.2, 16), mat.concretePlaza);
  plaza.position.set(0, 0.1, 0);
  plaza.receiveShadow = true;
  dGroup.add(plaza);

  // Tower 1 (Glass Headquarters Skyscraper)
  const t1 = new THREE.Mesh(new THREE.BoxGeometry(5.2, 18, 5.2), mat.buildingGlassAzure);
  t1.position.set(-4.5, 9, -4.5);
  t1.castShadow = true;
  dGroup.add(t1);

  // Tower 2 (Stepped Modern Office Tower)
  const t2Base = new THREE.Mesh(new THREE.BoxGeometry(5.5, 10, 5.5), mat.buildingWhite);
  t2Base.position.set(4.5, 5, -4.5);
  t2Base.castShadow = true;
  dGroup.add(t2Base);

  const t2Top = new THREE.Mesh(new THREE.BoxGeometry(4.0, 6.5, 4.0), mat.buildingGlassCyan);
  t2Top.position.set(4.5, 13.25, -4.5);
  t2Top.castShadow = true;
  dGroup.add(t2Top);

  // Tower 3 (Dark Slate Corporate Tower)
  const t3 = new THREE.Mesh(new THREE.BoxGeometry(4.8, 14, 4.8), mat.buildingDarkSteel);
  t3.position.set(-4.5, 7, 4.5);
  t3.castShadow = true;
  dGroup.add(t3);

  // Tower 4 (Curved Innovation Atrium)
  const t4 = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 3.0, 11, 16), mat.buildingWhite);
  t4.position.set(4.5, 5.5, 4.5);
  t4.castShadow = true;
  dGroup.add(t4);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 7. Manufacturing & Robotics District
// --------------------------------------------------------------------------
function buildManufacturingDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-16, 2.8, -12);
  dGroup.userData = { districtId: "manufacturing" };

  // Main High-Bay Assembly Plant
  const plant = new THREE.Mesh(new THREE.BoxGeometry(12, 5.2, 8), mat.buildingDarkSteel);
  plant.position.set(0, 2.6, 0);
  plant.castShadow = true;
  plant.receiveShadow = true;
  dGroup.add(plant);

  // Sawtooth Roof Skylights
  for (let i = -4; i <= 4; i += 2.5) {
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.3, 1.1, 4), mat.buildingGlassCyan);
    roof.position.set(i, 5.75, 0);
    roof.rotation.y = Math.PI / 4;
    dGroup.add(roof);
  }

  // Cylindrical Material Silos
  for (let s = -1.8; s <= 1.8; s += 1.8) {
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 5.5, 14), mat.industrialSteel);
    silo.position.set(-7.5, 2.75, s);
    silo.castShadow = true;
    dGroup.add(silo);
  }

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 8. Healthcare & Medical Technology Campus
// --------------------------------------------------------------------------
function buildHealthcareDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-14, 2.8, 14);
  dGroup.userData = { districtId: "healthcare" };

  // Hospital Main Cross-Shaped Pavilion
  const hMain = new THREE.Mesh(new THREE.BoxGeometry(10, 7.0, 5.0), mat.buildingWhite);
  hMain.position.set(0, 3.5, 0);
  hMain.castShadow = true;
  dGroup.add(hMain);

  const hWing = new THREE.Mesh(new THREE.BoxGeometry(5.0, 7.0, 10), mat.buildingGlassCyan);
  hWing.position.set(0, 3.5, 0);
  hWing.castShadow = true;
  dGroup.add(hWing);

  // Rooftop Helipad with Cross
  const helipad = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 0.25, 16), mat.concretePlaza);
  helipad.position.set(0, 7.15, 0);
  dGroup.add(helipad);

  const crossH = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.08, 0.5), mat.accentRed);
  crossH.position.set(0, 7.3, 0);
  dGroup.add(crossH);

  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 1.8), mat.accentRed);
  crossV.position.set(0, 7.3, 0);
  dGroup.add(crossV);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 9. Biotechnology & Research Labs
// --------------------------------------------------------------------------
function buildBiotechDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(14, 2.8, -14);
  dGroup.userData = { districtId: "biotech" };

  // Geodesic Bio-Dome
  const dome = new THREE.Mesh(new THREE.SphereGeometry(4.2, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2), mat.buildingGlassEmerald);
  dome.position.set(0, 0, 0);
  dome.castShadow = true;
  dGroup.add(dome);

  // Research Lab Wings
  const lab1 = new THREE.Mesh(new THREE.BoxGeometry(5.5, 4.0, 3.2), mat.buildingWhite);
  lab1.position.set(5.5, 2.0, 0);
  lab1.castShadow = true;
  dGroup.add(lab1);

  const lab2 = new THREE.Mesh(new THREE.BoxGeometry(5.5, 4.0, 3.2), mat.buildingWhite);
  lab2.position.set(-5.5, 2.0, 0);
  lab2.castShadow = true;
  dGroup.add(lab2);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 10. Smart Maritime Port & Deepwater Pier
// --------------------------------------------------------------------------
function buildPortsDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-36, 1.5, -16);
  dGroup.userData = { districtId: "ports" };

  // Cargo Freighter Vessel Docked at Pier
  const hull = new THREE.Mesh(new THREE.BoxGeometry(22, 2.8, 6.0), mat.buildingDarkSteel);
  hull.position.set(0, 0.7, -10);
  hull.castShadow = true;
  dGroup.add(hull);

  // Stacked Cargo Containers on Vessel
  const colors = [mat.containerBlue, mat.containerRed, mat.containerGreen, mat.containerOrange];
  for (let x = -7; x <= 5; x += 3.0) {
    for (let y = 0; y < 2; y++) {
      const c = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.1, 2.0), colors[(Math.abs(x * 2 + y)) % colors.length]);
      c.position.set(x, 2.4 + y * 1.2, -10);
      c.castShadow = true;
      dGroup.add(c);
    }
  }

  // Quay Gantry Cranes
  for (let q = -5; q <= 5; q += 6.5) {
    const craneGroup = new THREE.Group();
    craneGroup.position.set(q, 0, -3);

    const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.45, 8, 0.45), mat.industrialYellow);
    leg1.position.set(-1.6, 4, 0);
    craneGroup.add(leg1);

    const leg2 = new THREE.Mesh(new THREE.BoxGeometry(0.45, 8, 0.45), mat.industrialYellow);
    leg2.position.set(1.6, 4, 0);
    craneGroup.add(leg2);

    const boom = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.5, 10.5), mat.industrialYellow);
    boom.position.set(0, 8, -2.0);
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
  dGroup.position.set(10, 2.8, -36);
  dGroup.userData = { districtId: "mining" };

  // Extraction Headframe Tower
  const tower = new THREE.Mesh(new THREE.BoxGeometry(4.2, 10, 4.2), mat.industrialSteel);
  tower.position.set(0, 5, 0);
  tower.castShadow = true;
  dGroup.add(tower);

  // Sheave Wheel
  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.35, 14), mat.industrialYellow);
  wheel.rotation.z = Math.PI / 2;
  wheel.position.set(0, 10.2, 0);
  dGroup.add(wheel);

  // Ore Conveyor Ramp
  const ramp = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.35, 9), mat.buildingDarkSteel);
  ramp.position.set(0, 3.2, 4.5);
  ramp.rotation.x = -Math.PI / 6;
  ramp.castShadow = true;
  dGroup.add(ramp);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 12. Smart Agriculture & Precision Farming (Realistic Rural Layout)
// --------------------------------------------------------------------------
function buildAgricultureDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(32, 2.8, 12);
  dGroup.userData = { districtId: "agriculture" };

  // Farm Loam Soil Bed
  const fieldBed = new THREE.Mesh(new THREE.PlaneGeometry(22, 16), mat.farmlandLoam);
  fieldBed.rotation.x = -Math.PI / 2;
  fieldBed.position.set(0, 0.02, 0);
  fieldBed.receiveShadow = true;
  dGroup.add(fieldBed);

  // Parallel Crop Rows (Wheat Gold & Lush Green Furrows)
  for (let z = -6.5; z <= 6.5; z += 1.3) {
    const isWheat = Math.round(z * 10) % 2 === 0;
    const row = new THREE.Mesh(
      new THREE.BoxGeometry(18, 0.25, 0.65), 
      isWheat ? mat.cropWheatGold : mat.cropLushGreen
    );
    row.position.set(0, 0.15, z);
    row.castShadow = true;
    dGroup.add(row);
  }

  // Red & White Country Barn
  const barnBody = new THREE.Mesh(new THREE.BoxGeometry(6.5, 3.2, 4.5), mat.barnRed);
  barnBody.position.set(-7.5, 1.6, -9.5);
  barnBody.castShadow = true;
  dGroup.add(barnBody);

  const barnRoof = new THREE.Mesh(new THREE.ConeGeometry(4.2, 1.8, 4), mat.buildingWhite);
  barnRoof.position.set(-7.5, 4.1, -9.5);
  barnRoof.rotation.y = Math.PI / 4;
  barnRoof.castShadow = true;
  dGroup.add(barnRoof);

  // Galvanized Metal Grain Silos
  for (let s = -1.5; s <= 1.5; s += 2.8) {
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 5.2, 14), mat.siloGalvanized);
    silo.position.set(7.5, 2.6, s - 9.5);
    silo.castShadow = true;
    dGroup.add(silo);

    const cap = new THREE.Mesh(new THREE.ConeGeometry(1.3, 0.9, 14), mat.siloGalvanized);
    cap.position.set(7.5, 5.65, s - 9.5);
    dGroup.add(cap);
  }

  // Modern Farm Tractor with Oversized Rear Wheels
  const tractor = new THREE.Group();
  tractor.position.set(-2, 0.4, 9.5);
  tractor.rotation.y = Math.PI / 6;

  const tBody = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.8, 2.2), mat.tractorGreen);
  tBody.position.y = 0.5;
  tBody.castShadow = true;
  tractor.add(tBody);

  const tCab = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.7, 1.1), mat.carGlass);
  tCab.position.set(0, 1.15, -0.3);
  tractor.add(tCab);

  // Large Rear Wheels
  const rearWheelGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.28, 12);
  rearWheelGeo.rotateZ(Math.PI / 2);
  const rw1 = new THREE.Mesh(rearWheelGeo, mat.tractorYellowWheel);
  rw1.position.set(-0.75, 0.5, -0.6);
  tractor.add(rw1);
  const rw2 = new THREE.Mesh(rearWheelGeo, mat.tractorYellowWheel);
  rw2.position.set(0.75, 0.5, -0.6);
  tractor.add(rw2);

  // Smaller Front Wheels
  const frontWheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 10);
  frontWheelGeo.rotateZ(Math.PI / 2);
  const fw1 = new THREE.Mesh(frontWheelGeo, mat.tractorYellowWheel);
  fw1.position.set(-0.7, 0.3, 0.7);
  tractor.add(fw1);
  const fw2 = new THREE.Mesh(frontWheelGeo, mat.tractorYellowWheel);
  fw2.position.set(0.7, 0.3, 0.7);
  tractor.add(fw2);

  dGroup.add(tractor);

  // Center-Pivot Irrigation Truss Spanning Field
  const pivotBoom = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 16, 8), mat.industrialSteel);
  pivotBoom.position.set(0, 1.8, 0);
  pivotBoom.rotation.z = Math.PI / 2;
  dGroup.add(pivotBoom);

  // Irrigation A-Frame Supports
  [-7, 0, 7].forEach((x) => {
    const aFrame = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.8, 3), mat.industrialSteel);
    aFrame.position.set(x, 0.9, 0);
    dGroup.add(aFrame);
  });

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 13. High-Voltage Power Grid & Connected Transmission Pylons
// --------------------------------------------------------------------------
function buildEnergyGridDistrict(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(24, 2.8, -26);
  dGroup.userData = { districtId: "grid" };

  // Substation Gravel Switchyard
  const gravelPad = new THREE.Mesh(new THREE.PlaneGeometry(16, 14), mat.substationGravel);
  gravelPad.rotation.x = -Math.PI / 2;
  gravelPad.position.set(0, 0.02, 0);
  gravelPad.receiveShadow = true;
  dGroup.add(gravelPad);

  // Substation Transformers with Cooling Radiators
  for (let t = -4; t <= 4; t += 4) {
    const transGroup = new THREE.Group();
    transGroup.position.set(t, 0, 0);

    const body = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.2, 2.2), mat.transformerBody);
    body.position.y = 1.1;
    body.castShadow = true;
    transGroup.add(body);

    // Cooling Fins
    const fins = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.6, 0.4), mat.pylonSteel);
    fins.position.set(0, 1.0, 1.2);
    transGroup.add(fins);

    // Porcelain Insulators on Top
    [-0.7, 0, 0.7].forEach((ix) => {
      const ins = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.9, 8), mat.insulatorCeramic);
      ins.position.set(ix, 2.65, 0);
      transGroup.add(ins);
    });

    dGroup.add(transGroup);
  }

  // Solar Photovoltaic Array (Tilted at 25 degrees)
  for (let r = -2; r <= 2; r += 2) {
    for (let c = -4; c <= 4; c += 2.6) {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.08, 1.4), mat.solarPanel);
      panel.position.set(c, 0.6, r - 9.5);
      panel.rotation.x = Math.PI / 7;
      panel.castShadow = true;
      dGroup.add(panel);
    }
  }

  // Wind Turbine Generation Mast
  const wtMast = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.42, 14, 12), mat.buildingWhite);
  wtMast.position.set(8, 7, 6);
  wtMast.castShadow = true;
  dGroup.add(wtMast);

  const wtRotor = new THREE.Group();
  wtRotor.position.set(8, 14, 6.4);

  const hub = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 12), mat.buildingWhite);
  wtRotor.add(hub);

  for (let b = 0; b < 3; b++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.24, 4.4, 0.06), mat.buildingWhite);
    blade.position.y = 2.2;
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
    new THREE.Vector3(6, 0, -4),   // Pylon 1 in Substation
    new THREE.Vector3(-4, 0, 8),   // Pylon 2 Mid-Corridor
    new THREE.Vector3(-12, 0, 18)  // Pylon 3 City Edge
  ];

  function createTransmissionPylon() {
    const pylon = new THREE.Group();

    // Lattice Mast
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.6, 12, 4), mat.pylonSteel);
    mast.position.y = 6;
    mast.castShadow = true;
    pylon.add(mast);

    // Crossarms
    const arm1 = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.2, 0.2), mat.pylonSteel);
    arm1.position.y = 10;
    pylon.add(arm1);

    const arm2 = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.2, 0.2), mat.pylonSteel);
    arm2.position.y = 11.5;
    pylon.add(arm2);

    return pylon;
  }

  pylonPositions.forEach((pos) => {
    const pMesh = createTransmissionPylon();
    pMesh.position.copy(pos);
    dGroup.add(pMesh);
  });

  // Physical 3D High-Voltage Catenary Powerlines connecting Pylons
  for (let i = 0; i < pylonPositions.length - 1; i++) {
    const start = pylonPositions[i];
    const end = pylonPositions[i + 1];

    [-2.2, 0, 2.2].forEach((offset) => {
      const p1 = new THREE.Vector3(start.x + offset, 10, start.z);
      const p3 = new THREE.Vector3(end.x + offset, 10, end.z);
      const mid = new THREE.Vector3(
        (p1.x + p3.x) / 2,
        8.8, // Realistic catenary sag
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
// 14. Autonomous Warehousing & AGV Hub
// --------------------------------------------------------------------------
function buildWarehousingDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(-26, 2.8, 6);
  dGroup.userData = { districtId: "warehousing" };

  // Main Fulfillment Logistics Center
  const wh = new THREE.Mesh(new THREE.BoxGeometry(11, 4.0, 7.5), mat.buildingWarmGray);
  wh.position.set(0, 2.0, 0);
  wh.castShadow = true;
  wh.receiveShadow = true;
  dGroup.add(wh);

  // Loading Dock Bays
  for (let b = -3.6; b <= 3.6; b += 2.0) {
    const bay = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.0, 0.1), mat.buildingDarkSteel);
    bay.position.set(b, 1.0, 3.8);
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

  const cleanroom = new THREE.Mesh(new THREE.BoxGeometry(8.5, 4.5, 6.5), mat.buildingWhite);
  cleanroom.position.set(0, 2.25, 0);
  cleanroom.castShadow = true;
  dGroup.add(cleanroom);

  const t1 = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 4.8, 14), mat.industrialSteel);
  t1.position.set(4.8, 2.4, 0);
  dGroup.add(t1);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 16. Drone Sky Operations & Vertiport
// --------------------------------------------------------------------------
function buildDroneOperations(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(0, 14, 0);
  dGroup.userData = { districtId: "drones" };

  const drone = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.22, 1.1), mat.buildingDarkSteel);
  drone.add(body);

  const payload = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.45), mat.accentCyan);
  payload.position.set(0, -0.32, 0);
  drone.add(payload);

  dGroup.add(drone);
  group.add(dGroup);

  if (animatedItems && animatedItems.drones) {
    animatedItems.drones.push(drone);
  }
}

// --------------------------------------------------------------------------
// 17. Urban Foliage & Landscaping
// --------------------------------------------------------------------------
function buildVegetation(group, mat) {
  const treeGeo = new THREE.ConeGeometry(0.85, 2.1, 6);
  const trunkGeo = new THREE.CylinderGeometry(0.11, 0.16, 0.55, 6);

  const treePositions = [
    [10, 2.8, 4], [12, 2.8, 6], [14, 2.8, 2], [8, 2.8, -6], [12, 2.8, -10],
    [-14, 2.8, 8], [-16, 2.8, 12], [-18, 2.8, 14], [-6, 2.8, 14], [-4, 2.8, 16],
    [-24, 2.8, -4], [-22, 2.8, -6], [-26, 2.8, -12], [20, 2.8, -20], [16, 2.8, -24],
    [16, 2.8, 14], [18, 2.8, 16], [22, 2.8, 18], [24, 2.8, 22]
  ];

  treePositions.forEach(([x, y, z], idx) => {
    const tree = new THREE.Group();
    tree.position.set(x, y, z);

    const trunk = new THREE.Mesh(trunkGeo, mat.treeTrunk);
    trunk.position.y = 0.28;
    tree.add(trunk);

    const foliage = new THREE.Mesh(treeGeo, idx % 2 === 0 ? mat.treeLeaves1 : mat.treeLeaves2);
    foliage.position.y = 1.35;
    foliage.castShadow = true;
    tree.add(foliage);

    group.add(tree);
  });
}
