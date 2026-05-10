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

  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = fadeIn;

  const left = width * 0.12;
  const top = height * 0.18;
  const lineHeight = 34;

  ctx.textAlign = 'left';
  ctx.fillStyle = '#f8fafc';
  ctx.font = '700 30px monospace';
  ctx.fillText('OZONY TECH', left, top);

  ctx.fillStyle = 'rgba(226, 232, 240, 0.72)';
  ctx.font = '16px monospace';
  ctx.fillText('Boot sequence initialized', left, top + 34);

  ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
  ctx.fillRect(left, top + 58, width * 0.76, 1);

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
    ctx.fillText(
      isComplete ? '[OK]' : '[..]',
      left,
      linesTop + index * lineHeight
    );

    ctx.fillStyle = isComplete
      ? 'rgba(226, 232, 240, 0.9)'
      : 'rgba(226, 232, 240, 0.7)';

    ctx.fillText(line, left + 70, linesTop + index * lineHeight);
  });

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

function CameraRig({ zoomToScreen }) {
  const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(({ camera, size }) => {
    const aspect = size.width / Math.max(size.height, 1);

    let zoomPosition = new THREE.Vector3(0, 0.42, 3.35);
    let zoomLookAt = new THREE.Vector3(0, 0.42, 0);
    let targetFov = 34;

    // Narrower screens need the camera pulled back so the laptop screen
    // does not get cut off.
    if (aspect < 1.05) {
      zoomPosition = new THREE.Vector3(0, 0.5, 4.55);
      zoomLookAt = new THREE.Vector3(0, 0.48, 0);
      targetFov = 38;
    } else if (aspect < 1.3) {
      zoomPosition = new THREE.Vector3(0, 0.48, 4.05);
      zoomLookAt = new THREE.Vector3(0, 0.46, 0);
      targetFov = 36;
    } else if (aspect > 2.05) {
      // Wider screens can come in slightly closer to reduce side gaps.
      zoomPosition = new THREE.Vector3(0, 0.38, 3.05);
      zoomLookAt = new THREE.Vector3(0, 0.4, 0);
      targetFov = 33;
    }

    const targetPosition = zoomToScreen
      ? zoomPosition
      : new THREE.Vector3(0, 1.15, 8.2);

    const targetLookAt = zoomToScreen
      ? zoomLookAt
      : new THREE.Vector3(0, 0, 0);

    const nextFov = zoomToScreen ? targetFov : 34;

    camera.position.lerp(targetPosition, 0.045);
    camera.fov = THREE.MathUtils.lerp(camera.fov, nextFov, 0.045);
    camera.updateProjectionMatrix();

    lookAtTarget.current.lerp(targetLookAt, 0.055);
    camera.lookAt(lookAtTarget.current);
  });

  return null;
}

function projectToCanvas(point, camera, canvasRect) {
  const projected = point.clone().project(camera);

  return {
    x: canvasRect.left + (projected.x * 0.5 + 0.5) * canvasRect.width,
    y: canvasRect.top + (-projected.y * 0.5 + 0.5) * canvasRect.height,
  };
}

function cross(o, a, b) {
  return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}

function getConvexHull(points) {
  const sorted = [...points].sort((a, b) => {
    if (a.x === b.x) return a.y - b.y;
    return a.x - b.x;
  });

  const lower = [];

  for (const point of sorted) {
    while (
      lower.length >= 2 &&
      cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0
    ) {
      lower.pop();
    }

    lower.push(point);
  }

  const upper = [];

  for (let i = sorted.length - 1; i >= 0; i -= 1) {
    const point = sorted[i];

    while (
      upper.length >= 2 &&
      cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0
    ) {
      upper.pop();
    }

    upper.push(point);
  }

  upper.pop();
  lower.pop();

  return lower.concat(upper);
}

