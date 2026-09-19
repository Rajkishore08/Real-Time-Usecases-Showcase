import * as THREE from 'three';

/**
 * Grand High-Fidelity PBR Material Palette for 3D Digital Twin City
 */
export function createCityMaterials() {
  return {
    // Water & River
    water: new THREE.MeshStandardMaterial({
      color: 0x0a3866,
      roughness: 0.1,
      metalness: 0.88,
      transparent: true,
      opacity: 0.92
    }),
    riverWater: new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.12,
      metalness: 0.82,
      transparent: true,
      opacity: 0.9
    }),
    waterfallFoam: new THREE.MeshBasicMaterial({
      color: 0xf0fdf4,
      transparent: true,
      opacity: 0.88
    }),

    // Natural Terrains & Subterranean
    groundGrass: new THREE.MeshStandardMaterial({
      color: 0x1e3a29,
      roughness: 0.88,
      metalness: 0.04,
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
      color: 0x6b4423,
      roughness: 0.92,
      metalness: 0.08,
      flatShading: true
    }),
    groundOre: new THREE.MeshStandardMaterial({
      color: 0x3b2210,
      roughness: 0.85,
      metalness: 0.3,
      flatShading: true
    }),
    farmlandLoam: new THREE.MeshStandardMaterial({
      color: 0x3a2514,
      roughness: 0.95,
      metalness: 0.02,
      flatShading: true
    }),
    cropGreen: new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.7,
      metalness: 0.05
    }),
    cropGold: new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.75,
      metalness: 0.05
    }),
    substationGravel: new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true
    }),

    // Roads, Curbs, Bridges & Rails
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
    concreteCurb: new THREE.MeshStandardMaterial({
      color: 0xcfd8dc,
      roughness: 0.7,
      metalness: 0.1
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

    // Architectural Facades & Glass Curtain Walls
    buildingWhite: new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.32,
      metalness: 0.12
    }),
    buildingWarmGray: new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.38,
      metalness: 0.15
    }),
    buildingDarkSteel: new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.28,
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

    // Walmart Logistics
    walmartBlue: new THREE.MeshStandardMaterial({ color: 0x0071ce, roughness: 0.3, metalness: 0.3 }),
    walmartYellow: new THREE.MeshStandardMaterial({ color: 0xffc220, roughness: 0.25, metalness: 0.4 }),
    trailerWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3, metalness: 0.5 }),

    // Drone Vertiport
    dronePadRing: new THREE.MeshBasicMaterial({ color: 0x00f2fe, side: THREE.DoubleSide }),
    dronePadTarmac: new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6, metalness: 0.2 }),
    droneBodyMat: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.8 }),
    droneRotorMat: new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 }),
    dronePayloadBox: new THREE.MeshStandardMaterial({ color: 0x0071ce, roughness: 0.3, metalness: 0.4 }),

    // Machinery, Energy & Flood Defense
    catYellow: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.35, metalness: 0.6 }),
    heavyTireRubber: new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9, metalness: 0.1 }),
    rustMetal: new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8, metalness: 0.4 }),
    industrialOrange: new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.35, metalness: 0.5 }),
    highVoltagePylonSteel: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3, metalness: 0.85 }),
    ceramicInsulator: new THREE.MeshStandardMaterial({ color: 0x7c2d12, roughness: 0.2, metalness: 0.1 }),
    transformerSteel: new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4, metalness: 0.7 }),
    windTurbineWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25, metalness: 0.2 }),
    floodBarrierMat: new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.3, metalness: 0.7 }),

    // Container Port Materials
    containerRed: new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4, metalness: 0.3 }),
    containerBlue: new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.4, metalness: 0.3 }),
    containerGreen: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.4, metalness: 0.3 }),
    containerOrange: new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4, metalness: 0.3 }),
    craneYellow: new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3, metalness: 0.6 }),
    shipHullDark: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4, metalness: 0.7 }),
    shipHullRed: new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.4, metalness: 0.5 }),

    // Foliage & Street Furniture
    treeTrunk: new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 }),
    treeFoliageA: new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.8, flatShading: true }),
    treeFoliageB: new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8, flatShading: true }),
    treeFoliageC: new THREE.MeshStandardMaterial({ color: 0x4ade80, roughness: 0.8, flatShading: true }),
    streetLampMetal: new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3, metalness: 0.8 }),
    streetLampBulb: new THREE.MeshBasicMaterial({ color: 0xfef08a }),

    // Medical, Fire Rescue & Emergency
    hospitalWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25, metalness: 0.1 }),
    hospitalCrossRed: new THREE.MeshBasicMaterial({ color: 0xef4444 }),
    fireEngineRed: new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.3, metalness: 0.4 }),
    emergencyBlue: new THREE.MeshBasicMaterial({ color: 0x38bdf8 }),
    helipadYellow: new THREE.MeshBasicMaterial({ color: 0xfacc15 }),

    // Humans, Personnel & Robots
    humanSkin: new THREE.MeshStandardMaterial({ color: 0xfbcfe8, roughness: 0.6 }),
    humanSuitDark: new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 }),
    humanVestOrange: new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.3 }),
    humanShirtBlue: new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.4 }),
    humanCoatWhite: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }),
    hardHatYellow: new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3 }),
    hardHatWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 }),
    amrBodyMat: new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.25, metalness: 0.8 }),
    amrWheelMat: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9 }),

    // Glowing Neon & Light Beams
    neonCyan: new THREE.MeshBasicMaterial({ color: 0x00f2fe }),
    neonGold: new THREE.MeshBasicMaterial({ color: 0xf59e0b }),
    neonEmerald: new THREE.MeshBasicMaterial({ color: 0x05ffa1 }),
    neonRose: new THREE.MeshBasicMaterial({ color: 0xf43f5e }),
    tunnelGlow: new THREE.MeshBasicMaterial({ color: 0xffaa44 }),
    lighthouseBeamMat: new THREE.MeshBasicMaterial({ 
      color: 0x38bdf8, 
      transparent: true, 
      opacity: 0.35, 
      side: THREE.DoubleSide, 
      depthWrite: false, 
      blending: THREE.AdditiveBlending 
    }),

    // Smart Aquaculture & Fish Farm Materials
    fishNetMat: new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.7, metalness: 0.3, wireframe: true }),
    fishWaterFoam: new THREE.MeshBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.65 }),
    fishScaleSilver: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.15, metalness: 0.85 }),
    fishFinOrange: new THREE.MeshBasicMaterial({ color: 0xf97316 }),
    buoyOrange: new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.3, metalness: 0.3 }),
    aquacultureWalkway: new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.6 }),

    // Smart Livestock & Pig Farm Materials
    pigSkin: new THREE.MeshStandardMaterial({ color: 0xffb5c2, roughness: 0.5, metalness: 0.05 }),
    pigSnout: new THREE.MeshStandardMaterial({ color: 0xff8ba0, roughness: 0.4 }),
    pigMud: new THREE.MeshStandardMaterial({ color: 0x3d2314, roughness: 0.95 }),
    pigStraw: new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.85 })
  };
}

/**
 * Builds the complete 3D Digital Twin City Scene
 */
export function buildCityScene(scene, mat) {
  const cityRoot = new THREE.Group();
  cityRoot.name = "CityRoot";
  scene.add(cityRoot);

  const interactiveObjects = [];
  const animatedItems = {
    vehicles: [],
    train: null,
    drones: [],
    ships: [],
    patrolBoats: [],
    sheaves: [],
    mineCarts: [],
    crusher: null,
    waterfallStreams: [],
    turbines: [],
    roboticArms: [],
    amrRobots: [],
    pedestrians: [],
    radarDishes: [],
    helicopters: [],
    irrigationArm: null,
    lighthouseBeam: null,
    fishSchools: [],
    fishAerators: [],
    pigs: []
  };

  // 1. Natural Landscape, Mountain Ranges, Cascading Waterfall & River
  buildLandscapeAndRiver(cityRoot, mat, animatedItems);

  // 2. Road Network, Sidewalks, Crosswalks & Streetlamps
  buildRoadNetwork(cityRoot, mat);

  // 3. 13 Specialized High-Fidelity Industry Districts
  buildCommercialDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildManufacturingDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildAdditiveDistrict(cityRoot, mat, interactiveObjects);
  buildDisasterDistrict(cityRoot, mat, animatedItems, interactiveObjects); // Beside Mountain River Waterfall
  buildHealthcareDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildBiotechDistrict(cityRoot, mat, interactiveObjects);
  buildMaritimePortDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildMiningDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildAgricultureDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildPowerGridDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildWalmartLogisticsDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildDroneVertiportDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildRailAndBridgeDistrict(cityRoot, mat, animatedItems, interactiveObjects);

  // 4. Smart Aquaculture: Offshore Sea Cages & Inland RAS Fish Hatchery
  buildAquacultureFishFarm(cityRoot, mat, animatedItems, interactiveObjects);

  // 5. Urban Foliage, Populated Pedestrians & Walking Humans
  buildCityVegetation(cityRoot, mat);
  buildPopulatedHumans(cityRoot, mat, animatedItems);

  // 6. Traffic & Commuter Vehicle Simulation
  buildTrafficSimulation(cityRoot, mat, animatedItems);

  // 6. Real-time Hardware-Accelerated Animation Loop
  const updateCity = (elapsedTime, simSpeed = 1.0) => {
    const effectiveSpeed = simSpeed;
    if (effectiveSpeed === 0) return;

    // A. Road Vehicles Simulation
    if (animatedItems.vehicles) {
      animatedItems.vehicles.forEach(veh => {
        veh.progress = (veh.progress + veh.speed * 0.0018 * effectiveSpeed) % 1.0;
        const pos = veh.curve.getPointAt(veh.progress);
        const tangent = veh.curve.getTangentAt(veh.progress);
        veh.mesh.position.copy(pos);
        veh.mesh.position.y += veh.yOffset || 0.35;
        veh.mesh.rotation.y = Math.atan2(tangent.x, tangent.z);
      });
    }

    // B. Elevated Commuter Train with Realistic Station Dwell
    if (animatedItems.train) {
      const tData = animatedItems.train;
      tData.cycleTime = (tData.cycleTime + 0.0018 * effectiveSpeed) % 1.0;
      const rawPhase = tData.cycleTime * 2.0; // 0 to 2
      const forward = rawPhase < 1.0;
      const t = forward ? rawPhase : 2.0 - rawPhase;
      // Smooth easeInOut curve for station departure and approach
      const u = t * t * (3.0 - 2.0 * t);
      if (tData.curve) {
        const trainPos = tData.curve.getPointAt(u);
        tData.mesh.position.copy(trainPos);
        tData.mesh.rotation.y = forward ? 0 : Math.PI;
      }
    }

    // C. Autonomous Logistics Delivery Drones
    if (animatedItems.drones) {
      animatedItems.drones.forEach(drone => {
        drone.progress = (drone.progress + drone.speed * 0.0015 * effectiveSpeed) % 1.0;
        const pt = drone.curve.getPointAt(drone.progress);
        const tangent = drone.curve.getTangentAt(drone.progress);
        drone.mesh.position.copy(pt);
        drone.mesh.rotation.y = Math.atan2(tangent.x, tangent.z);
        drone.mesh.rotation.z = -tangent.x * 0.12;

        if (drone.rotors) {
          drone.rotors.forEach(r => { r.rotation.y += 0.6 * effectiveSpeed; });
        }
      });
    }

    // D. Cascading Waterfall Shimmer & Plunge Flow
    if (animatedItems.waterfallStreams) {
      animatedItems.waterfallStreams.forEach((stream, idx) => {
        stream.position.y = stream.userData.baseY + Math.sin(elapsedTime * 14.0 + idx) * 0.2;
        stream.scale.y = 1.0 + Math.cos(elapsedTime * 10.0 + idx) * 0.08;
      });
    }

    // E. Maritime Harbor Ships & Patrol Sailing Boats
    if (animatedItems.ships) {
      animatedItems.ships.forEach(ship => {
        ship.position.y = -0.4 + Math.sin(elapsedTime * 1.2 + ship.userData.phase) * 0.08;
        ship.rotation.z = Math.sin(elapsedTime * 0.9 + ship.userData.phase) * 0.012;
      });
    }

    if (animatedItems.patrolBoats) {
      animatedItems.patrolBoats.forEach(boat => {
        boat.progress = (boat.progress + boat.speed * 0.0012 * effectiveSpeed) % 1.0;
        const bPos = boat.curve.getPointAt(boat.progress);
        const bTan = boat.curve.getTangentAt(boat.progress);
        boat.mesh.position.set(bPos.x, -0.4 + Math.sin(elapsedTime * 2.0) * 0.06, bPos.z);
        boat.mesh.rotation.y = Math.atan2(bTan.x, bTan.z) + Math.PI / 2;
      });
    }

    // F. Lighthouse Searchlight Beam (Sweeping Outward across West Sea)
    if (animatedItems.lighthouseBeam) {
      animatedItems.lighthouseBeam.rotation.y = Math.sin(elapsedTime * 0.8 * effectiveSpeed) * 0.75 - Math.PI / 2;
    }

    // G. Active Mining Sheaves & Crusher
    if (animatedItems.sheaves) {
      animatedItems.sheaves.forEach(sheave => { sheave.rotation.x += 0.08 * effectiveSpeed; });
    }
    if (animatedItems.crusher) {
      animatedItems.crusher.position.y = 2.0 + Math.sin(elapsedTime * 12.0) * 0.08;
    }
    if (animatedItems.mineCarts) {
      animatedItems.mineCarts.forEach(cart => {
        cart.progress = (cart.progress + cart.speed * 0.003 * effectiveSpeed) % 1.0;
        const cPt = cart.curve.getPointAt(cart.progress);
        cart.mesh.position.copy(cPt);
        cart.mesh.position.y += 0.3;
      });
    }

    // H. Wind Turbine Propeller Rotors
    if (animatedItems.turbines) {
      animatedItems.turbines.forEach(t => { t.rotation.z += t.userData.spinSpeed * effectiveSpeed; });
    }

    // I. Factory Articulated Robotic Arms
    if (animatedItems.roboticArms) {
      animatedItems.roboticArms.forEach(arm => {
        const t = elapsedTime * 1.8 + arm.userData.phase;
        arm.base.rotation.y = Math.sin(t * 0.8) * 0.6;
        arm.shoulder.rotation.z = Math.sin(t) * 0.35 + 0.2;
        arm.elbow.rotation.z = Math.cos(t * 1.2) * 0.45 - 0.3;
      });
    }

    // J. Walking Pedestrians & Human Animated Movement
    if (animatedItems.pedestrians) {
      animatedItems.pedestrians.forEach(ped => {
        ped.progress = (ped.progress + ped.speed * 0.001 * effectiveSpeed) % 1.0;
        const pt = ped.curve.getPointAt(ped.progress);
        const tan = ped.curve.getTangentAt(ped.progress);
        ped.mesh.position.copy(pt);
        ped.mesh.position.y = 0;
        ped.mesh.rotation.y = Math.atan2(tan.x, tan.z);

        // Animate alternating walking legs
        const walkCycle = Math.sin(elapsedTime * 8.0 * ped.speed);
        if (ped.leftLeg && ped.rightLeg) {
          ped.leftLeg.rotation.x = walkCycle * 0.6;
          ped.rightLeg.rotation.x = -walkCycle * 0.6;
        }
        if (ped.leftArm && ped.rightArm) {
          ped.leftArm.rotation.x = -walkCycle * 0.5;
          ped.rightArm.rotation.x = walkCycle * 0.5;
        }
      });
    }

    // K. Autonomous Mobile Robots (AMRs / AGVs)
    if (animatedItems.amrRobots) {
      animatedItems.amrRobots.forEach(amr => {
        amr.progress = (amr.progress + amr.speed * 0.0025 * effectiveSpeed) % 1.0;
        const aPt = amr.curve.getPointAt(amr.progress);
        const aTan = amr.curve.getTangentAt(amr.progress);
        amr.mesh.position.copy(aPt);
        amr.mesh.position.y += 0.2;
        amr.mesh.rotation.y = Math.atan2(aTan.x, aTan.z);
      });
    }

    // L. Helicopters (Hospital ICU + Disaster Flood SAR)
    if (animatedItems.helicopters) {
      animatedItems.helicopters.forEach(heli => {
        heli.mainRotor.rotation.y += 0.65 * effectiveSpeed;
        heli.tailRotor.rotation.x += 0.65 * effectiveSpeed;
        heli.mesh.position.y = heli.baseY + Math.sin(elapsedTime * 2.2 + heli.phase) * 0.3;
      });
    }

    // M. Center-Pivot Irrigation Boom
    if (animatedItems.irrigationArm) {
      animatedItems.irrigationArm.rotation.y += 0.0035 * effectiveSpeed;
    }

    // N. Satellite Radar Dishes
    if (animatedItems.radarDishes) {
      animatedItems.radarDishes.forEach(dish => { dish.rotation.y += 0.008 * effectiveSpeed; });
    }

    // O. Smart Aquaculture: Swimming Fish Schools & Aeration Bubblers
    if (animatedItems.fishSchools) {
      animatedItems.fishSchools.forEach(school => {
        school.children.forEach(fish => {
          fish.userData.angle += 0.02 * fish.userData.speed * effectiveSpeed;
          const a = fish.userData.angle;
          const r = fish.userData.radius;
          const jump = Math.sin(elapsedTime * 3.2 + fish.userData.phase);
          const yPos = jump > 0.5 ? (jump - 0.5) * 0.9 : -0.2;
          fish.position.set(Math.cos(a) * r, yPos, Math.sin(a) * r);
          fish.rotation.y = a + Math.PI / 2;
          fish.rotation.x = jump > 0.5 ? 0.35 : 0.0;
        });
      });
    }

    if (animatedItems.fishAerators) {
      animatedItems.fishAerators.forEach((aerator, idx) => {
        const s = 1.0 + Math.sin(elapsedTime * 8.0 + idx * 1.5) * 0.12;
        aerator.scale.set(s, s, 1.0);
      });
    }

    // P. Smart Livestock: Pig tail wiggling & curious head snouting
    if (animatedItems.pigs) {
      animatedItems.pigs.forEach((pig, idx) => {
        if (pig.tail) {
          pig.tail.rotation.z = Math.sin(elapsedTime * 8.0 + idx * 2.0) * 0.45;
        }
        if (pig.head) {
          pig.head.rotation.x = Math.sin(elapsedTime * 3.0 + idx * 1.7) * 0.14;
        }
      });
    }
  };

  return {
    cityRoot,
    interactiveObjects,
    animatedItems,
    updateCity
  };
}

