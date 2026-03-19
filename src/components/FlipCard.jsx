import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Info, RotateCcw } from 'lucide-react';

const FlipCard = ({
  name,
  badge,
  image,
  imageClassName = '',
  description,
  bestFor,
  includes = [],
  stackLabel = 'Recommended stack',
  stackName,
  className = '',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFlip();
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group relative h-[580px] w-full [perspective:1400px] ${className}`}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label={`${name} package card. ${isFlipped ? 'Showing details' : 'Showing summary'}. Click to flip.`}
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
        className="relative h-full w-full cursor-pointer outline-none"
      >
        <div
          className={`relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-lg shadow-blue-500/10 [backface-visibility:hidden]">
            <div className="absolute inset-0">
              <img
                src={image}
                alt={`${name} package visual`}
                className={`h-full w-full object-cover object-center brightness-[0.76] contrast-[1.03] saturate-[0.9] ${imageClassName}`}
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/8 via-slate-950/28 to-slate-950/95" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%)]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                  {badge}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-950/70 px-3 py-1 text-xs text-gray-300 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                  <Info className="h-3.5 w-3.5 text-blue-400" />
                  Click for details
                </span>
              </div>

              <div className="space-y-4">
                <div className="relative isolate mt-8 max-w-md overflow-hidden rounded-2xl border border-white/20 bg-white/[0.08] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-[28px] backdrop-brightness-125 backdrop-saturate-150">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.18] via-white/[0.08] to-white/[0.03]" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/35" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/8" />
                  <div className="relative">
                    <h3 className="text-3xl font-bold text-white">{name}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-100/95 md:text-lg">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/95 to-slate-800/95 p-6 shadow-lg shadow-blue-500/10 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex h-full flex-col">
              <div className="flex min-h-[72px] items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                    Package details
                  </p>
                  <h3 className="mt-2 text-3xl font-bold text-white">{name}</h3>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-950/60 px-3 py-1 text-xs text-gray-300">
                  <RotateCcw className="h-3.5 w-3.5 text-blue-400" />
                  Click to return
                </span>
              </div>

              {stackName && (
                <div className="mt-4 min-h-[108px] rounded-2xl border border-slate-700/60 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                    {stackLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">{stackName}</p>
                </div>
              )}

              <div className="mt-4 flex flex-1 flex-col">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-blue-400">
                  What’s included
                </p>

                <div className="flex-1 space-y-3">
                  {includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      <p className="text-sm leading-relaxed text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-700/60 bg-blue-500/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-400">Best for</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{bestFor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlipCard;