"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import "@/styles/aurora.css";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  intensity?: "full" | "subtle" | "minimal";
  className?: string;
  showGrain?: boolean;
}

export function AuroraBackground({
  children,
  intensity = "full",
  className = "",
  showGrain = true,
}: AuroraBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Subtle scroll parallax linked to container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.85], [1, 0.4]);

  const opacityMultiplier =
    intensity === "full" ? 1 : intensity === "subtle" ? 0.65 : 0.35;

  return (
    <div
      ref={containerRef}
      className={`aurora-container relative overflow-hidden ${className}`}
      style={{ background: "transparent" }}
    >
      {/* Aurora Ambient Canvas */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden"
        aria-hidden="true"
        style={{
          opacity: prefersReduced ? opacityMultiplier : opacityFade,
          y: prefersReduced ? 0 : parallaxY,
        }}
      >
        {/* Layer 1: Linear gradient · screen · blur 122px/85px */}
        <div className="aurora-layer aurora-layer-1" />

        {/* Layer 2: Linear gradient · screen · opacity 0.9 · blur 108px/75px */}
        <div className="aurora-layer aurora-layer-2" />

        {/* Layer 3: Radial gradient · screen · opacity 0.9 · blur 101px/70px */}
        <div className="aurora-layer aurora-layer-3" />

        {/* Layer 4: Radial gradient · screen · blur 252px/175px */}
        <div className="aurora-layer aurora-layer-4" />

        {/* Layer 5: Linear gradient · multiply · opacity 0.9 · blur 115px/80px */}
        <div className="aurora-layer aurora-layer-5" />

        {/* Layer 6: Radial gradient · screen · opacity 0.7 · blur 198px/138px */}
        <div className="aurora-layer aurora-layer-6" />

        {/* SVG Film Grain Texture */}
        {showGrain && (
          <svg
            className="aurora-grain-overlay"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="aurora-film-grain" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.7"
                numOctaves="4"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                in="noise"
                result="coloredNoise"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#aurora-film-grain)" />
          </svg>
        )}
      </motion.div>

      {/* Foreground Content with High Stacking Context */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