/* --------------------------------------------------------------------------
   1. Natural Landscape, Mountain Ranges, Cascading Waterfall & River
   -------------------------------------------------------------------------- */
function buildLandscapeAndRiver(parent, mat, animatedItems) {
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
      mat.treeTrunkWood
    );
    trunk.position.set(0, 0.7, 0);
    treeGroup.add(trunk);

    for (let c = 0; c < 3; c++) {
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(1.6 - c * 0.35, 1.6, 6),
        mat.treeLeaves
      );
      cone.position.set(0, 1.6 + c * 1.0, 0);
      cone.castShadow = true;
      treeGroup.add(cone);
    }
    treeGroup.position.set(tx, 0, tz);
    mountainGroup.add(treeGroup);
  }

  // 4. Natural Cascading Waterfall (Stepped Rocky Cascade at x = -16, z = -78)
  // Stepped rock shelves
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
  chuteData.forEach((ch, idx) => {
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
  // River Path: starts from Waterfall Plunge Pool (-16, -74) -> passes Flood Defense -> flows West to Ocean Bay
  const riverPoints = [
    new THREE.Vector3(-16, 0.05, -74),
    new THREE.Vector3(-16, 0.05, -60),
    new THREE.Vector3(-28, 0.05, -52),
    new THREE.Vector3(-45, 0.05, -50),
    new THREE.Vector3(-65, -0.2, -50),
    new THREE.Vector3(-85, -0.6, -50)
  ];
  const riverCurve = new THREE.CatmullRomCurve3(riverPoints);

  // Extrude River Water Mesh
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

/* --------------------------------------------------------------------------
   2. Road Network, Sidewalks, Lane Dividers & Streetlamps
   -------------------------------------------------------------------------- */
function buildRoadNetwork(parent, mat) {
  const roadGroup = new THREE.Group();
  roadGroup.name = "RoadNetwork";

  // A. Outer Arterial Ring Highway
  const ringRoadGeo = new THREE.RingGeometry(49.5, 58.5, 64);
  const ringRoadMesh = new THREE.Mesh(ringRoadGeo, mat.roadAsphalt);
  ringRoadMesh.rotation.x = -Math.PI / 2;
  ringRoadMesh.position.set(0, 0.08, 0);
  ringRoadMesh.receiveShadow = true;
  roadGroup.add(ringRoadMesh);

  const ringCenterlineGeo = new THREE.RingGeometry(53.85, 54.15, 64);
  const ringCenterlineMesh = new THREE.Mesh(ringCenterlineGeo, mat.roadMarkingWhite);
  ringCenterlineMesh.rotation.x = -Math.PI / 2;
  ringCenterlineMesh.position.set(0, 0.09, 0);
  roadGroup.add(ringCenterlineMesh);

  // B. North-South Central Grand Boulevard
  const nsRoadGeo = new THREE.PlaneGeometry(8.5, 96);
  const nsRoadMesh = new THREE.Mesh(nsRoadGeo, mat.roadAsphalt);
  nsRoadMesh.rotation.x = -Math.PI / 2;
  nsRoadMesh.position.set(0, 0.08, 0);
  nsRoadMesh.receiveShadow = true;
  roadGroup.add(nsRoadMesh);

  const nsDividerGeo = new THREE.PlaneGeometry(0.3, 96);
  const nsDividerMesh = new THREE.Mesh(nsDividerGeo, mat.roadMarkingYellow);
  nsDividerMesh.rotation.x = -Math.PI / 2;
  nsDividerMesh.position.set(0, 0.09, 0);
  roadGroup.add(nsDividerMesh);

  // C. East-West Tech Avenue
  const ewRoadGeo = new THREE.PlaneGeometry(96, 8.5);
  const ewRoadMesh = new THREE.Mesh(ewRoadGeo, mat.roadAsphalt);
  ewRoadMesh.rotation.x = -Math.PI / 2;
  ewRoadMesh.position.set(0, 0.08, 0);
  ewRoadMesh.receiveShadow = true;
  roadGroup.add(ewRoadMesh);

  const ewDividerGeo = new THREE.PlaneGeometry(96, 0.3);
  const ewDividerMesh = new THREE.Mesh(ewDividerGeo, mat.roadMarkingYellow);
  ewDividerMesh.rotation.x = -Math.PI / 2;
  ewDividerMesh.position.set(0, 0.09, 0);
  roadGroup.add(ewDividerMesh);

  // D. Port Connector Parkway
  const portRoadGeo = new THREE.PlaneGeometry(20, 7.5);
  const portRoadMesh = new THREE.Mesh(portRoadGeo, mat.roadAsphalt);
  portRoadMesh.rotation.x = -Math.PI / 2;
  portRoadMesh.position.set(-62, 0.08, 0);
  portRoadMesh.receiveShadow = true;
  roadGroup.add(portRoadMesh);

  // E. Mining Access Quarry Road
  const mineRoadGeo = new THREE.PlaneGeometry(6.5, 28);
  const mineRoadMesh = new THREE.Mesh(mineRoadGeo, mat.roadAsphalt);
  mineRoadMesh.rotation.x = -Math.PI / 2;
  mineRoadMesh.position.set(34, 0.08, -76);
  mineRoadMesh.receiveShadow = true;
  roadGroup.add(mineRoadMesh);

  // F. Urban Concrete Sidewalks & Curbs
  const sidewalkGeo = new THREE.BoxGeometry(22, 0.22, 22);
  const swNW = new THREE.Mesh(sidewalkGeo, mat.concretePlaza);
  swNW.position.set(-16, 0.11, -16);
  swNW.receiveShadow = true;
  roadGroup.add(swNW);

  const swNE = new THREE.Mesh(sidewalkGeo, mat.concretePlaza);
  swNE.position.set(16, 0.11, -16);
  swNE.receiveShadow = true;
  roadGroup.add(swNE);

  const swSW = new THREE.Mesh(sidewalkGeo, mat.concretePlaza);
  swSW.position.set(-16, 0.11, 16);
  swSW.receiveShadow = true;
  roadGroup.add(swSW);

  const swSE = new THREE.Mesh(sidewalkGeo, mat.concretePlaza);
  swSE.position.set(16, 0.11, 16);
  swSE.receiveShadow = true;
  roadGroup.add(swSE);

  // G. Streetlamps along Ring Road
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    const r = 59.5;
    const lx = Math.cos(angle) * r;
    const lz = Math.sin(angle) * r;

    const lampPoleGeo = new THREE.CylinderGeometry(0.12, 0.16, 4.5, 8);
    const lampPole = new THREE.Mesh(lampPoleGeo, mat.streetLampMetal);
    lampPole.position.set(lx, 2.25, lz);
    lampPole.castShadow = true;
    roadGroup.add(lampPole);

    const lampArmGeo = new THREE.BoxGeometry(0.8, 0.1, 0.1);
    const lampArm = new THREE.Mesh(lampArmGeo, mat.streetLampMetal);
    lampArm.position.set(lx - Math.cos(angle) * 0.4, 4.4, lz - Math.sin(angle) * 0.4);
    roadGroup.add(lampArm);

    const bulbGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const bulbMesh = new THREE.Mesh(bulbGeo, mat.streetLampBulb);
    bulbMesh.position.set(lx - Math.cos(angle) * 0.7, 4.3, lz - Math.sin(angle) * 0.7);
    roadGroup.add(bulbMesh);
  }

  parent.add(roadGroup);
}

/* --------------------------------------------------------------------------
   3. Detailed 13 Industry Districts
   -------------------------------------------------------------------------- */

/** District 1: Commercial Real Estate & GCC Tech Center (Center: x = 0, z = 0) */
function buildCommercialDistrict(parent, mat, animatedItems, interactiveObjects) {
  const commGroup = new THREE.Group();
  commGroup.name = "District_Commercial";
  commGroup.userData = { districtId: "commercial" };
  commGroup.position.set(0, 0, 0);

  const tower1BaseGeo = new THREE.BoxGeometry(10, 24, 10);
  const tower1Base = new THREE.Mesh(tower1BaseGeo, mat.buildingDarkSteel);
  tower1Base.position.set(-6, 12, -6);
  tower1Base.castShadow = true;
  tower1Base.receiveShadow = true;
  commGroup.add(tower1Base);

  const tower1GlassGeo = new THREE.BoxGeometry(10.2, 22, 10.2);
  const tower1Glass = new THREE.Mesh(tower1GlassGeo, mat.buildingGlassAzure);
  tower1Glass.position.set(-6, 12, -6);
  commGroup.add(tower1Glass);

  const spireGeo = new THREE.ConeGeometry(2.5, 8, 8);
  const spireMesh = new THREE.Mesh(spireGeo, mat.buildingDarkSteel);
  spireMesh.position.set(-6, 28, -6);
  commGroup.add(spireMesh);

  const antennaGeo = new THREE.CylinderGeometry(0.08, 0.08, 6, 6);
  const antennaMesh = new THREE.Mesh(antennaGeo, mat.buildingDarkSteel);
  antennaMesh.position.set(-6, 35, -6);
  commGroup.add(antennaMesh);

  const beaconGeo = new THREE.SphereGeometry(0.25, 8, 8);
  const beaconMesh = new THREE.Mesh(beaconGeo, mat.neonRose);
  beaconMesh.position.set(-6, 38, -6);
  commGroup.add(beaconMesh);

  const tower2Geo = new THREE.BoxGeometry(12, 18, 9);
  const tower2Mesh = new THREE.Mesh(tower2Geo, mat.buildingWhite);
  tower2Mesh.position.set(7, 9, 6);
  tower2Mesh.castShadow = true;
  tower2Mesh.receiveShadow = true;
  commGroup.add(tower2Mesh);

  const padGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.4, 16);
  const padMesh = new THREE.Mesh(padGeo, mat.concretePlaza);
  padMesh.position.set(7, 18.2, 6);
  commGroup.add(padMesh);

  const padRingGeo = new THREE.RingGeometry(2.4, 2.7, 16);
  const padRing = new THREE.Mesh(padRingGeo, mat.helipadYellow);
  padRing.rotation.x = -Math.PI / 2;
  padRing.position.set(7, 18.42, 6);
  commGroup.add(padRing);

  // Security Patrol AMR Robot on the Commercial Plaza
  const plazaAmrSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(12, 0.2, 12),
    new THREE.Vector3(12, 0.2, -12),
    new THREE.Vector3(-12, 0.2, -12),
    new THREE.Vector3(-12, 0.2, 12)
  ], true);

  const amrMesh = createAmrRobotMesh(mat);
  commGroup.add(amrMesh);
  animatedItems.amrRobots.push({
    mesh: amrMesh,
    curve: plazaAmrSpline,
    progress: 0.0,
    speed: 0.8
  });

  interactiveObjects.push(commGroup);
  parent.add(commGroup);
}

