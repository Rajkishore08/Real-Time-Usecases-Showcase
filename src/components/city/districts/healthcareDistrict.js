import * as THREE from 'three';

/** District 3: Healthcare & Medical Technology Campus (x = -24, z = 26) */
export function buildHealthcareDistrict(parent, mat, animatedItems, interactiveObjects) {
  const medGroup = new THREE.Group();
  medGroup.name = "District_Healthcare";
  medGroup.userData = { districtId: "healthcare" };
  medGroup.position.set(-24, 0, 26);

  const mainWingGeo = new THREE.BoxGeometry(16, 14, 10);
  const mainWing = new THREE.Mesh(mainWingGeo, mat.hospitalWhite);
  mainWing.position.set(0, 7, 0);
  mainWing.castShadow = true;
  mainWing.receiveShadow = true;
  medGroup.add(mainWing);

  const atriumGeo = new THREE.BoxGeometry(10, 10, 12);
  const atrium = new THREE.Mesh(atriumGeo, mat.buildingGlassCyan);
  atrium.position.set(0, 5, 2);
  medGroup.add(atrium);

  const crossHGeo = new THREE.BoxGeometry(3.6, 0.9, 0.2);
  const crossH = new THREE.Mesh(crossHGeo, mat.hospitalCrossRed);
  crossH.position.set(0, 11, 5.15);
  medGroup.add(crossH);

  const crossVGeo = new THREE.BoxGeometry(0.9, 3.6, 0.2);
  const crossV = new THREE.Mesh(crossVGeo, mat.hospitalCrossRed);
  crossV.position.set(0, 11, 5.15);
  medGroup.add(crossV);

  // Rooftop Helipad
  const heliPadGeo = new THREE.CylinderGeometry(4.0, 4.0, 0.4, 20);
  const heliPad = new THREE.Mesh(heliPadGeo, mat.concretePlaza);
  heliPad.position.set(0, 14.2, 0);
  medGroup.add(heliPad);

  // Medical Air Ambulance Helicopter Hovering
  const heliRoot = new THREE.Group();
  heliRoot.position.set(0, 15.5, 0);

  const fuselageGeo = new THREE.BoxGeometry(1.4, 1.2, 3.8);
  const fuselage = new THREE.Mesh(fuselageGeo, mat.hospitalWhite);
  heliRoot.add(fuselage);

  const mainRotorGeo = new THREE.BoxGeometry(5.4, 0.05, 0.35);
  const mainRotor = new THREE.Mesh(mainRotorGeo, mat.buildingDarkSteel);
  mainRotor.position.set(0, 0.8, 0);
  heliRoot.add(mainRotor);

  const tailRotorGeo = new THREE.BoxGeometry(0.05, 1.2, 0.2);
  const tailRotor = new THREE.Mesh(tailRotorGeo, mat.hospitalCrossRed);
  tailRotor.position.set(0.7, 0.2, 2.0);
  heliRoot.add(tailRotor);

  medGroup.add(heliRoot);
  animatedItems.helicopters.push({
    mesh: heliRoot,
    mainRotor: mainRotor,
    tailRotor: tailRotor,
    baseY: 15.5,
    phase: 0.0
  });

  interactiveObjects.push(medGroup);
  parent.add(medGroup);
}
