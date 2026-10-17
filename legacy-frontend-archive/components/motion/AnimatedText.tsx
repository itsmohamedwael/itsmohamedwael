"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number;
}

export function AnimatedText({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
  stagger = 0.04,
}: AnimatedTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  const prefersReduced = useReducedMotion();

  const words = text.split(" ");

  if (prefersReduced) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component ref={ref as any} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : { y: "115%", opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
