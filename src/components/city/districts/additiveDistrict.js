import * as THREE from 'three';

/** 
 * District 11: Additive Manufacturing & 3D Printing Lab 
 * Relocated to outer countryside pasture near Pig Farm (x = 16, z = 85), away from city center & roads.
 */
export function buildAdditiveDistrict(parent, mat, interactiveObjects) {
  const addGroup = new THREE.Group();
  addGroup.name = "District_Additive";
  addGroup.userData = { districtId: "additive" };
  addGroup.position.set(16, 0, 85);

  // 1. Concrete Base Foundation Platform
  const baseGeo = new THREE.BoxGeometry(20, 0.4, 18);
  const baseMesh = new THREE.Mesh(baseGeo, mat.concretePlaza);
  baseMesh.position.set(0, 0.2, 0);
  baseMesh.receiveShadow = true;
  addGroup.add(baseMesh);

  // 2. Main White Cleanroom Laboratory Building
  const labGeo = new THREE.BoxGeometry(14, 7.5, 12);
  const labMesh = new THREE.Mesh(labGeo, mat.buildingWhite);
  labMesh.position.set(-1.5, 4.15, 0);
  labMesh.castShadow = true;
  labMesh.receiveShadow = true;
  addGroup.add(labMesh);

  // Front Observation Glass Window
  const winGeo = new THREE.BoxGeometry(10, 3.2, 0.2);
  const winMesh = new THREE.Mesh(winGeo, mat.buildingGlassAzure);
  winMesh.position.set(-1.5, 4.2, 6.1);
  addGroup.add(winMesh);

  // Dark Architectural Fascia Accent
  const fasciaGeo = new THREE.BoxGeometry(14.4, 0.8, 12.4);
  const fasciaMesh = new THREE.Mesh(fasciaGeo, mat.buildingDarkSteel);
  fasciaMesh.position.set(-1.5, 8.0, 0);
  addGroup.add(fasciaMesh);

  // 3. 3D Laser Sintering & Robotic Printing Chamber Annex (East Wing)
  const chamberGeo = new THREE.BoxGeometry(4.5, 5.5, 8.0);
  const chamber = new THREE.Mesh(chamberGeo, mat.buildingGlassCyan);
  chamber.position.set(6.8, 3.15, 0);
  chamber.castShadow = true;
  addGroup.add(chamber);

  // Industrial Gantry Frame for 3D Printer
  const gantryPillar1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4.5, 8), mat.steelGantryMat);
  gantryPillar1.position.set(5.5, 2.5, -3.2);
  addGroup.add(gantryPillar1);

  const gantryPillar2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4.5, 8), mat.steelGantryMat);
  gantryPillar2.position.set(8.1, 2.5, -3.2);
  addGroup.add(gantryPillar2);

  const gantryPillar3 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4.5, 8), mat.steelGantryMat);
  gantryPillar3.position.set(5.5, 2.5, 3.2);
  addGroup.add(gantryPillar3);

  const gantryPillar4 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4.5, 8), mat.steelGantryMat);
  gantryPillar4.position.set(8.1, 2.5, 3.2);
  addGroup.add(gantryPillar4);

  // Cross Beam & Extruder Head
  const crossBeam = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.18, 0.25), mat.buildingDarkSteel);
  crossBeam.position.set(6.8, 3.8, 0);
  addGroup.add(crossBeam);

  const printHead = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.45, 0.6), mat.neonRose);
  printHead.position.set(6.8, 3.5, 0);
  addGroup.add(printHead);

  // Glowing Laser Print Bed & In-Progress Component
  const printBed = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.15, 16), mat.buildingDarkSteel);
  printBed.position.set(6.8, 0.6, 0);
  addGroup.add(printBed);

  const printedObject = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7), mat.neonCyan);
  printedObject.position.set(6.8, 1.2, 0);
  addGroup.add(printedObject);

  // 4. Rooftop HVAC Chiller, Solar Array & Communication Antenna
  const hvac = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.2, 2.4), mat.highVoltagePylonSteel);
  hvac.position.set(-4.5, 8.8, -2.5);
  hvac.castShadow = true;
  addGroup.add(hvac);

  const solarPanel = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.1, 3.2), mat.buildingGlassAzure);
  solarPanel.position.set(1.5, 8.5, 1.5);
  solarPanel.rotation.x = 0.2;
  addGroup.add(solarPanel);

  const commMast = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 4.5, 8), mat.buildingDarkSteel);
  commMast.position.set(-6.5, 10.2, 4.2);
  addGroup.add(commMast);

  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), mat.neonCyan);
  beacon.position.set(-6.5, 12.5, 4.2);
  addGroup.add(beacon);

  interactiveObjects.push(addGroup);
  parent.add(addGroup);
}
