import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sun, RotateCcw, Move, Zap, Activity } from 'lucide-react';

export default function Solar3DCanvas() {
  const mountRef = useRef(null);
  const [timeOfDay, setTimeOfDay] = useState(12.0);
  const [irradiance, setIrradiance] = useState(1020);
  const [powerKw, setPowerKw] = useState('11.0');
  const [sunElevation, setSunElevation] = useState(74);

  // Simulation references
  const simRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    solarRig: null,
    sunLight: null,
    sunMesh: null,
    targetRotation: { x: 0.28, y: -0.45 },
    currentRotation: { x: 0.28, y: -0.45 },
    isDragging: false,
    autoRotate: true,
    previousMousePosition: { x: 0, y: 0 },
    animationFrameId: null
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 480;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF8FAFC);
    simRef.current.scene = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.4, 6.2);
    camera.lookAt(0, 0.4, 0);
    simRef.current.camera = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    simRef.current.renderer = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.75);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xFFFBEB, 2.4);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 30;
    sunLight.shadow.camera.left = -5;
    sunLight.shadow.camera.right = 5;
    sunLight.shadow.camera.top = 5;
    sunLight.shadow.camera.bottom = -5;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);
    simRef.current.sunLight = sunLight;

    // Glowing Sun Mesh
    const sunGeom = new THREE.SphereGeometry(0.35, 24, 24);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xFBBF24 });
    const sunMesh = new THREE.Mesh(sunGeom, sunMat);
    scene.add(sunMesh);
    simRef.current.sunMesh = sunMesh;

    // Soft cyan fill light
    const fillLight = new THREE.DirectionalLight(0x0284C7, 0.4);
    fillLight.position.set(-5, 2, -3);
    scene.add(fillLight);

    // 5. Build Solar Model
    const solarRig = new THREE.Group();
    const rows = 3;
    const cols = 4;
    const panelW = 0.85;
    const panelH = 1.45;
    const panelD = 0.04;
    const gap = 0.04;

    const cellMat = new THREE.MeshPhysicalMaterial({
      color: 0x0A192F,
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 0.9
    });

    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xCBD5E1,
      metalness: 0.9,
      roughness: 0.35
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.22,
      roughness: 0.05,
      transmission: 0.7,
      ior: 1.52
    });

    const railMat = new THREE.MeshStandardMaterial({
      color: 0x64748B,
      metalness: 0.8,
      roughness: 0.4
    });

    const startX = -((cols * (panelW + gap)) / 2) + panelW / 2;
    const startZ = -((rows * (panelH + gap)) / 2) + panelH / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const moduleGroup = new THREE.Group();
        const xPos = startX + c * (panelW + gap);
        const zPos = startZ + r * (panelH + gap);

        const frameGeom = new THREE.BoxGeometry(panelW, panelD, panelH);
        const frameMesh = new THREE.Mesh(frameGeom, frameMat);
        frameMesh.castShadow = true;
        frameMesh.receiveShadow = true;
        moduleGroup.add(frameMesh);

        const cellGeom = new THREE.BoxGeometry(panelW - 0.03, panelD + 0.005, panelH - 0.03);
        const cellMesh = new THREE.Mesh(cellGeom, cellMat);
        cellMesh.castShadow = true;
        cellMesh.receiveShadow = true;
        cellMesh.position.y = 0.005;
        moduleGroup.add(cellMesh);

        const glassGeom = new THREE.PlaneGeometry(panelW - 0.03, panelH - 0.03);
        const glassMesh = new THREE.Mesh(glassGeom, glassMat);
        glassMesh.rotation.x = -Math.PI / 2;
        glassMesh.position.y = panelD / 2 + 0.008;
        moduleGroup.add(glassMesh);

        // Silver busbars
        const busbarGeom = new THREE.BoxGeometry(panelW - 0.04, 0.002, 0.008);
        const busbarMat = new THREE.MeshBasicMaterial({ color: 0xE2E8F0 });
        for (let b = -0.55; b <= 0.55; b += 0.28) {
          const busbar = new THREE.Mesh(busbarGeom, busbarMat);
          busbar.position.set(0, panelD / 2 + 0.009, b);
          moduleGroup.add(busbar);
        }

        moduleGroup.position.set(xPos, 0, zPos);
        solarRig.add(moduleGroup);
      }
    }

    // Strut Rails
    const totalW = cols * (panelW + gap) + 0.2;
    for (let r = 0; r < rows; r++) {
      const zPos = startZ + r * (panelH + gap);
      const railGeom = new THREE.BoxGeometry(totalW, 0.06, 0.06);
      const rail1 = new THREE.Mesh(railGeom, railMat);
      rail1.position.set(0, -panelD - 0.04, zPos - 0.35);
      rail1.castShadow = true;
      solarRig.add(rail1);

      const rail2 = new THREE.Mesh(railGeom, railMat);
      rail2.position.set(0, -panelD - 0.04, zPos + 0.35);
      rail2.castShadow = true;
      solarRig.add(rail2);
    }

    // Heavy-duty legs
    for (let supX of [-totalW / 2 + 0.3, 0, totalW / 2 - 0.3]) {
      const legGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.9, 12);
      const legRear = new THREE.Mesh(legGeom, railMat);
      legRear.position.set(supX, -0.45, -1.2);
      legRear.castShadow = true;
      solarRig.add(legRear);

      const legFrontGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.35, 12);
      const legFront = new THREE.Mesh(legFrontGeom, railMat);
      legFront.position.set(supX, -0.65, 1.2);
      legFront.castShadow = true;
      solarRig.add(legFront);
    }

    solarRig.rotation.x = 0.42; // Pretoria North facing optimal angle
    solarRig.position.y = 0.8;
    scene.add(solarRig);
    simRef.current.solarRig = solarRig;

    // 6. Floor & Grid
    const groundGeom = new THREE.PlaneGeometry(24, 24);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const ground = new THREE.Mesh(groundGeom, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.receiveShadow = true;
    scene.add(ground);

    const grid = new THREE.GridHelper(16, 24, 0x0284C7, 0xE2E8F0);
    grid.position.y = -0.04;
    scene.add(grid);

    // Initial sun update
    updateSun(12.0);

    // 7. Mouse / Touch Listeners
    const dom = renderer.domElement;

    const onPointerDown = (e) => {
      simRef.current.isDragging = true;
      simRef.current.autoRotate = false;
      simRef.current.previousMousePosition = {
        x: e.clientX || (e.touches && e.touches[0].clientX),
        y: e.clientY || (e.touches && e.touches[0].clientY)
      };
    };

    const onPointerMove = (e) => {
      if (!simRef.current.isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      const deltaX = clientX - simRef.current.previousMousePosition.x;
      const deltaY = clientY - simRef.current.previousMousePosition.y;

      simRef.current.targetRotation.y += deltaX * 0.008;
      simRef.current.targetRotation.x = Math.max(0.05, Math.min(0.9, simRef.current.targetRotation.x + deltaY * 0.006));

      simRef.current.previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      simRef.current.isDragging = false;
    };

    dom.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    dom.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    const handleResize = () => {
      if (!mountRef.current || !simRef.current.renderer || !simRef.current.camera) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      simRef.current.camera.aspect = w / h;
      simRef.current.camera.updateProjectionMatrix();
      simRef.current.renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      simRef.current.animationFrameId = requestAnimationFrame(animate);

      if (simRef.current.autoRotate) {
        simRef.current.targetRotation.y += 0.002;
      }

      simRef.current.currentRotation.x += (simRef.current.targetRotation.x - simRef.current.currentRotation.x) * 0.08;
      simRef.current.currentRotation.y += (simRef.current.targetRotation.y - simRef.current.currentRotation.y) * 0.08;

      if (simRef.current.solarRig) {
        simRef.current.solarRig.rotation.y = simRef.current.currentRotation.y;
        simRef.current.solarRig.rotation.x = simRef.current.currentRotation.x;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(simRef.current.animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      if (dom && dom.parentNode) {
        dom.parentNode.removeChild(dom);
      }
      renderer.dispose();
    };
  }, []);

  const updateSun = (time) => {
    setTimeOfDay(time);
    const norm = (time - 6) / 12;
    const angle = norm * Math.PI;

    const radius = 8.5;
    const x = -Math.cos(angle) * radius;
    const y = Math.max(0.4, Math.sin(angle) * radius * 0.95);
    const z = -Math.sin(angle) * 3.5;

    if (simRef.current.sunLight) {
      simRef.current.sunLight.position.set(x, y, z);
    }
    if (simRef.current.sunMesh) {
      simRef.current.sunMesh.position.set(x * 1.3, y * 1.3, z * 1.3);
    }

    const elevationRatio = Math.sin(angle);
    const calcIrradiance = Math.round(Math.max(120, elevationRatio * 1020));
    const calcKw = Math.max(0.4, (elevationRatio * 11.0)).toFixed(1);
    const calcElevation = Math.round(elevationRatio * 74);

    setIrradiance(calcIrradiance);
    setPowerKw(calcKw);
    setSunElevation(calcElevation);

    if (simRef.current.sunLight) {
      if (elevationRatio > 0.6) {
        simRef.current.sunLight.color.setHex(0xFFFBEB);
        simRef.current.sunLight.intensity = 2.4;
        if (simRef.current.sunMesh) simRef.current.sunMesh.material.color.setHex(0xFBBF24);
      } else if (elevationRatio > 0.25) {
        simRef.current.sunLight.color.setHex(0xFED7AA);
        simRef.current.sunLight.intensity = 1.9;
        if (simRef.current.sunMesh) simRef.current.sunMesh.material.color.setHex(0xF59E0B);
      } else {
        simRef.current.sunLight.color.setHex(0xFDBA74);
        simRef.current.sunLight.intensity = 1.2;
        if (simRef.current.sunMesh) simRef.current.sunMesh.material.color.setHex(0xEA580C);
      }
    }
  };

  const handleResetView = () => {
    simRef.current.targetRotation = { x: 0.28, y: -0.45 };
    simRef.current.autoRotate = true;
  };

  const formatTime = (time) => {
    const hours = Math.floor(time);
    const mins = Math.round((time - hours) * 60);
    const minsStr = mins < 10 ? '0' + mins : mins;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
    return `${displayHour}:${minsStr} ${ampm}`;
  };

  return (
    <div className="glass-card p-4 sm:p-6 relative">
      {/* Canvas Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Interactive 3D Photovoltaic Array
          </span>
        </div>
        <button
          onClick={handleResetView}
          className="text-xs font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset View</span>
        </button>
      </div>

      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        id="solar-canvas-container"
        className="relative cursor-grab active:cursor-grabbing h-[380px] sm:h-[440px] lg:h-[480px] w-full rounded-2xl overflow-hidden border border-slate-200"
      >
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-200 text-[11px] font-semibold text-slate-600 pointer-events-none flex items-center gap-1.5 shadow-sm">
          <Move className="w-3.5 h-3.5 text-sky-600" />
          <span>Drag to Rotate 3D Array</span>
        </div>
      </div>

      {/* Sun Trajectory Slider Controller */}
      <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span className="flex items-center gap-1.5 text-amber-600">
            <Sun className="w-4 h-4" />
            <span>Pretoria Sun Position:</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-mono text-xs">
            {formatTime(timeOfDay)}
          </span>
        </div>

        <input
          type="range"
          min="6"
          max="18"
          step="0.25"
          value={timeOfDay}
          onChange={(e) => updateSun(parseFloat(e.target.value))}
          className="slider-solar"
        />

        <div className="flex justify-between text-[10px] text-slate-400 font-semibold uppercase">
          <span>06:00 (Dawn)</span>
          <span>12:00 (Solar Noon)</span>
          <span>18:00 (Dusk)</span>
        </div>

        {/* Real-Time Telemetry Cards */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-center">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Irradiance</div>
            <div className="text-sm font-extrabold text-amber-600 font-mono">{irradiance} W/m²</div>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-center">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Array Output</div>
            <div className="text-sm font-extrabold text-sky-600 font-mono">{powerKw} kW</div>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-center">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sun Elevation</div>
            <div className="text-sm font-extrabold text-slate-800 font-mono">{sunElevation}°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
