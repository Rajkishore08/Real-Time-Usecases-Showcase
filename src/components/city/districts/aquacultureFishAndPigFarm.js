import * as THREE from 'three';
import { createStaticHumanMesh } from '../simulation/populatedHumans.js';

/** Helper to construct a detailed, stylized 3D Pig character */
export function createPigMesh(mat, scale = 1.0) {
  const pigRoot = new THREE.Group();

  // 1. Plump Rounded Pig Body
  const bodyGeo = new THREE.BoxGeometry(1.5 * scale, 1.0 * scale, 0.95 * scale);
  const body = new THREE.Mesh(bodyGeo, mat.pigSkin);
  body.position.set(0, 0.65 * scale, 0);
  body.castShadow = true;
  pigRoot.add(body);

  // 2. Head Group (Animatable head snouting)
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.75 * scale, 0.85 * scale);

  const headGeo = new THREE.BoxGeometry(0.75 * scale, 0.75 * scale, 0.65 * scale);
  const head = new THREE.Mesh(headGeo, mat.pigSkin);
  head.position.set(0, 0, 0);
  head.castShadow = true;
  headGroup.add(head);

  // Snout Disk
  const snoutGeo = new THREE.BoxGeometry(0.42 * scale, 0.32 * scale, 0.28 * scale);
  const snout = new THREE.Mesh(snoutGeo, mat.pigSnout);
  snout.position.set(0, -0.08 * scale, 0.45 * scale);
  headGroup.add(snout);

  // 2 Nostrils
  for (let nx of [-0.09, 0.09]) {
    const nostril = new THREE.Mesh(
      new THREE.SphereGeometry(0.04 * scale, 4, 4),
      mat.buildingDarkSteel
    );
    nostril.position.set(nx * scale, -0.08 * scale, 0.6 * scale);
    headGroup.add(nostril);
  }

  // 2 Floppy Triangular Ears
  for (let ex of [-0.32, 0.32]) {
    const ear = new THREE.Mesh(
      new THREE.ConeGeometry(0.18 * scale, 0.35 * scale, 3),
      mat.pigSnout
    );
    ear.position.set(ex * scale, 0.42 * scale, 0.05 * scale);
    ear.rotation.z = ex > 0 ? -0.4 : 0.4;
    ear.rotation.x = 0.3;
    headGroup.add(ear);
  }

  // 2 Shiny Eyes
  for (let ey of [-0.28, 0.28]) {
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.045 * scale, 6, 6),
      mat.buildingDarkSteel
    );
    eye.position.set(ey * scale, 0.12 * scale, 0.34 * scale);
    headGroup.add(eye);
  }

  pigRoot.add(headGroup);

  // 3. 4 Short Sturdy Legs with Hooves
  const legOffsets = [
    { x: -0.45, z: -0.45 },
    { x: 0.45, z: -0.45 },
    { x: -0.45, z: 0.45 },
    { x: 0.45, z: 0.45 }
  ];
  legOffsets.forEach(leg => {
    const legGeo = new THREE.CylinderGeometry(0.12 * scale, 0.14 * scale, 0.55 * scale, 8);
    const legMesh = new THREE.Mesh(legGeo, mat.pigSkin);
    legMesh.position.set(leg.x * scale, 0.28 * scale, leg.z * scale);
    legMesh.castShadow = true;
    pigRoot.add(legMesh);

    // Dark Hoof Tip
    const hoofGeo = new THREE.CylinderGeometry(0.13 * scale, 0.14 * scale, 0.12 * scale, 8);
    const hoof = new THREE.Mesh(hoofGeo, mat.buildingDarkSteel);
    hoof.position.set(leg.x * scale, 0.06 * scale, leg.z * scale);
    pigRoot.add(hoof);
  });

  // 4. Curly Pig Tail
  const tailGeo = new THREE.TorusGeometry(0.16 * scale, 0.045 * scale, 6, 12, Math.PI * 1.6);
  const tail = new THREE.Mesh(tailGeo, mat.pigSkin);
  tail.position.set(0, 0.75 * scale, -0.78 * scale);
  tail.rotation.y = Math.PI / 2;
  pigRoot.add(tail);

  return {
    group: pigRoot,
    head: headGroup,
    tail: tail
  };
}

/**
 * Smart Aquaculture & Livestock: Offshore Marine Sea Cages (Fish Farm) & Inland Smart Pig Farm
 */
