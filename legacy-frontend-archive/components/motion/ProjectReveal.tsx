"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface ProjectRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ProjectReveal({
  children,
  className = "",
  delay = 0,
}: ProjectRevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
