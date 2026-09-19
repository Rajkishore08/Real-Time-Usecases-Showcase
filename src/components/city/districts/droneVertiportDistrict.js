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

/** District 10: Autonomous Drone Delivery Station / Vertiport (x = -74, z = 50) */
export function buildDroneVertiportDistrict(parent, mat, animatedItems, interactiveObjects) {
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
        const beacon = new THREE.Mesh(beaconGeo, mat.streetLampBulb || mat.neonCyan);
        beacon.position.set(pad.x + bx, 0.75, pad.z + bz);
        vertGroup.add(beacon);
      }
    }
  });

  // 3. Grounded / Parked Delivery Drones on Tarmac Pads
  const groundDrone1 = createDeliveryDroneMesh(mat, true, mat.walmartBlue);
  groundDrone1.group.position.set(-9, 0.95, -7);
  vertGroup.add(groundDrone1.group);

  const groundDrone2 = createDeliveryDroneMesh(mat, true, mat.fireEngineRed);
  groundDrone2.group.position.set(9, 0.95, -7);
  groundDrone2.group.rotation.y = 0.8;
  vertGroup.add(groundDrone2.group);

  const groundDrone3 = createDeliveryDroneMesh(mat, true, mat.cropGreen);
  groundDrone3.group.position.set(-9, 0.95, 7);
  groundDrone3.group.rotation.y = -0.5;
  vertGroup.add(groundDrone3.group);

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
