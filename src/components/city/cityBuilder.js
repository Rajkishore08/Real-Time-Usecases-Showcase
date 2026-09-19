import * as THREE from 'three';

/**
 * High-Fidelity PBR Material Palette for 3D Digital Twin City
 * Tuned for architectural realism, high specular depth, and zero Z-fighting.
 */
export function createCityMaterials() {
  return {
    // Water & Marine
    water: new THREE.MeshStandardMaterial({
      color: 0x0a3b66,
      roughness: 0.15,
      metalness: 0.85,
      transparent: true,
      opacity: 0.92,
      flatShading: false
    }),
    waterCoast: new THREE.MeshStandardMaterial({
      color: 0x147299,
      roughness: 0.2,
      metalness: 0.6,
      transparent: true,
      opacity: 0.8
    }),

    // Terrain & Landscapes
    groundGrass: new THREE.MeshStandardMaterial({
      color: 0x22543d,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: true
    }),
    groundForest: new THREE.MeshStandardMaterial({
      color: 0x1a4731,
      roughness: 0.9,
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

    // Roads & Infrastructure (with polygonOffset to guarantee 0 Z-fighting)
    roadAsphalt: new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.7,
      metalness: 0.2,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    }),
    roadMarking: new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.4,
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
    sidewalk: new THREE.MeshStandardMaterial({
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
    buildingGlassCyan: new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.05,
      metalness: 0.92,
      transparent: true,
      opacity: 0.82
    }),
    buildingGlassAzure: new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      roughness: 0.05,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    }),
    buildingGlassEmerald: new THREE.MeshStandardMaterial({
      color: 0x059669,
      roughness: 0.08,
      metalness: 0.88,
      transparent: true,
      opacity: 0.85
    }),

    // Industrial, Energy & Cargo Materials
    industrialSteel: new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.4,
      metalness: 0.75
    }),
    industrialYellow: new THREE.MeshStandardMaterial({
      color: 0xeab308,
      roughness: 0.45,
      metalness: 0.4
    }),
    containerBlue: new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.5,
      metalness: 0.3
    }),
    containerRed: new THREE.MeshStandardMaterial({
      color: 0xe11d48,
      roughness: 0.5,
      metalness: 0.3
    }),
    containerGreen: new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.5,
      metalness: 0.3
    }),
    containerOrange: new THREE.MeshStandardMaterial({
      color: 0xea580c,
      roughness: 0.5,
      metalness: 0.3
    }),
    solarPanel: new THREE.MeshStandardMaterial({
      color: 0x1e1b4b,
      roughness: 0.1,
      metalness: 0.95
    }),

    // Foliage & Trees
    treeTrunk: new THREE.MeshStandardMaterial({
      color: 0x5c4033,
      roughness: 0.9,
      metalness: 0.05
    }),
    treeLeaves1: new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: true
    }),
    treeLeaves2: new THREE.MeshStandardMaterial({
      color: 0x166534,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: true
    }),
    cropFieldGreen: new THREE.MeshStandardMaterial({
      color: 0x4d7c0f,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: true
    }),
    cropFieldGold: new THREE.MeshStandardMaterial({
      color: 0xca8a04,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: true
    }),

    // Accents & Signals
    accentRed: new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.3,
      metalness: 0.3
    }),
    accentCyan: new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      roughness: 0.2,
      metalness: 0.8
    }),
    lineGlow: new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85
    })
  };
}

/**
 * Builds the comprehensive 3D city scene with all 13 specialized industry districts.
 */