/** District 2: Manufacturing & Robotics Hub (x = -24, z = -26) */
function buildManufacturingDistrict(parent, mat, animatedItems, interactiveObjects) {
  const mfgGroup = new THREE.Group();
  mfgGroup.name = "District_Manufacturing";
  mfgGroup.userData = { districtId: "manufacturing" };
  mfgGroup.position.set(-24, 0, -26);

  const hallGeo = new THREE.BoxGeometry(18, 8, 14);
  const hallMesh = new THREE.Mesh(hallGeo, mat.buildingDarkSteel);
  hallMesh.position.set(0, 4, 0);
  hallMesh.castShadow = true;
  hallMesh.receiveShadow = true;
  mfgGroup.add(hallMesh);

  const skyGeo = new THREE.BoxGeometry(16, 2, 4);
  const skyMesh = new THREE.Mesh(skyGeo, mat.buildingGlassCyan);
  skyMesh.position.set(0, 9, 0);
  mfgGroup.add(skyMesh);

  for (let i = -1; i <= 1; i += 2) {
    const stackGeo = new THREE.CylinderGeometry(0.7, 0.9, 7, 12);
    const stack = new THREE.Mesh(stackGeo, mat.rustMetal);
    stack.position.set(i * 6, 11, -4);
    stack.castShadow = true;
    mfgGroup.add(stack);
  }

  for (let r = 0; r < 2; r++) {
    const armRoot = new THREE.Group();
    armRoot.position.set(-6 + r * 12, 0.5, 8.5);
    armRoot.userData = { phase: r * Math.PI };

    const baseGeo = new THREE.CylinderGeometry(0.8, 1.0, 0.6, 12);
    const baseMesh = new THREE.Mesh(baseGeo, mat.industrialOrange);
    armRoot.add(baseMesh);

    const shoulder = new THREE.Group();
    shoulder.position.set(0, 0.6, 0);
    const shGeo = new THREE.BoxGeometry(0.6, 2.2, 0.6);
    const shMesh = new THREE.Mesh(shGeo, mat.industrialOrange);
    shMesh.position.set(0, 1.1, 0);
    shMesh.castShadow = true;
    shoulder.add(shMesh);
    armRoot.add(shoulder);

    const elbow = new THREE.Group();
    elbow.position.set(0, 2.2, 0);
    const elbGeo = new THREE.BoxGeometry(0.5, 1.8, 0.5);
    const elbMesh = new THREE.Mesh(elbGeo, mat.catYellow);
    elbMesh.position.set(0, 0.9, 0);
    elbow.add(elbMesh);
    shoulder.add(elbow);

    mfgGroup.add(armRoot);
    animatedItems.roboticArms.push({
      mesh: armRoot,
      base: armRoot,
      shoulder: shoulder,
      elbow: elbow,
      userData: armRoot.userData
    });
  }

  interactiveObjects.push(mfgGroup);
  parent.add(mfgGroup);
}

/** District 3: Healthcare & Medical Technology Campus (x = -24, z = 26) */
function buildHealthcareDistrict(parent, mat, animatedItems, interactiveObjects) {
  const medGroup = new THREE.Group();
  medGroup.name = "District_Healthcare";
  medGroup.userData = { districtId: "healthcare" };
  medGroup.position.set(-24, 0, 26);

  const mainWingGeo = new THREE.BoxGeometry(16, 14, 10);
  const mainWing = new THREE.Mesh(mainWingGeo, mat.hospitalWhite);
  mainWing.position.set(0, 7, 0);
  mainWing.castShadow = true;
  mainWing.receiveShadow = true;
  medGroup.add(mainWing);

  const atriumGeo = new THREE.BoxGeometry(10, 10, 12);
  const atrium = new THREE.Mesh(atriumGeo, mat.buildingGlassCyan);
  atrium.position.set(0, 5, 2);
  medGroup.add(atrium);

  const crossHGeo = new THREE.BoxGeometry(3.6, 0.9, 0.2);
  const crossH = new THREE.Mesh(crossHGeo, mat.hospitalCrossRed);
  crossH.position.set(0, 11, 5.15);
  medGroup.add(crossH);

  const crossVGeo = new THREE.BoxGeometry(0.9, 3.6, 0.2);
  const crossV = new THREE.Mesh(crossVGeo, mat.hospitalCrossRed);
  crossV.position.set(0, 11, 5.15);
  medGroup.add(crossV);

  // Rooftop Helipad
  const heliPadGeo = new THREE.CylinderGeometry(4.0, 4.0, 0.4, 20);
  const heliPad = new THREE.Mesh(heliPadGeo, mat.concretePlaza);
  heliPad.position.set(0, 14.2, 0);
  medGroup.add(heliPad);

  // Medical Air Ambulance Helicopter Hovering
  const heliRoot = new THREE.Group();
  heliRoot.position.set(0, 15.5, 0);

  const fuselageGeo = new THREE.BoxGeometry(1.4, 1.2, 3.8);
  const fuselage = new THREE.Mesh(fuselageGeo, mat.hospitalWhite);
  heliRoot.add(fuselage);

  const mainRotorGeo = new THREE.BoxGeometry(5.4, 0.05, 0.35);
  const mainRotor = new THREE.Mesh(mainRotorGeo, mat.buildingDarkSteel);
  mainRotor.position.set(0, 0.8, 0);
  heliRoot.add(mainRotor);

  const tailRotorGeo = new THREE.BoxGeometry(0.05, 1.2, 0.2);
  const tailRotor = new THREE.Mesh(tailRotorGeo, mat.hospitalCrossRed);
  tailRotor.position.set(0.7, 0.2, 2.0);
  heliRoot.add(tailRotor);

  medGroup.add(heliRoot);
  animatedItems.helicopters.push({
    mesh: heliRoot,
    mainRotor: mainRotor,
    tailRotor: tailRotor,
    baseY: 15.5,
    phase: 0.0
  });

  interactiveObjects.push(medGroup);
  parent.add(medGroup);
}

/** District 4: Biotechnology & Biosphere Labs (x = 28, z = -26) */
function buildBiotechDistrict(parent, mat, interactiveObjects) {
  const bioGroup = new THREE.Group();
  bioGroup.name = "District_Biotech";
  bioGroup.userData = { districtId: "biotech" };
  bioGroup.position.set(28, 0, -26);

  const domeGeo = new THREE.SphereGeometry(7.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  const domeMesh = new THREE.Mesh(domeGeo, mat.buildingGlassEmerald);
  domeMesh.position.set(0, 0.1, 0);
  bioGroup.add(domeMesh);

  const helixPoleGeo = new THREE.CylinderGeometry(0.3, 0.3, 10, 8);
  const helixPole = new THREE.Mesh(helixPoleGeo, mat.neonEmerald);
  helixPole.position.set(0, 5, 0);
  bioGroup.add(helixPole);

  for (let i = 0; i < 3; i++) {
    const tankGeo = new THREE.CylinderGeometry(1.6, 1.6, 5.5, 16);
    const tank = new THREE.Mesh(tankGeo, mat.buildingWhite);
    tank.position.set(-6 + i * 6, 2.75, 8.5);
    tank.castShadow = true;
    bioGroup.add(tank);
  }

  interactiveObjects.push(bioGroup);
  parent.add(bioGroup);
}

/** District 5: Smart Ports & Deepwater Maritime Harbor (x = -80, z = -26) */
function buildMaritimePortDistrict(parent, mat, animatedItems, interactiveObjects) {
  const portGroup = new THREE.Group();
  portGroup.name = "District_Ports";
  portGroup.userData = { districtId: "ports" };
  portGroup.position.set(-80, 0, -26);

  // Moored 120m-Scale Cargo Container Ship floating at water level
  const shipRoot = new THREE.Group();
  shipRoot.position.set(-20, -0.4, 0);
  shipRoot.userData = { phase: 0.0 };

  const hullBaseGeo = new THREE.BoxGeometry(10, 3.5, 42);
  const hullBase = new THREE.Mesh(hullBaseGeo, mat.shipHullDark);
  hullBase.castShadow = true;
  shipRoot.add(hullBase);

  const hullBowGeo = new THREE.ConeGeometry(5.0, 7, 4);
  const hullBow = new THREE.Mesh(hullBowGeo, mat.shipHullRed);
  hullBow.rotation.x = Math.PI / 2;
  hullBow.position.set(0, 0, -24.5);
  shipRoot.add(hullBow);

  const containerColors = [mat.containerRed, mat.containerBlue, mat.containerGreen, mat.containerOrange];
  for (let cz = -12; cz <= 12; cz += 4.5) {
    for (let cx = -3; cx <= 3; cx += 3) {
      for (let cy = 0; cy < 3; cy++) {
        const cGeo = new THREE.BoxGeometry(2.4, 2.2, 4.2);
        const cMat = containerColors[Math.abs(Math.floor(cx + cz + cy)) % containerColors.length];
        const cMesh = new THREE.Mesh(cGeo, cMat);
        cMesh.position.set(cx, 2.8 + cy * 2.3, cz);
        cMesh.castShadow = true;
        shipRoot.add(cMesh);
      }
    }
  }

  portGroup.add(shipRoot);
  animatedItems.ships.push(shipRoot);

  // Moving Patrol & Tug Boats sailing across the harbor water
  const boatSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-100, -0.5, -60),
    new THREE.Vector3(-125, -0.5, -10),
    new THREE.Vector3(-115, -0.5, 50),
    new THREE.Vector3(-95, -0.5, 20),
    new THREE.Vector3(-100, -0.5, -60)
  ], true);

  const patrolBoatMesh = new THREE.Group();
  const bHullGeo = new THREE.BoxGeometry(2.4, 1.0, 6.0);
  const bHull = new THREE.Mesh(bHullGeo, mat.trailerWhite);
  patrolBoatMesh.add(bHull);

  const bCabinGeo = new THREE.BoxGeometry(1.8, 1.2, 2.5);
  const bCabin = new THREE.Mesh(bCabinGeo, mat.shipHullDark);
  bCabin.position.set(0, 0.9, -0.5);
  patrolBoatMesh.add(bCabin);

  portGroup.add(patrolBoatMesh);
  animatedItems.patrolBoats.push({
    mesh: patrolBoatMesh,
    curve: boatSpline,
    progress: 0.0,
    speed: 1.0,
    userData: { phase: 0.0 }
  });

  // STS Container Gantry Cranes on Quayside
  for (let k = 0; k < 2; k++) {
    const craneRoot = new THREE.Group();
    craneRoot.position.set(4, 0.8, -10 + k * 20);

    const legGeo = new THREE.BoxGeometry(1.2, 16, 1.2);
    const leg1 = new THREE.Mesh(legGeo, mat.craneYellow);
    leg1.position.set(-2, 8, -4);
    craneRoot.add(leg1);
    const leg2 = new THREE.Mesh(legGeo, mat.craneYellow);
    leg2.position.set(-2, 8, 4);
    craneRoot.add(leg2);

    const boomGeo = new THREE.BoxGeometry(24, 1.5, 2.4);
    const boom = new THREE.Mesh(boomGeo, mat.craneYellow);
    boom.position.set(-6, 16, 0);
    boom.castShadow = true;
    craneRoot.add(boom);

    portGroup.add(craneRoot);
  }

  // Realistic Coastal Lighthouse on Rocky Breakwater
  const lighthouseRoot = new THREE.Group();
  lighthouseRoot.position.set(4, 0.4, -48);

  const lhBaseGeo = new THREE.CylinderGeometry(3.0, 3.8, 3.0, 16);
  const lhBase = new THREE.Mesh(lhBaseGeo, mat.groundRock);
  lhBase.position.set(0, 1.5, 0);
  lhBase.receiveShadow = true;
  lighthouseRoot.add(lhBase);

  const lhTowerGeo = new THREE.CylinderGeometry(1.6, 2.4, 13, 16);
  const lhTower = new THREE.Mesh(lhTowerGeo, mat.buildingWhite);
  lhTower.position.set(0, 9.5, 0);
  lhTower.castShadow = true;
  lighthouseRoot.add(lhTower);

  for (let s = 0; s < 3; s++) {
    const ringGeo = new THREE.CylinderGeometry(1.7 + s * 0.2, 1.8 + s * 0.2, 1.2, 16);
    const ring = new THREE.Mesh(ringGeo, mat.hospitalCrossRed);
    ring.position.set(0, 6 + s * 3.2, 0);
    lighthouseRoot.add(ring);
  }

  const lhLanternGeo = new THREE.CylinderGeometry(1.9, 1.9, 2.2, 16);
  const lhLantern = new THREE.Mesh(lhLanternGeo, mat.buildingGlassCyan);
  lhLantern.position.set(0, 16.5, 0);
  lighthouseRoot.add(lhLantern);

  const lhDomeGeo = new THREE.ConeGeometry(2.1, 1.4, 16);
  const lhDome = new THREE.Mesh(lhDomeGeo, mat.buildingDarkSteel);
  lhDome.position.set(0, 18.3, 0);
  lighthouseRoot.add(lhDome);

  // Rotating Searchlight Lens & Volumetric Light Beam Pointing OUT into West Ocean
  const lanternHead = new THREE.Group();
  lanternHead.position.set(0, 16.5, 0);

  const lensBulbGeo = new THREE.SphereGeometry(0.5, 12, 12);
  const lensBulb = new THREE.Mesh(lensBulbGeo, mat.neonCyan);
  lanternHead.add(lensBulb);

  const beamGeo = new THREE.ConeGeometry(8, 48, 16);
  beamGeo.translate(0, 24, 0);
  const beamMesh = new THREE.Mesh(beamGeo, mat.lighthouseBeamMat);
  beamMesh.rotation.z = Math.PI / 2; // Projects outward toward negative X (sea)
  lanternHead.add(beamMesh);

  lighthouseRoot.add(lanternHead);
  animatedItems.lighthouseBeam = lanternHead;

  portGroup.add(lighthouseRoot);
  interactiveObjects.push(portGroup);
  parent.add(portGroup);
}

