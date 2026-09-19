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
  onOpenDossier
}) {
  const mountRef = useRef(null);
  const markersRef = useRef({});

  const [selectedDistrictId, setSelectedDistrictId] = useState(null);
  const [hoveredDistrictId, setHoveredDistrictId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [autoRotate, setAutoRotate] = useState(true);

  // Mutable refs for high-frequency animation loop
  const autoRotateRef = useRef(true);
  const selectedDistrictIdRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const targetCamPosRef = useRef(new THREE.Vector3(38, 42, 48));
  const targetLookAtRef = useRef(new THREE.Vector3(0, 2.5, 0));
  
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const rendererRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Sync state into refs
  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    selectedDistrictIdRef.current = selectedDistrictId;
  }, [selectedDistrictId]);

  // Global overview defaults
  const OVERVIEW_CAM_POS = new THREE.Vector3(38, 42, 48);
  const OVERVIEW_LOOK_AT = new THREE.Vector3(0, 2.5, 0);

  // District Selection & Camera Glide
  const handleSelectDistrict = useCallback((districtId) => {
    setSelectedDistrictId(districtId);
    if (!districtId) {
      targetCamPosRef.current.copy(OVERVIEW_CAM_POS);
      targetLookAtRef.current.copy(OVERVIEW_LOOK_AT);
      isTransitioningRef.current = true;
      return;
    }

    const district = CITY_DISTRICTS.find(d => d.id === districtId);
    if (district && district.cameraTarget) {
      const [cx, cy, cz] = district.cameraTarget.position;
      const [lx, ly, lz] = district.cameraTarget.lookAt;
      targetCamPosRef.current.set(cx, cy, cz);
      targetLookAtRef.current.set(lx, ly, lz);
      isTransitioningRef.current = true;
      setAutoRotate(false);
    }
  }, []);

  const handleResetView = useCallback(() => {
    handleSelectDistrict(null);
  }, [handleSelectDistrict]);

  const handleZoom = useCallback((direction) => {
    if (!cameraRef.current || !controlsRef.current) return;
    const offset = new THREE.Vector3();
    offset.subVectors(cameraRef.current.position, controlsRef.current.target);
    const length = offset.length();
    const newLength = Math.max(16, Math.min(110, length + direction * 10));
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
    scene.fog = new THREE.Fog(0x080e1a, 70, 230);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.5, 1000);
    camera.position.copy(OVERVIEW_CAM_POS);
    cameraRef.current = camera;

    // 3. Renderer with Anti-Aliasing and PCF Soft Shadows
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: false, 
      powerPreference: "high-performance",
      precision: "highp"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Orbit Controls with Damping
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.045;
    controls.maxPolarAngle = Math.PI / 2.08;
    controls.minDistance = 14;
    controls.maxDistance = 110;
    controls.target.copy(OVERVIEW_LOOK_AT);
    controlsRef.current = controls;

    const onUserInteraction = () => {
      isTransitioningRef.current = false;
    };
    controls.addEventListener('start', onUserInteraction);

    // 5. Balanced Cinematic Sunlight & Ambient Irradiance
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 1.35);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 0.95);
    hemiLight.position.set(0, 60, 0);
    scene.add(hemiLight);

    // Warm Sun Directional Light (Zero shadow acne via normalBias)
    const sunLight = new THREE.DirectionalLight(0xfff8ed, 2.4);
    sunLight.position.set(45, 70, 35);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 180;
    sunLight.shadow.camera.left = -55;
    sunLight.shadow.camera.right = 55;
    sunLight.shadow.camera.top = 55;
    sunLight.shadow.camera.bottom = -55;
    sunLight.shadow.bias = -0.0002;
    sunLight.shadow.normalBias = 0.04;
    scene.add(sunLight);

    // Cool Sky Fill Light
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.0);
    rimLight.position.set(-45, 35, -35);
    scene.add(rimLight);

    // 6. 3D Architectural City Builder
    const materials = createCityMaterials();
    const cityState = buildCityScene(scene, materials);

    // 7. Raycaster for Mesh Clicking
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

    // 8. Projection Vector & Clock
    const tempVec = new THREE.Vector3();
    const clock = new THREE.Clock();

    // 9. Hardware-Accelerated Animation Loop (Zero React State Re-renders)
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Micro-animations (smooth wind turbines, steady drone path)
      if (cityState && typeof cityState.updateCity === 'function') {
        cityState.updateCity(elapsedTime);
      }

      // Smooth Camera Lerp Animation
      if (isTransitioningRef.current) {
        camera.position.lerp(targetCamPosRef.current, 0.05);
        controls.target.lerp(targetLookAtRef.current, 0.05);

        if (
          camera.position.distanceTo(targetCamPosRef.current) < 0.15 &&
          controls.target.distanceTo(targetLookAtRef.current) < 0.08
        ) {
          isTransitioningRef.current = false;
        }
      } else if (autoRotateRef.current && !selectedDistrictIdRef.current) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.45;
      } else {
        controls.autoRotate = false;
      }

      controls.update();
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
    <div className="city-3d-viewport-wrapper">
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
          onClose={() => handleSelectDistrict(null)}
          onResetCamera={handleResetView}
        />
      )}

      {/* Navigation Dock & Camera Controls */}
      <CityMiniControls
        selectedDistrictId={selectedDistrictId}
        onSelectDistrict={handleSelectDistrict}
        onResetView={handleResetView}
        onZoom={handleZoom}
        onRotate={() => {}}
        autoRotate={autoRotate}
        onToggleAutoRotate={handleToggleAutoRotate}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
    </div>
  );
}
