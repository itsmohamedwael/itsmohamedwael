"use client";

import React, { memo } from "react";
import "@/styles/aurora.css";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  intensity?: "standard" | "minimal";
}

/**
 * AuroraBackground — 6-Layer Atmospheric Aurora Borealis Engine
 * Conforms strictly to the project specification with fixed blur values,
 * hardware-accelerated translations, base canvas #100e0b, and SVG film grain.
 */
export const AuroraBackground = memo(function AuroraBackground({
  children,
  className = "",
  intensity = "standard",
}: AuroraBackgroundProps) {
  return (
    <div
      className={`relative min-h-screen bg-[#100e0b] overflow-hidden ${className}`}
      data-testid="aurora-root"
    >
      {/* Master 6-Layer Atmospheric Backdrop */}
      <div
        className="aurora-canvas-container"
        aria-hidden="true"
        data-testid="aurora-background"
      >
        {/* Layer 1: Teal / Cyan Linear Core (Screen) */}
        <div className="aurora-layer aurora-layer-1" />

        {/* Layer 2: Indigo / Cobalt Deep Space (Screen) */}
        <div className="aurora-layer aurora-layer-2" />

        {/* Layer 3: Emerald Canopy (Screen) */}
        <div className="aurora-layer aurora-layer-3" />

        {/* Layer 4: Deep Azure Horizon (Screen) */}
        <div className="aurora-layer aurora-layer-4" />

        {/* Layer 5: Forest Obsidian Depth (Multiply) */}
        <div className="aurora-layer aurora-layer-5" />

        {/* Layer 6: Violet / Ultraviolet Corona (Screen) */}
        <div className="aurora-layer aurora-layer-6" />

        {/* Atmospheric Vignette */}
        <div className="aurora-vignette" />

        {/* Analog Film Grain Overlay */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35] mix-blend-overlay"
          aria-hidden="true"
        >
          <filter id="aurora-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#aurora-grain)" />
        </svg>
      </div>

      {/* High-Stacking Content Layer */}
      {children && <div className="relative z-10 w-full">{children}</div>}
    </div>
  );
});

AuroraBackground.displayName = "AuroraBackground";
