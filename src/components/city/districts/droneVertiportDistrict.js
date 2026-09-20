import * as THREE from 'three';

/** Helper: Creates a Delivery Drone Mesh with 4 Rotors & Landing Gear */
export function createDeliveryDroneMesh(mat, hasPayload = true, customPayloadMat = null) {
  const group = new THREE.Group();

  const bodyGeo = new THREE.BoxGeometry(0.95, 0.28, 0.95);
  const body = new THREE.Mesh(bodyGeo, mat.droneBodyMat);
  group.add(body);

  // Carbon Fiber Motor Arms
  for (let i = 0; i < 4; i++) {
    const angle = (i * Math.PI) / 2 + Math.PI / 4;
    const armGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.1, 6);
    const arm = new THREE.Mesh(armGeo, mat.buildingDarkSteel);
    arm.rotation.z = Math.PI / 2;
    arm.rotation.y = angle;
    arm.position.set(Math.cos(angle) * 0.45, 0, Math.sin(angle) * 0.45);
    group.add(arm);
  }

  // Landing Skids
  for (let lx = -0.42; lx <= 0.42; lx += 0.84) {
    const skidGeo = new THREE.BoxGeometry(0.06, 0.06, 0.9);
    const skid = new THREE.Mesh(skidGeo, mat.buildingDarkSteel);
    skid.position.set(lx, -0.32, 0);
    group.add(skid);

    const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.28, 0.05), mat.buildingDarkSteel);
    leg1.position.set(lx, -0.16, -0.3);
    group.add(leg1);

    const leg2 = leg1.clone();
    leg2.position.z = 0.3;
    group.add(leg2);
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

/** 
 * District 10: Autonomous Drone Delivery Station / Vertiport
 * Relocated to outer southern corridor at (x = -20, z = 85), nicely spaced west of 3D Printing Lab (x = 16, z = 85)
 * Active delivery drones fly across all city locations on dynamic missions.
 */
