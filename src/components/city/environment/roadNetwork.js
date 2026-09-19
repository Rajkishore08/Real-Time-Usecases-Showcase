import * as THREE from 'three';

/**
 * Builds Outer Ring Highway, Grand Boulevards, Port & Quarry Connectors, Sidewalks & Streetlamps
 */
export function buildRoadNetwork(parent, mat) {
  const roadGroup = new THREE.Group();
  roadGroup.name = "RoadNetwork";

  // A. Outer Arterial Ring Highway
  const ringRoadGeo = new THREE.RingGeometry(49.5, 58.5, 64);
  const ringRoadMesh = new THREE.Mesh(ringRoadGeo, mat.roadAsphalt);
  ringRoadMesh.rotation.x = -Math.PI / 2;
  ringRoadMesh.position.set(0, 0.08, 0);
  ringRoadMesh.receiveShadow = true;
  roadGroup.add(ringRoadMesh);

  const ringCenterlineGeo = new THREE.RingGeometry(53.85, 54.15, 64);
  const ringCenterlineMesh = new THREE.Mesh(ringCenterlineGeo, mat.roadMarkingWhite);
  ringCenterlineMesh.rotation.x = -Math.PI / 2;
  ringCenterlineMesh.position.set(0, 0.09, 0);
  roadGroup.add(ringCenterlineMesh);

  // B. North-South Central Grand Boulevard
  const nsRoadGeo = new THREE.PlaneGeometry(8.5, 96);
  const nsRoadMesh = new THREE.Mesh(nsRoadGeo, mat.roadAsphalt);
  nsRoadMesh.rotation.x = -Math.PI / 2;
  nsRoadMesh.position.set(0, 0.08, 0);
  nsRoadMesh.receiveShadow = true;
  roadGroup.add(nsRoadMesh);

  const nsDividerGeo = new THREE.PlaneGeometry(0.3, 96);
  const nsDividerMesh = new THREE.Mesh(nsDividerGeo, mat.roadMarkingYellow);
  nsDividerMesh.rotation.x = -Math.PI / 2;
  nsDividerMesh.position.set(0, 0.09, 0);
  roadGroup.add(nsDividerMesh);

  // C. East-West Tech Avenue
  const ewRoadGeo = new THREE.PlaneGeometry(96, 8.5);
  const ewRoadMesh = new THREE.Mesh(ewRoadGeo, mat.roadAsphalt);
  ewRoadMesh.rotation.x = -Math.PI / 2;
  ewRoadMesh.position.set(0, 0.08, 0);
  ewRoadMesh.receiveShadow = true;
  roadGroup.add(ewRoadMesh);

  const ewDividerGeo = new THREE.PlaneGeometry(96, 0.3);
  const ewDividerMesh = new THREE.Mesh(ewDividerGeo, mat.roadMarkingYellow);
  ewDividerMesh.rotation.x = -Math.PI / 2;
  ewDividerMesh.position.set(0, 0.09, 0);
  roadGroup.add(ewDividerMesh);

  // D. Port Connector Parkway
  const portRoadGeo = new THREE.PlaneGeometry(20, 7.5);
  const portRoadMesh = new THREE.Mesh(portRoadGeo, mat.roadAsphalt);
  portRoadMesh.rotation.x = -Math.PI / 2;
  portRoadMesh.position.set(-62, 0.08, 0);
  portRoadMesh.receiveShadow = true;
  roadGroup.add(portRoadMesh);

  // E. Mining Access Quarry Road
  const mineRoadGeo = new THREE.PlaneGeometry(6.5, 28);
  const mineRoadMesh = new THREE.Mesh(mineRoadGeo, mat.roadAsphalt);
  mineRoadMesh.rotation.x = -Math.PI / 2;
  mineRoadMesh.position.set(34, 0.08, -76);
  mineRoadMesh.receiveShadow = true;
  roadGroup.add(mineRoadMesh);

  // F. Urban Concrete Sidewalks & Curbs
  const sidewalkGeo = new THREE.BoxGeometry(22, 0.22, 22);
  const swNW = new THREE.Mesh(sidewalkGeo, mat.concretePlaza);
  swNW.position.set(-16, 0.11, -16);
  swNW.receiveShadow = true;
  roadGroup.add(swNW);

  const swNE = new THREE.Mesh(sidewalkGeo, mat.concretePlaza);
  swNE.position.set(16, 0.11, -16);
  swNE.receiveShadow = true;
  roadGroup.add(swNE);

  const swSW = new THREE.Mesh(sidewalkGeo, mat.concretePlaza);
  swSW.position.set(-16, 0.11, 16);
  swSW.receiveShadow = true;
  roadGroup.add(swSW);

  const swSE = new THREE.Mesh(sidewalkGeo, mat.concretePlaza);
  swSE.position.set(16, 0.11, 16);
  swSE.receiveShadow = true;
  roadGroup.add(swSE);

  // G. Streetlamps along Ring Road
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    const r = 59.5;
    const lx = Math.cos(angle) * r;
    const lz = Math.sin(angle) * r;

    const lampPoleGeo = new THREE.CylinderGeometry(0.12, 0.16, 4.5, 8);
    const lampPole = new THREE.Mesh(lampPoleGeo, mat.streetLampMetal);
    lampPole.position.set(lx, 2.25, lz);
    lampPole.castShadow = true;
    roadGroup.add(lampPole);

    const lampArmGeo = new THREE.BoxGeometry(0.8, 0.1, 0.1);
    const lampArm = new THREE.Mesh(lampArmGeo, mat.streetLampMetal);
    lampArm.position.set(lx - Math.cos(angle) * 0.4, 4.4, lz - Math.sin(angle) * 0.4);
    roadGroup.add(lampArm);

    const bulbGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const bulbMesh = new THREE.Mesh(bulbGeo, mat.streetLampBulb);
    bulbMesh.position.set(lx - Math.cos(angle) * 0.7, 4.3, lz - Math.sin(angle) * 0.7);
    roadGroup.add(bulbMesh);
  }

  parent.add(roadGroup);
}