function getProjectedScreenShape(screenMesh, camera, canvasRect) {
  if (!screenMesh.geometry.boundingBox) {
    screenMesh.geometry.computeBoundingBox();
  }

  const box = screenMesh.geometry.boundingBox;

  const localPoints = [
    new THREE.Vector3(box.min.x, box.min.y, box.min.z),
    new THREE.Vector3(box.min.x, box.min.y, box.max.z),
    new THREE.Vector3(box.min.x, box.max.y, box.min.z),
    new THREE.Vector3(box.min.x, box.max.y, box.max.z),
    new THREE.Vector3(box.max.x, box.min.y, box.min.z),
    new THREE.Vector3(box.max.x, box.min.y, box.max.z),
    new THREE.Vector3(box.max.x, box.max.y, box.min.z),
    new THREE.Vector3(box.max.x, box.max.y, box.max.z),
  ];

  const projected = localPoints.map((point) =>
    projectToCanvas(screenMesh.localToWorld(point.clone()), camera, canvasRect)
  );

  const hull = getConvexHull(projected);

  const xs = hull.map((point) => point.x);
  const ys = hull.map((point) => point.y);

  const rect = {
    left: Math.min(...xs),
    top: Math.min(...ys),
    width: Math.max(...xs) - Math.min(...xs),
    height: Math.max(...ys) - Math.min(...ys),
  };

  const polygon = hull.map((point) => ({
    x: point.x - rect.left,
    y: point.y - rect.top,
  }));

  return {
    rect,
    polygon,
  };
}

