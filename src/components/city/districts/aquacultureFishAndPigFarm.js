import * as THREE from 'three';
import { createStaticHumanMesh } from '../simulation/populatedHumans.js';

/** Helper to create a stylized high-detail 3D Pig character matching Image 1 */
export function createPigMesh(mat, scale = 1.0) {
  const pigRoot = new THREE.Group();

  // 1. Plump Rounded Pig Body
  const bodyGeo = new THREE.CapsuleGeometry(0.58 * scale, 0.85 * scale, 8, 16);
  const body = new THREE.Mesh(bodyGeo, mat.pigSkin);
  body.rotation.x = Math.PI / 2;
  body.position.set(0, 0.72 * scale, 0);
  body.castShadow = true;
  pigRoot.add(body);

  // 2. Head Group (Animatable head)
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.8 * scale, 0.72 * scale);

  // Rounded Head
  const headGeo = new THREE.SphereGeometry(0.48 * scale, 12, 12);
  const head = new THREE.Mesh(headGeo, mat.pigSkin);
  head.castShadow = true;
  headGroup.add(head);

  // Cute Oval Snout Disk
  const snoutGeo = new THREE.CylinderGeometry(0.24 * scale, 0.25 * scale, 0.16 * scale, 16);
  const snout = new THREE.Mesh(snoutGeo, mat.pigSnout);
  snout.rotation.x = Math.PI / 2;
  snout.position.set(0, -0.06 * scale, 0.44 * scale);
  headGroup.add(snout);

  // 2 Nostril Cavities
  for (const nx of [-0.08, 0.08]) {
    const nostril = new THREE.Mesh(
      new THREE.SphereGeometry(0.045 * scale, 6, 6),
      mat.pigEyeDark
    );
    nostril.position.set(nx * scale, -0.06 * scale, 0.52 * scale);
    headGroup.add(nostril);
  }

  // 2 Floppy Pointed Ears
  for (const ex of [-0.34, 0.34]) {
    const ear = new THREE.Mesh(
      new THREE.ConeGeometry(0.18 * scale, 0.38 * scale, 4),
      mat.pigSnout
    );
    ear.position.set(ex * scale, 0.36 * scale, 0.08 * scale);
    ear.rotation.z = ex > 0 ? -0.55 : 0.55;
    ear.rotation.x = -0.25;
    headGroup.add(ear);
  }

  // 2 Shiny Eyes with Specular Dots
  for (const ey of [-0.22, 0.22]) {
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.06 * scale, 8, 8),
      mat.pigEyeDark
    );
    eye.position.set(ey * scale, 0.14 * scale, 0.34 * scale);
    headGroup.add(eye);

    const pupilDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.02 * scale, 4, 4),
      mat.pigEyePupilWhite
    );
    pupilDot.position.set((ey > 0 ? ey + 0.015 : ey - 0.015) * scale, 0.16 * scale, 0.39 * scale);
    headGroup.add(pupilDot);
  }

  pigRoot.add(headGroup);

  // 3. 4 Short Sturdy Legs with Cloven Hooves
  const legOffsets = [
    { x: -0.36, z: -0.38 },
    { x: 0.36, z: -0.38 },
    { x: -0.36, z: 0.38 },
    { x: 0.36, z: 0.38 }
  ];
  legOffsets.forEach(leg => {
    const legGeo = new THREE.CylinderGeometry(0.12 * scale, 0.13 * scale, 0.52 * scale, 8);
    const legMesh = new THREE.Mesh(legGeo, mat.pigSkin);
    legMesh.position.set(leg.x * scale, 0.26 * scale, leg.z * scale);
    legMesh.castShadow = true;
    pigRoot.add(legMesh);

    // Dark Hoof
    const hoofGeo = new THREE.CylinderGeometry(0.13 * scale, 0.14 * scale, 0.12 * scale, 8);
    const hoof = new THREE.Mesh(hoofGeo, mat.pigEyeDark);
    hoof.position.set(leg.x * scale, 0.06 * scale, leg.z * scale);
    pigRoot.add(hoof);
  });

  // 4. Curly Corkscrew Tail
  const tailGeo = new THREE.TorusGeometry(0.14 * scale, 0.04 * scale, 6, 16, Math.PI * 1.8);
  const tail = new THREE.Mesh(tailGeo, mat.pigSkin);
  tail.position.set(0, 0.78 * scale, -0.72 * scale);
  tail.rotation.y = Math.PI / 2;
  pigRoot.add(tail);

  return {
    group: pigRoot,
    head: headGroup,
    tail: tail
  };
}

