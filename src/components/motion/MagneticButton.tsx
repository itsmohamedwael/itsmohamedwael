"use client";

import React, { useRef } from "react";
import { motion, useSpring, useReducedMotion } from "motion/react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance pull multiplier
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  asLink = false,
  href,
  target,
  rel,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<any>(null);
  const prefersReduced = useReducedMotion();

  const springConfig = { stiffness: 350, damping: 20, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const pullX = (e.clientX - centerX) * strength;
    const pullY = (e.clientY - centerY) * strength;

    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionComponent = motion(asLink ? "a" : "button");

  return (
    <MotionComponent
      ref={ref}
      href={asLink ? href : undefined}
      target={asLink ? target : undefined}
      rel={asLink ? rel : undefined}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${className}`}
      {...(props as any)}
    >
      {children}
    </MotionComponent>
  );
}
