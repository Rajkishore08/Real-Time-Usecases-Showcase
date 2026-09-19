import * as THREE from 'three';

/** District 7: Smart Agriculture & Precision Farming (x = 88, z = 28) */
export function buildAgricultureDistrict(parent, mat, animatedItems, interactiveObjects) {
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
