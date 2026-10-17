"use client";

import React from "react";
import "@/styles/aurora.css";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  intensity?: "full" | "subtle" | "minimal";
  className?: string;
  showGrain?: boolean;
}

export function AuroraBackground({
  children,
  className = "",
}: AuroraBackgroundProps) {
  return (
    <div className={`relative min-h-screen bg-[#0c0b0a] text-[#dedad5] ${className}`}>
      {/* High-Performance Fixed Ambient Layer: 0% GPU load */}
      <div className="ambient-background" aria-hidden="true" />

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
