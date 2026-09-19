import * as THREE from 'three';

/** Helper: Creates an Animated Humanoid Character Mesh with Limbs */
export function createAnimatedHumanMesh(mat, shirtMat) {
  const mesh = new THREE.Group();

  // Head
  const headGeo = new THREE.SphereGeometry(0.28, 8, 8);
  const head = new THREE.Mesh(headGeo, mat.humanSkin);
  head.position.set(0, 1.65, 0);
  mesh.add(head);

  // Hair / Cap
  const hairGeo = new THREE.SphereGeometry(0.29, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
  const hair = new THREE.Mesh(hairGeo, mat.humanSuitDark);
  hair.position.set(0, 1.7, 0);
  mesh.add(hair);

  // Torso / Shirt
  const torsoGeo = new THREE.BoxGeometry(0.55, 0.72, 0.32);
  const torso = new THREE.Mesh(torsoGeo, shirtMat);
  torso.position.set(0, 1.15, 0);
  torso.castShadow = true;
  mesh.add(torso);

  // Left & Right Arms
  const armGeo = new THREE.BoxGeometry(0.16, 0.65, 0.16);
  armGeo.translate(0, -0.3, 0);

  const leftArm = new THREE.Mesh(armGeo, shirtMat);
  leftArm.position.set(-0.35, 1.45, 0);
  mesh.add(leftArm);

  const rightArm = new THREE.Mesh(armGeo, shirtMat);
  rightArm.position.set(0.35, 1.45, 0);
  mesh.add(rightArm);

  // Left & Right Legs
  const legGeo = new THREE.BoxGeometry(0.2, 0.78, 0.2);
  legGeo.translate(0, -0.38, 0);

  const leftLeg = new THREE.Mesh(legGeo, mat.humanSuitDark);
  leftLeg.position.set(-0.14, 0.78, 0);
  leftLeg.castShadow = true;
  mesh.add(leftLeg);

  const rightLeg = new THREE.Mesh(legGeo, mat.humanSuitDark);
  rightLeg.position.set(0.14, 0.78, 0);
  rightLeg.castShadow = true;
  mesh.add(rightLeg);

  return { mesh, leftLeg, rightLeg, leftArm, rightArm };
}

/** Helper: Creates a Static High-Visibility Human Mesh */
export function createStaticHumanMesh(mat, outfitMat, hatMat = null) {
  const person = new THREE.Group();

  // Head
  const headGeo = new THREE.SphereGeometry(0.28, 8, 8);
  const head = new THREE.Mesh(headGeo, mat.humanSkin);
  head.position.set(0, 1.65, 0);
  person.add(head);

  // Optional Safety Hard Hat
  if (hatMat) {
    const hatGeo = new THREE.CylinderGeometry(0.34, 0.38, 0.22, 12);
    const hat = new THREE.Mesh(hatGeo, hatMat);
    hat.position.set(0, 1.82, 0);
    person.add(hat);
  } else {
    const hairGeo = new THREE.SphereGeometry(0.29, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
    const hair = new THREE.Mesh(hairGeo, mat.humanSuitDark);
    hair.position.set(0, 1.7, 0);
    person.add(hair);
  }

  // Torso
  const torsoGeo = new THREE.BoxGeometry(0.55, 0.72, 0.32);
  const torso = new THREE.Mesh(torsoGeo, outfitMat);
  torso.position.set(0, 1.15, 0);
  torso.castShadow = true;
  person.add(torso);

  // Legs
  const legsGeo = new THREE.BoxGeometry(0.46, 0.78, 0.26);
  const legs = new THREE.Mesh(legsGeo, mat.humanSuitDark);
  legs.position.set(0, 0.39, 0);
  legs.castShadow = true;
  person.add(legs);

  return person;
}

/** Helper: Creates an Autonomous Mobile Robot (AMR / AGV) Mesh */
export function createAmrRobotMesh(mat) {
  const amr = new THREE.Group();

  const bodyGeo = new THREE.BoxGeometry(1.2, 0.4, 0.9);
  const body = new THREE.Mesh(bodyGeo, mat.amrBodyMat);
  body.castShadow = true;
  amr.add(body);

  const lidarGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.2, 12);
  const lidar = new THREE.Mesh(lidarGeo, mat.buildingDarkSteel);
  lidar.position.set(0, 0.3, 0);
  amr.add(lidar);

  for (let wx = -0.45; wx <= 0.45; wx += 0.9) {
    for (let wz = -0.4; wz <= 0.4; wz += 0.8) {
      const wheelGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.1, 8);
      const wheel = new THREE.Mesh(wheelGeo, mat.amrWheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(wx, -0.15, wz);
      amr.add(wheel);
    }
  }

  return amr;
}

/** Builds High-Visibility Humans & Animated Walking Pedestrians */
export function buildPopulatedHumans(parent, mat, animatedItems) {
  const peopleGroup = new THREE.Group();
  peopleGroup.name = "PopulatedHumans";

  // A. Dynamic Animated Walking Pedestrians along Sidewalk Splines
  const walkSplineA = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-14, 0.12, -14),
    new THREE.Vector3(-14, 0.12, 14),
    new THREE.Vector3(14, 0.12, 14),
    new THREE.Vector3(14, 0.12, -14)
  ], true);

  const walkSplineB = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-6, 0.12, 20),
    new THREE.Vector3(-22, 0.12, 20),
    new THREE.Vector3(-22, 0.12, 32),
    new THREE.Vector3(-6, 0.12, 32)
  ], true);

  // Create 6 active walking pedestrians
  for (let w = 0; w < 6; w++) {
    const spline = w % 2 === 0 ? walkSplineA : walkSplineB;
    const outfit = w % 3 === 0 ? mat.humanShirtBlue : w % 3 === 1 ? mat.humanSuitDark : mat.humanVestOrange;
    const ped = createAnimatedHumanMesh(mat, outfit);
    peopleGroup.add(ped.mesh);

    animatedItems.pedestrians.push({
      mesh: ped.mesh,
      leftLeg: ped.leftLeg,
      rightLeg: ped.rightLeg,
      leftArm: ped.leftArm,
      rightArm: ped.rightArm,
      curve: spline,
      progress: w / 6,
      speed: 0.85 + (w % 3) * 0.15
    });
  }

  // B. 24 Highly Visible Stationed Personnel across all Districts
  const stationedPeople = [
    // 1. Commercial Tech Center (Executives & Tech Leads in Suits)
    { pos: [-4, 0.15, -2], outfit: mat.humanSuitDark, hat: null, rot: 0.4 },
    { pos: [-2, 0.15, -3], outfit: mat.humanSuitDark, hat: null, rot: -1.2 },
    { pos: [6, 0.15, 2], outfit: mat.humanShirtBlue, hat: null, rot: 2.1 },
    { pos: [8, 0.15, 3], outfit: mat.humanCoatWhite, hat: null, rot: -2.8 },

    // 2. Manufacturing & Robotics Hub (Engineers with Orange Vests & Hard Hats)
    { pos: [-18, 0, -20], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: 1.0 },
    { pos: [-28, 0, -20], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: -0.8 },
    { pos: [-22, 0, -18], outfit: mat.humanShirtBlue, hat: mat.hardHatWhite, rot: 0.0 },

    // 3. Healthcare Campus (Doctors & Surgeons in White Lab Coats & Blue Scrubs)
    { pos: [-18, 0, 24], outfit: mat.humanCoatWhite, hat: null, rot: 0.0 },
    { pos: [-28, 0, 24], outfit: mat.humanCoatWhite, hat: null, rot: 3.14 },
    { pos: [-22, 0, 32], outfit: mat.humanShirtBlue, hat: null, rot: 1.57 },

    // 4. Maritime Port (Dockworkers with Safety Vests & Hard Hats)
    { pos: [-74, 0.3, -16], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: -1.57 },
    { pos: [-74, 0.3, -24], outfit: mat.humanShirtBlue, hat: mat.hardHatYellow, rot: 1.57 },
    { pos: [-74, 0.3, -32], outfit: mat.humanVestOrange, hat: mat.hardHatWhite, rot: 0.0 },

    // 5. Mining Subterranean Quarry (Miners with Safety Vests & Hard Hats)
    { pos: [18, 0.8, -72], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: 0.6 },
    { pos: [28, 0.8, -74], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: -2.0 },
    { pos: [14, 0.8, -70], outfit: mat.humanShirtBlue, hat: mat.hardHatWhite, rot: 1.2 },

    // 6. Agriculture & Precision Farming (Farm Agronomists)
    { pos: [64, 0, 20], outfit: mat.humanShirtBlue, hat: null, rot: 1.2 },
    { pos: [68, 0, 26], outfit: mat.humanVestOrange, hat: null, rot: -0.8 },

    // 7. Walmart Logistics Hub (Warehouse Operators)
    { pos: [-66, 0, 16], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: 0.0 },
    { pos: [-64, 0, 8], outfit: mat.humanShirtBlue, hat: mat.hardHatWhite, rot: -1.57 },

    // 8. Disaster Response & Flood Defense (Firefighters & SAR Responders)
    { pos: [-12, 0, -68], outfit: mat.humanVestOrange, hat: mat.hardHatWhite, rot: 1.8 },
    { pos: [-18, 0, -68], outfit: mat.fireEngineRed, hat: mat.hardHatYellow, rot: -1.2 },
    { pos: [-14, 0, -72], outfit: mat.humanVestOrange, hat: mat.hardHatYellow, rot: 0.0 },

    // 9. Power Grid Substation (High-Voltage Electrical Engineers)
    { pos: [62, 0, -38], outfit: mat.humanVestOrange, hat: mat.hardHatWhite, rot: 0.8 },
    { pos: [72, 0, -36], outfit: mat.humanShirtBlue, hat: mat.hardHatYellow, rot: -1.4 }
  ];

  stationedPeople.forEach(p => {
    const person = createStaticHumanMesh(mat, p.outfit, p.hat);
    person.position.set(p.pos[0], p.pos[1], p.pos[2]);
    person.rotation.y = p.rot;
    peopleGroup.add(person);
  });

  parent.add(peopleGroup);
}
