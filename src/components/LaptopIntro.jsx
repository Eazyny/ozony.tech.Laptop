import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function LaptopModel({ startOpen, onOpened }) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/ozony-laptop.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    console.log('GLB animation names:', names);
  }, [names]);

  useEffect(() => {
    if (!startOpen || !actions || names.length === 0) return;

    const actionName = names.includes('laptop_open') ? 'laptop_open' : names[0];
    const action = actions[actionName];

    if (!action) return;

    action.reset();
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;
    action.timeScale = 1;
    action.play();

    const timeout = setTimeout(() => {
      onOpened?.();
    }, 2200);

    return () => clearTimeout(timeout);
  }, [startOpen, actions, names, onOpened]);

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

  const handleEnter = () => {
    if (isEntering) return;

    setIsEntering(true);
    setStartOpen(true);
  };

  const handleOpened = () => {
    setTimeout(() => {
      onEnter?.();
    }, 600);
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

            <LaptopModel startOpen={startOpen} onOpened={handleOpened} />
          </Suspense>
        </Canvas>
      </div>

      {/* Top text overlay */}
      <div className="pointer-events-none relative z-10 flex min-h-screen flex-col items-center justify-between px-6 py-10 text-center">
        <div className="pt-4 md:pt-8">
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
        <div className="pointer-events-auto pb-8">
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