/** District 6: Mining & Energy Subsurface Quarry (x = 34, z = -94) */
function buildMiningDistrict(parent, mat, animatedItems, interactiveObjects) {
  const mineGroup = new THREE.Group();
  mineGroup.name = "District_Mining";
  mineGroup.userData = { districtId: "mining" };
  mineGroup.position.set(34, 0, -94);

  // Stepped Excavation Rock Terraces
  for (let t = 0; t < 3; t++) {
    const terraceGeo = new THREE.CylinderGeometry(24 - t * 5, 28 - t * 5, 3.2, 12);
    const terrace = new THREE.Mesh(terraceGeo, mat.groundRock);
    terrace.position.set(0, 1.6 + t * 3.0, 0);
    terrace.receiveShadow = true;
    mineGroup.add(terrace);
  }

  const aditPortalGeo = new THREE.BoxGeometry(7.0, 6.0, 5.0);
  const aditPortal = new THREE.Mesh(aditPortalGeo, mat.rustMetal);
  aditPortal.position.set(0, 3.2, 4);
  mineGroup.add(aditPortal);

  const tunnelHoleGeo = new THREE.BoxGeometry(5.0, 4.2, 5.2);
  const tunnelHole = new THREE.Mesh(tunnelHoleGeo, mat.tunnelGlow);
  tunnelHole.position.set(0, 2.8, 4);
  mineGroup.add(tunnelHole);

  // Headframe Hoist Tower with Dual Spinning Sheaves
  const headframeRoot = new THREE.Group();
  headframeRoot.position.set(8, 0, -6);

  const pylonGeo = new THREE.BoxGeometry(0.8, 18, 0.8);
  for (let px = -1.8; px <= 1.8; px += 3.6) {
    for (let pz = -1.8; pz <= 1.8; pz += 3.6) {
      const leg = new THREE.Mesh(pylonGeo, mat.rustMetal);
      leg.position.set(px, 9, pz);
      leg.castShadow = true;
      headframeRoot.add(leg);
    }
  }

  const sheaveGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.4, 16);
  const sheave1 = new THREE.Mesh(sheaveGeo, mat.catYellow);
  sheave1.rotation.z = Math.PI / 2;
  sheave1.position.set(0, 18.5, 0);
  headframeRoot.add(sheave1);
  animatedItems.sheaves.push(sheave1);

  mineGroup.add(headframeRoot);

  // Active Rock Crusher Plant
  const crusherPlantGeo = new THREE.BoxGeometry(6.5, 4.5, 6.5);
  const crusherPlant = new THREE.Mesh(crusherPlantGeo, mat.rustMetal);
  crusherPlant.position.set(-14, 2.25, 6);
  mineGroup.add(crusherPlant);

  const crusherHopperGeo = new THREE.CylinderGeometry(3.0, 1.8, 2.6, 8);
  const crusherHopper = new THREE.Mesh(crusherHopperGeo, mat.industrialOrange);
  crusherHopper.position.set(-14, 5.2, 6);
  mineGroup.add(crusherHopper);
  animatedItems.crusher = crusherHopper;

  // Automated Mine Rail Cart on Track from Adit to Crusher
  const cartTrackCurve = new THREE.LineCurve3(
    new THREE.Vector3(0, 0.2, 4),
    new THREE.Vector3(-14, 0.2, 6)
  );

  const cartMesh = new THREE.Group();
  const cBodyGeo = new THREE.BoxGeometry(1.6, 1.0, 1.2);
  const cBody = new THREE.Mesh(cBodyGeo, mat.rustMetal);
  cartMesh.add(cBody);

  const cOreGeo = new THREE.BoxGeometry(1.4, 0.6, 1.0);
  const cOre = new THREE.Mesh(cOreGeo, mat.groundOre);
  cOre.position.set(0, 0.5, 0);
  cartMesh.add(cOre);

  mineGroup.add(cartMesh);
  animatedItems.mineCarts.push({
    mesh: cartMesh,
    curve: cartTrackCurve,
    progress: 0.0,
    speed: 1.0
  });

  // Heavy Caterpillar Haul Dump Trucks
  for (let h = 0; h < 2; h++) {
    const truck = new THREE.Group();
    truck.position.set(-6 + h * 18, 0.8, 12 - h * 14);
    truck.rotation.y = h * 1.2;

    const chGeo = new THREE.BoxGeometry(3.6, 1.4, 6.0);
    const chassis = new THREE.Mesh(chGeo, mat.catYellow);
    chassis.position.set(0, 1.2, 0);
    chassis.castShadow = true;
    truck.add(chassis);

    const oreGeo = new THREE.BoxGeometry(3.2, 1.2, 4.2);
    const oreMesh = new THREE.Mesh(oreGeo, mat.groundOre);
    oreMesh.position.set(0, 2.2, -0.4);
    truck.add(oreMesh);

    for (let tx = -1.8; tx <= 1.8; tx += 3.6) {
      for (let tz = -1.8; tz <= 1.8; tz += 3.6) {
        const tireGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.7, 12);
        const tire = new THREE.Mesh(tireGeo, mat.heavyTireRubber);
        tire.rotation.z = Math.PI / 2;
        tire.position.set(tx, 0.9, tz);
        truck.add(tire);
      }
    }

    mineGroup.add(truck);
  }

  // Elevated Ore Conveyor Belt Bridge
  const conveyorGeo = new THREE.BoxGeometry(1.4, 1.0, 22);
  const conveyor = new THREE.Mesh(conveyorGeo, mat.rustMetal);
  conveyor.rotation.x = -0.22;
  conveyor.position.set(4, 9, 4);
  conveyor.castShadow = true;
  mineGroup.add(conveyor);

  interactiveObjects.push(mineGroup);
  parent.add(mineGroup);
}

/** District 7: Smart Agriculture & Precision Farming (x = 88, z = 28) */
function buildAgricultureDistrict(parent, mat, animatedItems, interactiveObjects) {
  const farmGroup = new THREE.Group();
  farmGroup.name = "District_Agriculture";
  farmGroup.userData = { districtId: "agriculture" };
  farmGroup.position.set(88, 0, 28);

  // 1. Terraced Crop Rows (Alternating Emerald Green & Golden Wheat)
  for (let r = -18; r <= 18; r += 3) {
    const rowGeo = new THREE.BoxGeometry(40, 0.35, 1.4);
    const rowMat = r % 6 === 0 ? mat.cropGold : mat.cropGreen;
    const rowMesh = new THREE.Mesh(rowGeo, rowMat);
    rowMesh.position.set(-2, 0.18, r);
    rowMesh.receiveShadow = true;
    farmGroup.add(rowMesh);
  }

  // 2. Traditional Red Farm Barn with Gambrel Roof & Solar Panels
  const barnRoot = new THREE.Group();
  barnRoot.position.set(-14, 0, -16);

  const barnBodyGeo = new THREE.BoxGeometry(10, 5.5, 7.5);
  const barnBody = new THREE.Mesh(barnBodyGeo, mat.fireEngineRed);
  barnBody.position.set(0, 2.75, 0);
  barnBody.castShadow = true;
  barnRoot.add(barnBody);

  const barnRoofGeo = new THREE.ConeGeometry(6.5, 3.2, 4);
  const barnRoof = new THREE.Mesh(barnRoofGeo, mat.buildingWhite);
  barnRoof.rotation.y = Math.PI / 4;
  barnRoof.position.set(0, 6.8, 0);
  barnRoot.add(barnRoof);

  // White Trim Barn Doors
  const doorGeo = new THREE.BoxGeometry(2.8, 3.4, 0.2);
  const door = new THREE.Mesh(doorGeo, mat.buildingWhite);
  door.position.set(0, 1.7, 3.8);
  barnRoot.add(door);

  farmGroup.add(barnRoot);

  // 3. Autonomous GPS-Guided Green Tractor on Field
  const tractor = new THREE.Group();
  tractor.position.set(6, 0, 8);
  tractor.rotation.y = -0.3;

  const trChassisGeo = new THREE.BoxGeometry(2.0, 1.2, 3.2);
  const trChassis = new THREE.Mesh(trChassisGeo, mat.cropGreen);
  trChassis.position.set(0, 0.9, 0);
  trChassis.castShadow = true;
  tractor.add(trChassis);

  const trCabGeo = new THREE.BoxGeometry(1.6, 1.4, 1.6);
  const trCab = new THREE.Mesh(trCabGeo, mat.buildingGlassCyan);
  trCab.position.set(0, 2.0, -0.4);
  tractor.add(trCab);

  const trRoof = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.2, 1.8), mat.catYellow);
  trRoof.position.set(0, 2.75, -0.4);
  tractor.add(trRoof);

  // Big Rear Agricultural Wheels
  for (let wx = -1.15; wx <= 1.15; wx += 2.3) {
    const rearWheelGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.45, 12);
    const rw = new THREE.Mesh(rearWheelGeo, mat.heavyTireRubber);
    rw.rotation.z = Math.PI / 2;
    rw.position.set(wx, 0.85, -0.8);
    tractor.add(rw);
  }

  // Front Wheels
  for (let wx = -0.95; wx <= 0.95; wx += 1.9) {
    const frontWheelGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.35, 12);
    const fw = new THREE.Mesh(frontWheelGeo, mat.heavyTireRubber);
    fw.rotation.z = Math.PI / 2;
    fw.position.set(wx, 0.55, 1.0);
    tractor.add(fw);
  }

  farmGroup.add(tractor);

  // 4. Two Arched Glass Bio-Greenhouse Tunnels
  for (let g = 0; g < 2; g++) {
    const ghGroup = new THREE.Group();
    ghGroup.position.set(16, 0, -10 + g * 14);

    const ghArchGeo = new THREE.CylinderGeometry(3.2, 3.2, 10, 16, 1, false, 0, Math.PI);
    const ghArch = new THREE.Mesh(ghArchGeo, mat.buildingGlassCyan);
    ghArch.rotation.z = -Math.PI / 2;
    ghArch.rotation.y = Math.PI / 2;
    ghArch.position.set(0, 0, 0);
    ghGroup.add(ghArch);

    farmGroup.add(ghGroup);
  }

  // 5. Automated Center-Pivot Irrigation Rig
  const pivotRoot = new THREE.Group();
  pivotRoot.position.set(-2, 0, 0);

  const pivotTowerGeo = new THREE.CylinderGeometry(0.4, 0.8, 4.0, 8);
  const pivotTower = new THREE.Mesh(pivotTowerGeo, mat.buildingWhite);
  pivotTower.position.set(0, 2.0, 0);
  pivotRoot.add(pivotTower);

  const boomArm = new THREE.Group();
  const boomPipeGeo = new THREE.CylinderGeometry(0.15, 0.15, 22, 8);
  const boomPipe = new THREE.Mesh(boomPipeGeo, mat.highVoltagePylonSteel);
  boomPipe.rotation.z = Math.PI / 2;
  boomPipe.position.set(11, 3.8, 0);
  boomArm.add(boomPipe);
  pivotRoot.add(boomArm);

  farmGroup.add(pivotRoot);
  animatedItems.irrigationArm = boomArm;

  // 6. Modern Corrugated Grain Silos (Back Corner on Gravel)
  for (let s = 0; s < 2; s++) {
    const siloGeo = new THREE.CylinderGeometry(2.4, 2.4, 8.5, 16);
    const silo = new THREE.Mesh(siloGeo, mat.highVoltagePylonSteel);
    silo.position.set(2, 4.25, -16 + s * 5.5);
    silo.castShadow = true;
    farmGroup.add(silo);

    const siloCapGeo = new THREE.ConeGeometry(2.5, 1.8, 16);
    const siloCap = new THREE.Mesh(siloCapGeo, mat.buildingWhite);
    siloCap.position.set(2, 9.2, -16 + s * 5.5);
    farmGroup.add(siloCap);
  }

  // 7. LoRaWAN IoT Soil Telemetry Station Mast
  const weatherMastGeo = new THREE.CylinderGeometry(0.1, 0.15, 6.0, 8);
  const weatherMast = new THREE.Mesh(weatherMastGeo, mat.buildingDarkSteel);
  weatherMast.position.set(-16, 3.0, 8);
  farmGroup.add(weatherMast);

  const beaconGeo = new THREE.SphereGeometry(0.2, 8, 8);
  const beacon = new THREE.Mesh(beaconGeo, mat.neonEmerald);
  beacon.position.set(-16, 6.1, 8);
  farmGroup.add(beacon);

  interactiveObjects.push(farmGroup);
  parent.add(farmGroup);
}

/** District 8: Smart Electrical Substation & High-Voltage Grid (x = 68, z = -42) */
function buildPowerGridDistrict(parent, mat, animatedItems, interactiveObjects) {
  const gridGroup = new THREE.Group();
  gridGroup.name = "District_Grid";
  gridGroup.userData = { districtId: "grid" };
  gridGroup.position.set(68, 0, -42);

  // Transmission Pylons
  for (let p = 0; p < 3; p++) {
    const pylon = new THREE.Group();
    pylon.position.set(-14 + p * 14, 0, -8);

    const legGeo = new THREE.CylinderGeometry(0.12, 0.25, 14, 6);
    const leg = new THREE.Mesh(legGeo, mat.highVoltagePylonSteel);
    leg.position.set(0, 7, 0);
    leg.castShadow = true;
    pylon.add(leg);

    const crossArmGeo = new THREE.BoxGeometry(7, 0.3, 0.4);
    const crossArm = new THREE.Mesh(crossArmGeo, mat.highVoltagePylonSteel);
    crossArm.position.set(0, 12, 0);
    pylon.add(crossArm);

    for (let ix = -3; ix <= 3; ix += 3) {
      const insGeo = new THREE.CylinderGeometry(0.15, 0.15, 1.2, 8);
      const ins = new THREE.Mesh(insGeo, mat.ceramicInsulator);
      ins.position.set(ix, 10.8, 0);
      pylon.add(ins);
    }

    gridGroup.add(pylon);
  }

  // Transformers
  for (let tr = 0; tr < 2; tr++) {
    const trans = new THREE.Group();
    trans.position.set(-6 + tr * 12, 0, 8);

    const coreGeo = new THREE.BoxGeometry(4.5, 3.8, 4.0);
    const core = new THREE.Mesh(coreGeo, mat.transformerSteel);
    core.position.set(0, 1.9, 0);
    core.castShadow = true;
    trans.add(core);

    for (let f = -1.6; f <= 1.6; f += 0.8) {
      const finGeo = new THREE.BoxGeometry(0.1, 3.2, 4.2);
      const fin = new THREE.Mesh(finGeo, mat.buildingDarkSteel);
      fin.position.set(f, 1.8, 0);
      trans.add(fin);
    }

    gridGroup.add(trans);
  }

  // Modern Wind Turbines
  for (let w = 0; w < 2; w++) {
    const turbine = new THREE.Group();
    turbine.position.set(12 + w * 12, 0, -18);

    const poleGeo = new THREE.CylinderGeometry(0.4, 0.9, 18, 16);
    const pole = new THREE.Mesh(poleGeo, mat.windTurbineWhite);
    pole.position.set(0, 9, 0);
    pole.castShadow = true;
    turbine.add(pole);

    const nacelleGeo = new THREE.BoxGeometry(1.2, 1.2, 3.2);
    const nacelle = new THREE.Mesh(nacelleGeo, mat.windTurbineWhite);
    nacelle.position.set(0, 18, -0.6);
    nacelle.castShadow = true;
    turbine.add(nacelle);

    const hubRoot = new THREE.Group();
    hubRoot.position.set(0, 18, 1.0);
    hubRoot.userData = { spinSpeed: 0.032 + w * 0.006 };

    const spinnerGeo = new THREE.ConeGeometry(0.6, 1.2, 16);
    spinnerGeo.rotateX(Math.PI / 2);
    const spinner = new THREE.Mesh(spinnerGeo, mat.windTurbineWhite);
    hubRoot.add(spinner);

    for (let b = 0; b < 3; b++) {
      const bladeHolder = new THREE.Group();
      bladeHolder.rotation.z = (b / 3) * Math.PI * 2;

      const bladeGeo = new THREE.BoxGeometry(0.32, 7.8, 0.08);
      bladeGeo.translate(0, 3.9, 0);

      const blade = new THREE.Mesh(bladeGeo, mat.windTurbineWhite);
      blade.castShadow = true;
      bladeHolder.add(blade);

      hubRoot.add(bladeHolder);
    }

    turbine.add(hubRoot);
    gridGroup.add(turbine);
    animatedItems.turbines.push(hubRoot);
  }

  interactiveObjects.push(gridGroup);
  parent.add(gridGroup);
}

