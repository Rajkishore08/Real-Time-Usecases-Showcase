import * as THREE from 'three';

/**
 * Grand High-Fidelity PBR Material Palette for 3D Digital Twin City
 */
export function createCityMaterials() {
  return {
    // Water & River
    water: new THREE.MeshStandardMaterial({
      color: 0x0a3866,
      roughness: 0.1,
      metalness: 0.88,
      transparent: true,
      opacity: 0.92
    }),
    riverWater: new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.12,
      metalness: 0.82,
      transparent: true,
      opacity: 0.9
    }),
    waterfallFoam: new THREE.MeshBasicMaterial({
      color: 0xf0fdf4,
      transparent: true,
      opacity: 0.88
    }),

    // Natural Terrains & Subterranean
    groundGrass: new THREE.MeshStandardMaterial({
      color: 0x1e3a29,
      roughness: 0.88,
      metalness: 0.04,
      flatShading: true
    }),
    groundSand: new THREE.MeshStandardMaterial({
      color: 0xd4a373,
      roughness: 0.9,
      metalness: 0.05,
      flatShading: true
    }),
    groundRock: new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.85,
      metalness: 0.15,
      flatShading: true
    }),
    groundQuarry: new THREE.MeshStandardMaterial({
      color: 0x6b4423,
      roughness: 0.92,
      metalness: 0.08,
      flatShading: true
    }),
    groundOre: new THREE.MeshStandardMaterial({
      color: 0x3b2210,
      roughness: 0.85,
      metalness: 0.3,
      flatShading: true
    }),
    farmlandLoam: new THREE.MeshStandardMaterial({
      color: 0x3a2514,
      roughness: 0.95,
      metalness: 0.02,
      flatShading: true
    }),
    cropGreen: new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.7,
      metalness: 0.05
    }),
    cropGold: new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.75,
      metalness: 0.05
    }),
    substationGravel: new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true
    }),

    // Roads, Curbs, Bridges & Rails
    roadAsphalt: new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.7,
      metalness: 0.2,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    }),
    roadMarkingWhite: new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.1,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2
    }),
    roadMarkingYellow: new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      roughness: 0.3,
      metalness: 0.1,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2
    }),
    concretePlaza: new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.65,
      metalness: 0.1,
      polygonOffset: true,
      polygonOffsetFactor: -0.5,
      polygonOffsetUnits: -0.5
    }),
    concreteCurb: new THREE.MeshStandardMaterial({
      color: 0xcfd8dc,
      roughness: 0.7,
      metalness: 0.1
    }),
    bridgeSteelWhite: new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.3,
      metalness: 0.4
    }),
    railTrackSteel: new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.3,
      metalness: 0.9
    }),

    // Architectural Facades & Glass Curtain Walls
    buildingWhite: new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.32,
      metalness: 0.12
    }),
    buildingWarmGray: new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.38,
      metalness: 0.15
    }),
    buildingDarkSteel: new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.28,
      metalness: 0.85
    }),
    buildingGlassAzure: new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      roughness: 0.05,
      metalness: 0.92,
      transparent: true,
      opacity: 0.85
    }),
    buildingGlassCyan: new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.05,
      metalness: 0.9,
      transparent: true,
      opacity: 0.82
    }),
    buildingGlassEmerald: new THREE.MeshStandardMaterial({
      color: 0x059669,
      roughness: 0.08,
      metalness: 0.88,
      transparent: true,
      opacity: 0.85
    }),

    // Walmart Logistics
    walmartBlue: new THREE.MeshStandardMaterial({ color: 0x0071ce, roughness: 0.3, metalness: 0.3 }),
    walmartYellow: new THREE.MeshStandardMaterial({ color: 0xffc220, roughness: 0.25, metalness: 0.4 }),
    trailerWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3, metalness: 0.5 }),

    // Drone Vertiport
    dronePadRing: new THREE.MeshBasicMaterial({ color: 0x00f2fe, side: THREE.DoubleSide }),
    dronePadTarmac: new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6, metalness: 0.2 }),
    droneBodyMat: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.8 }),
    droneRotorMat: new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 }),
    dronePayloadBox: new THREE.MeshStandardMaterial({ color: 0x0071ce, roughness: 0.3, metalness: 0.4 }),

    // Machinery, Energy & Flood Defense
    catYellow: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.35, metalness: 0.6 }),
    heavyTireRubber: new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9, metalness: 0.1 }),
    rustMetal: new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8, metalness: 0.4 }),
    industrialOrange: new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.35, metalness: 0.5 }),
    highVoltagePylonSteel: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3, metalness: 0.85 }),
    ceramicInsulator: new THREE.MeshStandardMaterial({ color: 0x7c2d12, roughness: 0.2, metalness: 0.1 }),
    transformerSteel: new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4, metalness: 0.7 }),
    windTurbineWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25, metalness: 0.2 }),
    floodBarrierMat: new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.3, metalness: 0.7 }),

    // Container Port Materials
    containerRed: new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4, metalness: 0.3 }),
    containerBlue: new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.4, metalness: 0.3 }),
    containerGreen: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.4, metalness: 0.3 }),
    containerOrange: new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4, metalness: 0.3 }),
    craneYellow: new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3, metalness: 0.6 }),
    shipHullDark: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4, metalness: 0.7 }),
    shipHullRed: new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.4, metalness: 0.5 }),

    // Foliage & Street Furniture
    treeTrunk: new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 }),
    treeTrunkWood: new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 }),
    treeLeaves: new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.8, flatShading: true }),
    treeFoliageA: new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.8, flatShading: true }),
    treeFoliageB: new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8, flatShading: true }),
    treeFoliageC: new THREE.MeshStandardMaterial({ color: 0x4ade80, roughness: 0.8, flatShading: true }),
    streetLampMetal: new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3, metalness: 0.8 }),
    streetLampBulb: new THREE.MeshBasicMaterial({ color: 0xfef08a }),

    // Medical, Fire Rescue & Emergency
    hospitalWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25, metalness: 0.1 }),
    hospitalCrossRed: new THREE.MeshBasicMaterial({ color: 0xef4444 }),
    fireEngineRed: new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.3, metalness: 0.4 }),
    emergencyBlue: new THREE.MeshBasicMaterial({ color: 0x38bdf8 }),
    helipadYellow: new THREE.MeshBasicMaterial({ color: 0xfacc15 }),

    // Humans, Personnel & Robots
    humanSkin: new THREE.MeshStandardMaterial({ color: 0xfbcfe8, roughness: 0.6 }),
    humanSuitDark: new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 }),
    humanVestOrange: new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.3 }),
    humanShirtBlue: new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.4 }),
    humanCoatWhite: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }),
    hardHatYellow: new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3 }),
    hardHatWhite: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 }),
    amrBodyMat: new THREE.MeshStandardMaterial({ color: 0x00f2fe, roughness: 0.25, metalness: 0.8 }),
    amrWheelMat: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9 }),

    // Glowing Neon & Light Beams
    neonCyan: new THREE.MeshBasicMaterial({ color: 0x00f2fe }),
    neonGold: new THREE.MeshBasicMaterial({ color: 0xf59e0b }),
    neonEmerald: new THREE.MeshBasicMaterial({ color: 0x05ffa1 }),
    neonRose: new THREE.MeshBasicMaterial({ color: 0xf43f5e }),
    tunnelGlow: new THREE.MeshBasicMaterial({ color: 0xffaa44 }),
    lighthouseBeamMat: new THREE.MeshBasicMaterial({ 
      color: 0x38bdf8, 
      transparent: true, 
      opacity: 0.35, 
      side: THREE.DoubleSide, 
      depthWrite: false, 
      blending: THREE.AdditiveBlending 
    }),

    // Smart Aquaculture & Fish Farm Materials
    fishNetMat: new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.7, metalness: 0.3, wireframe: true }),
    fishWaterFoam: new THREE.MeshBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.65 }),
    fishScaleSilver: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.15, metalness: 0.85 }),
    fishFinOrange: new THREE.MeshBasicMaterial({ color: 0xf97316 }),
    buoyOrange: new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.3, metalness: 0.3 }),
    aquacultureWalkway: new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.6 }),

    // Smart Livestock & Pig Farm Materials
    pigSkin: new THREE.MeshStandardMaterial({ color: 0xffb5c2, roughness: 0.45, metalness: 0.05 }),
    pigSnout: new THREE.MeshStandardMaterial({ color: 0xff7597, roughness: 0.35 }),
    pigMud: new THREE.MeshStandardMaterial({ color: 0x3d2314, roughness: 0.95 }),
    pigStraw: new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.85 }),
    pigEyeDark: new THREE.MeshBasicMaterial({ color: 0x0f172a }),
    pigEyePupilWhite: new THREE.MeshBasicMaterial({ color: 0xffffff }),

    // AI Vision Cone & Tech Grid Facility Materials
    aiConeBeamMat: new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }),
    aiFloorCircleMat: new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide
    }),
    telemetryRingGlow: new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    }),
    darkFacilityFloor: new THREE.MeshStandardMaterial({
      color: 0x080d1a,
      roughness: 0.6,
      metalness: 0.4
    }),
    steelGantryMat: new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.3,
      metalness: 0.8
    }),
    bargeYellowMat: new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.35,
      metalness: 0.3
    })
  };
}
