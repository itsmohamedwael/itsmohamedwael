"use client";

import { useEffect, useState } from "react";

export function usePointerPhysics() {
  const [pointer, setPointer] = useState({ x: 0, y: 0, clientX: 0, clientY: 0 });

  useEffect(() => {
    let frameId: number | null = null;
    let pendingX = 0;
    let pendingY = 0;
    let pendingClientX = 0;
    let pendingClientY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      // Normalize to [-1, 1] relative to window center
      pendingX = (e.clientX / window.innerWidth) * 2 - 1;
      pendingY = (e.clientY / window.innerHeight) * 2 - 1;
      pendingClientX = e.clientX;
      pendingClientY = e.clientY;

      if (!frameId) {
        frameId = requestAnimationFrame(() => {
          setPointer({
            x: pendingX,
            y: pendingY,
            clientX: pendingClientX,
            clientY: pendingClientY,
          });
          frameId = null;
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return pointer;
}
