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
  const OVERVIEW_CAM_POS = new THREE.Vector3(72, 80, 98);
  const OVERVIEW_LOOK_AT = new THREE.Vector3(0, 3, 0);

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

    // 8. 3D In-World Holographic AR Display Screen hovering over selected district
    const hologramGroup = new THREE.Group();
    hologramGroup.visible = false;
    hologramGroup.scale.set(0.001, 0.001, 0.001);
    scene.add(hologramGroup);

    // Screen Panel Mesh
    const screenGeo = new THREE.PlaneGeometry(13.0, 7.8);
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 614;
    const screenCtx = screenCanvas.getContext('2d');
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;

    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.96,
      depthWrite: false
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    hologramGroup.add(screenMesh);

    // Holographic Glowing Outer Border Frame
    const frameGeo = new THREE.BoxGeometry(13.3, 8.1, 0.12);
    const frameMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    hologramGroup.add(frameMesh);

    // Holographic Corner Brackets
    const cornerMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    [
      [-6.5, 3.9], [6.5, 3.9], [-6.5, -3.9], [6.5, -3.9]
    ].forEach(([cx, cy]) => {
      const c = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.18), cornerMat);
      c.position.set(cx, cy, 0);
      hologramGroup.add(c);
    });

    // Holographic Vertical Light Column / Projection Beam
    const beamGeo = new THREE.CylinderGeometry(0.12, 0.9, 14, 16, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const beamMesh = new THREE.Mesh(beamGeo, beamMat);
    beamMesh.position.set(0, -7.0, 0);
    hologramGroup.add(beamMesh);

    // Function to render rich blueprint UI onto the 3D screen texture
    const updateHologramTexture = (district, useCase) => {
      if (!screenCtx) return;
      const w = 1024;
      const h = 614;

      // Dark futuristic glass backdrop
      screenCtx.fillStyle = '#060d19';
      screenCtx.fillRect(0, 0, w, h);

      // Gradient overlay
      const grad = screenCtx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, 'rgba(0, 242, 254, 0.15)');
      grad.addColorStop(0.5, 'rgba(10, 20, 40, 0.9)');
      grad.addColorStop(1, 'rgba(121, 40, 202, 0.2)');
      screenCtx.fillStyle = grad;
      screenCtx.fillRect(0, 0, w, h);

      // Top Banner Header
      screenCtx.fillStyle = '#0f172a';
      screenCtx.fillRect(0, 0, w, 70);

      // Accent Line
      const color = district?.accentColor || '#00f2fe';
      screenCtx.fillStyle = color;
      screenCtx.fillRect(0, 66, w, 4);

      // Header Text
      screenCtx.fillStyle = color;
      screenCtx.font = 'bold 22px Inter, sans-serif';
      screenCtx.fillText(`[ ${district?.category?.toUpperCase() || 'DIGITAL TWIN NODE'} ]`, 30, 44);

      screenCtx.fillStyle = '#10b981';
      screenCtx.font = 'bold 18px Inter, sans-serif';
      screenCtx.fillText('● LIVE AR TELEMETRY ACTIVE', w - 300, 44);

      // Use Case Title & Subtitle
      screenCtx.fillStyle = '#ffffff';
      screenCtx.font = 'bold 28px Inter, sans-serif';
      const title = useCase?.title || district?.name || 'Enterprise Architecture';
      screenCtx.fillText(title.length > 44 ? title.substring(0, 42) + '...' : title, 30, 120);

      screenCtx.fillStyle = '#94a3b8';
      screenCtx.font = '18px Inter, sans-serif';
      const tagline = district?.tagline || 'AI-Powered Autonomous Operational Model';
      screenCtx.fillText(tagline.length > 70 ? tagline.substring(0, 68) + '...' : tagline, 30, 155);

      // Image / Blueprint Area
      if (useCase?.image) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          // Draw image inside viewport box
          screenCtx.save();
          screenCtx.fillStyle = '#030712';
          screenCtx.fillRect(30, 180, w - 60, 360);
          screenCtx.drawImage(img, 30, 180, w - 60, 360);

          // Subtle scanline overlay
          screenCtx.fillStyle = 'rgba(0, 242, 254, 0.08)';
          for (let y = 180; y < 540; y += 4) {
            screenCtx.fillRect(30, y, w - 60, 1);
          }

          // Inner image border
          screenCtx.strokeStyle = color;
          screenCtx.lineWidth = 2;
          screenCtx.strokeRect(30, 180, w - 60, 360);

          // Bottom Tech Tag Badges
          screenCtx.fillStyle = '#0e7490';
          screenCtx.font = 'bold 16px Inter, sans-serif';
          screenCtx.fillText(`Connected Domain: ${district?.name}  |  Engine: High-Fidelity 3D Simulation`, 30, 580);

          screenTexture.needsUpdate = true;
          screenCtx.restore();
        };
        img.src = useCase.image;
      } else {
        // Fallback Schematic Wireframe
        screenCtx.fillStyle = '#030712';
        screenCtx.fillRect(30, 180, w - 60, 360);
        screenCtx.strokeStyle = color;
        screenCtx.lineWidth = 2;
        screenCtx.strokeRect(30, 180, w - 60, 360);

        screenCtx.fillStyle = color;
        screenCtx.font = 'bold 24px Inter, sans-serif';
        screenCtx.fillText('DIGITAL TWIN SYSTEM ARCHITECTURE & TELEMETRY STREAM', 60, 340);

        screenCtx.fillStyle = '#64748b';
        screenCtx.font = '18px Inter, sans-serif';
        screenCtx.fillText('Real-time sensor mesh synchronized with Edge Computing Node', 60, 380);

        screenTexture.needsUpdate = true;
      }

      screenTexture.needsUpdate = true;
    };

    // 9. Projection Vector & Clock
    const tempVec = new THREE.Vector3();
    const clock = new THREE.Clock();

    let currentHologramDistrictId = null;

    // 10. Hardware-Accelerated Animation Loop (Zero React State Re-renders)
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Micro-animations (smooth wind turbines, steady drone path)
      if (cityState && typeof cityState.updateCity === 'function') {
        cityState.updateCity(elapsedTime);
      }

      // Update 3D Holographic AR Screen
      const selId = selectedDistrictIdRef.current;
      if (selId) {
        const district = CITY_DISTRICTS.find(d => d.id === selId);
        if (district) {
          if (currentHologramDistrictId !== selId) {
            currentHologramDistrictId = selId;
            const matchedCases = allUseCases.filter(uc => 
              district.useCaseIds?.includes(uc.id) || (district.primaryCaseId && uc.id === district.primaryCaseId)
            );
            const primaryUC = matchedCases[0] || allUseCases.find(uc => uc.id === district.primaryCaseId);
            updateHologramTexture(district, primaryUC);

            // Update frame color to match district accent
            const hexColor = new THREE.Color(district.accentColor || 0x00f2fe);
            frameMat.color = hexColor;
            cornerMat.color = hexColor;
            beamMat.color = hexColor;
          }

          hologramGroup.visible = true;
          // Smooth scale-up
          hologramGroup.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);

          // Position hovering over district with subtle harmonic bob
          const [px, py, pz] = district.position;
          const targetY = py + 14.5 + Math.sin(elapsedTime * 1.8) * 0.4;
          hologramGroup.position.set(px, targetY, pz);

          // Billboard to gently face the camera
          hologramGroup.lookAt(camera.position);

          // Pulse beam opacity
          beamMat.opacity = 0.22 + Math.sin(elapsedTime * 3.0) * 0.08;
        }
      } else {
        currentHologramDistrictId = null;
        hologramGroup.scale.lerp(new THREE.Vector3(0.001, 0.001, 0.001), 0.15);
        if (hologramGroup.scale.x < 0.01) {
          hologramGroup.visible = false;
        }
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
