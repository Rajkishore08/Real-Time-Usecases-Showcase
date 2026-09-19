import * as THREE from 'three';

/** District 4: Biotechnology & Biosphere Labs (x = 28, z = -26) */
export function buildBiotechDistrict(parent, mat, interactiveObjects) {
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
