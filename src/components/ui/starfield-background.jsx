import React, { useEffect, useMemo, useState } from 'react';
import './starfield-background.css';

const createSeededRandom = (seed = 1) => {
  let value = seed >>> 0;

  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
};

const buildBoxShadows = (count, maxX, maxY, seed, alpha = 0.9) => {
  const rand = createSeededRandom(seed);

  return Array.from({ length: count }, () => {
    const x = Math.floor(rand() * maxX);
    const y = Math.floor(rand() * maxY);
    return `${x}px ${y}px rgba(255, 255, 255, ${alpha})`;
  }).join(', ');
};

const getBounds = () => {
  if (typeof window === 'undefined') {
    return { width: 2600, height: 2200 };
  }

  return {
    width: Math.max(Math.ceil(window.innerWidth * 1.4), 2600),
    height: 2200,
  };
};

const StarfieldBackground = ({
  smallCount = 420,
  mediumCount = 150,
  largeCount = 75,
  className = '',
}) => {
  const [bounds, setBounds] = useState(getBounds);

  useEffect(() => {
    const handleResize = () => {
      setBounds(getBounds());
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const smallStars = useMemo(
    () => buildBoxShadows(smallCount, bounds.width, bounds.height, 11, 0.85),
    [smallCount, bounds.width, bounds.height]
  );

  const mediumStars = useMemo(
    () => buildBoxShadows(mediumCount, bounds.width, bounds.height, 27, 0.75),
    [mediumCount, bounds.width, bounds.height]
  );

  const largeStars = useMemo(
    () => buildBoxShadows(largeCount, bounds.width, bounds.height, 49, 0.65),
    [largeCount, bounds.width, bounds.height]
  );

  return (
    <div className={`starfield-bg ${className}`} aria-hidden="true">
      <div className="starfield-bg__base" />
      <div className="starfield-bg__glow starfield-bg__glow--top" />
      <div className="starfield-bg__glow starfield-bg__glow--bottom" />

      <div
        className="starfield-bg__layer starfield-bg__layer--sm"
        style={{ boxShadow: smallStars }}
      />
      <div
        className="starfield-bg__layer starfield-bg__layer--sm starfield-bg__layer--clone"
        style={{ boxShadow: smallStars }}
      />

      <div
        className="starfield-bg__layer starfield-bg__layer--md"
        style={{ boxShadow: mediumStars }}
      />
      <div
        className="starfield-bg__layer starfield-bg__layer--md starfield-bg__layer--clone"
        style={{ boxShadow: mediumStars }}
      />

      <div
        className="starfield-bg__layer starfield-bg__layer--lg"
        style={{ boxShadow: largeStars }}
      />
      <div
        className="starfield-bg__layer starfield-bg__layer--lg starfield-bg__layer--clone"
        style={{ boxShadow: largeStars }}
      />

      <div className="starfield-bg__overlay" />
    </div>
  );
};

export default StarfieldBackground;