"use client";

import { useSpring, useMotionValue } from "motion/react";
import { useEffect, RefObject } from "react";
import { PointerState } from "./usePointerTracking";

export interface CharacterMotionValues {
  headRotate: any;
  headX: any;
  headY: any;
  pupilX: any;
  pupilY: any;
  bodyY: any;
  bodyRotate: any;
}

export function useCharacterMotion(
  characterRef: RefObject<HTMLElement | null>,
  pointer: PointerState,
  disabled: boolean = false
): CharacterMotionValues {
  // Motion values
  const rawHeadRotate = useMotionValue(0);
  const rawHeadX = useMotionValue(0);
  const rawHeadY = useMotionValue(0);
  const rawPupilX = useMotionValue(0);
  const rawPupilY = useMotionValue(0);
  const rawBodyY = useMotionValue(0);
  const rawBodyRotate = useMotionValue(0);

  // Springs for organic, physics-based settling
  const springConfig = { stiffness: 140, damping: 18, mass: 0.6 };
  const eyeSpringConfig = { stiffness: 220, damping: 20, mass: 0.3 };

  const headRotate = useSpring(rawHeadRotate, springConfig);
  const headX = useSpring(rawHeadX, springConfig);
  const headY = useSpring(rawHeadY, springConfig);
  const pupilX = useSpring(rawPupilX, eyeSpringConfig);
  const pupilY = useSpring(rawPupilY, eyeSpringConfig);
  const bodyY = useSpring(rawBodyY, springConfig);
  const bodyRotate = useSpring(rawBodyRotate, springConfig);

  useEffect(() => {
    if (disabled || !characterRef.current) {
      rawHeadRotate.set(0);
      rawHeadX.set(0);
      rawHeadY.set(0);
      rawPupilX.set(0);
      rawPupilY.set(0);
      rawBodyY.set(0);
      rawBodyRotate.set(0);
      return;
    }

    const rect = characterRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = pointer.x - centerX;
    const dy = pointer.y - centerY;
    const distance = Math.hypot(dx, dy);

    if (distance === 0) return;

    // Normalized directional unit vector
    const dirX = dx / Math.max(distance, 1);
    const dirY = dy / Math.max(distance, 1);

    // Clamped factors
    const maxRadius = Math.min(window.innerWidth, window.innerHeight) * 0.75;
    const factor = Math.min(distance / maxRadius, 1);

    // Head limits
    const maxHeadRotate = 9; // degrees
    const maxHeadTranslate = 12; // px

    // Pupil limits
    const maxPupilTranslateX = 6.5; // px
    const maxPupilTranslateY = 5.0; // px

    rawHeadRotate.set(dirX * maxHeadRotate * factor);
    rawHeadX.set(dirX * maxHeadTranslate * factor);
    rawHeadY.set(dirY * (maxHeadTranslate * 0.7) * factor);

    rawPupilX.set(dirX * maxPupilTranslateX * factor);
    rawPupilY.set(dirY * maxPupilTranslateY * factor);

    rawBodyRotate.set(dirX * (maxHeadRotate * 0.3) * factor);
    rawBodyY.set(dirY * 4 * factor);
  }, [
    pointer.x,
    pointer.y,
    disabled,
    characterRef,
    rawHeadRotate,
    rawHeadX,
    rawHeadY,
    rawPupilX,
    rawPupilY,
    rawBodyRotate,
    rawBodyY,
  ]);

  return {
    headRotate,
    headX,
    headY,
    pupilX,
    pupilY,
    bodyY,
    bodyRotate,
  };
}
