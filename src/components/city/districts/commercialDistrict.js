import * as THREE from 'three';
import { createAmrRobotMesh } from '../simulation/populatedHumans';

/** District 1: Commercial Real Estate & GCC Tech Center + City Parking Lot */
export function buildCommercialDistrict(parent, mat, animatedItems, interactiveObjects) {
  const commGroup = new THREE.Group();
  commGroup.name = "District_Commercial";
  commGroup.userData = { districtId: "commercial" };
  commGroup.position.set(0, 0, 0);

  // =========================================================================
  // 1. TOWER 1: Tech Center Glass Skyscraper (Cleanly on Plaza NW at x = -15, z = -15)
  // =========================================================================
  const tower1BaseGeo = new THREE.BoxGeometry(9.0, 24, 9.0);
  const tower1Base = new THREE.Mesh(tower1BaseGeo, mat.buildingDarkSteel);
  tower1Base.position.set(-15, 12, -15);
  tower1Base.castShadow = true;
  tower1Base.receiveShadow = true;
  commGroup.add(tower1Base);

  const tower1GlassGeo = new THREE.BoxGeometry(9.2, 22, 9.2);
  const tower1Glass = new THREE.Mesh(tower1GlassGeo, mat.buildingGlassAzure);
  tower1Glass.position.set(-15, 12, -15);
  commGroup.add(tower1Glass);

  const spireGeo = new THREE.ConeGeometry(2.2, 7.5, 8);
  const spireMesh = new THREE.Mesh(spireGeo, mat.buildingDarkSteel);
  spireMesh.position.set(-15, 27.8, -15);
  commGroup.add(spireMesh);

  const antennaGeo = new THREE.CylinderGeometry(0.08, 0.08, 6, 6);
  const antennaMesh = new THREE.Mesh(antennaGeo, mat.buildingDarkSteel);
  antennaMesh.position.set(-15, 34.5, -15);
  commGroup.add(antennaMesh);

  const beaconGeo = new THREE.SphereGeometry(0.25, 8, 8);
  const beaconMesh = new THREE.Mesh(beaconGeo, mat.neonRose);
  beaconMesh.position.set(-15, 37.5, -15);
  commGroup.add(beaconMesh);

  // =========================================================================
  // 2. TOWER 2: White Corporate Commercial Hub with Helipad (Plaza SW at x = -15, z = 15)
  // =========================================================================
  const tower2Geo = new THREE.BoxGeometry(10.5, 18, 8.5);
  const tower2Mesh = new THREE.Mesh(tower2Geo, mat.buildingWhite);
  tower2Mesh.position.set(-15, 9, 15);
  tower2Mesh.castShadow = true;
  tower2Mesh.receiveShadow = true;
  commGroup.add(tower2Mesh);

  const padGeo = new THREE.CylinderGeometry(3.4, 3.4, 0.4, 16);
  const padMesh = new THREE.Mesh(padGeo, mat.concretePlaza);
  padMesh.position.set(-15, 18.2, 15);
  commGroup.add(padMesh);

  const padRingGeo = new THREE.RingGeometry(2.2, 2.5, 16);
  const padRing = new THREE.Mesh(padRingGeo, mat.helipadYellow);
  padRing.rotation.x = -Math.PI / 2;
  padRing.position.set(-15, 18.42, 15);
  commGroup.add(padRing);

  // Security Patrol AMR Robot on the Commercial Plaza
  const plazaAmrSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0.2, -10),
    new THREE.Vector3(-20, 0.2, -10),
    new THREE.Vector3(-20, 0.2, -20),
    new THREE.Vector3(-10, 0.2, -20)
  ], true);

  const amrMesh = createAmrRobotMesh(mat);
  commGroup.add(amrMesh);
  animatedItems.amrRobots.push({
    mesh: amrMesh,
    curve: plazaAmrSpline,
    progress: 0.0,
    speed: 0.8
  });

  // =========================================================================
  // 3. CITY CENTER CAR PARKING LOT (Plaza SE at x = 16, z = 16)
  //    Features 6 marked stalls, parking lights, and dynamic departing cars
  // =========================================================================
  const parkingLotGroup = new THREE.Group();
  parkingLotGroup.position.set(16, 0.12, 16);

  // Asphalt Parking Lot Surface
  const lotAsphaltGeo = new THREE.PlaneGeometry(18, 14);
  const lotAsphalt = new THREE.Mesh(lotAsphaltGeo, mat.roadAsphalt);
  lotAsphalt.rotation.x = -Math.PI / 2;
  lotAsphalt.position.set(0, 0.02, 0);
  lotAsphalt.receiveShadow = true;
  parkingLotGroup.add(lotAsphalt);

  // Concrete Curbing
  const curbGeoN = new THREE.BoxGeometry(18.4, 0.2, 0.4);
  const curbN = new THREE.Mesh(curbGeoN, mat.concreteCurb);
  curbN.position.set(0, 0.1, -7.2);
  parkingLotGroup.add(curbN);

  const curbGeoS = new THREE.BoxGeometry(18.4, 0.2, 0.4);
  const curbS = new THREE.Mesh(curbGeoS, mat.concreteCurb);
  curbS.position.set(0, 0.1, 7.2);
  parkingLotGroup.add(curbS);

  const curbGeoE = new THREE.BoxGeometry(0.4, 0.2, 14.4);
  const curbE = new THREE.Mesh(curbGeoE, mat.concreteCurb);
  curbE.position.set(9.2, 0.1, 0);
  parkingLotGroup.add(curbE);

  // 6 Marked White Parking Bays
  const stallXOffsets = [-6.0, -2.4, 1.2, 4.8, 8.4];
  for (let s = -6.0; s <= 6.0; s += 2.4) {
    // Stall divider lines
    const lineGeo = new THREE.PlaneGeometry(0.14, 4.8);
    const lineMesh = new THREE.Mesh(lineGeo, mat.roadMarkingWhite);
    lineMesh.rotation.x = -Math.PI / 2;
    lineMesh.position.set(s, 0.03, -3.8);
    parkingLotGroup.add(lineMesh);
  }

  // Parking Stalls Wheel-stops
  for (let s = -4.8; s <= 4.8; s += 2.4) {
    const stopGeo = new THREE.BoxGeometry(1.6, 0.14, 0.25);
    const stopMesh = new THREE.Mesh(stopGeo, mat.concreteCurb);
    stopMesh.position.set(s, 0.08, -5.8);
    parkingLotGroup.add(stopMesh);
  }

  // Parking Lot Streetlamp Pole
  const lotLampPole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 4.2, 8), mat.streetLampMetal);
  lotLampPole.position.set(0, 2.1, -6.8);
  parkingLotGroup.add(lotLampPole);

  const lotLampBulb = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), mat.streetLampBulb);
  lotLampBulb.position.set(0, 4.2, -6.4);
  parkingLotGroup.add(lotLampBulb);

  // 6 Parked Cars of Varied Colors and Models
  const carColors = [
    { color: 0xef4444, x: -4.8, type: "Sport Sedan" },  // Red
    { color: 0x00f2fe, x: -2.4, type: "Cyan EV" },      // Cyan
    { color: 0xfacc15, x: 0.0,  type: "Yellow Coupe" },  // Yellow
    { color: 0xf8fafc, x: 2.4,  type: "White SUV" },    // White
    { color: 0x2563eb, x: 4.8,  type: "Blue Sedan" }     // Blue
  ];

  if (!animatedItems.parkingCars) {
    animatedItems.parkingCars = [];
  }

  carColors.forEach((carSpec, cIdx) => {
    const carGroup = new THREE.Group();
    // Default home stall position in parking lot coordinates
    carGroup.position.set(carSpec.x, 0.05, -3.6);

    const cBodyGeo = new THREE.BoxGeometry(1.5, 0.75, 3.2);
    const cBodyMat = new THREE.MeshStandardMaterial({
      color: carSpec.color,
      roughness: 0.25,
      metalness: 0.65
    });
    const cBody = new THREE.Mesh(cBodyGeo, cBodyMat);
    cBody.position.y = 0.45;
    cBody.castShadow = true;
    carGroup.add(cBody);

    const cCabinGeo = new THREE.BoxGeometry(1.3, 0.55, 1.8);
    const cCabin = new THREE.Mesh(cCabinGeo, mat.buildingDarkSteel);
    cCabin.position.set(0, 0.95, -0.2);
    carGroup.add(cCabin);

    // Headlights
    for (let hx of [-0.5, 0.5]) {
      const hl = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 6), mat.streetLampBulb);
      hl.position.set(hx, 0.45, 1.6);
      carGroup.add(hl);
    }
    // Taillights
    for (let tx of [-0.5, 0.5]) {
      const tl = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 6), mat.hospitalCrossRed);
      tl.position.set(tx, 0.45, -1.6);
      carGroup.add(tl);
    }

    parkingLotGroup.add(carGroup);

    // Save for sequential departure animation
    animatedItems.parkingCars.push({
      mesh: carGroup,
      homeX: carSpec.x,
      homeZ: -3.6,
      carIndex: cIdx,
      totalCars: carColors.length
    });
  });

  commGroup.add(parkingLotGroup);

  interactiveObjects.push(commGroup);
  parent.add(commGroup);
}