/** District 9: Walmart Distribution Center & Logistics Hub (x = -70, z = 8) */
function buildWalmartLogisticsDistrict(parent, mat, animatedItems, interactiveObjects) {
  const dcGroup = new THREE.Group();
  dcGroup.name = "District_Warehousing";
  dcGroup.userData = { districtId: "warehousing" };
  dcGroup.position.set(-70, 0, 8);

  const whGeo = new THREE.BoxGeometry(22, 5.5, 16);
  const whMesh = new THREE.Mesh(whGeo, mat.buildingWarmGray);
  whMesh.position.set(0, 2.75, 0);
  whMesh.castShadow = true;
  whMesh.receiveShadow = true;
  dcGroup.add(whMesh);

  const bandGeo = new THREE.BoxGeometry(22.1, 1.0, 16.1);
  const bandMesh = new THREE.Mesh(bandGeo, mat.walmartBlue);
  bandMesh.position.set(0, 4.8, 0);
  dcGroup.add(bandMesh);

  const sparkGeo = new THREE.BoxGeometry(1.8, 1.8, 0.1);
  const spark = new THREE.Mesh(sparkGeo, mat.walmartYellow);
  spark.position.set(0, 4.8, 8.12);
  dcGroup.add(spark);

  for (let d = 0; d < 3; d++) {
    const trailer = new THREE.Group();
    trailer.position.set(-6 + d * 6, 0.6, 12);

    const tGeo = new THREE.BoxGeometry(2.4, 2.8, 7.5);
    const tMesh = new THREE.Mesh(tGeo, mat.trailerWhite);
    tMesh.position.set(0, 1.4, 0);
    tMesh.castShadow = true;
    trailer.add(tMesh);

    dcGroup.add(trailer);
  }

  const whAmrSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-8, 0.2, 6),
    new THREE.Vector3(-8, 0.2, -6),
    new THREE.Vector3(8, 0.2, -6),
    new THREE.Vector3(8, 0.2, 6)
  ], true);

  const whAmr = createAmrRobotMesh(mat);
  dcGroup.add(whAmr);
  animatedItems.amrRobots.push({
    mesh: whAmr,
    curve: whAmrSpline,
    progress: 0.0,
    speed: 0.9
  });

  interactiveObjects.push(dcGroup);
  parent.add(dcGroup);
}

/** District 10: Autonomous Drone Delivery Station / Vertiport (x = -74, z = 50) */
function buildDroneVertiportDistrict(parent, mat, animatedItems, interactiveObjects) {
  const vertGroup = new THREE.Group();
  vertGroup.name = "District_Drones";
  vertGroup.userData = { districtId: "drones" };
  vertGroup.position.set(-74, 0, 50);

  // 1. Expanded Heavy-Duty Vertiport Apron Tarmac (32m x 28m)
  const padGeo = new THREE.BoxGeometry(32, 0.6, 28);
  const padMesh = new THREE.Mesh(padGeo, mat.dronePadTarmac);
  padMesh.position.set(0, 0.3, 0);
  padMesh.receiveShadow = true;
  vertGroup.add(padMesh);

  // Safety Yellow Border Perimeter
  const borderGeo = new THREE.BoxGeometry(32.4, 0.1, 0.8);
  for (let bz = -14; bz <= 14; bz += 28) {
    const border = new THREE.Mesh(borderGeo, mat.roadMarkingYellow);
    border.position.set(0, 0.62, bz);
    vertGroup.add(border);
  }

  // 2. Four Dedicated Ground Landing / Launch Pads (H1, H2, H3, H4)
  const padPositions = [
    { x: -9, z: -7, name: "PAD-01" },
    { x: 9, z: -7, name: "PAD-02" },
    { x: -9, z: 7, name: "PAD-03" },
    { x: 9, z: 7, name: "PAD-04" }
  ];

  padPositions.forEach((pad, idx) => {
    // Outer Landing Ring
    const ringGeo = new THREE.RingGeometry(3.2, 3.8, 24);
    const ringMesh = new THREE.Mesh(ringGeo, idx % 2 === 0 ? mat.dronePadRing : mat.roadMarkingYellow);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.set(pad.x, 0.62, pad.z);
    vertGroup.add(ringMesh);

    // Center Cross Marking
    const hBar1Geo = new THREE.PlaneGeometry(0.5, 3.2);
    const hBar1 = new THREE.Mesh(hBar1Geo, mat.roadMarkingWhite);
    hBar1.rotation.x = -Math.PI / 2;
    hBar1.position.set(pad.x, 0.63, pad.z);
    vertGroup.add(hBar1);

    const hBar2Geo = new THREE.PlaneGeometry(2.4, 0.5);
    const hBar2 = new THREE.Mesh(hBar2Geo, mat.roadMarkingWhite);
    hBar2.rotation.x = -Math.PI / 2;
    hBar2.position.set(pad.x, 0.63, pad.z);
    vertGroup.add(hBar2);

    // Perimeter Corner Beacon Lights
    for (let bx = -4.2; bx <= 4.2; bx += 8.4) {
      for (let bz = -4.2; bz <= 4.2; bz += 8.4) {
        const beaconGeo = new THREE.CylinderGeometry(0.12, 0.15, 0.3, 8);
        const beacon = new THREE.Mesh(beaconGeo, mat.lightPoleGlow);
        beacon.position.set(pad.x + bx, 0.75, pad.z + bz);
        vertGroup.add(beacon);
      }
    }
  });

  // 3. Grounded / Parked Delivery Drones on Tarmac Pads
  // Pad 1: Parked Drone with Standard Delivery Tote
  const groundDrone1 = createDeliveryDroneMesh(mat, true, mat.walmartBlue);
  groundDrone1.group.position.set(-9, 0.95, -7);
  vertGroup.add(groundDrone1.group);

  // Pad 2: Parked Drone (Emergency Medical Payload)
  const groundDrone2 = createDeliveryDroneMesh(mat, true, mat.fireEngineRed);
  groundDrone2.group.position.set(9, 0.95, -7);
  groundDrone2.group.rotation.y = 0.8;
  vertGroup.add(groundDrone2.group);

  // Pad 3: Parked Drone (Agricultural Sensor Payload)
  const groundDrone3 = createDeliveryDroneMesh(mat, true, mat.cropGreen);
  groundDrone3.group.position.set(-9, 0.95, 7);
  groundDrone3.group.rotation.y = -0.5;
  vertGroup.add(groundDrone3.group);

  // Pad 4: Parked Drone (Industrial Hardware Payload)
  const groundDrone4 = createDeliveryDroneMesh(mat, true, mat.industrialOrange);
  groundDrone4.group.position.set(9, 0.95, 7);
  groundDrone4.group.rotation.y = 1.6;
  vertGroup.add(groundDrone4.group);

  // 4. Vertiport Flight Operations Tower & Telemetry Mast
  const towerBaseGeo = new THREE.BoxGeometry(4.5, 7.0, 4.5);
  const towerBase = new THREE.Mesh(towerBaseGeo, mat.buildingDarkSteel);
  towerBase.position.set(0, 3.5, -10.5);
  towerBase.castShadow = true;
  vertGroup.add(towerBase);

  const cabGeo = new THREE.CylinderGeometry(3.0, 2.6, 2.8, 12);
  const cab = new THREE.Mesh(cabGeo, mat.buildingGlassCyan);
  cab.position.set(0, 8.4, -10.5);
  vertGroup.add(cab);

  const mastGeo = new THREE.CylinderGeometry(0.15, 0.3, 6.0, 8);
  const mast = new THREE.Mesh(mastGeo, mat.buildingDarkSteel);
  mast.position.set(0, 12.8, -10.5);
  vertGroup.add(mast);

  const radarGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.25, 12);
  const radar = new THREE.Mesh(radarGeo, mat.buildingWhite);
  radar.rotation.x = Math.PI / 3;
  radar.position.set(0, 13.5, -10.5);
  vertGroup.add(radar);
  animatedItems.radarDishes.push(radar);

  // 5. Automated Battery Swapping & Parcel Staging Hub
  for (let bx = -4.5; bx <= 4.5; bx += 9.0) {
    const bayGeo = new THREE.BoxGeometry(3.5, 2.4, 2.0);
    const bay = new THREE.Mesh(bayGeo, mat.buildingWhite);
    bay.position.set(bx, 1.5, -10.5);
    vertGroup.add(bay);
  }

  // 6. Active Flying Delivery Drones (All Starting from Vertiport with Citywide Missions)
  
  // Mission 1: Commercial Tech Skyscraper Delivery Drop
  const flightPathCommercial = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-74, 1.2, 50),
    new THREE.Vector3(-55, 18, 30),
    new THREE.Vector3(0, 24, 0),
    new THREE.Vector3(-30, 20, 20),
    new THREE.Vector3(-65, 15, 45),
    new THREE.Vector3(-74, 1.2, 50)
  ]);
  const drone1 = createDeliveryDroneMesh(mat, true, mat.walmartBlue);
  vertGroup.add(drone1.group);
  animatedItems.drones.push({
    mesh: drone1.group,
    curve: flightPathCommercial,
    progress: 0.0,
    speed: 1.1,
    rotors: drone1.rotors
  });

  // Mission 2: Healthcare Medical Center Urgent Specimen Drop
  const flightPathMedical = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-74, 1.2, 50),
    new THREE.Vector3(-55, 14, 40),
    new THREE.Vector3(-24, 19, 26),
    new THREE.Vector3(-50, 15, 45),
    new THREE.Vector3(-74, 1.2, 50)
  ]);
  const drone2 = createDeliveryDroneMesh(mat, true, mat.fireEngineRed);
  vertGroup.add(drone2.group);
  animatedItems.drones.push({
    mesh: drone2.group,
    curve: flightPathMedical,
    progress: 0.35,
    speed: 0.95,
    rotors: drone2.rotors
  });

  // Mission 3: Biotech Research Biosphere Dome Specimen Supply
  const flightPathBiotech = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-74, 1.2, 50),
    new THREE.Vector3(-30, 20, 10),
    new THREE.Vector3(28, 17, -26),
    new THREE.Vector3(0, 21, 15),
    new THREE.Vector3(-74, 1.2, 50)
  ]);
  const drone3 = createDeliveryDroneMesh(mat, true, mat.buildingGlassCyan);
  vertGroup.add(drone3.group);
  animatedItems.drones.push({
    mesh: drone3.group,
    curve: flightPathBiotech,
    progress: 0.65,
    speed: 1.2,
    rotors: drone3.rotors
  });

  // Mission 4: Smart Power Grid Substation Sensor Delivery
  const flightPathGrid = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-74, 1.2, 50),
    new THREE.Vector3(-20, 22, 0),
    new THREE.Vector3(68, 19, -42),
    new THREE.Vector3(30, 20, 10),
    new THREE.Vector3(-74, 1.2, 50)
  ]);
  const drone4 = createDeliveryDroneMesh(mat, true, mat.catYellow);
  vertGroup.add(drone4.group);
  animatedItems.drones.push({
    mesh: drone4.group,
    curve: flightPathGrid,
    progress: 0.18,
    speed: 1.05,
    rotors: drone4.rotors
  });

  // Mission 5: 3D Additive Manufacturing Lab Rapid Prototyping Drop
  const flightPathAdditive = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-74, 1.2, 50),
    new THREE.Vector3(-40, 17, 0),
    new THREE.Vector3(6, 17, -40),
    new THREE.Vector3(-30, 19, 10),
    new THREE.Vector3(-74, 1.2, 50)
  ]);
  const drone5 = createDeliveryDroneMesh(mat, true, mat.industrialOrange);
  vertGroup.add(drone5.group);
  animatedItems.drones.push({
    mesh: drone5.group,
    curve: flightPathAdditive,
    progress: 0.52,
    speed: 0.9,
    rotors: drone5.rotors
  });

  // Mission 6: Deepwater Maritime Port Cargo Gantry Delivery
  const flightPathPort = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-74, 1.2, 50),
    new THREE.Vector3(-80, 14, 15),
    new THREE.Vector3(-80, 16, -26),
    new THREE.Vector3(-76, 13, 10),
    new THREE.Vector3(-74, 1.2, 50)
  ]);
  const drone6 = createDeliveryDroneMesh(mat, true, mat.groundOre);
  vertGroup.add(drone6.group);
  animatedItems.drones.push({
    mesh: drone6.group,
    curve: flightPathPort,
    progress: 0.82,
    speed: 1.15,
    rotors: drone6.rotors
  });

  interactiveObjects.push(vertGroup);
  parent.add(vertGroup);
}

/** District 11: Additive Manufacturing & 3D Lab (x = 6, z = -40) */
function buildAdditiveDistrict(parent, mat, interactiveObjects) {
  const addGroup = new THREE.Group();
  addGroup.name = "District_Additive";
  addGroup.userData = { districtId: "additive" };
  addGroup.position.set(6, 0, -40);

  const labGeo = new THREE.BoxGeometry(14, 7, 12);
  const labMesh = new THREE.Mesh(labGeo, mat.buildingWhite);
  labMesh.position.set(0, 3.5, 0);
  labMesh.castShadow = true;
  labMesh.receiveShadow = true;
  addGroup.add(labMesh);

  const winGeo = new THREE.BoxGeometry(12, 3, 0.2);
  const winMesh = new THREE.Mesh(winGeo, mat.buildingGlassCyan);
  winMesh.position.set(0, 3.5, 6.1);
  addGroup.add(winMesh);

  interactiveObjects.push(addGroup);
  parent.add(addGroup);
}

