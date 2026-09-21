import * as THREE from 'three';

// Materials
import { createCityMaterials } from './materials/cityMaterials.js';

// Environment
import { buildLandscapeAndRiver } from './environment/landscapeAndRiver.js';
import { buildRoadNetwork } from './environment/roadNetwork.js';
import { buildCityVegetation } from './environment/cityVegetation.js';
import { buildCelestialSky } from './environment/celestialSky.js';

// Districts
import { buildCommercialDistrict } from './districts/commercialDistrict.js';
import { buildManufacturingDistrict } from './districts/manufacturingDistrict.js';
import { buildAdditiveDistrict } from './districts/additiveDistrict.js';
import { buildDisasterDistrict } from './districts/disasterDistrict.js';
import { buildHealthcareDistrict } from './districts/healthcareDistrict.js';
import { buildBiotechDistrict } from './districts/biotechDistrict.js';
import { buildMaritimePortDistrict } from './districts/portDistrict.js';
import { buildMiningDistrict } from './districts/miningDistrict.js';
import { buildAgricultureDistrict } from './districts/agricultureDistrict.js';
import { buildPowerGridDistrict } from './districts/powerGridDistrict.js';
import { buildWalmartLogisticsDistrict } from './districts/warehousingDistrict.js';
import { buildDroneVertiportDistrict } from './districts/droneVertiportDistrict.js';
import { buildRailAndBridgeDistrict } from './districts/railDistrict.js';
import { buildAquacultureFishFarm } from './districts/aquacultureFishAndPigFarm.js';
import { buildRaieLabDistrict } from './districts/raieLabDistrict.js';

// Simulation & Animation Engine
import { buildPopulatedHumans } from './simulation/populatedHumans.js';
import { buildTrafficSimulation } from './simulation/trafficSimulation.js';
import { createCityAnimationUpdater } from './simulation/cityAnimationEngine.js';

// Re-export materials for external consumers
export { createCityMaterials };

/**
 * Builds the complete 3D Digital Twin City Scene
 * Modular Orchestrator coordinating terrain, architecture, transport, foliage & simulations
 * 
 * @param {THREE.Scene} scene - Three.js root scene
 * @param {Object} mat - Material palette created by createCityMaterials
 * @param {Object} callbacks - Optional UI triggers like onOpenRaieLabModal
 * @returns {Object} { cityRoot, interactiveObjects, animatedItems, updateCity }
 */
export function buildCityScene(scene, mat, callbacks = {}) {
  const cityRoot = new THREE.Group();
  cityRoot.name = "CityRoot";
  scene.add(cityRoot);

  const interactiveObjects = [];
  const animatedItems = {
    vehicles: [],
    train: null,
    drones: [],
    ships: [],
    patrolBoats: [],
    sheaves: [],
    mineCarts: [],
    crusher: null,
    waterfallStreams: [],
    turbines: [],
    roboticArms: [],
    amrRobots: [],
    pedestrians: [],
    radarDishes: [],
    helicopters: [],
    irrigationArm: null,
    lighthouseBeam: null,
    fishSchools: [],
    fishAerators: [],
    pigs: [],
    miscSpinners: []
  };

  // 1. Natural Landscape, Mountain Ranges, Cascading Waterfall & River
  buildLandscapeAndRiver(cityRoot, mat, animatedItems);

  // 2. Celestial Sky (Sun, Drifting Clouds, Moon & Starfield)
  buildCelestialSky(cityRoot, mat, animatedItems);

  // 3. Road Network, Sidewalks, Crosswalks & Streetlamps
  buildRoadNetwork(cityRoot, mat);

  // 3. 14 Specialized High-Fidelity Industry Districts
  buildCommercialDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildRaieLabDistrict(cityRoot, mat, animatedItems, interactiveObjects, callbacks.onOpenRaieLabModal);
  buildManufacturingDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildAdditiveDistrict(cityRoot, mat, interactiveObjects);
  buildDisasterDistrict(cityRoot, mat, animatedItems, interactiveObjects); // Beside Mountain River Waterfall
  buildHealthcareDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildBiotechDistrict(cityRoot, mat, interactiveObjects);
  buildMaritimePortDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildMiningDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildAgricultureDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildPowerGridDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildWalmartLogisticsDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildDroneVertiportDistrict(cityRoot, mat, animatedItems, interactiveObjects);
  buildRailAndBridgeDistrict(cityRoot, mat, animatedItems, interactiveObjects);

  // 4. Smart Aquaculture: Offshore Sea Cages & Inland Smart Pig Farm
  buildAquacultureFishFarm(cityRoot, mat, animatedItems, interactiveObjects);

  // 5. Urban Foliage, Populated Pedestrians & Walking Humans
  buildCityVegetation(cityRoot, mat);
  buildPopulatedHumans(cityRoot, mat, animatedItems);

  // 6. Traffic & Commuter Vehicle Simulation
  buildTrafficSimulation(cityRoot, mat, animatedItems);

  // 7. Hardware-Accelerated Animation Loop
  const updateCity = createCityAnimationUpdater(animatedItems);

  return {
    cityRoot,
    interactiveObjects,
    animatedItems,
    updateCity
  };
}