function WebsiteOnProjectedScreen({ visible, zoomed, screenShape }) {
  const iframeRef = useRef(null);

  if (!screenShape?.rect) return null;

  const WEBSITE_WIDTH = 1600;
  const WEBSITE_HEIGHT = 900;

  const SCREEN_INSET_X = 8;
  const SCREEN_INSET_TOP = 8;
  const SCREEN_INSET_BOTTOM = 10;

  const rect = screenShape.rect;

  const fittedRect = {
    left: rect.left + SCREEN_INSET_X,
    top: rect.top + SCREEN_INSET_TOP,
    width: rect.width - SCREEN_INSET_X * 2,
    height: rect.height - SCREEN_INSET_TOP - SCREEN_INSET_BOTTOM,
  };

  // Cover scale:
  // - small viewport: fills the whole laptop screen without bottom cutoff
  // - large viewport: fills the sides without gaps
  const scale = Math.max(
    fittedRect.width / WEBSITE_WIDTH,
    fittedRect.height / WEBSITE_HEIGHT
  );

  const scaledWidth = WEBSITE_WIDTH * scale;
  const scaledHeight = WEBSITE_HEIGHT * scale;

  const offsetX = (fittedRect.width - scaledWidth) / 2;
  const offsetY = (fittedRect.height - scaledHeight) / 2;

  const clipPolygon = screenShape.polygon
    .map((point) => {
      const x = point.x - SCREEN_INSET_X;
      const y = point.y - SCREEN_INSET_TOP;

      return `${x}px ${y}px`;
    })
    .join(', ');

  const handleIframeLoad = () => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    try {
      const doc = iframe.contentDocument;

      if (!doc) return;

      const style = doc.createElement('style');

      style.innerHTML = `
        html,
        body {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          background: #020617 !important;
        }

        html::-webkit-scrollbar,
        body::-webkit-scrollbar,
        *::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
          display: none !important;
        }
      `;

      doc.head.appendChild(style);
    } catch (error) {
      console.warn('Could not inject iframe scrollbar styles:', error);
    }
  };

  return (
    <>
      <style>
        {`
          .laptop-screen-browser {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .laptop-screen-browser::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div
        className={`laptop-screen-browser absolute z-20 bg-[#020617] transition-opacity duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${fittedRect.left}px`,
          top: `${fittedRect.top}px`,
          width: `${fittedRect.width}px`,
          height: `${fittedRect.height}px`,
          pointerEvents: zoomed ? 'auto' : 'none',
          overflow: 'hidden',
          borderRadius: zoomed ? '8px' : '3px',
          clipPath: `polygon(${clipPolygon})`,
          boxShadow: zoomed
            ? '0 0 60px rgba(56, 189, 248, 0.18)'
            : '0 0 20px rgba(56, 189, 248, 0.12)',
        }}
      >
        <div
          style={{
            width: `${scaledWidth}px`,
            height: `${scaledHeight}px`,
            transform: `translate(${offsetX}px, ${offsetY}px)`,
            transformOrigin: 'top left',
          }}
        >
          <iframe
            ref={iframeRef}
            title="Ozony Tech Laptop Screen"
            src="/?screen=1"
            onLoad={handleIframeLoad}
            style={{
              width: `${WEBSITE_WIDTH}px`,
              height: `${WEBSITE_HEIGHT}px`,
              border: 0,
              display: 'block',
              background: '#020617',
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          />
        </div>
      </div>
    </>
  );
}

function LaptopModel({
  startOpen,
  screenBoot,
  websiteVisible,
  onOpened,
  onScreenShape,
}) {
  const group = useRef();
  const screenMesh = useRef(null);
  const bootTexture = useRef(null);
  const bootStartedAt = useRef(null);
  const hasPlayedOpen = useRef(false);
  const hasStartedBoot = useRef(false);
  const hasClearedScreen = useRef(false);
  const lastShapeRef = useRef(null);
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
        childName === 'laptop_screen' ||
        childName.includes('laptop_screen') ||
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

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      color: '#ffffff',
      toneMapped: false,
    });

    screenMesh.current.material = material;

    bootTexture.current = texture;
    bootStartedAt.current = performance.now() / 1000;
  }, [screenBoot]);

  useEffect(() => {
    if (!websiteVisible || !screenMesh.current || hasClearedScreen.current) {
      return;
    }

    hasClearedScreen.current = true;
    bootTexture.current = null;
    bootStartedAt.current = null;

    screenMesh.current.material = new THREE.MeshBasicMaterial({
      color: '#020617',
      toneMapped: false,
    });
  }, [websiteVisible]);

  useFrame(({ camera, gl }) => {
    if (screenBoot && bootTexture.current && bootStartedAt.current) {
      const elapsed = performance.now() / 1000 - bootStartedAt.current;
      const canvas = bootTexture.current.image;
      const ctx = canvas.getContext('2d');

      drawBootScreen(ctx, elapsed);

      bootTexture.current.needsUpdate = true;
    }

    if (!screenMesh.current || !websiteVisible) return;

    const canvasRect = gl.domElement.getBoundingClientRect();
    const nextShape = getProjectedScreenShape(
      screenMesh.current,
      camera,
      canvasRect
    );

    const previous = lastShapeRef.current;
    const changed =
      !previous ||
      Math.abs(previous.rect.left - nextShape.rect.left) > 0.75 ||
      Math.abs(previous.rect.top - nextShape.rect.top) > 0.75 ||
      Math.abs(previous.rect.width - nextShape.rect.width) > 0.75 ||
      Math.abs(previous.rect.height - nextShape.rect.height) > 0.75;

    if (changed) {
      lastShapeRef.current = nextShape;
      onScreenShape(nextShape);
    }
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

export default function LaptopIntro() {
  const [startOpen, setStartOpen] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [screenBoot, setScreenBoot] = useState(false);
  const [websiteVisible, setWebsiteVisible] = useState(false);
  const [zoomToScreen, setZoomToScreen] = useState(false);
  const [screenShape, setScreenShape] = useState(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleEnter = () => {
    if (isEntering) return;

    setIsEntering(true);
    setStartOpen(true);
  };

  const handleOpened = () => {
    setScreenBoot(true);

    setTimeout(() => {
      setWebsiteVisible(true);
    }, 3000);

    setTimeout(() => {
      setZoomToScreen(true);
    }, 3900);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_38%)]" />

      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 1.15, 8.2], fov: 34 }}>
          <Suspense fallback={null}>
            <CameraRig zoomToScreen={zoomToScreen} />

            <ambientLight intensity={1.25} />
            <directionalLight position={[3, 5, 4]} intensity={2.2} />
            <directionalLight position={[-4, 2, -3]} intensity={0.9} />
            <Environment preset="city" />

            <LaptopModel
              startOpen={startOpen}
              screenBoot={screenBoot}
              websiteVisible={websiteVisible}
              onOpened={handleOpened}
              onScreenShape={setScreenShape}
            />
          </Suspense>
        </Canvas>
      </div>

      <WebsiteOnProjectedScreen
        visible={websiteVisible}
        zoomed={zoomToScreen}
        screenShape={screenShape}
      />

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