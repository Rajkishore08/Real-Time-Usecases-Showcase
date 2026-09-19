import * as THREE from 'three';
import { createAmrRobotMesh } from '../simulation/populatedHumans';

/** District 1: Commercial Real Estate & GCC Tech Center (Center: x = 0, z = 0) */
export function buildCommercialDistrict(parent, mat, animatedItems, interactiveObjects) {
  const commGroup = new THREE.Group();
  commGroup.name = "District_Commercial";
  commGroup.userData = { districtId: "commercial" };
  commGroup.position.set(0, 0, 0);

  const tower1BaseGeo = new THREE.BoxGeometry(10, 24, 10);
  const tower1Base = new THREE.Mesh(tower1BaseGeo, mat.buildingDarkSteel);
  tower1Base.position.set(-6, 12, -6);
  tower1Base.castShadow = true;
  tower1Base.receiveShadow = true;
  commGroup.add(tower1Base);

  const tower1GlassGeo = new THREE.BoxGeometry(10.2, 22, 10.2);
  const tower1Glass = new THREE.Mesh(tower1GlassGeo, mat.buildingGlassAzure);
  tower1Glass.position.set(-6, 12, -6);
  commGroup.add(tower1Glass);

  const spireGeo = new THREE.ConeGeometry(2.5, 8, 8);
  const spireMesh = new THREE.Mesh(spireGeo, mat.buildingDarkSteel);
  spireMesh.position.set(-6, 28, -6);
  commGroup.add(spireMesh);

  const antennaGeo = new THREE.CylinderGeometry(0.08, 0.08, 6, 6);
  const antennaMesh = new THREE.Mesh(antennaGeo, mat.buildingDarkSteel);
  antennaMesh.position.set(-6, 35, -6);
  commGroup.add(antennaMesh);

  const beaconGeo = new THREE.SphereGeometry(0.25, 8, 8);
  const beaconMesh = new THREE.Mesh(beaconGeo, mat.neonRose);
  beaconMesh.position.set(-6, 38, -6);
  commGroup.add(beaconMesh);

  const tower2Geo = new THREE.BoxGeometry(12, 18, 9);
  const tower2Mesh = new THREE.Mesh(tower2Geo, mat.buildingWhite);
  tower2Mesh.position.set(7, 9, 6);
  tower2Mesh.castShadow = true;
  tower2Mesh.receiveShadow = true;
  commGroup.add(tower2Mesh);

  const padGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.4, 16);
  const padMesh = new THREE.Mesh(padGeo, mat.concretePlaza);
  padMesh.position.set(7, 18.2, 6);
  commGroup.add(padMesh);

  const padRingGeo = new THREE.RingGeometry(2.4, 2.7, 16);
  const padRing = new THREE.Mesh(padRingGeo, mat.helipadYellow);
  padRing.rotation.x = -Math.PI / 2;
  padRing.position.set(7, 18.42, 6);
  commGroup.add(padRing);

  // Security Patrol AMR Robot on the Commercial Plaza
  const plazaAmrSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(12, 0.2, 12),
    new THREE.Vector3(12, 0.2, -12),
    new THREE.Vector3(-12, 0.2, -12),
    new THREE.Vector3(-12, 0.2, 12)
  ], true);

  const amrMesh = createAmrRobotMesh(mat);
  commGroup.add(amrMesh);
  animatedItems.amrRobots.push({
    mesh: amrMesh,
    curve: plazaAmrSpline,
    progress: 0.0,
    speed: 0.8
  });

  interactiveObjects.push(commGroup);
  parent.add(commGroup);
}
