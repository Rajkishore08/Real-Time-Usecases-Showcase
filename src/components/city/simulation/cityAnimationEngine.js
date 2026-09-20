/**
 * Hardware-Accelerated Animation Loop coordinating all dynamic 3D City entities
 */
export function createCityAnimationUpdater(animatedItems) {
  return function updateCity(elapsedTime, simSpeed = 1.0) {
    const effectiveSpeed = simSpeed;
    if (effectiveSpeed === 0) return;

    // A. Road Vehicles Simulation
    if (animatedItems.vehicles) {
      animatedItems.vehicles.forEach(veh => {
        veh.progress = (veh.progress + veh.speed * 0.0018 * effectiveSpeed) % 1.0;
        const pos = veh.curve.getPointAt(veh.progress);
        const tangent = veh.curve.getTangentAt(veh.progress);
        veh.mesh.position.copy(pos);
        veh.mesh.position.y += veh.yOffset || 0.35;
        veh.mesh.rotation.y = Math.atan2(tangent.x, tangent.z);
      });
    }

    // B. Elevated Commuter Train with Realistic Station Dwell
    if (animatedItems.train) {
      const tData = animatedItems.train;
      tData.cycleTime = (tData.cycleTime + 0.0018 * effectiveSpeed) % 1.0;
      const rawPhase = tData.cycleTime * 2.0; // 0 to 2
      const forward = rawPhase < 1.0;
      const t = forward ? rawPhase : 2.0 - rawPhase;
      // Smooth easeInOut curve for station departure and approach
      const u = t * t * (3.0 - 2.0 * t);
      if (tData.curve) {
        const trainPos = tData.curve.getPointAt(u);
        tData.mesh.position.copy(trainPos);
        tData.mesh.rotation.y = forward ? 0 : Math.PI;
      }
    }

    // C. Autonomous Logistics Delivery Drones
    if (animatedItems.drones) {
      animatedItems.drones.forEach(drone => {
        drone.progress = (drone.progress + drone.speed * 0.0015 * effectiveSpeed) % 1.0;
        const pt = drone.curve.getPointAt(drone.progress);
        const tangent = drone.curve.getTangentAt(drone.progress);
        drone.mesh.position.copy(pt);
        drone.mesh.rotation.y = Math.atan2(tangent.x, tangent.z);
        drone.mesh.rotation.z = -tangent.x * 0.12;

        if (drone.rotors) {
          drone.rotors.forEach(r => { r.rotation.y += 0.6 * effectiveSpeed; });
        }
      });
    }

    // D. Cascading Waterfall Shimmer & Plunge Flow
    if (animatedItems.waterfallStreams) {
      animatedItems.waterfallStreams.forEach((stream, idx) => {
        stream.position.y = stream.userData.baseY + Math.sin(elapsedTime * 14.0 + idx) * 0.2;
        stream.scale.y = 1.0 + Math.cos(elapsedTime * 10.0 + idx) * 0.08;
      });
    }

    // E. Maritime Harbor Ships & Patrol Sailing Boats
    if (animatedItems.ships) {
      animatedItems.ships.forEach(ship => {
        ship.position.y = -0.4 + Math.sin(elapsedTime * 1.2 + ship.userData.phase) * 0.08;
        ship.rotation.z = Math.sin(elapsedTime * 0.9 + ship.userData.phase) * 0.012;
      });
    }

    if (animatedItems.patrolBoats) {
      animatedItems.patrolBoats.forEach(boat => {
        boat.progress = (boat.progress + boat.speed * 0.0012 * effectiveSpeed) % 1.0;
        const bPos = boat.curve.getPointAt(boat.progress);
        const bTan = boat.curve.getTangentAt(boat.progress);
        boat.mesh.position.set(bPos.x, -0.4 + Math.sin(elapsedTime * 2.0) * 0.06, bPos.z);
        boat.mesh.rotation.y = Math.atan2(bTan.x, bTan.z) + Math.PI / 2;
      });
    }

    // F. Lighthouse Searchlight Beam (Sweeping Outward across West Sea)
    if (animatedItems.lighthouseBeam) {
      animatedItems.lighthouseBeam.rotation.y = Math.sin(elapsedTime * 0.8 * effectiveSpeed) * 0.75 - Math.PI / 2;
    }

    // G. Active Mining Sheaves & Crusher
    if (animatedItems.sheaves) {
      animatedItems.sheaves.forEach(sheave => { sheave.rotation.x += 0.08 * effectiveSpeed; });
    }
    if (animatedItems.crusher) {
      animatedItems.crusher.position.y = 2.0 + Math.sin(elapsedTime * 12.0) * 0.08;
    }
    if (animatedItems.mineCarts) {
      animatedItems.mineCarts.forEach(cart => {
        cart.progress = (cart.progress + cart.speed * 0.003 * effectiveSpeed) % 1.0;
        const cPt = cart.curve.getPointAt(cart.progress);
        cart.mesh.position.copy(cPt);
        cart.mesh.position.y += 0.3;
      });
    }

    // H. Wind Turbine Propeller Rotors
    if (animatedItems.turbines) {
      animatedItems.turbines.forEach(t => { t.rotation.z += t.userData.spinSpeed * effectiveSpeed; });
    }

    // I. Factory Articulated Robotic Arms
    if (animatedItems.roboticArms) {
      animatedItems.roboticArms.forEach(arm => {
        const t = elapsedTime * 1.8 + arm.userData.phase;
        arm.base.rotation.y = Math.sin(t * 0.8) * 0.6;
        arm.shoulder.rotation.z = Math.sin(t) * 0.35 + 0.2;
        arm.elbow.rotation.z = Math.cos(t * 1.2) * 0.45 - 0.3;
      });
    }

    // J. Walking Pedestrians & Human Animated Movement
    if (animatedItems.pedestrians) {
      animatedItems.pedestrians.forEach(ped => {
        ped.progress = (ped.progress + ped.speed * 0.001 * effectiveSpeed) % 1.0;
        const pt = ped.curve.getPointAt(ped.progress);
        const tan = ped.curve.getTangentAt(ped.progress);
        ped.mesh.position.copy(pt);
        ped.mesh.position.y = 0;
        ped.mesh.rotation.y = Math.atan2(tan.x, tan.z);

        // Animate alternating walking legs
        const walkCycle = Math.sin(elapsedTime * 8.0 * ped.speed);
        if (ped.leftLeg && ped.rightLeg) {
          ped.leftLeg.rotation.x = walkCycle * 0.6;
          ped.rightLeg.rotation.x = -walkCycle * 0.6;
        }
        if (ped.leftArm && ped.rightArm) {
          ped.leftArm.rotation.x = -walkCycle * 0.5;
          ped.rightArm.rotation.x = walkCycle * 0.5;
        }
      });
    }

    // K. Autonomous Mobile Robots (AMRs / AGVs)
    if (animatedItems.amrRobots) {
      animatedItems.amrRobots.forEach(amr => {
        amr.progress = (amr.progress + amr.speed * 0.0025 * effectiveSpeed) % 1.0;
        const aPt = amr.curve.getPointAt(amr.progress);
        const aTan = amr.curve.getTangentAt(amr.progress);
        amr.mesh.position.copy(aPt);
        amr.mesh.position.y += 0.2;
        amr.mesh.rotation.y = Math.atan2(aTan.x, aTan.z);
      });
    }

    // L. Helicopters (Hospital ICU + Disaster Flood SAR)
    if (animatedItems.helicopters) {
      animatedItems.helicopters.forEach(heli => {
        heli.mainRotor.rotation.y += 0.65 * effectiveSpeed;
        heli.tailRotor.rotation.x += 0.65 * effectiveSpeed;
        heli.mesh.position.y = heli.baseY + Math.sin(elapsedTime * 2.2 + heli.phase) * 0.3;
      });
    }

    // M. Center-Pivot Irrigation Boom
    if (animatedItems.irrigationArm) {
      animatedItems.irrigationArm.rotation.y += 0.0035 * effectiveSpeed;
    }

    // N. Satellite Radar Dishes
    if (animatedItems.radarDishes) {
      animatedItems.radarDishes.forEach(dish => { dish.rotation.y += 0.008 * effectiveSpeed; });
    }

    // O. Smart Aquaculture: Swimming Fish Schools & Aeration Bubblers
    if (animatedItems.fishSchools) {
      animatedItems.fishSchools.forEach(school => {
        school.children.forEach(fish => {
          fish.userData.angle += 0.02 * fish.userData.speed * effectiveSpeed;
          const a = fish.userData.angle;
          const r = fish.userData.radius;
          const jump = Math.sin(elapsedTime * 3.2 + fish.userData.phase);
          const yPos = jump > 0.5 ? (jump - 0.5) * 0.9 : -0.2;
          fish.position.set(Math.cos(a) * r, yPos, Math.sin(a) * r);
          fish.rotation.y = a + Math.PI / 2;
          fish.rotation.x = jump > 0.5 ? 0.35 : 0.0;
        });
      });
    }

    if (animatedItems.fishAerators) {
      animatedItems.fishAerators.forEach((aerator, idx) => {
        const s = 1.0 + Math.sin(elapsedTime * 8.0 + idx * 1.5) * 0.12;
        aerator.scale.set(s, s, 1.0);
      });
    }

    // P. Smart Livestock: Pig tail wiggling & curious head snouting
    if (animatedItems.pigs) {
      animatedItems.pigs.forEach((pig, idx) => {
        if (pig.tail) {
          pig.tail.rotation.z = Math.sin(elapsedTime * 8.0 + idx * 2.0) * 0.45;
        }
        if (pig.head) {
          pig.head.rotation.x = Math.sin(elapsedTime * 3.0 + idx * 1.7) * 0.14;
        }
      });
    }

    // Q. Parking Lot Dynamic Cars: Traffic-rule compliant driving on roads only
    if (animatedItems.parkingCars && animatedItems.parkingCars.length > 0) {
      const totalCars = animatedItems.parkingCars.length;
      const cycleDuration = 18.0; // seconds per car drive
      const totalCycle = cycleDuration * totalCars;
      const globalCycleTime = (elapsedTime * effectiveSpeed) % totalCycle;
      const activeCarIndex = Math.floor(globalCycleTime / cycleDuration);
      const activeCarProgress = (globalCycleTime % cycleDuration) / cycleDuration;

      animatedItems.parkingCars.forEach((car, idx) => {
        if (idx === activeCarIndex) {
          const p = activeCarProgress;

          if (p < 0.08) {
            // 1. Pulling forward out of stall into parking lot aisle
            const t = p / 0.08;
            car.mesh.position.set(car.homeX, 0.05, -3.6 + t * 8.1);
            car.mesh.rotation.y = 0;
          } else if (p < 0.14) {
            // 2. Turning right onto the parking lot driveway (facing West)
            const t = (p - 0.08) / 0.06;
            car.mesh.position.set(car.homeX - t * 2.0, 0.05, 4.5);
            car.mesh.rotation.y = -t * (Math.PI / 2);
          } else if (p < 0.24) {
            // 3. Driving West on parking driveway to NS Grand Boulevard
            const t = (p - 0.14) / 0.10;
            const startX = car.homeX - 2.0;
            const endX = -13.85; // Aligns with Southbound lane (world X = +2.15)
            car.mesh.position.set(startX + t * (endX - startX), 0.05, 4.5);
            car.mesh.rotation.y = -Math.PI / 2;
          } else if (p < 0.30) {
            // 4. Turning South into Southbound lane of NS Grand Boulevard
            const t = (p - 0.24) / 0.06;
            car.mesh.position.set(-13.85, 0.05, 4.5 + t * 4.0);
            car.mesh.rotation.y = -(1 - t) * (Math.PI / 2);
          } else if (p < 0.44) {
            // 5. Driving South on NS Grand Boulevard down to Ring Road
            const t = (p - 0.30) / 0.14;
            car.mesh.position.set(-13.85, 0.05, 8.5 + t * 29.0);
            car.mesh.rotation.y = 0;
          } else if (p < 0.66) {
            // 6. Merging onto Outer Ring Highway (smooth circular arc from South to East)
            const t = (p - 0.44) / 0.22;
            const theta = Math.PI / 2 - t * (Math.PI / 2); // pi/2 (South) -> 0 (East)
            const worldX = 54.0 * Math.cos(theta);
            const worldZ = 54.0 * Math.sin(theta);
            car.mesh.position.set(worldX - 16.0, 0.05, worldZ - 16.0);
            car.mesh.rotation.y = theta + Math.PI;
          } else if (p < 0.72) {
            // 7. Turning from Ring Road onto Westbound Lane of East-West Tech Avenue
            const t = (p - 0.66) / 0.06;
            const curLocalX = 38.0 - t * 6.0;
            const curLocalZ = -16.0 + t * 2.15;
            car.mesh.position.set(curLocalX, 0.05, curLocalZ);
            car.mesh.rotation.y = -Math.PI / 2;
          } else if (p < 0.86) {
            // 8. Driving West on East-West Tech Avenue
            const t = (p - 0.72) / 0.14;
            car.mesh.position.set(32.0 - t * 32.0, 0.05, -13.85);
            car.mesh.rotation.y = -Math.PI / 2;
          } else if (p < 0.92) {
            // 9. Turning South into Parking Lot Entrance Lane
            const t = (p - 0.86) / 0.06;
            car.mesh.position.set(0.0, 0.05, -13.85 + t * 18.35);
            car.mesh.rotation.y = 0;
          } else if (p < 0.96) {
            // 10. Moving along aisle to designated stall
            const t = (p - 0.92) / 0.04;
            car.mesh.position.set(t * car.homeX, 0.05, 4.5);
            car.mesh.rotation.y = car.homeX < 0 ? -Math.PI / 2 : (car.homeX > 0 ? Math.PI / 2 : 0);
          } else {
            // 11. Pulling into home stall & parking
            const t = (p - 0.96) / 0.04;
            car.mesh.position.set(car.homeX, 0.05, 4.5 - t * 8.1);
            car.mesh.rotation.y = 0;
          }
        } else {
          // Resting in home stall
          car.mesh.position.set(car.homeX, 0.05, car.homeZ);
          car.mesh.rotation.y = 0;
        }
      });
    }

    // R. Celestial Sky Dynamics: Twinkling Stars
    if (animatedItems.celestialSky) {
      const sky = animatedItems.celestialSky;
      if (sky.starField && sky.starField.visible) {
        sky.starField.rotation.y = elapsedTime * 0.0008 * effectiveSpeed;
      }
    }
  };
}
