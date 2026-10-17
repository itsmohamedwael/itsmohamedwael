"use client";

import { useState, useEffect } from "react";

export interface PointerState {
  x: number;
  y: number;
  normalizedX: number; // -1 (left) to 1 (right)
  normalizedY: number; // -1 (top) to 1 (bottom)
  isHovering: boolean;
  hasFinePointer: boolean;
}

export function usePointerTracking(): PointerState {
  const [pointer, setPointer] = useState<PointerState>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isHovering: false,
    hasFinePointer: true,
  });

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const hasFine = mediaQuery.matches;

    // Default center initialization
    setPointer((prev) => ({
      ...prev,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      hasFinePointer: hasFine,
    }));

    if (!hasFine) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const normX = (e.clientX / window.innerWidth) * 2 - 1;
        const normY = (e.clientY / window.innerHeight) * 2 - 1;

        setPointer({
          x: e.clientX,
          y: e.clientY,
          normalizedX: Math.max(-1, Math.min(1, normX)),
          normalizedY: Math.max(-1, Math.min(1, normY)),
          isHovering: true,
          hasFinePointer: true,
        });
      });
    };

    const handleMouseLeave = () => {
      setPointer((prev) => ({
        ...prev,
        normalizedX: 0,
        normalizedY: 0,
        isHovering: false,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return pointer;
}
