import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const BOOT_DURATION = 2.8;

const BOOT_LINES = [
  'Powering display...',
  'Loading Ozony Tech workspace...',
  'Checking network services...',
  'Preparing secure interface...',
  'System ready.',
];

function drawBootScreen(ctx, elapsed) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  const t = Math.min(elapsed / BOOT_DURATION, 1);
  const progress = THREE.MathUtils.smoothstep(t, 0.08, 0.96);
  const fadeIn = THREE.MathUtils.smoothstep(t, 0.02, 0.18);
  const cursorBlink = Math.floor(elapsed * 2.5) % 2 === 0;

  ctx.clearRect(0, 0, width, height);

  // Pure clean black boot screen.
  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = fadeIn;

  const left = width * 0.12;
  const top = height * 0.18;
  const lineHeight = 34;

  // Header
  ctx.textAlign = 'left';
  ctx.fillStyle = '#f8fafc';
  ctx.font = '700 30px monospace';
  ctx.fillText('OZONY TECH', left, top);

  ctx.fillStyle = 'rgba(226, 232, 240, 0.72)';
  ctx.font = '16px monospace';
  ctx.fillText('Boot sequence initialized', left, top + 34);

  // Separator
  ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
  ctx.fillRect(left, top + 58, width * 0.76, 1);

  // Boot lines
  const linesTop = top + 102;

  BOOT_LINES.forEach((line, index) => {
    const startAt = 0.14 + index * 0.14;
    const isVisible = t >= startAt;
    const isComplete = t >= startAt + 0.08;

    if (!isVisible) return;

    const lineFade = THREE.MathUtils.smoothstep(t, startAt, startAt + 0.05);
    ctx.globalAlpha = fadeIn * lineFade;

    ctx.font = '18px monospace';

    ctx.fillStyle = isComplete ? '#7dd3fc' : '#e2e8f0';
    ctx.fillText(isComplete ? '[OK]' : '[..]', left, linesTop + index * lineHeight);

    ctx.fillStyle = isComplete
      ? 'rgba(226, 232, 240, 0.9)'
      : 'rgba(226, 232, 240, 0.7)';

    ctx.fillText(line, left + 70, linesTop + index * lineHeight);
  });

  // Cursor
  const activeIndex = Math.min(
    BOOT_LINES.length,
    Math.floor(THREE.MathUtils.smoothstep(t, 0.14, 0.88) * BOOT_LINES.length)
  );

  if (cursorBlink && t < 0.96) {
    ctx.globalAlpha = fadeIn;
    ctx.fillStyle = '#7dd3fc';
    ctx.font = '18px monospace';
    ctx.fillText('_', left, linesTop + (activeIndex + 1) * lineHeight);
  }

  // Progress bar
  ctx.globalAlpha = fadeIn;

  const barWidth = width * 0.76;
  const barHeight = 14;
  const barX = left;
  const barY = height * 0.78;

  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.fillRect(barX, barY, barWidth, barHeight);

  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(barX, barY, barWidth * progress, barHeight);

  ctx.strokeStyle = 'rgba(125, 211, 252, 0.45)';
  ctx.lineWidth = 1;
  ctx.strokeRect(barX, barY, barWidth, barHeight);

  ctx.fillStyle = 'rgba(226, 232, 240, 0.78)';
  ctx.font = '16px monospace';
  ctx.fillText(
    `${Math.round(progress * 100).toString().padStart(3, '0')}%`,
    barX,
    barY + 42
  );

  if (progress >= 0.98) {
    ctx.fillStyle = '#f8fafc';
    ctx.font = '700 16px monospace';
    ctx.fillText('Entering workspace...', barX + 100, barY + 42);
  }

  ctx.restore();
}

