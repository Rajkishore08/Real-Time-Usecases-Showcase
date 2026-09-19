import * as THREE from 'three';

/**
 * Builds Road Traffic Simulation (Sedans, Cyber-trucks, Delivery Vans on highway spline)
 */
export function buildTrafficSimulation(parent, mat, animatedItems) {
  const trafficGroup = new THREE.Group();
  trafficGroup.name = "TrafficSimulation";

  const ringPoints = [];
  const segments = 16;
  for (let s = 0; s < segments; s++) {
    const a = (s / segments) * Math.PI * 2;
    ringPoints.push(new THREE.Vector3(Math.cos(a) * 54, 0, Math.sin(a) * 54));
  }
  const highwaySpline = new THREE.CatmullRomCurve3(ringPoints, true);

  const vehicleTypes = [
    { color: 0x00f2fe, scale: [1.6, 0.9, 3.2], speed: 1.0, type: "EV Sedan" },
    { color: 0xf59e0b, scale: [1.8, 1.2, 3.6], speed: 0.85, type: "Cyber SUV" },
    { color: 0xf8fafc, scale: [1.9, 1.5, 4.4], speed: 0.75, type: "Delivery Van" },
    { color: 0xef4444, scale: [1.5, 0.8, 3.0], speed: 1.15, type: "Sport Hatch" },
    { color: 0x10b981, scale: [1.7, 1.0, 3.4], speed: 0.95, type: "Taxi" }
  ];

  for (let v = 0; v < 8; v++) {
    const vSpec = vehicleTypes[v % vehicleTypes.length];
    const vMesh = new THREE.Group();

    const bodyMat = new THREE.MeshStandardMaterial({
      color: vSpec.color,
      roughness: 0.25,
      metalness: 0.6
    });
    const bodyGeo = new THREE.BoxGeometry(vSpec.scale[0], vSpec.scale[1], vSpec.scale[2]);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, vSpec.scale[1] / 2, 0);
    body.castShadow = true;
    vMesh.add(body);

    const hlGeo = new THREE.SphereGeometry(0.12, 6, 6);
    const hlMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const hl1 = new THREE.Mesh(hlGeo, hlMat);
    hl1.position.set(vSpec.scale[0] * 0.35, vSpec.scale[1] * 0.4, -vSpec.scale[2] * 0.5);
    vMesh.add(hl1);
    const hl2 = hl1.clone();
    hl2.position.x = -vSpec.scale[0] * 0.35;
    vMesh.add(hl2);

    const tlMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const tl1 = new THREE.Mesh(hlGeo, tlMat);
    tl1.position.set(vSpec.scale[0] * 0.35, vSpec.scale[1] * 0.4, vSpec.scale[2] * 0.5);
    vMesh.add(tl1);
    const tl2 = tl1.clone();
    tl2.position.x = -vSpec.scale[0] * 0.35;
    vMesh.add(tl2);

    trafficGroup.add(vMesh);
    animatedItems.vehicles.push({
      mesh: vMesh,
      curve: highwaySpline,
      progress: v / 8,
      speed: vSpec.speed,
      yOffset: 0.1
    });
  }

  parent.add(trafficGroup);
}
