import * as THREE from 'three';

/** District 11: Additive Manufacturing & 3D Lab (x = 6, z = -40) */
export function buildAdditiveDistrict(parent, mat, interactiveObjects) {
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
