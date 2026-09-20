import * as THREE from 'three';

/** 
 * District 8: Smart Electrical Substation, High-Voltage Grid & Transformer Yard
 * Position: (x = 90, z = -55) — positioned well outside the circular ring highway
 * Fully optimized geometry with zero z-fighting/flickering.
 */
export function buildPowerGridDistrict(parent, mat, animatedItems, interactiveObjects) {
  const gridGroup = new THREE.Group();
  gridGroup.name = "District_Grid";
  gridGroup.userData = { 
    districtId: "grid", 
    districtName: "High-Voltage Power Grid & Substation",
    themeId: 8
  };
  gridGroup.position.set(90, 0, -55);

  // Dedicated high-quality materials
  const copperBusbarMat = new THREE.MeshStandardMaterial({ color: 0xb87333, roughness: 0.25, metalness: 0.85 });
  const aluminumConductorMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.3, metalness: 0.85 });
  const porcelainBrownMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.18, metalness: 0.1 });
  const transformerGrayMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.35, metalness: 0.65 });
  const radiatorFinMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.45, metalness: 0.7 });
  const safetyYellowMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3, metalness: 0.3 });
  const bessContainerWhite = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25, metalness: 0.2 });
  const sf6BreakerCyanMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3, metalness: 0.6 });
  const fencePostMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4, metalness: 0.8 });
  const statusLedGreen = new THREE.MeshBasicMaterial({ color: 0x22c55e });
  const statusLedCyan = new THREE.MeshBasicMaterial({ color: 0x00f2fe });

  // --------------------------------------------------------------------------
  // 1. SUBSTATION BASE FOUNDATION & CRUSHED GRAVEL BED (No Coplanar Overlaps)
  // --------------------------------------------------------------------------
  // Outer concrete perimeter foundation slab (elev: 0.0 -> 0.2)
  const baseSlabGeo = new THREE.BoxGeometry(47, 0.2, 39);
  const baseSlab = new THREE.Mesh(baseSlabGeo, mat.buildingDarkSteel);
  baseSlab.position.set(0, 0.1, 0);
  baseSlab.receiveShadow = true;
  gridGroup.add(baseSlab);

  // Raised crushed gravel yard bed (elev: 0.2 -> 0.38)
  const gravelBedGeo = new THREE.BoxGeometry(45.6, 0.18, 37.6);
  const gravelBed = new THREE.Mesh(gravelBedGeo, mat.substationGravel || mat.buildingWarmGray);
  gravelBed.position.set(0, 0.29, 0);
  gravelBed.receiveShadow = true;
  gridGroup.add(gravelBed);

  // Security Perimeter Fence (Horizontal Steel Rails + Vertical Posts - Zero Moire)
  const fenceHeight = 2.2;
  const fencePerimeter = [
    { x1: -22.4, z1: -18.4, x2: 22.4, z2: -18.4 }, // North
    { x1: -22.4, z1: 18.4,  x2: 22.4, z2: 18.4 },  // South
    { x1: -22.4, z1: -18.4, x2: -22.4, z2: 18.4 }, // West
    { x1: 22.4,  z1: -18.4, x2: 22.4,  z2: 18.4 }  // East
  ];

  fencePerimeter.forEach(seg => {
    const dx = seg.x2 - seg.x1;
    const dz = seg.z2 - seg.z1;
    const len = Math.hypot(dx, dz);
    const midX = (seg.x1 + seg.x2) / 2;
    const midZ = (seg.z1 + seg.z2) / 2;
    const angle = Math.atan2(dx, dz);

    // 3 Horizontal Guard Rails
    [0.6, 1.3, 2.0].forEach(rh => {
      const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, len, 6), fencePostMat);
      rail.rotation.z = Math.PI / 2;
      rail.rotation.y = angle;
      rail.position.set(midX, 0.38 + rh, midZ);
      gridGroup.add(rail);
    });

    // Vertical Posts along segment
    const postCount = Math.floor(len / 4.5);
    for (let p = 0; p <= postCount; p++) {
      const t = p / postCount;
      const px = seg.x1 + dx * t;
      const pz = seg.z1 + dz * t;
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, fenceHeight, 8), fencePostMat);
      post.position.set(px, 0.38 + fenceHeight / 2, pz);
      gridGroup.add(post);
    }
  });

  // --------------------------------------------------------------------------
  // 2. HEAVY POWER TRANSFORMER BANKS (4 Units - TR-101 to TR-104)
  // --------------------------------------------------------------------------
  const transformerConfigs = [
    { x: -14, z: -6, id: "TR-101" },
    { x: -4,  z: -6, id: "TR-102" },
    { x: 6,   z: -6, id: "TR-103" },
    { x: 16,  z: -6, id: "TR-104" }
  ];

  transformerConfigs.forEach((cfg, idx) => {
    const trGroup = new THREE.Group();
    trGroup.position.set(cfg.x, 0.38, cfg.z);

    // Concrete Plinth (elev: 0.38 -> 0.78)
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.4, 6.0), mat.buildingDarkSteel);
    plinth.position.set(0, 0.2, 0);
    plinth.receiveShadow = true;
    trGroup.add(plinth);

    // Yellow Caution Border Strip (elev: 0.78 -> 0.86)
    const yellowBorder = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.08, 6.2), safetyYellowMat);
    yellowBorder.position.set(0, 0.44, 0);
    trGroup.add(yellowBorder);

    // Main Transformer Tank (elev: 0.86 -> 4.06)
    const tank = new THREE.Mesh(new THREE.BoxGeometry(3.6, 3.2, 3.2), transformerGrayMat);
    tank.position.set(0, 2.06, 0);
    tank.castShadow = true;
    trGroup.add(tank);

    // Dual Radiator Cooling Fin Banks (Left and Right)
    [-2.25, 2.25].forEach(sideX => {
      const radiatorBank = new THREE.Group();
      radiatorBank.position.set(sideX, 2.06, 0);

      // Top & bottom manifolds
      const mTop = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.8, 8), transformerGrayMat);
      mTop.rotation.x = Math.PI / 2;
      mTop.position.set(0, 1.25, 0);
      radiatorBank.add(mTop);

      const mBot = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.8, 8), transformerGrayMat);
      mBot.rotation.x = Math.PI / 2;
      mBot.position.set(0, -1.25, 0);
      radiatorBank.add(mBot);

      // Cooling plates
      for (let f = -1.15; f <= 1.15; f += 0.38) {
        const fin = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.3, 0.08), radiatorFinMat);
        fin.position.set(0, 0, f);
        radiatorBank.add(fin);
      }
      trGroup.add(radiatorBank);
    });

    // Oil Conservator Drum on top (elev: 4.8)
    const conservator = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 3.0, 16), transformerGrayMat);
    conservator.rotation.z = Math.PI / 2;
    conservator.position.set(0, 4.2, -0.8);
    conservator.castShadow = true;
    trGroup.add(conservator);

    // Connecting pipe
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.8, 8), transformerGrayMat);
    pipe.position.set(0, 3.75, -0.8);
    trGroup.add(pipe);

    // 3 High-Voltage Primary Porcelain Bushings on top
    for (let b = -1.05; b <= 1.05; b += 1.05) {
      const bushing = new THREE.Group();
      bushing.position.set(b, 3.66, 0.7);

      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.6, 8), porcelainBrownMat);
      stem.position.set(0, 0.8, 0);
      bushing.add(stem);

      for (let s = 0.3; s <= 1.3; s += 0.3) {
        const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.06, 0.07, 10), porcelainBrownMat);
        skirt.position.set(0, s, 0);
        bushing.add(skirt);
      }

      const term = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), copperBusbarMat);
      term.position.set(0, 1.65, 0);
      bushing.add(term);

      trGroup.add(bushing);
    }

    // 3 Secondary Low-Voltage Bushings
    for (let b = -0.8; b <= 0.8; b += 0.8) {
      const secBushing = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 0.9, 8), porcelainBrownMat);
      secBushing.position.set(b, 4.1, -0.1);
      trGroup.add(secBushing);
    }

    // Local Marshalling Control Kiosk & Status LED
    const kiosk = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.1, 0.35), bessContainerWhite);
    kiosk.position.set(1.35, 1.05, 1.6);
    trGroup.add(kiosk);

    const led = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.04), (idx % 2 === 0) ? statusLedGreen : statusLedCyan);
    led.position.set(1.35, 1.35, 1.79);
    trGroup.add(led);

    gridGroup.add(trGroup);
  });

  // --------------------------------------------------------------------------
  // 3. AUXILIARY DISTRIBUTION TRANSFORMERS & CAPACITOR BANKS
  // --------------------------------------------------------------------------
  [-16, 17].forEach((auxX) => {
    const auxTr = new THREE.Group();
    auxTr.position.set(auxX, 0.38, 5);

    const auxBase = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.3, 3.0), mat.buildingDarkSteel);
    auxBase.position.set(0, 0.15, 0);
    auxTr.add(auxBase);

    const auxTank = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.6, 1.6), transformerGrayMat);
    auxTank.position.set(0, 1.1, 0);
    auxTr.add(auxTank);

    const auxRad = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.2, 1.4), radiatorFinMat);
    auxRad.position.set(1.0, 1.1, 0);
    auxTr.add(auxRad);

    for (let bx = -0.45; bx <= 0.45; bx += 0.45) {
      const bMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.6, 8), porcelainBrownMat);
      bMesh.position.set(bx, 2.15, 0);
      auxTr.add(bMesh);
    }

    gridGroup.add(auxTr);
  });

  // Harmonic Filter & Capacitor Bank
  const capBank = new THREE.Group();
  capBank.position.set(0, 0.38, 5);

  const capPlinth = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.3, 3.2), mat.buildingDarkSteel);
  capPlinth.position.set(0, 0.15, 0);
  capBank.add(capPlinth);

  // Rack frame & silver capacitor cans
  for (let cx = -3.2; cx <= 3.2; cx += 0.8) {
    for (let cz = -0.7; cz <= 0.7; cz += 0.7) {
      const can = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.4, 10), aluminumConductorMat);
      can.position.set(cx, 1.0, cz);
      can.castShadow = true;
      capBank.add(can);

      const topIns = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.35, 8), porcelainBrownMat);
      topIns.position.set(cx, 1.85, cz);
      capBank.add(topIns);
    }
  }
  gridGroup.add(capBank);

  // --------------------------------------------------------------------------
  // 4. SF6 HIGH-VOLTAGE CIRCUIT BREAKERS & INSTRUMENT TRANSFORMERS
  // --------------------------------------------------------------------------
  [-10, -1, 8].forEach(bx => {
    const cbGroup = new THREE.Group();
    cbGroup.position.set(bx, 0.38, -13);

    const ped = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.5, 2.6), mat.buildingDarkSteel);
    ped.position.set(0, 0.75, 0);
    cbGroup.add(ped);

    for (let ph = -0.9; ph <= 0.9; ph += 0.9) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 2.4, 10), sf6BreakerCyanMat);
      col.position.set(0, 2.45, ph);
      col.castShadow = true;
      cbGroup.add(col);

      const head = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.7, 10), transformerGrayMat);
      head.rotation.x = Math.PI / 2;
      head.position.set(0, 3.65, ph);
      cbGroup.add(head);

      const termA = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 6), copperBusbarMat);
      termA.position.set(-0.25, 4.0, ph);
      cbGroup.add(termA);

      const termB = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 6), copperBusbarMat);
      termB.position.set(0.25, 4.0, ph);
      cbGroup.add(termB);
    }
    gridGroup.add(cbGroup);
  });

  // Current & Voltage Instrument Transformers (CT/PT)
  for (let tx = -16; tx <= 16; tx += 8) {
    const ct = new THREE.Group();
    ct.position.set(tx, 0.38, -16);

    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 1.6, 8), mat.highVoltagePylonSteel);
    post.position.set(0, 0.8, 0);
    ct.add(post);

    const ctBody = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.5, 10), porcelainBrownMat);
    ctBody.position.set(0, 2.35, 0);
    ct.add(ctBody);

    const topRing = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.04, 8, 14), aluminumConductorMat);
    topRing.rotation.x = Math.PI / 2;
    topRing.position.set(0, 3.2, 0);
    ct.add(topRing);

    gridGroup.add(ct);
  }

  // --------------------------------------------------------------------------
  // 5. STEEL GANTRY TOWERS & OVERHEAD 3-PHASE BUSBAR SYSTEMS
  // --------------------------------------------------------------------------
  [-12, 12].forEach(gantryZ => {
    const gantry = new THREE.Group();
    gantry.position.set(0, 0.38, gantryZ);

    [-18, 18].forEach(colX => {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.5, 8.2, 0.5), mat.highVoltagePylonSteel);
      col.position.set(colX, 4.1, 0);
      col.castShadow = true;
      gantry.add(col);
    });

    const trussBeam = new THREE.Mesh(new THREE.BoxGeometry(36.5, 0.7, 0.7), mat.highVoltagePylonSteel);
    trussBeam.position.set(0, 7.85, 0);
    trussBeam.castShadow = true;
    gantry.add(trussBeam);

    for (let bx = -13.5; bx <= 13.5; bx += 4.5) {
      const ins = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.12, 1.5, 8), porcelainBrownMat);
      ins.position.set(bx, 6.7, 0);
      gantry.add(ins);
    }

    gridGroup.add(gantry);
  });

  // Long Aluminum Busbar Rails Connecting Across Gantries
  for (let bx = -13.5; bx <= 13.5; bx += 4.5) {
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 24.5, 8), aluminumConductorMat);
    rail.rotation.x = Math.PI / 2;
    rail.position.set(bx, 6.3, 0);
    gridGroup.add(rail);
  }

  // --------------------------------------------------------------------------
  // 6. BATTERY ENERGY STORAGE SYSTEM (BESS) MODULAR ENCLOSURES
  // --------------------------------------------------------------------------
  const bessGroup = new THREE.Group();
  bessGroup.position.set(-10, 0.38, 12);

  for (let b = 0; b < 3; b++) {
    const container = new THREE.Group();
    container.position.set(b * 5.6, 0, 0);

    const box = new THREE.Mesh(new THREE.BoxGeometry(4.6, 2.4, 2.0), bessContainerWhite);
    box.position.set(0, 1.2, 0);
    box.castShadow = true;
    container.add(box);

    const hvac = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.5, 1.3), mat.buildingDarkSteel);
    hvac.position.set(1.1, 2.65, 0);
    container.add(hvac);

    // Glowing cyan status telemetry line (offset by 0.05 to avoid z-fighting)
    const telemetryStrip = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.07, 0.04), statusLedCyan);
    telemetryStrip.position.set(0, 1.6, 1.05);
    container.add(telemetryStrip);

    bessGroup.add(container);
  }
  gridGroup.add(bessGroup);

  // --------------------------------------------------------------------------
  // 7. SUBSTATION SCADA CONTROL HOUSE
  // --------------------------------------------------------------------------
  const controlHouse = new THREE.Group();
  controlHouse.position.set(12, 0.38, 12);

  const houseMesh = new THREE.Mesh(new THREE.BoxGeometry(6.8, 3.2, 4.8), bessContainerWhite);
  houseMesh.position.set(0, 1.6, 0);
  houseMesh.castShadow = true;
  controlHouse.add(houseMesh);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.3, 5.2), mat.buildingDarkSteel);
  roof.position.set(0, 3.35, 0);
  controlHouse.add(roof);

  const win = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.8, 0.1), mat.buildingGlassCyan);
  win.position.set(0, 1.9, -2.46);
  controlHouse.add(win);

  const commMast = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 3.8, 8), mat.highVoltagePylonSteel);
  commMast.position.set(-2.2, 5.1, 1.1);
  controlHouse.add(commMast);

  const dish = new THREE.Mesh(new THREE.SphereGeometry(0.45, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), aluminumConductorMat);
  dish.rotation.x = Math.PI / 2.3;
  dish.position.set(-2.2, 6.3, 1.1);
  controlHouse.add(dish);

  gridGroup.add(controlHouse);

  // --------------------------------------------------------------------------
  // 8. HIGH-VOLTAGE TRANSMISSION LATTICE PYLONS
  // --------------------------------------------------------------------------
  for (let p = 0; p < 3; p++) {
    const pylon = new THREE.Group();
    pylon.position.set(-15 + p * 15, 0, -22);

    const legHeight = 16;
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.26, legHeight, 6), mat.highVoltagePylonSteel);
    leg.position.set(0, legHeight / 2, 0);
    leg.castShadow = true;
    pylon.add(leg);

    const crossArm1 = new THREE.Mesh(new THREE.BoxGeometry(8.2, 0.3, 0.45), mat.highVoltagePylonSteel);
    crossArm1.position.set(0, 14.0, 0);
    pylon.add(crossArm1);

    const crossArm2 = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.3, 0.45), mat.highVoltagePylonSteel);
    crossArm2.position.set(0, 11.4, 0);
    pylon.add(crossArm2);

    const peak = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.6, 4), mat.highVoltagePylonSteel);
    peak.position.set(0, 16.7, 0);
    pylon.add(peak);

    [-3.6, 0, 3.6].forEach(ix => {
      const ins = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 1.5, 8), porcelainBrownMat);
      ins.position.set(ix, 13.0, 0);
      pylon.add(ins);
    });

    [-2.4, 2.4].forEach(ix => {
      const ins = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 1.3, 8), porcelainBrownMat);
      ins.position.set(ix, 10.5, 0);
      pylon.add(ins);
    });

    gridGroup.add(pylon);
  }

  // --------------------------------------------------------------------------
  // 9. MODERN WIND TURBINES
  // --------------------------------------------------------------------------
  for (let w = 0; w < 2; w++) {
    const turbine = new THREE.Group();
    turbine.position.set(16 + w * 12, 0, -28);

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.85, 20, 16), mat.windTurbineWhite);
    pole.position.set(0, 10, 0);
    pole.castShadow = true;
    turbine.add(pole);

    const nacelle = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 3.2), mat.windTurbineWhite);
    nacelle.position.set(0, 20, -0.6);
    nacelle.castShadow = true;
    turbine.add(nacelle);

    const hubRoot = new THREE.Group();
    hubRoot.position.set(0, 20, 1.05);
    hubRoot.userData = { spinSpeed: 0.03 + w * 0.006 };

    const spinner = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.2, 16), mat.windTurbineWhite);
    spinner.rotation.x = Math.PI / 2;
    hubRoot.add(spinner);

    for (let b = 0; b < 3; b++) {
      const bladeHolder = new THREE.Group();
      bladeHolder.rotation.z = (b / 3) * Math.PI * 2;

      const bladeGeo = new THREE.BoxGeometry(0.32, 8.2, 0.08);
      bladeGeo.translate(0, 4.1, 0);

      const blade = new THREE.Mesh(bladeGeo, mat.windTurbineWhite);
      blade.castShadow = true;
      bladeHolder.add(blade);

      hubRoot.add(bladeHolder);
    }

    turbine.add(hubRoot);
    gridGroup.add(turbine);
    animatedItems.turbines.push(hubRoot);
  }

  // Floodlights for Night Operations
  [-18, 18].forEach(fx => {
    const floodlight = new THREE.Group();
    floodlight.position.set(fx, 0.38, 16);

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 6.2, 8), mat.highVoltagePylonSteel);
    pole.position.set(0, 3.1, 0);
    floodlight.add(pole);

    const lampBox = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 0.45), mat.buildingDarkSteel);
    lampBox.position.set(0, 6.1, -0.2);
    lampBox.rotation.x = Math.PI / 6;
    floodlight.add(lampBox);

    const bulb = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.3), mat.streetLampBulb || statusLedCyan);
    bulb.position.set(0, 6.05, -0.44);
    bulb.rotation.x = Math.PI / 6;
    floodlight.add(bulb);

    gridGroup.add(floodlight);
  });

  interactiveObjects.push(gridGroup);
  parent.add(gridGroup);
}
