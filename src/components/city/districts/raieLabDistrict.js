import * as THREE from 'three';

/**
 * District: ARCS - RAIE Lab (Research Academy of Innovation & Excellence)
 * Location in City Center Plaza East: (x = 16, z = -15)
 * Features an interactive 3D Innovation Lab building with visible robotic arms,
 * humanoid robot, 3D printer, smart kit bench, and interactive click trigger.
 */
export function buildRaieLabDistrict(parent, mat, animatedItems, interactiveObjects, onOpenLabModal) {
  const labGroup = new THREE.Group();
  labGroup.name = "District_RaieLab";
  labGroup.userData = { 
    districtId: "raie_lab", 
    districtName: "ARCS - RAIE Innovation Lab",
    isRaieLab: true,
    onClick: () => onOpenLabModal?.()
  };
  labGroup.position.set(16, 0, -15);

  // Dedicated Materials
  const labGlassAzure = new THREE.MeshStandardMaterial({
    color: 0x00f2fe,
    roughness: 0.08,
    metalness: 0.85,
    transparent: true,
    opacity: 0.75
  });
  const labGlowCyan = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
  const labGlowGold = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
  const robotBlueMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.25, metalness: 0.7 });
  const robotYellowMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3, metalness: 0.6 });
  const robotWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2, metalness: 0.3 });
  const printerOrangeMat = new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.3, metalness: 0.5, transparent: true, opacity: 0.85 });
  const floorWoodMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7, metalness: 0.2 });

  // -------------------------------------------------------------------------
  // 1. Concrete Foundation Plinth
  // -------------------------------------------------------------------------
  const basePlinth = new THREE.Mesh(
    new THREE.BoxGeometry(13.5, 0.4, 11.5),
    mat.buildingDarkSteel
  );
  basePlinth.position.set(0, 0.2, 0);
  basePlinth.receiveShadow = true;
  labGroup.add(basePlinth);

  // Glowing Cyan Perimeter Ground Inset
  const glowEdge = new THREE.Mesh(
    new THREE.BoxGeometry(13.8, 0.1, 11.8),
    labGlowCyan
  );
  glowEdge.position.set(0, 0.05, 0);
  labGroup.add(glowEdge);

  // -------------------------------------------------------------------------
  // 2. Main Two-Story Innovation Lab Glass & Titanium Atrium
  // -------------------------------------------------------------------------
  // Interior Floor Slab (Ground floor & Mezzanine)
  const groundFloor = new THREE.Mesh(new THREE.BoxGeometry(12.6, 0.15, 10.6), floorWoodMat);
  groundFloor.position.set(0, 0.45, 0);
  labGroup.add(groundFloor);

  // Solid Rear & Side Structural Pillars
  const rearWall = new THREE.Mesh(new THREE.BoxGeometry(12.8, 7.5, 0.6), mat.buildingDarkSteel);
  rearWall.position.set(0, 4.15, -5.2);
  rearWall.castShadow = true;
  labGroup.add(rearWall);

  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.6, 7.5, 10.6), mat.buildingDarkSteel);
  leftWall.position.set(-6.1, 4.15, 0);
  leftWall.castShadow = true;
  labGroup.add(leftWall);

  // Transparent Front & Right Glass Curtain Walls (Shows inside lab items!)
  const frontGlass = new THREE.Mesh(new THREE.BoxGeometry(12.8, 7.2, 0.15), labGlassAzure);
  frontGlass.position.set(0, 4.0, 5.2);
  labGroup.add(frontGlass);

  const rightGlass = new THREE.Mesh(new THREE.BoxGeometry(0.15, 7.2, 10.6), labGlassAzure);
  rightGlass.position.set(6.1, 4.0, 0);
  labGroup.add(rightGlass);

  // Sleek Overhanging Solar Canopy Roof
  const roofCanopy = new THREE.Mesh(new THREE.BoxGeometry(14.2, 0.6, 12.4), mat.buildingDarkSteel);
  roofCanopy.position.set(0, 8.0, 0);
  roofCanopy.castShadow = true;
  labGroup.add(roofCanopy);

  // Roof Solar Grid Texture
  const solarPanel = new THREE.Mesh(new THREE.BoxGeometry(13.2, 0.08, 11.2), labGlassAzure);
  solarPanel.position.set(0, 8.35, 0);
  labGroup.add(solarPanel);

  // -------------------------------------------------------------------------
  // 3. Illuminated "ARCS - RAIE LAB" Signage Lockup
  // -------------------------------------------------------------------------
  // Top Front Fascia Sign
  const signBacking = new THREE.Mesh(new THREE.BoxGeometry(9.6, 1.2, 0.25), mat.buildingDarkSteel);
  signBacking.position.set(0, 6.9, 5.4);
  labGroup.add(signBacking);

  const signTextGlow = new THREE.Mesh(new THREE.BoxGeometry(9.0, 0.8, 0.08), labGlowCyan);
  signTextGlow.position.set(0, 6.9, 5.55);
  labGroup.add(signTextGlow);

  // -------------------------------------------------------------------------
  // 4. Interior Visible Lab Hardware (Robotic Arms, Humanoid, 3D Printer)
  // -------------------------------------------------------------------------
  // Main Lab Workbench (Front Center)
  const bench1 = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.8, 1.6), mat.buildingWarmGray);
  bench1.position.set(-2.2, 0.85, 2.4);
  bench1.castShadow = true;
  labGroup.add(bench1);

  // LeRobot SO-ARM101 (Blue Robotic Arm on Front Bench)
  const armBase = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 0.3, 12), mat.buildingDarkSteel);
  armBase.position.set(-2.2, 1.4, 2.4);
  labGroup.add(armBase);

  const armLink1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.9, 0.2), robotBlueMat);
  armLink1.position.set(-2.2, 1.9, 2.3);
  armLink1.rotation.z = -0.3;
  labGroup.add(armLink1);

  const armLink2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.8, 0.18), robotBlueMat);
  armLink2.position.set(-1.9, 2.5, 2.5);
  armLink2.rotation.z = 0.5;
  labGroup.add(armLink2);

  const gripper = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.15, 0.2), mat.buildingDarkSteel);
  gripper.position.set(-1.6, 2.8, 2.5);
  labGroup.add(gripper);

  // Ainex Humanoid BiPed Robot on Display Pedestal (Right Side)
  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.9, 0.6, 16), mat.buildingDarkSteel);
  pedestal.position.set(3.2, 0.75, 2.2);
  labGroup.add(pedestal);

  const humanoidGroup = new THREE.Group();
  humanoidGroup.position.set(3.2, 1.05, 2.2);
  // Legs
  const legL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.8, 0.2), robotWhiteMat);
  legL.position.set(-0.2, 0.4, 0);
  humanoidGroup.add(legL);
  const legR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.8, 0.2), robotWhiteMat);
  legR.position.set(0.2, 0.4, 0);
  humanoidGroup.add(legR);
  // Torso
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.7, 0.3), robotWhiteMat);
  torso.position.set(0, 1.15, 0);
  humanoidGroup.add(torso);
  // Head & Visor
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.28), robotWhiteMat);
  head.position.set(0, 1.65, 0);
  humanoidGroup.add(head);
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.05), labGlowCyan);
  visor.position.set(0, 1.65, 0.15);
  humanoidGroup.add(visor);
  // Arms
  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.6, 0.12), robotWhiteMat);
  armL.position.set(-0.38, 1.15, 0);
  humanoidGroup.add(armL);
  const armR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.6, 0.12), robotWhiteMat);
  armR.position.set(0.38, 1.15, 0);
  humanoidGroup.add(armR);
  labGroup.add(humanoidGroup);

  // Bambu Lab P1S 3D Printer (Orange & Black Box on Rear Desk)
  const printerDesk = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.8, 1.4), mat.buildingWarmGray);
  printerDesk.position.set(3.5, 0.85, -2.5);
  labGroup.add(printerDesk);

  const printerBox = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.4, 1.1), mat.buildingDarkSteel);
  printerBox.position.set(3.5, 1.95, -2.5);
  labGroup.add(printerBox);

  const printerChamber = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.1), printerOrangeMat);
  printerChamber.position.set(3.5, 1.95, -1.94);
  labGroup.add(printerChamber);

  // JetTank Wheel Rover on Center Floor
  const roverGroup = new THREE.Group();
  roverGroup.position.set(0, 0.6, 0);
  const roverChassis = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.45, 1.8), robotBlueMat);
  roverChassis.position.y = 0.3;
  roverGroup.add(roverChassis);
  // 4 Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.25, 12);
  wheelGeo.rotateZ(Math.PI / 2);
  [-0.8, 0.8].forEach(wx => {
    [-0.6, 0.6].forEach(wz => {
      const wMesh = new THREE.Mesh(wheelGeo, mat.heavyTireRubber);
      wMesh.position.set(wx, 0.3, wz);
      roverGroup.add(wMesh);
    });
  });
  // Lidar Dome
  const lidar = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.25, 10), mat.buildingDarkSteel);
  lidar.position.set(0, 0.65, 0.2);
  roverGroup.add(lidar);
  labGroup.add(roverGroup);

  // -------------------------------------------------------------------------
  // 5. Rooftop Telecommunications, Satellite Dish & Interactive Radar Beacon
  // -------------------------------------------------------------------------
  const commMast = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 4.5, 8), mat.highVoltagePylonSteel);
  commMast.position.set(-4.5, 10.5, -3.5);
  labGroup.add(commMast);

  const satDish = new THREE.Mesh(
    new THREE.SphereGeometry(0.6, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    mat.buildingDarkSteel
  );
  satDish.rotation.x = Math.PI / 2.2;
  satDish.position.set(-4.5, 12.6, -3.5);
  labGroup.add(satDish);

  // Interactive Revolving Holographic Radar Beacon
  const beaconRoot = new THREE.Group();
  beaconRoot.position.set(0, 8.8, 0);

  const beaconRing = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.08, 8, 24), labGlowCyan);
  beaconRing.rotation.x = Math.PI / 2;
  beaconRoot.add(beaconRing);

  const beaconCore = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), labGlowGold);
  beaconRoot.add(beaconCore);

  labGroup.add(beaconRoot);

  if (animatedItems && animatedItems.miscSpinners) {
    animatedItems.miscSpinners.push({
      mesh: beaconRoot,
      speed: 0.025
    });
  }

  // -------------------------------------------------------------------------
  // 6. Interactive Click Bounds & Hover Hitbox
  // -------------------------------------------------------------------------
  const clickHitbox = new THREE.Mesh(
    new THREE.BoxGeometry(15, 9, 13),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  clickHitbox.position.set(0, 4.5, 0);
  clickHitbox.userData = {
    districtId: "raie_lab",
    isInteractive: true,
    cursor: "pointer",
    onClick: () => onOpenLabModal?.()
  };
  labGroup.add(clickHitbox);

  interactiveObjects.push(labGroup);
  interactiveObjects.push(clickHitbox);
  parent.add(labGroup);
}