/** District 12: Smart Rail, Metro & Suspension Bridge (x = -24, z = 0) */
function buildRailAndBridgeDistrict(parent, mat, animatedItems, interactiveObjects) {
  const railGroup = new THREE.Group();
  railGroup.name = "District_Rail";
  railGroup.userData = { districtId: "rail" };
  railGroup.position.set(-24, 0, 0);

  // Concrete Support Piers
  for (let pz = -18; pz <= 18; pz += 9) {
    const pierGeo = new THREE.BoxGeometry(1.8, 5.0, 1.8);
    const pier = new THREE.Mesh(pierGeo, mat.concretePlaza);
    pier.position.set(0, 2.5, pz);
    pier.castShadow = true;
    railGroup.add(pier);
  }

  // Elevated Viaduct Track Deck
  const deckGeo = new THREE.BoxGeometry(4.0, 0.5, 40);
  const deck = new THREE.Mesh(deckGeo, mat.concretePlaza);
  deck.position.set(0, 5.25, 0);
  deck.receiveShadow = true;
  railGroup.add(deck);

  // Steel Rail Lines & Sleepers
  for (let gx = -1.0; gx <= 1.0; gx += 2.0) {
    const railGeo = new THREE.BoxGeometry(0.12, 0.18, 40);
    const rail = new THREE.Mesh(railGeo, mat.railTrackSteel);
    rail.position.set(gx, 5.58, 0);
    railGroup.add(rail);
  }
  for (let sz = -19; sz <= 19; sz += 1.2) {
    const tieGeo = new THREE.BoxGeometry(2.6, 0.08, 0.4);
    const tie = new THREE.Mesh(tieGeo, mat.rustMetal);
    tie.position.set(0, 5.52, sz);
    railGroup.add(tie);
  }

  // Station A (North Metro Terminal)
  const stnAGroup = new THREE.Group();
  stnAGroup.position.set(0, 7.2, -15);
  const stnAGeo = new THREE.BoxGeometry(6.4, 3.8, 8.0);
  const stnA = new THREE.Mesh(stnAGeo, mat.buildingGlassCyan);
  stnAGroup.add(stnA);
  const stnARoof = new THREE.Mesh(new THREE.BoxGeometry(7.0, 0.4, 8.6), mat.buildingWhite);
  stnARoof.position.set(0, 2.0, 0);
  stnAGroup.add(stnARoof);
  railGroup.add(stnAGroup);

  // Station B (South Metro Terminal)
  const stnBGroup = new THREE.Group();
  stnBGroup.position.set(0, 7.2, 15);
  const stnBGeo = new THREE.BoxGeometry(6.4, 3.8, 8.0);
  const stnB = new THREE.Mesh(stnBGeo, mat.buildingGlassAzure);
  stnBGroup.add(stnB);
  const stnBRoof = new THREE.Mesh(new THREE.BoxGeometry(7.0, 0.4, 8.6), mat.buildingWhite);
  stnBRoof.position.set(0, 2.0, 0);
  stnBGroup.add(stnBRoof);
  railGroup.add(stnBGroup);

  // High-Speed Aerodynamic Passenger Metro Train
  const trainRoot = new THREE.Group();

  for (let c = -1; c <= 1; c++) {
    const carGroup = new THREE.Group();
    carGroup.position.set(0, 0, c * 4.8);

    // Car Body
    const carGeo = new THREE.BoxGeometry(1.9, 1.4, 4.4);
    const carMesh = new THREE.Mesh(carGeo, c === 0 ? mat.walmartBlue : mat.buildingWhite);
    carMesh.position.set(0, 0.75, 0);
    carMesh.castShadow = true;
    carGroup.add(carMesh);

    // Glowing Cabin Windows Strip
    const winGeo = new THREE.BoxGeometry(1.96, 0.45, 3.6);
    const winMesh = new THREE.Mesh(winGeo, mat.buildingGlassCyan);
    winMesh.position.set(0, 0.85, 0);
    carGroup.add(winMesh);

    // Aerodynamic Nose Cone on Lead & End Cars
    if (c === -1 || c === 1) {
      const noseGeo = new THREE.ConeGeometry(0.9, 1.2, 4);
      const nose = new THREE.Mesh(noseGeo, mat.walmartBlue);
      nose.rotation.x = c === -1 ? -Math.PI / 2 : Math.PI / 2;
      nose.position.set(0, 0.75, c * 2.6);
      carGroup.add(nose);

      // Headlight / Taillight
      const lightGeo = new THREE.BoxGeometry(0.8, 0.2, 0.1);
      const lightMesh = new THREE.Mesh(lightGeo, c === -1 ? mat.catYellow : mat.fireEngineRed);
      lightMesh.position.set(0, 0.5, c * 2.85);
      carGroup.add(lightMesh);
    }

    // Roof Pantograph on Middle Car
    if (c === 0) {
      const pantoGeo = new THREE.BoxGeometry(0.8, 0.4, 1.2);
      const panto = new THREE.Mesh(pantoGeo, mat.buildingDarkSteel);
      panto.position.set(0, 1.6, 0);
      carGroup.add(panto);
    }

    // Bogie Wheelsets
    for (let bz = -1.4; bz <= 1.4; bz += 2.8) {
      const bogieGeo = new THREE.BoxGeometry(1.7, 0.25, 0.8);
      const bogie = new THREE.Mesh(bogieGeo, mat.buildingDarkSteel);
      bogie.position.set(0, 0.15, bz);
      carGroup.add(bogie);
    }

    trainRoot.add(carGroup);
  }

  // Train Movement Path in LOCAL coordinates of railGroup
  const trainCurve = new THREE.LineCurve3(
    new THREE.Vector3(0, 5.65, -13.5),
    new THREE.Vector3(0, 5.65, 13.5)
  );

  railGroup.add(trainRoot);
  animatedItems.train = {
    mesh: trainRoot,
    curve: trainCurve,
    cycleTime: 0.0
  };

  interactiveObjects.push(railGroup);
  parent.add(railGroup);
}

/** District 13: Disaster Response & Flood Defense Center (x = -16, z = -76 - Beside Mountain River Waterfall) */
function buildDisasterDistrict(parent, mat, animatedItems, interactiveObjects) {
  const disGroup = new THREE.Group();
  disGroup.name = "District_Disaster";
  disGroup.userData = { districtId: "disaster" };
  disGroup.position.set(-16, 0, -76);

  // 1. Concrete Staging Apron & Driveway
  const apronGeo = new THREE.BoxGeometry(28, 0.3, 22);
  const apron = new THREE.Mesh(apronGeo, mat.concretePlaza);
  apron.position.set(2, 0.15, 2);
  apron.receiveShadow = true;
  disGroup.add(apron);

  // 2. Modern 2-Story Emergency Operations Command Building
  const cmdGeo = new THREE.BoxGeometry(13, 5.8, 8.5);
  const cmdMesh = new THREE.Mesh(cmdGeo, mat.buildingWhite);
  cmdMesh.position.set(-4, 2.9, -3.5);
  cmdMesh.castShadow = true;
  cmdMesh.receiveShadow = true;
  disGroup.add(cmdMesh);

  // Panoramic Glass Facade
  const winGeo = new THREE.BoxGeometry(11.5, 2.4, 0.2);
  const winMesh = new THREE.Mesh(winGeo, mat.buildingGlassCyan);
  winMesh.position.set(-4, 3.2, 0.85);
  disGroup.add(winMesh);

  // Emergency Cross / Red Badge on Command Roof
  const badgeGeo = new THREE.BoxGeometry(1.8, 0.3, 1.8);
  const badge = new THREE.Mesh(badgeGeo, mat.fireEngineRed);
  badge.position.set(-4, 5.95, -3.5);
  disGroup.add(badge);

  // 3. Two Detailed Emergency Fire Engines with Chrome Accents & Flashing Sirens
  for (let f = 0; f < 2; f++) {
    const engine = new THREE.Group();
    engine.position.set(-7 + f * 6.5, 0.15, 7.0);

    // Chassis & Red Cab
    const bodyGeo = new THREE.BoxGeometry(2.4, 1.8, 5.6);
    const body = new THREE.Mesh(bodyGeo, mat.fireEngineRed);
    body.position.set(0, 1.0, 0);
    body.castShadow = true;
    engine.add(body);

    // Front Windshield
    const windGeo = new THREE.BoxGeometry(2.2, 0.7, 0.2);
    const wind = new THREE.Mesh(windGeo, mat.buildingGlassCyan);
    wind.position.set(0, 1.3, 2.65);
    engine.add(wind);

    // Top Rescue Ladder
    const ladderGeo = new THREE.BoxGeometry(1.0, 0.15, 4.2);
    const ladder = new THREE.Mesh(ladderGeo, mat.highVoltagePylonSteel);
    ladder.position.set(0, 2.0, -0.4);
    engine.add(ladder);

    // Emergency Flashing Blue/Red Lightbar
    const sirenGeo = new THREE.BoxGeometry(1.2, 0.2, 0.25);
    const siren = new THREE.Mesh(sirenGeo, f === 0 ? mat.emergencyBlue : mat.fireEngineRed);
    siren.position.set(0, 2.05, 1.8);
    engine.add(siren);

    // Black Rubber Tires
    for (let tx = -1.25; tx <= 1.25; tx += 2.5) {
      for (let tz = -1.6; tz <= 1.6; tz += 3.2) {
        const tireGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.3, 12);
        const tire = new THREE.Mesh(tireGeo, mat.heavyTireRubber);
        tire.rotation.z = Math.PI / 2;
        tire.position.set(tx, 0.42, tz);
        engine.add(tire);
      }
    }

    disGroup.add(engine);
  }

  // 4. Dedicated Circular SAR Rescue Helipad (East Apron)
  const sarPadGeo = new THREE.CylinderGeometry(4.2, 4.4, 0.3, 24);
  const sarPad = new THREE.Mesh(sarPadGeo, mat.dronePadTarmac);
  sarPad.position.set(10, 0.3, -2);
  sarPad.receiveShadow = true;
  disGroup.add(sarPad);

  const sarRingGeo = new THREE.RingGeometry(3.0, 3.5, 24);
  const sarRing = new THREE.Mesh(sarRingGeo, mat.helipadYellow);
  sarRing.rotation.x = -Math.PI / 2;
  sarRing.position.set(10, 0.46, -2);
  disGroup.add(sarRing);

  // Search & Rescue (SAR) Helicopter
  const sarHeliRoot = new THREE.Group();
  sarHeliRoot.position.set(10, 2.6, -2);

  const sarFuseGeo = new THREE.BoxGeometry(1.4, 1.2, 3.8);
  const sarFuse = new THREE.Mesh(sarFuseGeo, mat.industrialOrange);
  sarHeliRoot.add(sarFuse);

  const sarCockpitGeo = new THREE.BoxGeometry(1.2, 0.8, 1.2);
  const sarCockpit = new THREE.Mesh(sarCockpitGeo, mat.buildingGlassCyan);
  sarCockpit.position.set(0, 0.2, -1.5);
  sarHeliRoot.add(sarCockpit);

  const sarMainRotorGeo = new THREE.BoxGeometry(5.2, 0.04, 0.35);
  const sarMainRotor = new THREE.Mesh(sarMainRotorGeo, mat.buildingDarkSteel);
  sarMainRotor.position.set(0, 0.75, -0.2);
  sarHeliRoot.add(sarMainRotor);

  const sarTailRotorGeo = new THREE.BoxGeometry(0.04, 1.1, 0.18);
  const sarTailRotor = new THREE.Mesh(sarTailRotorGeo, mat.fireEngineRed);
  sarTailRotor.position.set(0.7, 0.2, 2.0);
  sarHeliRoot.add(sarTailRotor);

  disGroup.add(sarHeliRoot);
  animatedItems.helicopters.push({
    mesh: sarHeliRoot,
    mainRotor: sarMainRotor,
    tailRotor: sarTailRotor,
    baseY: 2.6,
    phase: Math.PI
  });

  // 5. Communications Telemetry Tower with Radar Dish
  const commMastGeo = new THREE.CylinderGeometry(0.12, 0.2, 4.5, 8);
  const commMast = new THREE.Mesh(commMastGeo, mat.buildingDarkSteel);
  commMast.position.set(-8, 7.8, -6);
  disGroup.add(commMast);

  const dishGeo = new THREE.SphereGeometry(1.6, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2.5);
  const dishMesh = new THREE.Mesh(dishGeo, mat.buildingWhite);
  dishMesh.rotation.x = Math.PI / 3;
  dishMesh.position.set(-8, 8.5, -6);
  disGroup.add(dishMesh);
  animatedItems.radarDishes.push(dishMesh);

  interactiveObjects.push(disGroup);
  parent.add(disGroup);
}

/* --------------------------------------------------------------------------
   4. Dense Urban Forests, Woodland Belts & Valley Vegetation System
   -------------------------------------------------------------------------- */
function buildCityVegetation(parent, mat) {
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

/** Builds High-Visibility Humans & Animated Walking Pedestrians */
function buildPopulatedHumans(parent, mat, animatedItems) {
  const peopleGroup = new THREE.Group();
  peopleGroup.name = "PopulatedHumans";

  // A. Dynamic Animated Walking Pedestrians along Sidewalk Splines
  const walkSplineA = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-14, 0.12, -14),
    new THREE.Vector3(-14, 0.12, 14),
    new THREE.Vector3(14, 0.12, 14),
    new THREE.Vector3(14, 0.12, -14)
  ], true);

  const walkSplineB = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-6, 0.12, 20),
    new THREE.Vector3(-22, 0.12, 20),
    new THREE.Vector3(-22, 0.12, 32),
    new THREE.Vector3(-6, 0.12, 32)
  ], true);

  // Create 6 active walking pedestrians
  for (let w = 0; w < 6; w++) {
    const spline = w % 2 === 0 ? walkSplineA : walkSplineB;
    const outfit = w % 3 === 0 ? mat.humanShirtBlue : w % 3 === 1 ? mat.humanSuitDark : mat.humanVestOrange;
    const ped = createAnimatedHumanMesh(mat, outfit);
    peopleGroup.add(ped.mesh);

    animatedItems.pedestrians.push({
      mesh: ped.mesh,
      leftLeg: ped.leftLeg,
      rightLeg: ped.rightLeg,
      leftArm: ped.leftArm,
      rightArm: ped.rightArm,
      curve: spline,
      progress: w / 6,
      speed: 0.85 + (w % 3) * 0.15
    });
  }

  // B. 24 Highly Visible Stationed Personnel across all 13 Districts
  const stationedPeople = [
    // 1. Commercial Tech Center (Executives & Tech Leads in Suits)
    { pos: [-4, 0.15, -2], outfit: mat.humanSuitDark, hat: null, rot: 0.4 },
    { pos: [-2, 0.15, -3], outfit: mat.humanSuitDark, hat: null, rot: -1.2 },
    { pos: [6, 0.15, 2], outfit: mat.humanShirtBlue, hat: null, rot: 2.1 },
    { pos: [8, 0.15, 3], outfit: mat.humanCoatWhite, hat: null, rot: -2.8 },

    // 2. Manufacturing & Robotics Hub (Engineers with Orange Vests & Hard Hats)
    { pos: [-18, 0, -20], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: 1.0 },
    { pos: [-28, 0, -20], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: -0.8 },
    { pos: [-22, 0, -18], outfit: mat.humanShirtBlue, hat: mat.hardHatWhite, rot: 0.0 },

    // 3. Healthcare Campus (Doctors & Surgeons in White Lab Coats & Blue Scrubs)
    { pos: [-18, 0, 24], outfit: mat.humanCoatWhite, hat: null, rot: 0.0 },
    { pos: [-28, 0, 24], outfit: mat.humanCoatWhite, hat: null, rot: 3.14 },
    { pos: [-22, 0, 32], outfit: mat.humanShirtBlue, hat: null, rot: 1.57 },

    // 4. Maritime Port (Dockworkers with Safety Vests & Hard Hats)
    { pos: [-74, 0.3, -16], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: -1.57 },
    { pos: [-74, 0.3, -24], outfit: mat.humanShirtBlue, hat: mat.hardHatYellow, rot: 1.57 },
    { pos: [-74, 0.3, -32], outfit: mat.humanVestOrange, hat: mat.hardHatWhite, rot: 0.0 },

    // 5. Mining Subterranean Quarry (Miners with Safety Vests & Hard Hats)
    { pos: [18, 0.8, -72], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: 0.6 },
    { pos: [28, 0.8, -74], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: -2.0 },
    { pos: [14, 0.8, -70], outfit: mat.humanShirtBlue, hat: mat.hardHatWhite, rot: 1.2 },

    // 6. Agriculture & Precision Farming (Farm Agronomists)
    { pos: [64, 0, 20], outfit: mat.humanShirtBlue, hat: null, rot: 1.2 },
    { pos: [68, 0, 26], outfit: mat.humanVestOrange, hat: null, rot: -0.8 },

    // 7. Walmart Logistics Hub (Warehouse Operators)
    { pos: [-66, 0, 16], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: 0.0 },
    { pos: [-64, 0, 8], outfit: mat.humanShirtBlue, hat: mat.hardHatWhite, rot: -1.57 },

    // 8. Disaster Response & Flood Defense (Firefighters & SAR Responders)
    { pos: [-12, 0, -68], outfit: mat.humanVestOrange, hat: mat.hardHatWhite, rot: 1.8 },
    { pos: [-18, 0, -68], outfit: mat.fireEngineRed, hat: mat.hardHatYellow, rot: -1.2 },
    { pos: [-14, 0, -72], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: 0.0 },

    // 9. Power Grid Substation (High-Voltage Electrical Engineers)
    { pos: [62, 0, -38], outfit: mat.humanVestOrange, hat: mat.hardHatWhite, rot: 0.8 },
    { pos: [72, 0, -36], outfit: mat.humanShirtBlue, hat: mat.hardHatYellow, rot: -1.4 }
  ];

  stationedPeople.forEach(p => {
    const person = createStaticHumanMesh(mat, p.outfit, p.hat);
    person.position.set(p.pos[0], p.pos[1], p.pos[2]);
    person.rotation.y = p.rot;
    peopleGroup.add(person);
  });

  parent.add(peopleGroup);
}

