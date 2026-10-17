"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface SectionTransitionProps {
  label?: string;
  number?: string;
  className?: string;
}

export function SectionTransition({
  label,
  number,
  className = "",
}: SectionTransitionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={`relative w-full py-12 flex items-center justify-between pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {(label || number) && (
        <div className="px-6 flex items-center gap-3">
          {number && (
            <span className="font-mono text-[10px] tracking-widest text-emerald-400/80">
              {number}
            </span>
          )}
          {label && (
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-400">
              {label}
            </span>
          )}
        </div>
      )}
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
