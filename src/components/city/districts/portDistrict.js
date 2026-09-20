import * as THREE from 'three';

/** District 5: Smart Ports & Deepwater Maritime Harbor (x = -80, z = -26) */
export function buildMaritimePortDistrict(parent, mat, animatedItems, interactiveObjects) {
  const portGroup = new THREE.Group();
  portGroup.name = "District_Ports";
  portGroup.userData = { districtId: "ports" };
  portGroup.position.set(-80, 0, -26);

  // Moored 120m-Scale Cargo Container Ship floating at water level
  const shipRoot = new THREE.Group();
  shipRoot.position.set(-20, -0.4, 0);
  shipRoot.userData = { phase: 0.0 };

  const hullBaseGeo = new THREE.BoxGeometry(10, 3.5, 42);
  const hullBase = new THREE.Mesh(hullBaseGeo, mat.shipHullDark);
  hullBase.castShadow = true;
  shipRoot.add(hullBase);

  const hullBowGeo = new THREE.ConeGeometry(5.0, 7, 4);
  const hullBow = new THREE.Mesh(hullBowGeo, mat.shipHullRed);
  hullBow.rotation.x = Math.PI / 2;
  hullBow.position.set(0, 0, -24.5);
  shipRoot.add(hullBow);

  const containerColors = [mat.containerRed, mat.containerBlue, mat.containerGreen, mat.containerOrange];
  for (let cz = -12; cz <= 12; cz += 4.5) {
    for (let cx = -3; cx <= 3; cx += 3) {
      for (let cy = 0; cy < 3; cy++) {
        const cGeo = new THREE.BoxGeometry(2.4, 2.2, 4.2);
        const cMat = containerColors[Math.abs(Math.floor(cx + cz + cy)) % containerColors.length];
        const cMesh = new THREE.Mesh(cGeo, cMat);
        cMesh.position.set(cx, 2.8 + cy * 2.3, cz);
        cMesh.castShadow = true;
        shipRoot.add(cMesh);
      }
    }
  }

  portGroup.add(shipRoot);
  animatedItems.ships.push(shipRoot);

  // Moving Patrol & Tug Boats sailing across the harbor water
  const boatSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-100, -0.5, -60),
    new THREE.Vector3(-125, -0.5, -10),
    new THREE.Vector3(-115, -0.5, 50),
    new THREE.Vector3(-95, -0.5, 20),
    new THREE.Vector3(-100, -0.5, -60)
  ], true);

  const patrolBoatMesh = new THREE.Group();
  const bHullGeo = new THREE.BoxGeometry(2.4, 1.0, 6.0);
  const bHull = new THREE.Mesh(bHullGeo, mat.trailerWhite);
  patrolBoatMesh.add(bHull);

  const bCabinGeo = new THREE.BoxGeometry(1.8, 1.2, 2.5);
  const bCabin = new THREE.Mesh(bCabinGeo, mat.shipHullDark);
  bCabin.position.set(0, 0.9, -0.5);
  patrolBoatMesh.add(bCabin);

  portGroup.add(patrolBoatMesh);
  animatedItems.patrolBoats.push({
    mesh: patrolBoatMesh,
    curve: boatSpline,
    progress: 0.0,
    speed: 1.0,
    userData: { phase: 0.0 }
  });

  // STS Container Gantry Cranes on Quayside
  for (let k = 0; k < 2; k++) {
    const craneRoot = new THREE.Group();
    craneRoot.position.set(4, 0.8, -10 + k * 20);

    const legGeo = new THREE.BoxGeometry(1.2, 16, 1.2);
    const leg1 = new THREE.Mesh(legGeo, mat.craneYellow);
    leg1.position.set(-2, 8, -4);
    craneRoot.add(leg1);
    const leg2 = new THREE.Mesh(legGeo, mat.craneYellow);
    leg2.position.set(-2, 8, 4);
    craneRoot.add(leg2);

    const boomGeo = new THREE.BoxGeometry(24, 1.5, 2.4);
    const boom = new THREE.Mesh(boomGeo, mat.craneYellow);
    boom.position.set(-6, 16, 0);
    boom.castShadow = true;
    craneRoot.add(boom);

    portGroup.add(craneRoot);
  }

  // Realistic Coastal Lighthouse on Rocky Breakwater
  const lighthouseRoot = new THREE.Group();
  lighthouseRoot.position.set(4, 0.4, -48);

  const lhBaseGeo = new THREE.CylinderGeometry(3.0, 3.8, 3.0, 16);
  const lhBase = new THREE.Mesh(lhBaseGeo, mat.groundRock);
  lhBase.position.set(0, 1.5, 0);
  lhBase.receiveShadow = true;
  lighthouseRoot.add(lhBase);

  const lhTowerGeo = new THREE.CylinderGeometry(1.6, 2.4, 13, 16);
  const lhTower = new THREE.Mesh(lhTowerGeo, mat.buildingWhite);
  lhTower.position.set(0, 9.5, 0);
  lhTower.castShadow = true;
  lighthouseRoot.add(lhTower);

  for (let s = 0; s < 3; s++) {
    const ringGeo = new THREE.CylinderGeometry(1.7 + s * 0.2, 1.8 + s * 0.2, 1.2, 16);
    const ring = new THREE.Mesh(ringGeo, mat.hospitalCrossRed);
    ring.position.set(0, 6 + s * 3.2, 0);
    lighthouseRoot.add(ring);
  }

  const lhLanternGeo = new THREE.CylinderGeometry(1.9, 1.9, 2.2, 16);
  const lhLantern = new THREE.Mesh(lhLanternGeo, mat.buildingGlassCyan);
  lhLantern.position.set(0, 16.5, 0);
  lighthouseRoot.add(lhLantern);

  const lhDomeGeo = new THREE.ConeGeometry(2.1, 1.4, 16);
  const lhDome = new THREE.Mesh(lhDomeGeo, mat.buildingDarkSteel);
  lhDome.position.set(0, 18.3, 0);
  lighthouseRoot.add(lhDome);

  // Rotating Searchlight Lens & Volumetric Light Beam Pointing OUT into West Ocean
  const lanternHead = new THREE.Group();
  lanternHead.position.set(0, 16.5, 0);

  const lensBulbGeo = new THREE.SphereGeometry(0.5, 12, 12);
  const lensBulb = new THREE.Mesh(lensBulbGeo, mat.neonCyan);
  lanternHead.add(lensBulb);

  // Volumetric searchlight beam: starts narrow (radius 0.35) at bulb and expands wide (radius 10.0) out to sea
  const beamGeo = new THREE.CylinderGeometry(10.0, 0.35, 52, 24, 1, true);
  beamGeo.translate(0, 26, 0);
  const beamMesh = new THREE.Mesh(beamGeo, mat.lighthouseBeamMat);
  beamMesh.rotation.z = Math.PI / 2; // Projects outward toward sea
  lanternHead.add(beamMesh);

  lighthouseRoot.add(lanternHead);
  animatedItems.lighthouseBeam = lanternHead;

  portGroup.add(lighthouseRoot);
  interactiveObjects.push(portGroup);
  parent.add(portGroup);
}