export function buildDroneVertiportDistrict(parent, mat, animatedItems, interactiveObjects) {
  const vertGroup = new THREE.Group();
  vertGroup.name = "District_Drones";
  vertGroup.userData = { districtId: "drones" };
  vertGroup.position.set(-20, 0, 85);

  // 1. Expanded Heavy-Duty Vertiport Apron Tarmac (32m x 26m)
  const padGeo = new THREE.BoxGeometry(32, 0.5, 26);
  const padMesh = new THREE.Mesh(padGeo, mat.dronePadTarmac);
  padMesh.position.set(0, 0.25, 0);
  padMesh.receiveShadow = true;
  vertGroup.add(padMesh);

  // Safety Yellow Border Perimeter
  const borderGeo = new THREE.BoxGeometry(32.4, 0.1, 0.6);
  for (let bz of [-13, 13]) {
    const border = new THREE.Mesh(borderGeo, mat.roadMarkingYellow);
    border.position.set(0, 0.52, bz);
    vertGroup.add(border);
  }

  // 2. Four Dedicated Ground Landing / Launch Pads (PAD-01 to PAD-04)
  const padPositions = [
    { x: -9, z: -6, name: "PAD-01" },
    { x: 9,  z: -6, name: "PAD-02" },
    { x: -9, z: 6,  name: "PAD-03" },
    { x: 9,  z: 6,  name: "PAD-04" }
  ];

  padPositions.forEach((pad, idx) => {
    // Outer Landing Ring
    const ringGeo = new THREE.RingGeometry(3.0, 3.6, 24);
    const ringMesh = new THREE.Mesh(ringGeo, idx % 2 === 0 ? mat.dronePadRing : mat.roadMarkingYellow);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.set(pad.x, 0.52, pad.z);
    vertGroup.add(ringMesh);

    // Center 'H' Cross Marking
    const hBar1Geo = new THREE.PlaneGeometry(0.45, 2.8);
    const hBar1 = new THREE.Mesh(hBar1Geo, mat.roadMarkingWhite);
    hBar1.rotation.x = -Math.PI / 2;
    hBar1.position.set(pad.x, 0.53, pad.z);
    vertGroup.add(hBar1);

    const hBar2Geo = new THREE.PlaneGeometry(2.2, 0.45);
    const hBar2 = new THREE.Mesh(hBar2Geo, mat.roadMarkingWhite);
    hBar2.rotation.x = -Math.PI / 2;
    hBar2.position.set(pad.x, 0.53, pad.z);
    vertGroup.add(hBar2);

    // Perimeter Corner Beacon Lights
    for (let bx of [-3.8, 3.8]) {
      for (let bz of [-3.8, 3.8]) {
        const beaconGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.3, 8);
        const beacon = new THREE.Mesh(beaconGeo, mat.neonCyan);
        beacon.position.set(pad.x + bx, 0.65, pad.z + bz);
        vertGroup.add(beacon);
      }
    }
  });

  // 3. Grounded Delivery Drones Resting on Landing Pads
  const groundDrone1 = createDeliveryDroneMesh(mat, true, mat.walmartBlue);
  groundDrone1.group.position.set(-9, 0.85, -6);
  vertGroup.add(groundDrone1.group);

  const groundDrone2 = createDeliveryDroneMesh(mat, true, mat.fireEngineRed);
  groundDrone2.group.position.set(9, 0.85, -6);
  groundDrone2.group.rotation.y = 0.8;
  vertGroup.add(groundDrone2.group);

  const groundDrone3 = createDeliveryDroneMesh(mat, true, mat.cropGreen);
  groundDrone3.group.position.set(-9, 0.85, 6);
  groundDrone3.group.rotation.y = -0.5;
  vertGroup.add(groundDrone3.group);

  const groundDrone4 = createDeliveryDroneMesh(mat, true, mat.industrialOrange);
  groundDrone4.group.position.set(9, 0.85, 6);
  groundDrone4.group.rotation.y = 1.6;
  vertGroup.add(groundDrone4.group);

  // 4. Vertiport Flight Operations Tower & Telemetry Mast
  const towerBaseGeo = new THREE.BoxGeometry(4.2, 6.5, 4.2);
  const towerBase = new THREE.Mesh(towerBaseGeo, mat.buildingDarkSteel);
  towerBase.position.set(0, 3.25, -9.5);
  towerBase.castShadow = true;
  vertGroup.add(towerBase);

  const cabGeo = new THREE.CylinderGeometry(2.8, 2.4, 2.6, 12);
  const cab = new THREE.Mesh(cabGeo, mat.buildingGlassCyan);
  cab.position.set(0, 7.8, -9.5);
  vertGroup.add(cab);

  const mastGeo = new THREE.CylinderGeometry(0.12, 0.25, 5.5, 8);
  const mast = new THREE.Mesh(mastGeo, mat.buildingDarkSteel);
  mast.position.set(0, 11.8, -9.5);
  vertGroup.add(mast);

  const radarGeo = new THREE.CylinderGeometry(1.3, 1.3, 0.2, 12);
  const radar = new THREE.Mesh(radarGeo, mat.buildingWhite);
  radar.rotation.x = Math.PI / 3;
  radar.position.set(0, 12.5, -9.5);
  vertGroup.add(radar);
  animatedItems.radarDishes.push(radar);

  // 5. Automated Battery Swapping & Logistics Staging Hubs
  for (let bx of [-4.5, 4.5]) {
    const bayGeo = new THREE.BoxGeometry(3.2, 2.2, 2.0);
    const bay = new THREE.Mesh(bayGeo, mat.buildingWhite);
    bay.position.set(bx, 1.35, -9.5);
    vertGroup.add(bay);
  }

  interactiveObjects.push(vertGroup);
  parent.add(vertGroup);

  // =========================================================================
  // 6. ACTIVE CITYWIDE DELIVERY DRONE MISSIONS (Flying to All Major City Locations)
  //    Added to parent scene root so world flight-path coordinates are 100% accurate.
  // =========================================================================

  // Mission 1: Vertiport -> Commercial Tech Skyscraper (x=0, z=0) -> Skyline Loop
  const flightPathCommercial = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-20, 1.0, 85),
    new THREE.Vector3(-15, 16.0, 55),
    new THREE.Vector3(-5, 22.0, 20),
    new THREE.Vector3(0, 26.0, 0),
    new THREE.Vector3(12, 20.0, 15),
    new THREE.Vector3(-8, 17.0, 52),
    new THREE.Vector3(-20, 1.0, 85)
  ], true);
  const drone1 = createDeliveryDroneMesh(mat, true, mat.walmartBlue);
  parent.add(drone1.group);
  animatedItems.drones.push({
    mesh: drone1.group,
    curve: flightPathCommercial,
    progress: 0.0,
    speed: 1.1,
    rotors: drone1.rotors
  });

  // Mission 2: Vertiport -> Healthcare Medical Center (x=-24, z=26) Urgent Specimen Drop
  const flightPathMedical = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-20, 1.0, 85),
    new THREE.Vector3(-24, 15.0, 60),
    new THREE.Vector3(-24, 20.0, 26),
    new THREE.Vector3(-15, 21.0, 20),
    new THREE.Vector3(-18, 14.0, 55),
    new THREE.Vector3(-20, 1.0, 85)
  ], true);
  const drone2 = createDeliveryDroneMesh(mat, true, mat.fireEngineRed);
  parent.add(drone2.group);
  animatedItems.drones.push({
    mesh: drone2.group,
    curve: flightPathMedical,
    progress: 0.35,
    speed: 0.95,
    rotors: drone2.rotors
  });

  // Mission 3: Vertiport -> 3D Printing Lab (x=16, z=85) -> Pig Farm (x=45, z=85) -> Agriculture
  const flightPath3DAndAgri = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-20, 1.0, 85),
    new THREE.Vector3(0, 12.0, 85),
    new THREE.Vector3(16, 14.0, 85),   // Over 3D Printing Lab
    new THREE.Vector3(45, 15.0, 85),   // Over Smart Pig Farm
    new THREE.Vector3(75, 18.0, 55),   // Over Smart Agriculture
    new THREE.Vector3(30, 20.0, 60),
    new THREE.Vector3(-20, 1.0, 85)
  ], true);
  const drone3 = createDeliveryDroneMesh(mat, true, mat.neonCyan);
  parent.add(drone3.group);
  animatedItems.drones.push({
    mesh: drone3.group,
    curve: flightPath3DAndAgri,
    progress: 0.55,
    speed: 1.2,
    rotors: drone3.rotors
  });

  // Mission 4: Vertiport -> Manufacturing Plant (x=-24, z=-26) -> Port Harbor (x=-80, z=-26)
  const flightPathPortMfg = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-20, 1.0, 85),
    new THREE.Vector3(-45, 18.0, 45),
    new THREE.Vector3(-24, 20.0, -26), // Over Manufacturing Plant
    new THREE.Vector3(-80, 18.0, -26), // Over Port Harbor
    new THREE.Vector3(-65, 19.0, 30),
    new THREE.Vector3(-20, 1.0, 85)
  ], true);
  const drone4 = createDeliveryDroneMesh(mat, true, mat.industrialOrange);
  parent.add(drone4.group);
  animatedItems.drones.push({
    mesh: drone4.group,
    curve: flightPathPortMfg,
    progress: 0.18,
    speed: 1.05,
    rotors: drone4.rotors
  });

  // Mission 5: Vertiport -> Power Grid Substation (x=68, z=-42) -> Biotech Dome (x=28, z=-26)
  const flightPathGridBiotech = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-20, 1.0, 85),
    new THREE.Vector3(10, 20.0, 30),
    new THREE.Vector3(68, 19.0, -42),  // Over Power Substation
    new THREE.Vector3(28, 18.0, -26),  // Over Biotech Dome
    new THREE.Vector3(0, 22.0, 35),
    new THREE.Vector3(-20, 1.0, 85)
  ], true);
  const drone5 = createDeliveryDroneMesh(mat, true, mat.cropGreen);
  parent.add(drone5.group);
  animatedItems.drones.push({
    mesh: drone5.group,
    curve: flightPathGridBiotech,
    progress: 0.72,
    speed: 1.0,
    rotors: drone5.rotors
  });

  // Mission 6: High-Altitude Citywide Aerial Perimeter Survey
  const flightPathPerimeter = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-20, 1.0, 85),
    new THREE.Vector3(-55, 26.0, 55),
    new THREE.Vector3(-55, 28.0, -55),
    new THREE.Vector3(55, 28.0, -55),
    new THREE.Vector3(55, 26.0, 55),
    new THREE.Vector3(-20, 1.0, 85)
  ], true);
  const drone6 = createDeliveryDroneMesh(mat, true, mat.highVoltagePylonSteel);
  parent.add(drone6.group);
  animatedItems.drones.push({
    mesh: drone6.group,
    curve: flightPathPerimeter,
    progress: 0.88,
    speed: 1.15,
    rotors: drone6.rotors
  });
}