function LaptopModel({ startOpen, screenBoot, onOpened }) {
  const group = useRef();
  const screenMesh = useRef(null);
  const bootTexture = useRef(null);
  const bootStartedAt = useRef(null);
  const hasPlayedOpen = useRef(false);
  const hasStartedBoot = useRef(false);
  const onOpenedRef = useRef(onOpened);

  const { scene, animations } = useGLTF('/models/ozony-laptop.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    onOpenedRef.current = onOpened;
  }, [onOpened]);

  useEffect(() => {
    console.log('GLB animation names:', names);
  }, [names]);

  useEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;

      const childName = child.name?.toLowerCase() || '';
      const materialName = Array.isArray(child.material)
        ? child.material.map((mat) => mat?.name?.toLowerCase()).join(' ')
        : child.material?.name?.toLowerCase() || '';

      if (
        childName.includes('laptop_screen') ||
        childName.includes('screen') ||
        materialName.includes('screen_mat_idle')
      ) {
        screenMesh.current = child;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (!screenBoot || !screenMesh.current || hasStartedBoot.current) return;

    hasStartedBoot.current = true;

    const canvas = document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 720;

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

    // Use a fresh clean material instead of cloning the Blender material.
    // This prevents old maps/settings from creating weird shapes or panels.
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      color: '#ffffff',
      toneMapped: false,
    });

    screenMesh.current.material = material;

    bootTexture.current = texture;
    bootStartedAt.current = performance.now() / 1000;
  }, [screenBoot]);

  useFrame(() => {
    if (!screenBoot || !bootTexture.current || !bootStartedAt.current) return;

    const elapsed = performance.now() / 1000 - bootStartedAt.current;
    const canvas = bootTexture.current.image;
    const ctx = canvas.getContext('2d');

    drawBootScreen(ctx, elapsed);

    bootTexture.current.needsUpdate = true;
  });

  useEffect(() => {
    if (!startOpen || !actions || names.length === 0 || hasPlayedOpen.current) {
      return;
    }

    hasPlayedOpen.current = true;

    const actionName = names.includes('laptop_open') ? 'laptop_open' : names[0];
    const action = actions[actionName];

    if (!action) return;

    action.reset();
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;
    action.timeScale = 1;
    action.play();

    const timeout = setTimeout(() => {
      onOpenedRef.current?.();
    }, 2200);

    return () => clearTimeout(timeout);
  }, [startOpen, actions, names]);

  return (
    <primitive
      ref={group}
      object={scene}
      position={[0, -1.15, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={1}
    />
  );
}

export default function LaptopIntro({ onEnter }) {
  const [startOpen, setStartOpen] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [screenBoot, setScreenBoot] = useState(false);

  const handleEnter = () => {
    if (isEntering) return;

    setIsEntering(true);
    setStartOpen(true);
  };

  const handleOpened = () => {
    setScreenBoot(true);

    setTimeout(() => {
      onEnter?.();
    }, 3000);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_38%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Full-screen 3D canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 1.15, 8.2], fov: 34 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.25} />
            <directionalLight position={[3, 5, 4]} intensity={2.2} />
            <directionalLight position={[-4, 2, -3]} intensity={0.9} />
            <Environment preset="city" />

            <LaptopModel
              startOpen={startOpen}
              screenBoot={screenBoot}
              onOpened={handleOpened}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Top text overlay */}
      <div className="pointer-events-none relative z-10 flex min-h-screen flex-col items-center justify-between px-6 py-10 text-center">
        <div
          className={`pt-4 transition-all duration-500 md:pt-8 ${
            isEntering
              ? '-translate-y-4 opacity-0 blur-sm'
              : 'translate-y-0 opacity-100 blur-0'
          }`}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.45em] text-sky-300/80">
            Ozony Tech System
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Welcome to Ozony.Tech
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            Power on the system to enter a smarter workspace for IT support,
            business Wi-Fi, networking, firewall setup, and modern web solutions.
          </p>
        </div>

        {/* Bottom controls */}
        <div
          className={`pointer-events-auto pb-8 transition-all duration-500 ${
            isEntering
              ? 'translate-y-4 opacity-0 blur-sm'
              : 'translate-y-0 opacity-100 blur-0'
          }`}
        >
          <button
            type="button"
            onClick={handleEnter}
            disabled={isEntering}
            className="group relative overflow-hidden rounded-full border border-sky-300/40 bg-sky-400/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-100 shadow-[0_0_40px_rgba(56,189,248,0.22)] transition hover:border-sky-200 hover:bg-sky-300/20 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="relative z-10">
              {isEntering ? 'Booting...' : 'Power On'}
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
          </button>

          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-slate-500">
            Secure workspace ready
          </p>
        </div>
      </div>
    </section>
  );
}

useGLTF.preload('/models/ozony-laptop.glb');