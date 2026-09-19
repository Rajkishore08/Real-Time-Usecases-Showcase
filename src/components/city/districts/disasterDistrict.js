import * as THREE from 'three';

/**
 * District 13: Disaster Response & Flood Defense Center
 * Coordinates: x = -16, z = -76 (Beside Mountain River Waterfall)
 */
export function buildDisasterDistrict(parent, mat, animatedItems, interactiveObjects) {
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