/**
 * Smart Aquaculture (Fish Farm) & Smart Swine Facility (Pig Farm)
 */
export function buildAquacultureFishFarm(parent, mat, animatedItems, interactiveObjects) {
  const aquaGroup = new THREE.Group();
  aquaGroup.name = "SmartAquaculture_FishAndPigFarms";

  // =========================================================================
  // 1. OFFSHORE SMART AQUACULTURE: 6 CIRCULAR SEA CAGES (Matching Image 2)
  //    Located in Coastal Bay with proper open-water clearance at x = -96, z = 32
  // =========================================================================
  const marineFarmGroup = new THREE.Group();
  marineFarmGroup.name = "District_FishFarm";
  marineFarmGroup.userData = { districtId: "fishfarm" };
  marineFarmGroup.position.set(-96, 0, 32);

  // Deep Ocean Lagoon Water Base
  const lagoonWaterGeo = new THREE.PlaneGeometry(48, 42);
  const lagoonWater = new THREE.Mesh(lagoonWaterGeo, mat.water);
  lagoonWater.rotation.x = -Math.PI / 2;
  lagoonWater.position.set(0, 0.06, 0);
  lagoonWater.receiveShadow = true;
  marineFarmGroup.add(lagoonWater);

  // Pier Gangway Connecting Central Barge to Warehouse Quayside (North-East direction)
  const shorePierGeo = new THREE.BoxGeometry(16, 0.35, 2.0);
  const shorePier = new THREE.Mesh(shorePierGeo, mat.aquacultureWalkway);
  shorePier.position.set(8.0, 0.35, -8.0);
  shorePier.rotation.y = 0.35;
  shorePier.receiveShadow = true;
  shorePier.castShadow = true;
  marineFarmGroup.add(shorePier);

  // Pier Railings
  for (let rz of [-0.9, 0.9]) {
    const railGeo = new THREE.BoxGeometry(16, 0.08, 0.08);
    const rail = new THREE.Mesh(railGeo, mat.buildingDarkSteel);
    rail.position.set(8.0, 0.9, -8.0 + rz);
    rail.rotation.y = 0.35;
    marineFarmGroup.add(rail);
  }

  // 6 Circular Floating Sea Cages in 2 rows of 3 (Matching Image 2)
  const cageConfigs = [
    { x: -13.5, z: -8.0, id: "CAGE-01", fishColor: mat.buildingGlassAzure, count: 6 },
    { x: 0.0,   z: -8.0, id: "CAGE-02", fishColor: mat.fishScaleSilver,   count: 6 },
    { x: 13.5,  z: -8.0, id: "CAGE-03", fishColor: mat.fishFinOrange,     count: 6 },
    { x: -13.5, z: 8.0,  id: "CAGE-04", fishColor: mat.neonCyan,          count: 6 },
    { x: 0.0,   z: 8.0,  id: "CAGE-05", fishColor: mat.neonCyan,          count: 8, isActive: true }, // Main Active Monitored Cage
    { x: 13.5,  z: 8.0,  id: "CAGE-06", fishColor: mat.neonGold,          count: 6 }
  ];

  cageConfigs.forEach((cfg, cIdx) => {
    const cageRoot = new THREE.Group();
    cageRoot.position.set(cfg.x, 0, cfg.z);

    // Deep water circle inside cage
    const cageWaterGeo = new THREE.CylinderGeometry(4.4, 4.4, 0.1, 24);
    const cageWater = new THREE.Mesh(cageWaterGeo, mat.riverWater);
    cageWater.position.y = 0.08;
    cageWater.receiveShadow = true;
    cageRoot.add(cageWater);

    // Floating Outer HDPE Collar Ring (Heavy Black Pipe)
    const floatRingGeo = new THREE.TorusGeometry(4.5, 0.28, 8, 32);
    const floatRing = new THREE.Mesh(floatRingGeo, mat.buildingDarkSteel);
    floatRing.rotation.x = Math.PI / 2;
    floatRing.position.y = 0.22;
    cageRoot.add(floatRing);

    // Inner Safety Handrail Ring
    const innerRingGeo = new THREE.TorusGeometry(4.0, 0.12, 6, 32);
    const innerRing = new THREE.Mesh(innerRingGeo, mat.walmartBlue);
    innerRing.rotation.x = Math.PI / 2;
    innerRing.position.y = 0.45;
    cageRoot.add(innerRing);

    // Subsurface Cylindrical Net Enclosure
    const netGeo = new THREE.CylinderGeometry(4.3, 4.0, 3.8, 20, 1, true);
    const netMesh = new THREE.Mesh(netGeo, mat.fishNetMat);
    netMesh.position.y = -1.9;
    cageRoot.add(netMesh);

    // Central Automated Solar Feed Dispenser Mast
    const mastGeo = new THREE.CylinderGeometry(0.18, 0.22, 2.8, 8);
    const mast = new THREE.Mesh(mastGeo, mat.buildingDarkSteel);
    mast.position.set(0, 1.4, 0);
    cageRoot.add(mast);

    const hopperGeo = new THREE.CylinderGeometry(0.65, 0.3, 0.8, 12);
    const hopper = new THREE.Mesh(hopperGeo, mat.buoyOrange);
    hopper.position.set(0, 2.5, 0);
    cageRoot.add(hopper);

    const solarGeo = new THREE.BoxGeometry(0.85, 0.05, 0.85);
    const solar = new THREE.Mesh(solarGeo, mat.buildingGlassCyan);
    solar.position.set(0, 2.95, 0);
    solar.rotation.x = 0.3;
    cageRoot.add(solar);

    // Aeration Bubbler Foam Ring
    const aeratorGeo = new THREE.RingGeometry(1.6, 2.8, 16);
    const aerator = new THREE.Mesh(aeratorGeo, mat.fishWaterFoam);
    aerator.rotation.x = -Math.PI / 2;
    aerator.position.set(0, 0.12, 0);
    cageRoot.add(aerator);
    animatedItems.fishAerators.push(aerator);

    // High-Density Schooling Fish Swirling inside the Sea Cage
    const schoolGroup = new THREE.Group();
    for (let f = 0; f < cfg.count; f++) {
      const fish = new THREE.Group();
      // Fish Body
      const fBodyGeo = new THREE.ConeGeometry(0.14, 0.65, 6);
      const fBody = new THREE.Mesh(fBodyGeo, cfg.fishColor);
      fBody.rotation.x = Math.PI / 2;
      fish.add(fBody);

      // Tail Fin
      const fTailGeo = new THREE.BoxGeometry(0.04, 0.24, 0.2);
      const fTail = new THREE.Mesh(fTailGeo, mat.fishFinOrange);
      fTail.position.set(0, 0, -0.38);
      fish.add(fTail);

      const angle = (f / cfg.count) * Math.PI * 2;
      const radius = 1.8 + Math.sin(f * 2.2) * 1.2;
      const depth = -0.15 - (f % 3) * 0.45;
      fish.position.set(Math.cos(angle) * radius, depth, Math.sin(angle) * radius);
      fish.rotation.y = angle + Math.PI / 2;
      fish.userData = { angle, radius, speed: 1.4 + (cIdx + f) * 0.15, phase: f * 0.8 };
      schoolGroup.add(fish);
    }
    cageRoot.add(schoolGroup);
    animatedItems.fishSchools.push(schoolGroup);

    // Active Cage Special Holographic Telemetry Ring & Indicators (Image 2)
    if (cfg.isActive) {
      const holoRingGeo = new THREE.TorusGeometry(4.7, 0.08, 6, 32);
      const holoRing = new THREE.Mesh(holoRingGeo, mat.telemetryRingGlow);
      holoRing.rotation.x = Math.PI / 2;
      holoRing.position.y = 0.35;
      cageRoot.add(holoRing);

      // 5 Floating Sensor Pills around the collar
      const sensorPills = [
        { label: "SAL: 35 PSU",   angle: -Math.PI * 0.8 },
        { label: "TURB: 1.5 NTU", angle: -Math.PI * 0.65 },
        { label: "PH: 7.4",       angle: -Math.PI * 0.5 },
        { label: "TEMP: 24.5 °C", angle: -Math.PI * 0.35 },
        { label: "DO: 6.8 mg/L",  angle: -Math.PI * 0.2 }
      ];

      sensorPills.forEach(pill => {
        const px = Math.cos(pill.angle) * 5.4;
        const pz = Math.sin(pill.angle) * 5.4;
        const tagBox = new THREE.Mesh(
          new THREE.BoxGeometry(0.9, 0.28, 0.06),
          mat.hospitalWhite
        );
        tagBox.position.set(px, 0.65, pz);
        tagBox.rotation.y = -pill.angle - Math.PI / 2;
        cageRoot.add(tagBox);

        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.04, 6, 6),
          mat.neonEmerald
        );
        dot.position.set(px - 0.3, 0.65, pz + 0.04);
        cageRoot.add(dot);
      });
    }

    marineFarmGroup.add(cageRoot);
  });

  // Central Yellow Feed Barge & Control Hub (Matching Image 2)
  const feedBarge = new THREE.Group();
  feedBarge.position.set(0, 0.2, 0);

  // Yellow Main Barge Deck
  const bargeHullGeo = new THREE.BoxGeometry(8.5, 0.7, 5.8);
  const bargeHull = new THREE.Mesh(bargeHullGeo, mat.bargeYellowMat);
  bargeHull.position.y = 0.35;
  bargeHull.castShadow = true;
  feedBarge.add(bargeHull);

  // Black Hull Trim
  const hullTrimGeo = new THREE.BoxGeometry(8.8, 0.2, 6.1);
  const hullTrim = new THREE.Mesh(hullTrimGeo, mat.buildingDarkSteel);
  hullTrim.position.y = 0.65;
  feedBarge.add(hullTrim);

  // 2 Cylindrical Bulk Feed Storage Silos
  for (let s of [-2.4, -0.8]) {
    const siloGeo = new THREE.CylinderGeometry(1.1, 1.1, 3.4, 16);
    const silo = new THREE.Mesh(siloGeo, mat.highVoltagePylonSteel);
    silo.position.set(s, 2.4, 0);
    silo.castShadow = true;
    feedBarge.add(silo);

    const capGeo = new THREE.ConeGeometry(1.15, 0.6, 16);
    const cap = new THREE.Mesh(capGeo, mat.buildingDarkSteel);
    cap.position.set(s, 4.4, 0);
    feedBarge.add(cap);
  }

  // Dark Control Room Cabin
  const cabinGeo = new THREE.BoxGeometry(3.2, 2.2, 4.4);
  const cabin = new THREE.Mesh(cabinGeo, mat.buildingDarkSteel);
  cabin.position.set(2.2, 1.8, 0);
  cabin.castShadow = true;
  feedBarge.add(cabin);

  // Antenna Mast with Flashing Beacon
  const antGeo = new THREE.CylinderGeometry(0.06, 0.08, 3.2, 8);
  const ant = new THREE.Mesh(antGeo, mat.trailerWhite);
  ant.position.set(3.2, 3.6, 1.4);
  feedBarge.add(ant);

  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), mat.neonEmerald);
  beacon.position.set(3.2, 5.2, 1.4);
  feedBarge.add(beacon);

  marineFarmGroup.add(feedBarge);

  // Floating Gangway Walkways Connecting Cages to Central Barge
  const gangwayZ = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.2, 18), mat.aquacultureWalkway);
  gangwayZ.position.set(0, 0.3, 0);
  marineFarmGroup.add(gangwayZ);

  const gangwayX = new THREE.Mesh(new THREE.BoxGeometry(28, 0.2, 1.2), mat.aquacultureWalkway);
  gangwayX.position.set(0, 0.3, 0);
  marineFarmGroup.add(gangwayX);

  interactiveObjects.push(marineFarmGroup);
  aquaGroup.add(marineFarmGroup);

  // =========================================================================
  // 2. INLAND SMART SWINE DIGITAL TWIN FACILITY (Matching Image 1)
  //    Located in Southern Agriculture Pasture at x = 45, z = 85
  // =========================================================================
  const inlandFarmGroup = new THREE.Group();
  inlandFarmGroup.name = "District_PigFarm";
  inlandFarmGroup.userData = { districtId: "pigfarm" };
  inlandFarmGroup.position.set(45, 0, 85);

  // High-Tech Digital Twin Dark Facility Floor (USD Simulation Grid)
  const facilityFloorGeo = new THREE.BoxGeometry(34, 0.3, 24);
  const facilityFloor = new THREE.Mesh(facilityFloorGeo, mat.darkFacilityFloor);
  facilityFloor.position.set(0, 0.15, 0);
  facilityFloor.receiveShadow = true;
  inlandFarmGroup.add(facilityFloor);

  // Fine Digital Twin Grid Floor Lines
  const gridHelper = new THREE.GridHelper(32, 32, 0x00f2fe, 0x1e293b);
  gridHelper.position.set(0, 0.31, 0);
  inlandFarmGroup.add(gridHelper);

  // 4 AI Vision Pens in a 2x2 Layout (Matching Image 1)
  const penPositions = [
    { x: -7.5, z: -5.0, id: "PEN 01 (N-WEST)", tagX: -7.5, tagZ: -1.8 },
    { x: 7.5,  z: -5.0, id: "PEN 02 (S-WEST)", tagX: 7.5,  tagZ: -1.8 },
    { x: -7.5, z: 5.0,  id: "PEN 03 (N-EAST)", tagX: -7.5, tagZ: 8.2 },
    { x: 7.5,  z: 5.0,  id: "PEN 04 (S-EAST)", tagX: 7.5,  tagZ: 8.2 }
  ];

  penPositions.forEach(pen => {
    // 1. Glowing AI Detection Circle on the Pen Floor
    const circleGeo = new THREE.RingGeometry(3.8, 3.95, 32);
    const circleMesh = new THREE.Mesh(circleGeo, mat.aiFloorCircleMat);
    circleMesh.rotation.x = -Math.PI / 2;
    circleMesh.position.set(pen.x, 0.32, pen.z);
    inlandFarmGroup.add(circleMesh);

    // 2. Translucent Volumetric AI Camera Spotlight Cone Beaming Down from Ceiling
    const coneGeo = new THREE.ConeGeometry(4.0, 7.5, 24, 1, true);
    const coneMesh = new THREE.Mesh(coneGeo, mat.aiConeBeamMat);
    coneMesh.position.set(pen.x, 4.05, pen.z);
    inlandFarmGroup.add(coneMesh);

    // 3. Precision Steel Pen Fences (3-tier rails)
    const penW = 12.0;
    const penD = 8.5;
    for (let r = 0; r < 3; r++) {
      const ry = 0.5 + r * 0.35;
      // Front rail
      const fr = new THREE.Mesh(new THREE.BoxGeometry(penW, 0.05, 0.05), mat.steelGantryMat);
      fr.position.set(pen.x, ry, pen.z + penD / 2);
      inlandFarmGroup.add(fr);
      // Back rail
      const br = new THREE.Mesh(new THREE.BoxGeometry(penW, 0.05, 0.05), mat.steelGantryMat);
      br.position.set(pen.x, ry, pen.z - penD / 2);
      inlandFarmGroup.add(br);
      // Left rail
      const lr = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, penD), mat.steelGantryMat);
      lr.position.set(pen.x - penW / 2, ry, pen.z);
      inlandFarmGroup.add(lr);
      // Right rail
      const rr = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, penD), mat.steelGantryMat);
      rr.position.set(pen.x + penW / 2, ry, pen.z);
      inlandFarmGroup.add(rr);
    }

    // Fence Corner Posts
    for (let px of [-penW / 2, penW / 2]) {
      for (let pz of [-penD / 2, penD / 2]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.4, 8), mat.steelGantryMat);
        post.position.set(pen.x + px, 0.95, pen.z + pz);
        inlandFarmGroup.add(post);
      }
    }

    // 4. Equipment: Smart Feed Trough (Pellets)
    const trough = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.6, 0.9), mat.buildingDarkSteel);
    trough.position.set(pen.x - 3.8, 0.5, pen.z);
    inlandFarmGroup.add(trough);

    const pelletFeed = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.1, 0.7), mat.cropGold);
    pelletFeed.position.set(pen.x - 3.8, 0.75, pen.z);
    inlandFarmGroup.add(pelletFeed);

    // 5. Equipment: Fresh Flow Water Bowl
    const waterBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.28, 0.35, 12), mat.buildingDarkSteel);
    waterBowl.position.set(pen.x + 3.8, 0.45, pen.z - 2.5);
    inlandFarmGroup.add(waterBowl);

    const freshWater = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.05, 12), mat.riverWater);
    freshWater.position.set(pen.x + 3.8, 0.58, pen.z - 2.5);
    inlandFarmGroup.add(freshWater);

    // 6. Floating Status Pill Tag above Pen (Matching Image 1)
    const penTag = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.5, 0.06), mat.buildingDarkSteel);
    penTag.position.set(pen.x, 1.8, pen.z);
    inlandFarmGroup.add(penTag);
  });

  // Ceiling Overhead Steel Gantries & AI Cameras (Matching Image 1)
  for (let gz of [-5.0, 5.0]) {
    // Longitudinal Gantry Rails
    const gantry = new THREE.Mesh(new THREE.BoxGeometry(32, 0.25, 0.3), mat.steelGantryMat);
    gantry.position.set(0, 7.8, gz);
    inlandFarmGroup.add(gantry);

    // AI Camera Pods & LED Lights
    for (let cx of [-7.5, 7.5]) {
      const camMount = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.6, 6), mat.buildingDarkSteel);
      camMount.position.set(cx, 7.5, gz);
      inlandFarmGroup.add(camMount);

      const camPod = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.25, 0.4), mat.buildingDarkSteel);
      camPod.position.set(cx, 7.2, gz);
      inlandFarmGroup.add(camPod);

      const camLens = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), mat.neonCyan);
      camLens.position.set(cx, 7.1, gz);
      inlandFarmGroup.add(camLens);
    }
  }

  // High-Detail 3D Pigs in their respective pens (Matching Image 1)
  const swinePigsData = [
    // PEN 01 (N-WEST)
    { scale: 1.15, pos: [-8.5, 0.3, -5.0], rotY: 0.2 },
    { scale: 0.95, pos: [-6.0, 0.3, -4.5], rotY: -0.6 },
    // PEN 02 (S-WEST)
    { scale: 1.10, pos: [6.5, 0.3, -5.2],  rotY: 1.4 },
    { scale: 1.05, pos: [8.8, 0.3, -4.8],  rotY: 2.8 },
    // PEN 03 (N-EAST) - Mother Sow Facing Feeder
    { scale: 1.30, pos: [-7.0, 0.3, 5.0],   rotY: -1.5 },
    // PEN 04 (S-EAST)
    { scale: 1.05, pos: [6.2, 0.3, 5.2],   rotY: 0.8 },
    { scale: 1.12, pos: [8.6, 0.3, 4.6],   rotY: -0.4 }
  ];

  swinePigsData.forEach(pd => {
    const pig = createPigMesh(mat, pd.scale);
    pig.group.position.set(pd.pos[0], pd.pos[1], pd.pos[2]);
    pig.group.rotation.y = pd.rotY;
    inlandFarmGroup.add(pig.group);
    animatedItems.pigs.push(pig);
  });

  // Edge AI Processing Station: NVIDIA JETSON AGX Enclosure on Perimeter Wall (Image 1)
  const jetsonRack = new THREE.Group();
  jetsonRack.position.set(13.5, 0.3, 7.5);

  const jetsonBase = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.8, 1.2), mat.buildingDarkSteel);
  jetsonBase.position.y = 0.9;
  jetsonRack.add(jetsonBase);

  // Glowing Green & Blue LED Status Indicators
  for (let l = 0; l < 3; l++) {
    const led = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 0.05), mat.neonEmerald);
    led.position.set(-0.6 + l * 0.6, 0.6, 0.62);
    jetsonRack.add(led);
  }

  // Telemetry Sign
  const tagSign = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.6, 0.06), mat.buildingDarkSteel);
  tagSign.position.set(0, 2.1, 0.6);
  jetsonRack.add(tagSign);

  inlandFarmGroup.add(jetsonRack);

  interactiveObjects.push(inlandFarmGroup);
  aquaGroup.add(inlandFarmGroup);

  parent.add(aquaGroup);
}
