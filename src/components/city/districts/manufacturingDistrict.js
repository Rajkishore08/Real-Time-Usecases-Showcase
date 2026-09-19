import * as THREE from 'three';

/** District 2: Manufacturing & Robotics Hub (x = -24, z = -26) */
export function buildManufacturingDistrict(parent, mat, animatedItems, interactiveObjects) {
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
