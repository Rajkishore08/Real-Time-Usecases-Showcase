import * as THREE from 'three';

/** District 8: Smart Electrical Substation & High-Voltage Grid (x = 68, z = -42) */
export function buildPowerGridDistrict(parent, mat, animatedItems, interactiveObjects) {
  const gridGroup = new THREE.Group();
  gridGroup.name = "District_Grid";
  gridGroup.userData = { districtId: "grid" };
  gridGroup.position.set(68, 0, -42);

  // Transmission Pylons
  for (let p = 0; p < 3; p++) {
    const pylon = new THREE.Group();
    pylon.position.set(-14 + p * 14, 0, -8);

    const legGeo = new THREE.CylinderGeometry(0.12, 0.25, 14, 6);
    const leg = new THREE.Mesh(legGeo, mat.highVoltagePylonSteel);
    leg.position.set(0, 7, 0);
    leg.castShadow = true;
    pylon.add(leg);

    const crossArmGeo = new THREE.BoxGeometry(7, 0.3, 0.4);
    const crossArm = new THREE.Mesh(crossArmGeo, mat.highVoltagePylonSteel);
    crossArm.position.set(0, 12, 0);
    pylon.add(crossArm);

    for (let ix = -3; ix <= 3; ix += 3) {
      const insGeo = new THREE.CylinderGeometry(0.15, 0.15, 1.2, 8);
      const ins = new THREE.Mesh(insGeo, mat.ceramicInsulator);
      ins.position.set(ix, 10.8, 0);
      pylon.add(ins);
    }

    gridGroup.add(pylon);
  }

  // Transformers
  for (let tr = 0; tr < 2; tr++) {
    const trans = new THREE.Group();
    trans.position.set(-6 + tr * 12, 0, 8);

    const coreGeo = new THREE.BoxGeometry(4.5, 3.8, 4.0);
    const core = new THREE.Mesh(coreGeo, mat.transformerSteel);
    core.position.set(0, 1.9, 0);
    core.castShadow = true;
    trans.add(core);

    for (let f = -1.6; f <= 1.6; f += 0.8) {
      const finGeo = new THREE.BoxGeometry(0.1, 3.2, 4.2);
      const fin = new THREE.Mesh(finGeo, mat.buildingDarkSteel);
      fin.position.set(f, 1.8, 0);
      trans.add(fin);
    }

    gridGroup.add(trans);
  }

  // Modern Wind Turbines
  for (let w = 0; w < 2; w++) {
    const turbine = new THREE.Group();
    turbine.position.set(12 + w * 12, 0, -18);

    const poleGeo = new THREE.CylinderGeometry(0.4, 0.9, 18, 16);
    const pole = new THREE.Mesh(poleGeo, mat.windTurbineWhite);
    pole.position.set(0, 9, 0);
    pole.castShadow = true;
    turbine.add(pole);

    const nacelleGeo = new THREE.BoxGeometry(1.2, 1.2, 3.2);
    const nacelle = new THREE.Mesh(nacelleGeo, mat.windTurbineWhite);
    nacelle.position.set(0, 18, -0.6);
    nacelle.castShadow = true;
    turbine.add(nacelle);

    const hubRoot = new THREE.Group();
    hubRoot.position.set(0, 18, 1.0);
    hubRoot.userData = { spinSpeed: 0.032 + w * 0.006 };

    const spinnerGeo = new THREE.ConeGeometry(0.6, 1.2, 16);
    spinnerGeo.rotateX(Math.PI / 2);
    const spinner = new THREE.Mesh(spinnerGeo, mat.windTurbineWhite);
    hubRoot.add(spinner);

    for (let b = 0; b < 3; b++) {
      const bladeHolder = new THREE.Group();
      bladeHolder.rotation.z = (b / 3) * Math.PI * 2;

      const bladeGeo = new THREE.BoxGeometry(0.32, 7.8, 0.08);
      bladeGeo.translate(0, 3.9, 0);

      const blade = new THREE.Mesh(bladeGeo, mat.windTurbineWhite);
      blade.castShadow = true;
      bladeHolder.add(blade);

      hubRoot.add(bladeHolder);
    }

    turbine.add(hubRoot);
    gridGroup.add(turbine);
    animatedItems.turbines.push(hubRoot);
  }

  interactiveObjects.push(gridGroup);
  parent.add(gridGroup);
}