export function buildAquacultureFishFarm(parent, mat, animatedItems, interactiveObjects) {
  const aquaGroup = new THREE.Group();
  aquaGroup.name = "SmartAquaculture_FishFarms";

  // =========================================================================
  // 1. Offshore Marine Aquaculture Sea Cages (Bay Water at x = -108, z = 22)
  // =========================================================================
  const marineFarmGroup = new THREE.Group();
  marineFarmGroup.name = "District_FishFarm";
  marineFarmGroup.userData = { districtId: "fishfarm" };
  marineFarmGroup.position.set(-108, 0, 22);

  // Dedicated Deep Ocean Blue Water Inset under the Cages
  const lagoonWaterGeo = new THREE.PlaneGeometry(38, 38);
  const lagoonWater = new THREE.Mesh(lagoonWaterGeo, mat.water);
  lagoonWater.rotation.x = -Math.PI / 2;
  lagoonWater.position.set(0, 0.06, 0);
  lagoonWater.receiveShadow = true;
  marineFarmGroup.add(lagoonWater);

  // 4 Circular Floating Sea Cages
  const cageOffsets = [
    { x: -7.5, z: -7.5, id: "CAGE-01" },
    { x: 7.5, z: -7.5, id: "CAGE-02" },
    { x: -7.5, z: 7.5, id: "CAGE-03" },
    { x: 7.5, z: 7.5, id: "CAGE-04" }
  ];

  cageOffsets.forEach((cage, cIdx) => {
    const cageRoot = new THREE.Group();
    cageRoot.position.set(cage.x, 0, cage.z);

    // Deep Water Surface inside this Cage
    const cageWaterGeo = new THREE.CylinderGeometry(4.7, 4.7, 0.12, 24);
    const cageWater = new THREE.Mesh(cageWaterGeo, mat.riverWater);
    cageWater.position.y = 0.08;
    cageWater.receiveShadow = true;
    cageRoot.add(cageWater);

    // Double Floating Collar Ring (HDPE Pipe)
    const floatRingGeo1 = new THREE.TorusGeometry(4.8, 0.28, 8, 24);
    const floatRing1 = new THREE.Mesh(floatRingGeo1, mat.buildingDarkSteel);
    floatRing1.rotation.x = Math.PI / 2;
    floatRing1.position.y = 0.2;
    cageRoot.add(floatRing1);

    const floatRingGeo2 = new THREE.TorusGeometry(4.2, 0.22, 8, 24);
    const floatRing2 = new THREE.Mesh(floatRingGeo2, mat.walmartBlue);
    floatRing2.rotation.x = Math.PI / 2;
    floatRing2.position.y = 0.2;
    cageRoot.add(floatRing2);

    // Subsurface Netting Enclosure
    const netGeo = new THREE.CylinderGeometry(4.5, 4.2, 3.2, 16, 1, true);
    const netMesh = new THREE.Mesh(netGeo, mat.fishNetMat);
    netMesh.position.y = -1.6;
    cageRoot.add(netMesh);

    // Central Automated Solar Feed Dispenser & Cannon
    const feederPylonGeo = new THREE.CylinderGeometry(0.12, 0.15, 2.2, 8);
    const feederPylon = new THREE.Mesh(feederPylonGeo, mat.buildingDarkSteel);
    feederPylon.position.set(0, 1.1, 0);
    cageRoot.add(feederPylon);

    const feedHopperGeo = new THREE.CylinderGeometry(0.8, 0.4, 0.9, 12);
    const feedHopper = new THREE.Mesh(feedHopperGeo, mat.buoyOrange);
    feedHopper.position.set(0, 2.2, 0);
    cageRoot.add(feedHopper);

    // Solar Panel on Feeder
    const solarGeo = new THREE.BoxGeometry(0.9, 0.05, 0.9);
    const solar = new THREE.Mesh(solarGeo, mat.buildingGlassCyan);
    solar.position.set(0, 2.7, 0);
    solar.rotation.x = 0.3;
    cageRoot.add(solar);

    // Aeration Bubbler Foam Ring
    const aeratorGeo = new THREE.RingGeometry(1.8, 3.2, 16);
    const aerator = new THREE.Mesh(aeratorGeo, mat.fishWaterFoam);
    aerator.rotation.x = -Math.PI / 2;
    aerator.position.set(0, 0.12, 0);
    cageRoot.add(aerator);
    animatedItems.fishAerators.push(aerator);

    // Animated Schooling Fish jumping/swimming inside the cage
    const schoolGroup = new THREE.Group();
    for (let f = 0; f < 4; f++) {
      const fish = new THREE.Group();
      // Fish Body
      const fBodyGeo = new THREE.ConeGeometry(0.16, 0.7, 6);
      const fBody = new THREE.Mesh(fBodyGeo, mat.fishScaleSilver);
      fBody.rotation.x = Math.PI / 2;
      fish.add(fBody);

      // Tail Fin
      const fTailGeo = new THREE.BoxGeometry(0.04, 0.28, 0.22);
      const fTail = new THREE.Mesh(fTailGeo, mat.fishFinOrange);
      fTail.position.set(0, 0, -0.42);
      fish.add(fTail);

      const angle = (f / 4) * Math.PI * 2;
      const radius = 2.4 + Math.sin(f * 2.0) * 0.8;
      fish.position.set(Math.cos(angle) * radius, -0.2, Math.sin(angle) * radius);
      fish.rotation.y = angle + Math.PI / 2;
      fish.userData = { angle, radius, speed: 1.2 + (cIdx + f) * 0.2, phase: f + cIdx };
      schoolGroup.add(fish);
    }
    cageRoot.add(schoolGroup);
    animatedItems.fishSchools.push(schoolGroup);

    marineFarmGroup.add(cageRoot);
  });

  // Interconnecting Catwalk Pontoons
  const catwalkXGeo = new THREE.BoxGeometry(22, 0.2, 1.2);
  const catwalkX = new THREE.Mesh(catwalkXGeo, mat.aquacultureWalkway);
  catwalkX.position.set(0, 0.2, 0);
  marineFarmGroup.add(catwalkX);

  const catwalkZGeo = new THREE.BoxGeometry(1.2, 0.2, 22);
  const catwalkZ = new THREE.Mesh(catwalkZGeo, mat.aquacultureWalkway);
  catwalkZ.position.set(0, 0.2, 0);
  marineFarmGroup.add(catwalkZ);

  // Moored Aquaculture Service & Feed Supply Catamaran Vessel
  const aquaBoat = new THREE.Group();
  aquaBoat.position.set(16, 0, 0);

  // Twin Hulls
  for (let h = -1.6; h <= 1.6; h += 3.2) {
    const hullGeo = new THREE.BoxGeometry(1.2, 0.9, 10);
    const hull = new THREE.Mesh(hullGeo, mat.buildingDarkSteel);
    hull.position.set(h, 0.45, 0);
    aquaBoat.add(hull);
  }
  // Deck
  const deckGeo = new THREE.BoxGeometry(4.4, 0.3, 8.5);
  const deck = new THREE.Mesh(deckGeo, mat.trailerWhite);
  deck.position.set(0, 0.95, -0.4);
  aquaBoat.add(deck);

  // Wheelhouse Cabin
  const whGeo = new THREE.BoxGeometry(3.2, 1.8, 2.8);
  const wh = new THREE.Mesh(whGeo, mat.walmartBlue);
  wh.position.set(0, 2.0, -2.4);
  aquaBoat.add(wh);

  const whWin = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.8, 2.0), mat.buildingGlassCyan);
  whWin.position.set(0, 2.2, -2.4);
  aquaBoat.add(whWin);

  // Feed Crane Arm
  const craneArm = new THREE.Mesh(new THREE.BoxGeometry(0.3, 3.5, 0.3), mat.catYellow);
  craneArm.position.set(1.2, 2.4, 1.5);
  craneArm.rotation.z = -0.4;
  aquaBoat.add(craneArm);

  marineFarmGroup.add(aquaBoat);

  // Solar Water Quality Telemetry Buoy (DO, Salinity, Temperature)
  const buoyGeo = new THREE.CylinderGeometry(1.0, 1.4, 1.2, 12);
  const buoy = new THREE.Mesh(buoyGeo, mat.buoyOrange);
  buoy.position.set(-18, 0.6, -16);
  marineFarmGroup.add(buoy);

  const buoyMast = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 2.2, 8), mat.buildingDarkSteel);
  buoyMast.position.set(-18, 2.0, -16);
  marineFarmGroup.add(buoyMast);

  const buoyBeacon = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), mat.neonEmerald);
  buoyBeacon.position.set(-18, 3.1, -16);
  marineFarmGroup.add(buoyBeacon);

  interactiveObjects.push(marineFarmGroup);
  aquaGroup.add(marineFarmGroup);

  // =========================================================================
  // 2. Inland Livestock Breeding & Smart Pig Farm (Far Southern Pasture x = 45, z = 85)
  // =========================================================================
  const inlandFarmGroup = new THREE.Group();
  inlandFarmGroup.name = "District_PigFarm";
  inlandFarmGroup.userData = { districtId: "pigfarm" };
  inlandFarmGroup.position.set(45, 0, 85);

  // Concrete & Gravel Farmstead Apron
  const farmPadGeo = new THREE.BoxGeometry(28, 0.3, 24);
  const farmPad = new THREE.Mesh(farmPadGeo, mat.concretePlaza);
  farmPad.position.set(0, 0.15, 0);
  farmPad.receiveShadow = true;
  inlandFarmGroup.add(farmPad);

  // Mud Wallower Pen Ground Inset (East Pen)
  const mudPenGeo = new THREE.PlaneGeometry(12, 10);
  const mudPen = new THREE.Mesh(mudPenGeo, mat.pigMud);
  mudPen.rotation.x = -Math.PI / 2;
  mudPen.position.set(4.5, 0.31, 2.0);
  mudPen.receiveShadow = true;
  inlandFarmGroup.add(mudPen);

  // Golden Straw Bedding Ground Inset (West Pen)
  const strawPenGeo = new THREE.PlaneGeometry(10, 8);
  const strawPen = new THREE.Mesh(strawPenGeo, mat.pigStraw);
  strawPen.rotation.x = -Math.PI / 2;
  strawPen.position.set(-5.5, 0.31, 2.0);
  strawPen.receiveShadow = true;
  inlandFarmGroup.add(strawPen);

  // Timber Perimeter Ranch Fence
  const fenceMat = mat.treeTrunkWood || mat.treeTrunk;
  const fencePosts = [
    [-13.8, -11.8], [13.8, -11.8], [-13.8, 11.8], [13.8, 11.8],
    [0, -11.8], [0, 11.8], [-13.8, 0], [13.8, 0], [0, 0]
  ];
  fencePosts.forEach(([px, pz]) => {
    const postGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.4, 6);
    const post = new THREE.Mesh(postGeo, fenceMat);
    post.position.set(px, 0.7, pz);
    post.castShadow = true;
    inlandFarmGroup.add(post);
  });

  // Top Fence Rails
  const northRail = new THREE.Mesh(new THREE.BoxGeometry(27.6, 0.1, 0.1), fenceMat);
  northRail.position.set(0, 1.1, -11.8);
  inlandFarmGroup.add(northRail);

  const southRail = new THREE.Mesh(new THREE.BoxGeometry(27.6, 0.1, 0.1), fenceMat);
  southRail.position.set(0, 1.1, 11.8);
  inlandFarmGroup.add(southRail);

  const midFence = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 14), fenceMat);
  midFence.position.set(0, 1.1, 3.0);
  inlandFarmGroup.add(midFence);

  // Wooden Feed Trough
  const troughGeo = new THREE.BoxGeometry(4.2, 0.5, 1.0);
  const trough = new THREE.Mesh(troughGeo, fenceMat);
  trough.position.set(0, 0.4, -2.5);
  trough.castShadow = true;
  inlandFarmGroup.add(trough);

  const cornFeed = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.1, 0.7), mat.cropGold);
  cornFeed.position.set(0, 0.6, -2.5);
  inlandFarmGroup.add(cornFeed);

  // 3D Modeled Animated Pigs
  const pigsData = [
    { scale: 1.15, pos: [0, 0.3, -1.2], rotY: 0 },         // Mother Sow at feed trough
    { scale: 1.10, pos: [5.0, 0.3, 3.0], rotY: 1.6 },      // Boar roaming mud pen
    { scale: 0.95, pos: [-5.0, 0.3, 2.5], rotY: -1.2 },    // Foraging pig on straw
    { scale: 0.55, pos: [2.5, 0.3, 1.2], rotY: 0.7 },      // Piglet in mud
    { scale: 0.50, pos: [-6.5, 0.3, 4.5], rotY: 2.2 }      // Resting piglet
  ];

  pigsData.forEach((pd, pIdx) => {
    const pig = createPigMesh(mat, pd.scale);
    pig.group.position.set(pd.pos[0], pd.pos[1], pd.pos[2]);
    pig.group.rotation.y = pd.rotY;
    inlandFarmGroup.add(pig.group);
    animatedItems.pigs.push(pig);
  });

  // Livestock Feeding Barn Shelter & Filtration Shed
  const shedGeo = new THREE.BoxGeometry(10, 4.5, 6.0);
  const shed = new THREE.Mesh(shedGeo, mat.buildingDarkSteel);
  shed.position.set(0, 2.25, -8.5);
  shed.castShadow = true;
  inlandFarmGroup.add(shed);

  // Shaded Shelter Overhang
  const overhangGeo = new THREE.BoxGeometry(10.4, 0.2, 3.5);
  const overhang = new THREE.Mesh(overhangGeo, mat.fireEngineRed);
  overhang.position.set(0, 4.5, -5.8);
  overhang.rotation.x = 0.15;
  inlandFarmGroup.add(overhang);

  // Silo & Automated Feed Hopper
  const siloGeo = new THREE.CylinderGeometry(1.6, 1.6, 5.8, 16);
  const silo = new THREE.Mesh(siloGeo, mat.highVoltagePylonSteel);
  silo.position.set(-8.0, 2.9, -8.5);
  silo.castShadow = true;
  inlandFarmGroup.add(silo);

  // Stationed Farm Specialist & Agronomist
  const aquaTech = createStaticHumanMesh(mat, mat.humanCoatWhite, null);
  aquaTech.position.set(7.5, 0.3, -4.5);
  aquaTech.rotation.y = -Math.PI / 4;
  inlandFarmGroup.add(aquaTech);

  interactiveObjects.push(inlandFarmGroup);
  aquaGroup.add(inlandFarmGroup);

  parent.add(aquaGroup);
}