/** Helper: Creates an Animated Humanoid Character Mesh with Limbs */
function createAnimatedHumanMesh(mat, shirtMat) {
  const mesh = new THREE.Group();

  // Head
  const headGeo = new THREE.SphereGeometry(0.28, 8, 8);
  const head = new THREE.Mesh(headGeo, mat.humanSkin);
  head.position.set(0, 1.65, 0);
  mesh.add(head);

  // Hair / Cap
  const hairGeo = new THREE.SphereGeometry(0.29, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
  const hair = new THREE.Mesh(hairGeo, mat.humanSuitDark);
  hair.position.set(0, 1.7, 0);
  mesh.add(hair);

  // Torso / Shirt
  const torsoGeo = new THREE.BoxGeometry(0.55, 0.72, 0.32);
  const torso = new THREE.Mesh(torsoGeo, shirtMat);
  torso.position.set(0, 1.15, 0);
  torso.castShadow = true;
  mesh.add(torso);

  // Left & Right Arms
  const armGeo = new THREE.BoxGeometry(0.16, 0.65, 0.16);
  armGeo.translate(0, -0.3, 0);

  const leftArm = new THREE.Mesh(armGeo, shirtMat);
  leftArm.position.set(-0.35, 1.45, 0);
  mesh.add(leftArm);

  const rightArm = new THREE.Mesh(armGeo, shirtMat);
  rightArm.position.set(0.35, 1.45, 0);
  mesh.add(rightArm);

  // Left & Right Legs
  const legGeo = new THREE.BoxGeometry(0.2, 0.78, 0.2);
  legGeo.translate(0, -0.38, 0);

  const leftLeg = new THREE.Mesh(legGeo, mat.humanSuitDark);
  leftLeg.position.set(-0.14, 0.78, 0);
  leftLeg.castShadow = true;
  mesh.add(leftLeg);

  const rightLeg = new THREE.Mesh(legGeo, mat.humanSuitDark);
  rightLeg.position.set(0.14, 0.78, 0);
  rightLeg.castShadow = true;
  mesh.add(rightLeg);

  return { mesh, leftLeg, rightLeg, leftArm, rightArm };
}

/** Helper: Creates a Static High-Visibility Human Mesh */
function createStaticHumanMesh(mat, outfitMat, hatMat = null) {
  const person = new THREE.Group();

  // Head
  const headGeo = new THREE.SphereGeometry(0.28, 8, 8);
  const head = new THREE.Mesh(headGeo, mat.humanSkin);
  head.position.set(0, 1.65, 0);
  person.add(head);

  // Optional Safety Hard Hat
  if (hatMat) {
    const hatGeo = new THREE.CylinderGeometry(0.34, 0.38, 0.22, 12);
    const hat = new THREE.Mesh(hatGeo, hatMat);
    hat.position.set(0, 1.82, 0);
    person.add(hat);
  } else {
    const hairGeo = new THREE.SphereGeometry(0.29, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
    const hair = new THREE.Mesh(hairGeo, mat.humanSuitDark);
    hair.position.set(0, 1.7, 0);
    person.add(hair);
  }

  // Torso
  const torsoGeo = new THREE.BoxGeometry(0.55, 0.72, 0.32);
  const torso = new THREE.Mesh(torsoGeo, outfitMat);
  torso.position.set(0, 1.15, 0);
  torso.castShadow = true;
  person.add(torso);

  // Legs
  const legsGeo = new THREE.BoxGeometry(0.46, 0.78, 0.26);
  const legs = new THREE.Mesh(legsGeo, mat.humanSuitDark);
  legs.position.set(0, 0.39, 0);
  legs.castShadow = true;
  person.add(legs);

  return person;
}

/** Helper: Creates a Delivery Drone Mesh with 4 Rotors & Landing Gear */
function createDeliveryDroneMesh(mat, hasPayload = true, customPayloadMat = null) {
  const group = new THREE.Group();

  const bodyGeo = new THREE.BoxGeometry(0.95, 0.28, 0.95);
  const body = new THREE.Mesh(bodyGeo, mat.droneBodyMat);
  group.add(body);

  // Carbon Fiber Motor Arms
  for (let ax = -0.45; ax <= 0.45; ax += 0.9) {
    for (let az = -0.45; az <= 0.45; az += 0.9) {
      const armGeo = new THREE.BoxGeometry(0.1, 0.08, 0.5);
      const arm = new THREE.Mesh(armGeo, mat.buildingDarkSteel);
      arm.position.set(ax * 0.6, 0.05, az * 0.6);
      arm.rotation.y = (ax * az > 0) ? Math.PI / 4 : -Math.PI / 4;
      group.add(arm);
    }
  }

  // Landing Gear Struts
  for (let lx = -0.4; lx <= 0.4; lx += 0.8) {
    const strutGeo = new THREE.BoxGeometry(0.08, 0.35, 0.8);
    const strut = new THREE.Mesh(strutGeo, mat.buildingDarkSteel);
    strut.position.set(lx, -0.22, 0);
    group.add(strut);
  }

  if (hasPayload) {
    const payloadGeo = new THREE.BoxGeometry(0.5, 0.42, 0.5);
    const payloadMat = customPayloadMat || mat.dronePayloadBox;
    const payload = new THREE.Mesh(payloadGeo, payloadMat);
    payload.position.set(0, -0.25, 0);
    group.add(payload);
  }

  const rotors = [];
  for (let rx = -0.55; rx <= 0.55; rx += 1.1) {
    for (let rz = -0.55; rz <= 0.55; rz += 1.1) {
      const motorGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.14, 8);
      const motor = new THREE.Mesh(motorGeo, mat.buildingDarkSteel);
      motor.position.set(rx, 0.14, rz);
      group.add(motor);

      const rGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.02, 8);
      const rMesh = new THREE.Mesh(rGeo, mat.droneRotorMat);
      rMesh.position.set(rx, 0.22, rz);
      group.add(rMesh);
      rotors.push(rMesh);
    }
  }

  return { group, rotors };
}

/** Helper: Creates an Autonomous Mobile Robot (AMR / AGV) Mesh */
function createAmrRobotMesh(mat) {
  const amr = new THREE.Group();

  const bodyGeo = new THREE.BoxGeometry(1.2, 0.4, 0.9);
  const body = new THREE.Mesh(bodyGeo, mat.amrBodyMat);
  body.castShadow = true;
  amr.add(body);

  const lidarGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.2, 12);
  const lidar = new THREE.Mesh(lidarGeo, mat.buildingDarkSteel);
  lidar.position.set(0, 0.3, 0);
  amr.add(lidar);

  for (let wx = -0.45; wx <= 0.45; wx += 0.9) {
    for (let wz = -0.4; wz <= 0.4; wz += 0.8) {
      const wheelGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.1, 8);
      const wheel = new THREE.Mesh(wheelGeo, mat.amrWheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(wx, -0.15, wz);
      amr.add(wheel);
    }
  }

  return amr;
}

/* --------------------------------------------------------------------------
   5. Road Traffic Simulation (Sedans, Cyber-trucks, Delivery Vans)
   -------------------------------------------------------------------------- */
function buildTrafficSimulation(parent, mat, animatedItems) {
  const trafficGroup = new THREE.Group();
  trafficGroup.name = "TrafficSimulation";

  const ringPoints = [];
  const segments = 16;
  for (let s = 0; s < segments; s++) {
    const a = (s / segments) * Math.PI * 2;
    ringPoints.push(new THREE.Vector3(Math.cos(a) * 54, 0, Math.sin(a) * 54));
  }
  const highwaySpline = new THREE.CatmullRomCurve3(ringPoints, true);

  const vehicleTypes = [
    { color: 0x00f2fe, scale: [1.6, 0.9, 3.2], speed: 1.0, type: "EV Sedan" },
    { color: 0xf59e0b, scale: [1.8, 1.2, 3.6], speed: 0.85, type: "Cyber SUV" },
    { color: 0xf8fafc, scale: [1.9, 1.5, 4.4], speed: 0.75, type: "Delivery Van" },
    { color: 0xef4444, scale: [1.5, 0.8, 3.0], speed: 1.15, type: "Sport Hatch" },
    { color: 0x10b981, scale: [1.7, 1.0, 3.4], speed: 0.95, type: "Taxi" }
  ];

  for (let v = 0; v < 8; v++) {
    const vSpec = vehicleTypes[v % vehicleTypes.length];
    const vMesh = new THREE.Group();

    const bodyMat = new THREE.MeshStandardMaterial({
      color: vSpec.color,
      roughness: 0.25,
      metalness: 0.6
    });
    const bodyGeo = new THREE.BoxGeometry(vSpec.scale[0], vSpec.scale[1], vSpec.scale[2]);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, vSpec.scale[1] / 2, 0);
    body.castShadow = true;
    vMesh.add(body);

    const hlGeo = new THREE.SphereGeometry(0.12, 6, 6);
    const hlMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const hl1 = new THREE.Mesh(hlGeo, hlMat);
    hl1.position.set(vSpec.scale[0] * 0.35, vSpec.scale[1] * 0.4, -vSpec.scale[2] * 0.5);
    vMesh.add(hl1);
    const hl2 = hl1.clone();
    hl2.position.x = -vSpec.scale[0] * 0.35;
    vMesh.add(hl2);

    const tlMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const tl1 = new THREE.Mesh(hlGeo, tlMat);
    tl1.position.set(vSpec.scale[0] * 0.35, vSpec.scale[1] * 0.4, vSpec.scale[2] * 0.5);
    vMesh.add(tl1);
    const tl2 = tl1.clone();
    tl2.position.x = -vSpec.scale[0] * 0.35;
    vMesh.add(tl2);

    trafficGroup.add(vMesh);
    animatedItems.vehicles.push({
      mesh: vMesh,
      curve: highwaySpline,
      progress: v / 8,
      speed: vSpec.speed,
      yOffset: 0.1
    });
  }

  parent.add(trafficGroup);
}

/* --------------------------------------------------------------------------
   6. Smart Aquaculture: Offshore Marine Sea Cages & Inland Smart Pig Farm
   -------------------------------------------------------------------------- */

/** Helper to construct a detailed, stylized 3D Pig character */
function createPigMesh(mat, scale = 1.0) {
  const pigRoot = new THREE.Group();

  // 1. Plump Rounded Pig Body
  const bodyGeo = new THREE.BoxGeometry(1.5 * scale, 1.0 * scale, 0.95 * scale);
  const body = new THREE.Mesh(bodyGeo, mat.pigSkin);
  body.position.set(0, 0.65 * scale, 0);
  body.castShadow = true;
  pigRoot.add(body);

  // 2. Head Group (Animatable head snouting)
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.75 * scale, 0.85 * scale);

  const headGeo = new THREE.BoxGeometry(0.75 * scale, 0.75 * scale, 0.65 * scale);
  const head = new THREE.Mesh(headGeo, mat.pigSkin);
  head.position.set(0, 0, 0);
  head.castShadow = true;
  headGroup.add(head);

  // Snout Disk
  const snoutGeo = new THREE.BoxGeometry(0.42 * scale, 0.32 * scale, 0.28 * scale);
  const snout = new THREE.Mesh(snoutGeo, mat.pigSnout);
  snout.position.set(0, -0.08 * scale, 0.45 * scale);
  headGroup.add(snout);

  // 2 Nostrils
  for (let nx of [-0.09, 0.09]) {
    const nostril = new THREE.Mesh(
      new THREE.SphereGeometry(0.04 * scale, 4, 4),
      mat.buildingDarkSteel
    );
    nostril.position.set(nx * scale, -0.08 * scale, 0.6 * scale);
    headGroup.add(nostril);
  }

  // 2 Floppy Triangular Ears
  for (let ex of [-0.32, 0.32]) {
    const ear = new THREE.Mesh(
      new THREE.ConeGeometry(0.18 * scale, 0.35 * scale, 3),
      mat.pigSnout
    );
    ear.position.set(ex * scale, 0.42 * scale, 0.05 * scale);
    ear.rotation.z = ex > 0 ? -0.4 : 0.4;
    ear.rotation.x = 0.3;
    headGroup.add(ear);
  }

  // 2 Shiny Eyes
  for (let ey of [-0.28, 0.28]) {
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.045 * scale, 6, 6),
      mat.buildingDarkSteel
    );
    eye.position.set(ey * scale, 0.12 * scale, 0.34 * scale);
    headGroup.add(eye);
  }

  pigRoot.add(headGroup);

  // 3. 4 Short Sturdy Legs with Hooves
  const legOffsets = [
    { x: -0.45, z: -0.45 },
    { x: 0.45, z: -0.45 },
    { x: -0.45, z: 0.45 },
    { x: 0.45, z: 0.45 }
  ];
  legOffsets.forEach(leg => {
    const legGeo = new THREE.CylinderGeometry(0.12 * scale, 0.14 * scale, 0.55 * scale, 8);
    const legMesh = new THREE.Mesh(legGeo, mat.pigSkin);
    legMesh.position.set(leg.x * scale, 0.28 * scale, leg.z * scale);
    legMesh.castShadow = true;
    pigRoot.add(legMesh);

    // Dark Hoof Tip
    const hoofGeo = new THREE.CylinderGeometry(0.13 * scale, 0.14 * scale, 0.12 * scale, 8);
    const hoof = new THREE.Mesh(hoofGeo, mat.buildingDarkSteel);
    hoof.position.set(leg.x * scale, 0.06 * scale, leg.z * scale);
    pigRoot.add(hoof);
  });

  // 4. Curly Pig Tail
  const tailGeo = new THREE.TorusGeometry(0.16 * scale, 0.045 * scale, 6, 12, Math.PI * 1.6);
  const tail = new THREE.Mesh(tailGeo, mat.pigSkin);
  tail.position.set(0, 0.75 * scale, -0.78 * scale);
  tail.rotation.y = Math.PI / 2;
  pigRoot.add(tail);

  return {
    group: pigRoot,
    head: headGroup,
    tail: tail
  };
}

