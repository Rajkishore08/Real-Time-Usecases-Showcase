import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CITY_DISTRICTS } from './cityDistrictsData';
import { buildCityScene, createCityMaterials } from './cityBuilder';
import CityFloatingMarkers from './CityFloatingMarkers';
import CityContextCard from './CityContextCard';
import CityMiniControls from './CityMiniControls';

export default function City3DCanvas({
  allUseCases = [],
  onOpenDossier,
  onLaunchLiveDemo,
  initialDistrictId = null,
  initialAutoRotate = true,
  hideControls = false,
  onOpenEmbed
}) {
  const mountRef = useRef(null);
  const wrapperRef = useRef(null);
  const markersRef = useRef({});

  const [selectedDistrictId, setSelectedDistrictId] = useState(initialDistrictId || null);
  const [hoveredDistrictId, setHoveredDistrictId] = useState(null);
  const [autoRotate, setAutoRotate] = useState(initialAutoRotate !== false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Advanced Interactive Settings
  const [lightingMode, setLightingMode] = useState("day"); // 'day' | 'sunset' | 'night'
  const [simSpeed, setSimSpeed] = useState(1.0); // 1.0, 2.0, 0
  const [hologramMode, setHologramMode] = useState("side"); // 'side' | 'top' | 'hidden'
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Fullscreen Handler
  const handleToggleFullscreen = useCallback(() => {
    const elem = wrapperRef.current;
    if (!elem) return;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().then(() => setIsFullscreen(true)).catch(err => {
        console.warn("Fullscreen request error:", err);
      });
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(err => {
        console.warn("Exit fullscreen error:", err);
      });
    }
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Mutable refs for high-frequency animation loop
  const autoRotateRef = useRef(true);
  const selectedDistrictIdRef = useRef(null);
  const simSpeedRef = useRef(1.0);
  // High-performance smooth camera transition state
  const transitionRef = useRef({
    active: false,
    startTime: 0,
    duration: 800,
    startCam: new THREE.Vector3(),
    startLookAt: new THREE.Vector3(),
    targetCam: new THREE.Vector3(72, 80, 98),
    targetLookAt: new THREE.Vector3(0, 3, 0)
  });
  
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const rendererRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lightsRef = useRef({ sun: null, ambient: null, hemi: null, rim: null });
  const sceneRef = useRef(null);

  // Sync state into refs
  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    selectedDistrictIdRef.current = selectedDistrictId;
  }, [selectedDistrictId]);

  useEffect(() => {
    simSpeedRef.current = simSpeed;
  }, [simSpeed]);

  const cityStateRef = useRef(null);

  // Lighting Mode Dynamic Update Effect
  useEffect(() => {
    const scene = sceneRef.current;
    const lights = lightsRef.current;
    if (!scene || !lights.sun) return;

    const celestial = cityStateRef.current?.animatedItems?.celestialSky;

    if (lightingMode === 'day') {
      scene.background.setHex(0x080e1a);
      scene.fog.color.setHex(0x080e1a);
      lights.sun.color.setHex(0xfff8ed);
      lights.sun.intensity = 2.5;
      lights.sun.position.set(80, 110, 60);
      lights.ambient.color.setHex(0xdbeafe);
      lights.ambient.intensity = 1.4;
      lights.hemi.color.setHex(0x38bdf8);
      lights.hemi.groundColor.setHex(0x0f172a);
      lights.hemi.intensity = 1.0;

      // Celestial Day: Golden Sun
      if (celestial) {
        if (celestial.sunGroup) celestial.sunGroup.visible = true;
        if (celestial.coronaMesh) {
          celestial.coronaMesh.material.color.setHex(0xfde047);
          celestial.coronaMesh.material.opacity = 0.35;
        }
        if (celestial.moonGroup) celestial.moonGroup.visible = false;
        if (celestial.starField) celestial.starField.visible = false;
      }
    } else if (lightingMode === 'sunset') {
      scene.background.setHex(0x221324);
      scene.fog.color.setHex(0x221324);
      lights.sun.color.setHex(0xf97316);
      lights.sun.intensity = 2.8;
      lights.sun.position.set(120, 35, 40);
      lights.ambient.color.setHex(0xfde047);
      lights.ambient.intensity = 1.1;
      lights.hemi.color.setHex(0xf43f5e);
      lights.hemi.groundColor.setHex(0x1e1b4b);
      lights.hemi.intensity = 1.2;

      // Celestial Sunset: Warm Horizon Sun
      if (celestial) {
        if (celestial.sunGroup) {
          celestial.sunGroup.visible = true;
          celestial.sunGroup.position.set(115, 45, 45);
        }
        if (celestial.coronaMesh) {
          celestial.coronaMesh.material.color.setHex(0xf97316);
          celestial.coronaMesh.material.opacity = 0.5;
        }
        if (celestial.moonGroup) celestial.moonGroup.visible = false;
        if (celestial.starField) celestial.starField.visible = false;
      }
    } else if (lightingMode === 'night') {
      scene.background.setHex(0x030712);
      scene.fog.color.setHex(0x030712);
      lights.sun.color.setHex(0x38bdf8);
      lights.sun.intensity = 0.65;
      lights.sun.position.set(-40, 80, -30);
      lights.ambient.color.setHex(0x1e293b);
      lights.ambient.intensity = 0.85;
      lights.hemi.color.setHex(0x00f2fe);
      lights.hemi.groundColor.setHex(0x020617);
      lights.hemi.intensity = 0.75;

      // Celestial Night: Glowing Moon with Halo Shade + Twinkling Celestial Starfield
      if (celestial) {
        if (celestial.sunGroup) celestial.sunGroup.visible = false;
        if (celestial.moonGroup) celestial.moonGroup.visible = true;
        if (celestial.starField) celestial.starField.visible = true;
      }
    }
  }, [lightingMode]);

  // Global overview defaults
  const OVERVIEW_CAM_POS = new THREE.Vector3(72, 80, 98);
  const OVERVIEW_LOOK_AT = new THREE.Vector3(0, 3, 0);

  // District Selection & Silky-Smooth Camera Glide
  const handleSelectDistrict = useCallback((districtId) => {
    setSelectedDistrictId(districtId);
    const tr = transitionRef.current;
    
    let destCam = OVERVIEW_CAM_POS;
    let destLook = OVERVIEW_LOOK_AT;

    if (districtId) {
      const district = CITY_DISTRICTS.find(d => d.id === districtId);
      if (district && district.cameraTarget) {
        const [cx, cy, cz] = district.cameraTarget.position;
        const [lx, ly, lz] = district.cameraTarget.lookAt;
        destCam = new THREE.Vector3(cx, cy, cz);
        destLook = new THREE.Vector3(lx, ly, lz);
        setAutoRotate(false);
      }
    }

    if (cameraRef.current && controlsRef.current) {
      tr.startCam.copy(cameraRef.current.position);
      tr.startLookAt.copy(controlsRef.current.target);
      tr.targetCam.copy(destCam);
      tr.targetLookAt.copy(destLook);
      tr.startTime = performance.now();
      tr.duration = 750; // 750ms fluid ease
      tr.active = true;
    }

    // Notify parent window when embedded in an iframe
    if (typeof window !== 'undefined' && window.parent && window.parent !== window) {
      try {
        window.parent.postMessage({
          type: 'SHOWCASE_DISTRICT_CLICKED',
          districtId: districtId
        }, '*');
      } catch (e) {
        // Ignore cross-origin issues
      }
    }
  }, []);

  // Sync initialDistrictId or prop changes
  useEffect(() => {
    if (initialDistrictId) {
      handleSelectDistrict(initialDistrictId);
    }
  }, [initialDistrictId, handleSelectDistrict]);

  // Cross-Window postMessage Listener for host integration
  useEffect(() => {
    const handleMessage = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === 'SHOWCASE_SELECT_DISTRICT') {
        handleSelectDistrict(e.data.districtId || null);
      } else if (e.data.type === 'SHOWCASE_SET_LIGHTING') {
        setLightingMode(e.data.mode || 'day');
      } else if (e.data.type === 'SHOWCASE_SET_SIM_SPEED') {
        setSimSpeed(e.data.speed ?? 1.0);
      } else if (e.data.type === 'SHOWCASE_TOGGLE_AUTOROTATE') {
        setAutoRotate(prev => !prev);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleSelectDistrict]);

  const handleResetView = useCallback(() => {
    handleSelectDistrict(null);
  }, [handleSelectDistrict]);

  const handleZoom = useCallback((direction) => {
    if (!cameraRef.current || !controlsRef.current) return;
    const offset = new THREE.Vector3();
    offset.subVectors(cameraRef.current.position, controlsRef.current.target);
    const length = offset.length();
    const newLength = Math.max(18, Math.min(220, length + direction * 14));
    offset.setLength(newLength);
    cameraRef.current.position.addVectors(controlsRef.current.target, offset);
  }, []);

  const handleToggleAutoRotate = useCallback(() => {
    setAutoRotate(prev => !prev);
  }, []);

  // Three.js Mount Setup - Runs ONCE
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || (window.innerHeight - 120);

    // 1. Scene & Atmosphere
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080e1a);
    scene.fog = new THREE.Fog(0x080e1a, 120, 420);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.5, 1400);
    camera.position.copy(OVERVIEW_CAM_POS);
    cameraRef.current = camera;

    // 3. Renderer with Anti-Aliasing and Soft Shadows
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: false, 
      powerPreference: "high-performance",
      precision: "highp"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Orbit Controls with Damping
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.045;
    controls.maxPolarAngle = Math.PI / 2.08;
    controls.minDistance = 18;
    controls.maxDistance = 240;
    controls.target.copy(OVERVIEW_LOOK_AT);
    controlsRef.current = controls;

    const onUserInteraction = () => {
      isTransitioningRef.current = false;
    };
    controls.addEventListener('start', onUserInteraction);

    // 5. Balanced Cinematic Sunlight & Ambient Irradiance
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 1.4);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 1.0);
    hemiLight.position.set(0, 90, 0);
    scene.add(hemiLight);

    // Warm Sun Directional Light
    const sunLight = new THREE.DirectionalLight(0xfff8ed, 2.5);
    sunLight.position.set(80, 110, 60);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 340;
    sunLight.shadow.camera.left = -115;
    sunLight.shadow.camera.right = 115;
    sunLight.shadow.camera.top = 115;
    sunLight.shadow.camera.bottom = -115;
    sunLight.shadow.bias = -0.0002;
    sunLight.shadow.normalBias = 0.04;
    scene.add(sunLight);

    // Cool Sky Fill Light
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.0);
    rimLight.position.set(-60, 45, -45);
    scene.add(rimLight);

    // Store scene and light references for dynamic mode switching
    sceneRef.current = scene;
    lightsRef.current.sun = sunLight;
    lightsRef.current.ambient = ambientLight;
    lightsRef.current.hemi = hemiLight;
    lightsRef.current.rim = rimLight;

    // 6. 3D Architectural City Builder
    const materials = createCityMaterials();
    const cityState = buildCityScene(scene, materials);
    cityStateRef.current = cityState;

    // Apply initial celestial state
    const celestial = cityState?.animatedItems?.celestialSky;
    if (celestial && lightingMode === 'day') {
      if (celestial.sunGroup) celestial.sunGroup.visible = true;
      if (celestial.moonGroup) celestial.moonGroup.visible = false;
      if (celestial.starField) celestial.starField.visible = false;
    }

    // 7. Raycaster for Direct Mesh Clicking
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      if (cityState.interactiveObjects) {
        const intersects = raycaster.intersectObjects(cityState.interactiveObjects, true);
        if (intersects.length > 0) {
          let obj = intersects[0].object;
          while (obj && !obj.userData?.districtId && obj.parent && obj.parent !== scene) {
            obj = obj.parent;
          }
          if (obj && obj.userData?.districtId) {
            handleSelectDistrict(obj.userData.districtId);
          }
        }
      }
    };

    renderer.domElement.addEventListener('click', handleCanvasClick);

    // 8. Projection Vector & Start Time for Animation Loop
    const tempVec = new THREE.Vector3();
    const animStartTime = performance.now();

    // 9. Hardware-Accelerated Animation Loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - animStartTime) * 0.001;
      const currentSimSpeed = simSpeedRef.current;

      // Micro-animations (vehicles, trains, drones, robotic arms, sheaves, ships, turbines)
      if (cityState && typeof cityState.updateCity === 'function') {
        cityState.updateCity(elapsedTime, currentSimSpeed);
      }

      // Silky-Smooth Eased Camera Glide Transition (Zero stutter or pause)
      const tr = transitionRef.current;
      if (tr.active) {
        const elapsed = performance.now() - tr.startTime;
        const progress = Math.min(1.0, elapsed / tr.duration);
        // High-precision cubic ease-in-out
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        camera.position.lerpVectors(tr.startCam, tr.targetCam, ease);
        controls.target.lerpVectors(tr.startLookAt, tr.targetLookAt, ease);
        camera.lookAt(controls.target);

        if (progress >= 1.0) {
          tr.active = false;
          camera.position.copy(tr.targetCam);
          controls.target.copy(tr.targetLookAt);
        }
      } else if (autoRotateRef.current && !selectedDistrictIdRef.current) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.45;
        controls.update();
      } else {
        controls.autoRotate = false;
        controls.update();
      }
      renderer.render(scene, camera);

      // Direct GPU Transform Updates on Floating Marker Elements
      const curW = container.clientWidth || window.innerWidth;
      const curH = container.clientHeight || (window.innerHeight - 120);

      CITY_DISTRICTS.forEach((district) => {
        const el = markersRef.current[district.id];
        if (!el) return;

        const [px, py, pz] = district.position;
        const [ox, oy, oz] = district.markerOffset || [0, 5, 0];
        tempVec.set(px + ox, py + oy, pz + oz);

        const distance = camera.position.distanceTo(tempVec);
        tempVec.project(camera);

        const isBehind = tempVec.z > 1;
        const screenX = (tempVec.x * 0.5 + 0.5) * curW;
        const screenY = (-(tempVec.y * 0.5) + 0.5) * curH;
        const isVisible = !isBehind && screenX >= -40 && screenX <= curW + 40 && screenY >= -40 && screenY <= curH + 40;

        if (isVisible) {
          const depthScale = Math.max(0.74, Math.min(1.05, 55 / distance));
          el.style.display = 'flex';
          el.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -100%) scale(${depthScale})`;
        } else {
          el.style.display = 'none';
        }
      });
    };

    animate();

    // 10. Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0 && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = w / h;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(w, h);
        }
      }
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('click', handleCanvasClick);
      }
      controls.removeEventListener('start', onUserInteraction);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const selectedDistrict = CITY_DISTRICTS.find(d => d.id === selectedDistrictId);

  return (
    <div ref={wrapperRef} className={`city-3d-viewport-wrapper ${isFullscreen ? 'is-fullscreen-mode' : ''}`}>
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="city-webgl-canvas" />

      {/* Direct Hardware-Accelerated Projected Markers */}
      <CityFloatingMarkers
        ref={markersRef}
        selectedDistrictId={selectedDistrictId}
        hoveredDistrictId={hoveredDistrictId}
        onSelectDistrict={handleSelectDistrict}
        onHoverDistrict={setHoveredDistrictId}
      />

      {/* Context Card for Selected District */}
      {selectedDistrict && (
        <CityContextCard
          district={selectedDistrict}
          allUseCases={allUseCases}
          onOpenDossier={onOpenDossier}
          onLaunchLiveDemo={onLaunchLiveDemo}
          onClose={() => handleSelectDistrict(null)}
          onResetCamera={handleResetView}
        />
      )}

      {/* Navigation Dock, Camera Tools, Fullscreen & Advanced Settings */}
      {!hideControls && (
        <CityMiniControls
          selectedDistrictId={selectedDistrictId}
          onSelectDistrict={handleSelectDistrict}
          onResetView={handleResetView}
          onZoom={handleZoom}
          onRotate={() => {}}
          autoRotate={autoRotate}
          onToggleAutoRotate={handleToggleAutoRotate}
          lightingMode={lightingMode}
          onChangeLightingMode={setLightingMode}
          simSpeed={simSpeed}
          onChangeSimSpeed={setSimSpeed}
          hologramMode={hologramMode}
          onChangeHologramMode={setHologramMode}
          isSettingsOpen={isSettingsOpen}
          onToggleSettings={() => setIsSettingsOpen(prev => !prev)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={handleToggleFullscreen}
          onOpenEmbed={onOpenEmbed}
        />
      )}
    </div>
  );
}
