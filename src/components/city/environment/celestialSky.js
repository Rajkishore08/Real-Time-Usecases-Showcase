import * as THREE from 'three';

/**
 * Celestial Sky System: Glowing Sun & Corona (Day/Sunset), Glowing Moon & Halo + Twinkling Starfield (Night)
 */
export function buildCelestialSky(parent, mat, animatedItems) {
  const skyGroup = new THREE.Group();
  skyGroup.name = "CelestialSky";

  // =========================================================================
  // 1. GOLDEN SUN & SOLAR CORONA (Day / Sunset)
  // =========================================================================
  const sunGroup = new THREE.Group();
  sunGroup.position.set(85, 115, 60);

  const sunSphereGeo = new THREE.SphereGeometry(6.5, 24, 24);
  const sunMat = new THREE.MeshBasicMaterial({ color: 0xfff3d0 });
  const sunMesh = new THREE.Mesh(sunSphereGeo, sunMat);
  sunGroup.add(sunMesh);

  // Solar Corona Flare
  const coronaGeo = new THREE.RingGeometry(6.8, 12.5, 32);
  const coronaMat = new THREE.MeshBasicMaterial({
    color: 0xfde047,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending
  });
  const coronaMesh = new THREE.Mesh(coronaGeo, coronaMat);
  coronaMesh.rotation.x = -Math.PI / 4;
  sunGroup.add(coronaMesh);

  skyGroup.add(sunGroup);

  // =========================================================================
  // 2. CELESTIAL MOON & LUNAR SHADE (Night Mode)
  // =========================================================================
  const moonGroup = new THREE.Group();
  moonGroup.position.set(-65, 105, -55);
  moonGroup.visible = false; // Shown at night

  const moonGeo = new THREE.SphereGeometry(5.2, 24, 24);
  const moonMat = new THREE.MeshBasicMaterial({ color: 0xe0f2fe });
  const moonMesh = new THREE.Mesh(moonGeo, moonMat);
  moonGroup.add(moonMesh);

  // Lunar Halo Glow
  const moonHaloGeo = new THREE.RingGeometry(5.5, 10.5, 32);
  const moonHaloMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.28,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending
  });
  const moonHaloMesh = new THREE.Mesh(moonHaloGeo, moonHaloMat);
  moonHaloMesh.rotation.x = -Math.PI / 4;
  moonGroup.add(moonHaloMesh);

  skyGroup.add(moonGroup);

  // =========================================================================
  // 3. TWINKLING STARFIELD (1,400 Celestial Stars for Night Mode)
  // =========================================================================
  const starCount = 1400;
  const starPositions = new Float32Array(starCount * 3);
  const starScales = new Float32Array(starCount);

  for (let i = 0; i < starCount; i++) {
    // Distribute randomly across upper hemisphere
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 0.85 + 0.15); // Upper sky
    const r = 380 + Math.random() * 120;

    starPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    starPositions[i * 3 + 1] = r * Math.cos(phi);
    starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    starScales[i] = Math.random() * 2.5 + 1.0;
  }

  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

  const starMat = new THREE.PointsMaterial({
    color: 0xdbeafe,
    size: 2.2,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });

  const starField = new THREE.Points(starGeo, starMat);
  starField.visible = false;
  skyGroup.add(starField);

  // Register in animatedItems for continuous dynamic updates & lighting transitions
  animatedItems.celestialSky = {
    sunGroup,
    coronaMesh,
    moonGroup,
    starField
  };

  parent.add(skyGroup);
}