export function buildCityScene(scene, materials) {
  const mat = materials || createCityMaterials();
  const cityGroup = new THREE.Group();
  cityGroup.name = "CityMainGroup";

  // Dynamic animated components list
  const animatedItems = {
    windTurbines: [],
    drones: [],
    conveyors: []
  };

  // 1. Water Plane Base
  const waterGeo = new THREE.PlaneGeometry(240, 240, 1, 1);
  const waterMesh = new THREE.Mesh(waterGeo, mat.water);
  waterMesh.rotation.x = -Math.PI / 2;
  waterMesh.position.y = 0;
  waterMesh.receiveShadow = true;
  cityGroup.add(waterMesh);

  // 2. Terrain & Island Topology
  buildTerrain(cityGroup, mat);

  // 3. Roads, Bridges & Transit Network
  buildRoadsAndBridges(cityGroup, mat);

  // 4. Commercial Real Estate & City Core
  buildCommercialDistrict(cityGroup, mat);

  // 5. Smart Manufacturing & Robotics Hub
  buildManufacturingDistrict(cityGroup, mat);

  // 6. Healthcare & Medical Research Center
  buildHealthcareDistrict(cityGroup, mat);

  // 7. Biotechnology & Research Labs
  buildBiotechDistrict(cityGroup, mat);

  // 8. Smart Maritime Port & Automated Cranes
  buildPortsDistrict(cityGroup, mat);

  // 9. Underground Mining & Quarry
  buildMiningDistrict(cityGroup, mat);

  // 10. Smart Agriculture & Pivot Irrigation
  buildAgricultureDistrict(cityGroup, mat);

  // 11. Energy Grid & Solar / Wind Substation
  buildEnergyGridDistrict(cityGroup, mat, animatedItems);

  // 12. Warehousing & Autonomous Logistics
  buildWarehousingDistrict(cityGroup, mat);

  // 13. Additive 3D Manufacturing Hub
  buildAdditiveDistrict(cityGroup, mat);

  // 14. Autonomous Drone Air Operations
  buildDroneOperations(cityGroup, mat, animatedItems);

  // 15. Urban Greenery & Landscaping
  buildVegetation(cityGroup, mat);

  scene.add(cityGroup);

  // Render animation update callback
  const updateCity = (time) => {
    // 1. Rotate wind turbine blades smoothly
    animatedItems.windTurbines.forEach((rotor) => {
      rotor.rotation.z = time * 2.2;
    });

    // 2. Smooth drone flight path
    animatedItems.drones.forEach((drone) => {
      const radius = 18;
      const speed = 0.4;
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

  // Western Deepwater Port Pier
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

  // Eastern Agricultural Plateau
  const farmPlateau = new THREE.Mesh(new THREE.BoxGeometry(28, 2.8, 30), mat.cropFieldGreen);
  farmPlateau.position.set(30, 1.4, 12);
  farmPlateau.receiveShadow = true;
  group.add(farmPlateau);
}

// --------------------------------------------------------------------------
// 2. Roads, Highways & Bridges
// --------------------------------------------------------------------------
function buildRoadsAndBridges(group, mat) {
  // Main Ring Highway
  const ringRoad = new THREE.Mesh(new THREE.RingGeometry(22, 26, 48), mat.roadAsphalt);
  ringRoad.rotation.x = -Math.PI / 2;
  ringRoad.position.set(0, 2.82, 0);
  ringRoad.receiveShadow = true;
  group.add(ringRoad);

  // North-South Arterial
  const roadNS = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 70), mat.roadAsphalt);
  roadNS.rotation.x = -Math.PI / 2;
  roadNS.position.set(0, 2.83, 0);
  roadNS.receiveShadow = true;
  group.add(roadNS);

  // East-West Arterial
  const roadEW = new THREE.Mesh(new THREE.PlaneGeometry(70, 6.2), mat.roadAsphalt);
  roadEW.rotation.x = -Math.PI / 2;
  roadEW.position.set(0, 2.83, 0);
  roadEW.receiveShadow = true;
  group.add(roadEW);

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
// 3. Commercial Real Estate & Smart City Core
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

  // Tower 4 (Curved/Slanted Innovation Hub)
  const t4 = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 3.2, 12, 16), mat.buildingWhite);
  t4.position.set(4, 6, 4);
  t4.castShadow = true;
  dGroup.add(t4);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 4. Manufacturing & Robotics District
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

  // Robotics Overhead Crane Truss
  const gantryBeam = new THREE.Mesh(new THREE.BoxGeometry(12, 0.4, 0.4), mat.industrialYellow);
  gantryBeam.position.set(0, 7.5, 5.5);
  dGroup.add(gantryBeam);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 5. Healthcare & Medical Technology Campus
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
// 6. Biotechnology & Research Labs
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
// 7. Smart Maritime Port & Automated Terminal
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
// 8. Underground Mining & Quarry
// --------------------------------------------------------------------------
function buildMiningDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(8, 2.8, -32);
  dGroup.userData = { districtId: "mining" };

  // Mine Shaft Headframe / Extraction Tower
  const tower = new THREE.Mesh(new THREE.BoxGeometry(4.5, 11, 4.5), mat.industrialSteel);
  tower.position.set(0, 5.5, 0);
  tower.castShadow = true;
  dGroup.add(tower);

  // Sheave Wheel on top
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
// 9. Smart Agriculture & Farmland
// --------------------------------------------------------------------------
function buildAgricultureDistrict(group, mat) {
  const dGroup = new THREE.Group();
  dGroup.position.set(28, 2.82, 10);
  dGroup.userData = { districtId: "agriculture" };

  // Center-Pivot Irrigation Crop Circles
  const circle1 = new THREE.Mesh(new THREE.CircleGeometry(5.5, 32), mat.cropFieldGreen);
  circle1.rotation.x = -Math.PI / 2;
  circle1.position.set(-4, 0.02, -4);
  circle1.receiveShadow = true;
  dGroup.add(circle1);

  const circle2 = new THREE.Mesh(new THREE.CircleGeometry(4.5, 32), mat.cropFieldGold);
  circle2.rotation.x = -Math.PI / 2;
  circle2.position.set(4, 0.02, 4);
  circle2.receiveShadow = true;
  dGroup.add(circle2);

  // Irrigation Boom
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 5.5, 8), mat.industrialSteel);
  boom.rotation.z = Math.PI / 2;
  boom.position.set(-4, 0.5, -4);
  dGroup.add(boom);

  group.add(dGroup);
}

// --------------------------------------------------------------------------
// 10. Energy Grid & Solar Substation
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
// 11. Autonomous Warehousing & Fleet Dispatch
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
// 12. Additive 3D Manufacturing Hub
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
// 13. Drone Air Operations & Sky Corridor
// --------------------------------------------------------------------------
function buildDroneOperations(group, mat, animatedItems) {
  const dGroup = new THREE.Group();
  dGroup.position.set(0, 12, 0);
  dGroup.userData = { districtId: "drones" };

  // Quadcopter Drone Model
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
// 14. Vegetation & Urban Landscaping
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
