import * as THREE from 'three';

/** District 12: Smart Rail, Metro & Suspension Bridge (x = -24, z = 0) */
export function buildRailAndBridgeDistrict(parent, mat, animatedItems, interactiveObjects) {
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
