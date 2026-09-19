import * as THREE from 'three';
import { createAmrRobotMesh } from '../simulation/populatedHumans';

/** District 9: Walmart Distribution Center & Logistics Hub (x = -70, z = 8) */
export function buildWalmartLogisticsDistrict(parent, mat, animatedItems, interactiveObjects) {
  const dcGroup = new THREE.Group();
  dcGroup.name = "District_Warehousing";
  dcGroup.userData = { districtId: "warehousing" };
  dcGroup.position.set(-70, 0, 8);

  const whGeo = new THREE.BoxGeometry(22, 5.5, 16);
  const whMesh = new THREE.Mesh(whGeo, mat.buildingWarmGray);
  whMesh.position.set(0, 2.75, 0);
  whMesh.castShadow = true;
  whMesh.receiveShadow = true;
  dcGroup.add(whMesh);

  const bandGeo = new THREE.BoxGeometry(22.1, 1.0, 16.1);
  const bandMesh = new THREE.Mesh(bandGeo, mat.walmartBlue);
  bandMesh.position.set(0, 4.8, 0);
  dcGroup.add(bandMesh);

  const sparkGeo = new THREE.BoxGeometry(1.8, 1.8, 0.1);
  const spark = new THREE.Mesh(sparkGeo, mat.walmartYellow);
  spark.position.set(0, 4.8, 8.12);
  dcGroup.add(spark);

  for (let d = 0; d < 3; d++) {
    const trailer = new THREE.Group();
    trailer.position.set(-6 + d * 6, 0.6, 12);

    const tGeo = new THREE.BoxGeometry(2.4, 2.8, 7.5);
    const tMesh = new THREE.Mesh(tGeo, mat.trailerWhite);
    tMesh.position.set(0, 1.4, 0);
    tMesh.castShadow = true;
    trailer.add(tMesh);

    dcGroup.add(trailer);
  }

  const whAmrSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-8, 0.2, 6),
    new THREE.Vector3(-8, 0.2, -6),
    new THREE.Vector3(8, 0.2, -6),
    new THREE.Vector3(8, 0.2, 6)
  ], true);

  const whAmr = createAmrRobotMesh(mat);
  dcGroup.add(whAmr);
  animatedItems.amrRobots.push({
    mesh: whAmr,
    curve: whAmrSpline,
    progress: 0.0,
    speed: 0.9
  });

  interactiveObjects.push(dcGroup);
  parent.add(dcGroup);
}