function buildAquacultureFishFarm(parent, mat, animatedItems, interactiveObjects) {
  const aquaGroup = new THREE.Group();
  aquaGroup.name = "SmartAquaculture_FishFarms";

  // =========================================================================
  // 1. Offshore Marine Aquaculture Sea Cages (Bay Water at x = -108, z = 22)
  // =========================================================================
  const marineFarmGroup = new THREE.Group();
  marineFarmGroup.name = "District_FishFarm";
  marineFarmGroup.userData = { districtId: "fishfarm" };
  marineFarmGroup.position.set(-108, 0, 22);

  // Dedicated Deep Ocean Blue Water Inset under the Cages
  const lagoonWaterGeo = new THREE.PlaneGeometry(38, 38);
  const lagoonWater = new THREE.Mesh(lagoonWaterGeo, mat.water);
  lagoonWater.rotation.x = -Math.PI / 2;
  lagoonWater.position.set(0, 0.06, 0);
  lagoonWater.receiveShadow = true;
  marineFarmGroup.add(lagoonWater);

  // 4 Circular Floating Sea Cages
  const cageOffsets = [
    { x: -7.5, z: -7.5, id: "CAGE-01" },
    { x: 7.5, z: -7.5, id: "CAGE-02" },
    { x: -7.5, z: 7.5, id: "CAGE-03" },
    { x: 7.5, z: 7.5, id: "CAGE-04" }
  ];

  cageOffsets.forEach((cage, cIdx) => {
    const cageRoot = new THREE.Group();
    cageRoot.position.set(cage.x, 0, cage.z);

    // Deep Water Surface inside this Cage
    const cageWaterGeo = new THREE.CylinderGeometry(4.7, 4.7, 0.12, 24);
    const cageWater = new THREE.Mesh(cageWaterGeo, mat.riverWater);
    cageWater.position.y = 0.08;
    cageWater.receiveShadow = true;
    cageRoot.add(cageWater);

    // Double Floating Collar Ring (HDPE Pipe)
    const floatRingGeo1 = new THREE.TorusGeometry(4.8, 0.28, 8, 24);
    const floatRing1 = new THREE.Mesh(floatRingGeo1, mat.buildingDarkSteel);
    floatRing1.rotation.x = Math.PI / 2;
    floatRing1.position.y = 0.2;
    cageRoot.add(floatRing1);

    const floatRingGeo2 = new THREE.TorusGeometry(4.2, 0.22, 8, 24);
    const floatRing2 = new THREE.Mesh(floatRingGeo2, mat.walmartBlue);
    floatRing2.rotation.x = Math.PI / 2;
    floatRing2.position.y = 0.2;
    cageRoot.add(floatRing2);

    // Subsurface Netting Enclosure
    const netGeo = new THREE.CylinderGeometry(4.5, 4.2, 3.2, 16, 1, true);
    const netMesh = new THREE.Mesh(netGeo, mat.fishNetMat);
    netMesh.position.y = -1.6;
    cageRoot.add(netMesh);

    // Central Automated Solar Feed Dispenser & Cannon
    const feederPylonGeo = new THREE.CylinderGeometry(0.12, 0.15, 2.2, 8);
    const feederPylon = new THREE.Mesh(feederPylonGeo, mat.buildingDarkSteel);
    feederPylon.position.set(0, 1.1, 0);
    cageRoot.add(feederPylon);

    const feedHopperGeo = new THREE.CylinderGeometry(0.8, 0.4, 0.9, 12);
    const feedHopper = new THREE.Mesh(feedHopperGeo, mat.buoyOrange);
    feedHopper.position.set(0, 2.2, 0);
    cageRoot.add(feedHopper);

    // Solar Panel on Feeder
    const solarGeo = new THREE.BoxGeometry(0.9, 0.05, 0.9);
    const solar = new THREE.Mesh(solarGeo, mat.buildingGlassCyan);
    solar.position.set(0, 2.7, 0);
    solar.rotation.x = 0.3;
    cageRoot.add(solar);

    // Aeration Bubbler Foam Ring
    const aeratorGeo = new THREE.RingGeometry(1.8, 3.2, 16);
    const aerator = new THREE.Mesh(aeratorGeo, mat.fishWaterFoam);
    aerator.rotation.x = -Math.PI / 2;
    aerator.position.set(0, 0.12, 0);
    cageRoot.add(aerator);
    animatedItems.fishAerators.push(aerator);

    // Animated Schooling Fish jumping/swimming inside the cage
    const schoolGroup = new THREE.Group();
    for (let f = 0; f < 4; f++) {
      const fish = new THREE.Group();
      // Fish Body
      const fBodyGeo = new THREE.ConeGeometry(0.16, 0.7, 6);
      const fBody = new THREE.Mesh(fBodyGeo, mat.fishScaleSilver);
      fBody.rotation.x = Math.PI / 2;
      fish.add(fBody);

      // Tail Fin
      const fTailGeo = new THREE.BoxGeometry(0.04, 0.28, 0.22);
      const fTail = new THREE.Mesh(fTailGeo, mat.fishFinOrange);
      fTail.position.set(0, 0, -0.42);
      fish.add(fTail);

      const angle = (f / 4) * Math.PI * 2;
      const radius = 2.4 + Math.sin(f * 2.0) * 0.8;
      fish.position.set(Math.cos(angle) * radius, -0.2, Math.sin(angle) * radius);
      fish.rotation.y = angle + Math.PI / 2;
      fish.userData = { angle, radius, speed: 1.2 + (cIdx + f) * 0.2, phase: f + cIdx };
      schoolGroup.add(fish);
    }
    cageRoot.add(schoolGroup);
    animatedItems.fishSchools.push(schoolGroup);

    marineFarmGroup.add(cageRoot);
  });

  // Interconnecting Catwalk Pontoons
  const catwalkXGeo = new THREE.BoxGeometry(22, 0.2, 1.2);
  const catwalkX = new THREE.Mesh(catwalkXGeo, mat.aquacultureWalkway);
  catwalkX.position.set(0, 0.2, 0);
  marineFarmGroup.add(catwalkX);

  const catwalkZGeo = new THREE.BoxGeometry(1.2, 0.2, 22);
  const catwalkZ = new THREE.Mesh(catwalkZGeo, mat.aquacultureWalkway);
  catwalkZ.position.set(0, 0.2, 0);
  marineFarmGroup.add(catwalkZ);

  // Moored Aquaculture Service & Feed Supply Catamaran Vessel
  const aquaBoat = new THREE.Group();
  aquaBoat.position.set(16, 0, 0);

  // Twin Hulls
  for (let h = -1.6; h <= 1.6; h += 3.2) {
    const hullGeo = new THREE.BoxGeometry(1.2, 0.9, 10);
    const hull = new THREE.Mesh(hullGeo, mat.buildingDarkSteel);
    hull.position.set(h, 0.45, 0);
    aquaBoat.add(hull);
  }
  // Deck
  const deckGeo = new THREE.BoxGeometry(4.4, 0.3, 8.5);
  const deck = new THREE.Mesh(deckGeo, mat.trailerWhite);
  deck.position.set(0, 0.95, -0.4);
  aquaBoat.add(deck);

  // Wheelhouse Cabin
  const whGeo = new THREE.BoxGeometry(3.2, 1.8, 2.8);
  const wh = new THREE.Mesh(whGeo, mat.walmartBlue);
  wh.position.set(0, 2.0, -2.4);
  aquaBoat.add(wh);

  const whWin = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.8, 2.0), mat.buildingGlassCyan);
  whWin.position.set(0, 2.2, -2.4);
  aquaBoat.add(whWin);

  // Feed Crane Arm
  const craneArm = new THREE.Mesh(new THREE.BoxGeometry(0.3, 3.5, 0.3), mat.catYellow);
  craneArm.position.set(1.2, 2.4, 1.5);
  craneArm.rotation.z = -0.4;
  aquaBoat.add(craneArm);

  marineFarmGroup.add(aquaBoat);

  // Solar Water Quality Telemetry Buoy (DO, Salinity, Temperature)
  const buoyGeo = new THREE.CylinderGeometry(1.0, 1.4, 1.2, 12);
  const buoy = new THREE.Mesh(buoyGeo, mat.buoyOrange);
  buoy.position.set(-18, 0.6, -16);
  marineFarmGroup.add(buoy);

  const buoyMast = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 2.2, 8), mat.buildingDarkSteel);
  buoyMast.position.set(-18, 2.0, -16);
  marineFarmGroup.add(buoyMast);

  const buoyBeacon = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), mat.neonEmerald);
  buoyBeacon.position.set(-18, 3.1, -16);
  marineFarmGroup.add(buoyBeacon);

  interactiveObjects.push(marineFarmGroup);
  aquaGroup.add(marineFarmGroup);

  // =========================================================================
  // 2. Inland Livestock Breeding & Smart Pig Farm (Far Southern Pasture x = 45, z = 85)
  // =========================================================================
  const inlandFarmGroup = new THREE.Group();
  inlandFarmGroup.name = "District_PigFarm";
  inlandFarmGroup.userData = { districtId: "pigfarm" };
  inlandFarmGroup.position.set(45, 0, 85);

  // Concrete & Gravel Farmstead Apron
  const farmPadGeo = new THREE.BoxGeometry(28, 0.3, 24);
  const farmPad = new THREE.Mesh(farmPadGeo, mat.concretePlaza);
  farmPad.position.set(0, 0.15, 0);
  farmPad.receiveShadow = true;
  inlandFarmGroup.add(farmPad);

  // Mud Wallower Pen Ground Inset (East Pen)
  const mudPenGeo = new THREE.PlaneGeometry(12, 10);
  const mudPen = new THREE.Mesh(mudPenGeo, mat.pigMud);
  mudPen.rotation.x = -Math.PI / 2;
  mudPen.position.set(4.5, 0.31, 2.0);
  mudPen.receiveShadow = true;
  inlandFarmGroup.add(mudPen);

  // Golden Straw Bedding Ground Inset (West Pen)
  const strawPenGeo = new THREE.PlaneGeometry(10, 8);
  const strawPen = new THREE.Mesh(strawPenGeo, mat.pigStraw);
  strawPen.rotation.x = -Math.PI / 2;
  strawPen.position.set(-5.5, 0.31, 2.0);
  strawPen.receiveShadow = true;
  inlandFarmGroup.add(strawPen);

  // Timber Perimeter Ranch Fence
  const fenceMat = mat.treeTrunkWood || mat.treeTrunk;
  const fencePosts = [
    [-13.8, -11.8], [13.8, -11.8], [-13.8, 11.8], [13.8, 11.8],
    [0, -11.8], [0, 11.8], [-13.8, 0], [13.8, 0], [0, 0]
  ];
  fencePosts.forEach(([px, pz]) => {
    const postGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.4, 6);
    const post = new THREE.Mesh(postGeo, fenceMat);
    post.position.set(px, 0.7, pz);
    post.castShadow = true;
    inlandFarmGroup.add(post);
  });

  // Top Fence Rails
  const northRail = new THREE.Mesh(new THREE.BoxGeometry(27.6, 0.1, 0.1), fenceMat);
  northRail.position.set(0, 1.1, -11.8);
  inlandFarmGroup.add(northRail);

  const southRail = new THREE.Mesh(new THREE.BoxGeometry(27.6, 0.1, 0.1), fenceMat);
  southRail.position.set(0, 1.1, 11.8);
  inlandFarmGroup.add(southRail);

  const midFence = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 14), fenceMat);
  midFence.position.set(0, 1.1, 3.0);
  inlandFarmGroup.add(midFence);

  // Wooden Feed Trough
  const troughGeo = new THREE.BoxGeometry(4.2, 0.5, 1.0);
  const trough = new THREE.Mesh(troughGeo, fenceMat);
  trough.position.set(0, 0.4, -2.5);
  trough.castShadow = true;
  inlandFarmGroup.add(trough);

  const cornFeed = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.1, 0.7), mat.cropGold);
  cornFeed.position.set(0, 0.6, -2.5);
  inlandFarmGroup.add(cornFeed);

  // 3D Modeled Animated Pigs
  const pigsData = [
    { scale: 1.15, pos: [0, 0.3, -1.2], rotY: 0 },         // Mother Sow at feed trough
    { scale: 1.10, pos: [5.0, 0.3, 3.0], rotY: 1.6 },      // Boar roaming mud pen
    { scale: 0.95, pos: [-5.0, 0.3, 2.5], rotY: -1.2 },    // Foraging pig on straw
    { scale: 0.55, pos: [2.5, 0.3, 1.2], rotY: 0.7 },      // Piglet in mud
    { scale: 0.50, pos: [-6.5, 0.3, 4.5], rotY: 2.2 }      // Resting piglet
  ];

  pigsData.forEach((pd, pIdx) => {
    const pig = createPigMesh(mat, pd.scale);
    pig.group.position.set(pd.pos[0], pd.pos[1], pd.pos[2]);
    pig.group.rotation.y = pd.rotY;
    inlandFarmGroup.add(pig.group);
    animatedItems.pigs.push(pig);
  });

  // Livestock Feeding Barn Shelter & Filtration Shed
  const shedGeo = new THREE.BoxGeometry(10, 4.5, 6.0);
  const shed = new THREE.Mesh(shedGeo, mat.buildingDarkSteel);
  shed.position.set(0, 2.25, -8.5);
  shed.castShadow = true;
  inlandFarmGroup.add(shed);

  // Shaded Shelter Overhang
  const overhangGeo = new THREE.BoxGeometry(10.4, 0.2, 3.5);
  const overhang = new THREE.Mesh(overhangGeo, mat.fireEngineRed);
  overhang.position.set(0, 4.5, -5.8);
  overhang.rotation.x = 0.15;
  inlandFarmGroup.add(overhang);

  // Silo & Automated Feed Hopper
  const siloGeo = new THREE.CylinderGeometry(1.6, 1.6, 5.8, 16);
  const silo = new THREE.Mesh(siloGeo, mat.highVoltagePylonSteel);
  silo.position.set(-8.0, 2.9, -8.5);
  silo.castShadow = true;
  inlandFarmGroup.add(silo);

  // Stationed Farm Specialist & Agronomist
  const aquaTech = createStaticHumanMesh(mat, mat.humanCoatWhite, null);
  aquaTech.position.set(7.5, 0.3, -4.5);
  aquaTech.rotation.y = -Math.PI / 4;
  inlandFarmGroup.add(aquaTech);

  interactiveObjects.push(inlandFarmGroup);
  aquaGroup.add(inlandFarmGroup);

  parent.add(aquaGroup);
}
