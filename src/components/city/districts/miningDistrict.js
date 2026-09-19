import * as THREE from 'three';

/** District 6: Mining & Energy Subsurface Quarry (x = 34, z = -94) */
export function buildMiningDistrict(parent, mat, animatedItems, interactiveObjects) {
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
