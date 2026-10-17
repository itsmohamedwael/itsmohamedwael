"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useReducedMotion } from "motion/react";
import { usePointerPhysics } from "../../hooks/usePointerPhysics";

interface ObserverAvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  statusText?: string;
}

export function ObserverAvatar({
  className = "",
  size = "md",
  statusText = "MONITORING / ACTIVE",
}: ObserverAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const pointer = usePointerPhysics();
  const [isSquished, setIsSquished] = useState(false);
  const [blink, setBlink] = useState(false);

  // Dynamic spring values for natural physics
  const springConfig = { stiffness: 180, damping: 20, mass: 0.6 };
  const headRotate = useSpring(0, springConfig);
  const headX = useSpring(0, springConfig);
  const headY = useSpring(0, springConfig);
  const pupilX = useSpring(0, springConfig);
  const pupilY = useSpring(0, springConfig);

  useEffect(() => {
    if (prefersReduced) return;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Delta from avatar center to mouse
      const deltaX = (pointer.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (pointer.clientY - centerY) / (window.innerHeight / 2);

      const clampedX = Math.max(-1, Math.min(1, deltaX));
      const clampedY = Math.max(-1, Math.min(1, deltaY));

      headRotate.set(clampedX * 10);
      headX.set(clampedX * 8);
      headY.set(clampedY * 7);
      pupilX.set(clampedX * 5);
      pupilY.set(clampedY * 4);
    }
  }, [pointer, headRotate, headX, headY, pupilX, pupilY, prefersReduced]);

  // Natural blinking interval
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 4200);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleSquish = () => {
    setIsSquished(true);
    setTimeout(() => setIsSquished(false), 240);
  };

  const dimensions = {
    sm: "w-36 h-36",
    md: "w-52 h-52 sm:w-60 sm:h-60",
    lg: "w-64 h-64 sm:w-80 sm:h-80",
  }[size];

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center select-none ${className}`}
    >
      {/* Editorial Status HUD */}
      <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-neutral-800 bg-neutral-950/80 px-3 py-1 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
          {statusText}
        </span>
      </div>

      {/* Main Interactive Stage */}
      <motion.div
        onClick={handleSquish}
        animate={
          isSquished
            ? { scaleX: 1.08, scaleY: 0.92, rotate: -2 }
            : { scaleX: 1, scaleY: 1, rotate: 0 }
        }
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
        className={`relative cursor-pointer group ${dimensions}`}
        title="Interactive illustrated observer — tracks cursor"
      >
        {/* Crisp Architectural Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-neutral-800/80 bg-neutral-950 transition-colors duration-500 group-hover:border-neutral-600 shadow-[0_0_50px_-15px_rgba(255,255,255,0.06)]" />

        {/* Vector Character Canvas */}
        <div className="relative h-full w-full rounded-full p-2 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 240 240"
            className="h-full w-full drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="charSkinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d8a37f" />
                <stop offset="100%" stopColor="#bd835c" />
              </linearGradient>
              <linearGradient id="charHairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1f1a16" />
                <stop offset="60%" stopColor="#14110f" />
                <stop offset="100%" stopColor="#080706" />
              </linearGradient>
              <linearGradient id="charShirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22201e" />
                <stop offset="100%" stopColor="#121110" />
              </linearGradient>
              <linearGradient id="charIrisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3d2719" />
                <stop offset="100%" stopColor="#1a1008" />
              </linearGradient>
            </defs>

            {/* Torso / Shoulders with Idle Breathing */}
            <motion.g
              animate={prefersReduced ? {} : { y: [0, 2.5, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
            >
              {/* Crewneck Shirt */}
              <path
                d="M45,240 C55,185 90,172 120,172 C150,172 185,185 195,240 Z"
                fill="url(#charShirtGrad)"
                stroke="#2a2825"
                strokeWidth="1.5"
              />
              {/* Collar Ribbing */}
              <path
                d="M96,172 C104,182 136,182 144,172 C138,187 102,187 96,172 Z"
                fill="#2c2a27"
              />
            </motion.g>

            {/* Head & Face Group (Spring tracking) */}
            <motion.g
              style={{
                rotate: prefersReduced ? 0 : headRotate,
                x: prefersReduced ? 0 : headX,
                y: prefersReduced ? 0 : headY,
                originX: "120px",
                originY: "135px",
              }}
            >
              {/* Neck */}
              <path
                d="M104,142 L104,176 C110,180 130,180 136,176 L136,142 Z"
                fill="#ab7552"
              />

              {/* Ears */}
              <ellipse cx="64" cy="132" rx="9" ry="14" fill="#cf9a77" />
              <ellipse cx="64" cy="132" rx="5" ry="9" fill="#aa7553" />
              <ellipse cx="176" cy="132" rx="9" ry="14" fill="#cf9a77" />
              <ellipse cx="176" cy="132" rx="5" ry="9" fill="#aa7553" />

              {/* Jawline & Head Structure */}
              <path
                d="M72,118 C72,82 92,62 120,62 C148,62 168,82 168,118 C168,146 148,162 120,162 C92,162 72,146 72,118 Z"
                fill="url(#charSkinGrad)"
              />

              {/* Character Signature Hair Silhouette */}
              <path
                d="M68,110 C62,88 74,54 100,44 C120,36 150,42 166,56 C178,68 174,90 172,112 C168,98 162,72 144,68 C128,64 108,70 94,84 C84,94 76,108 68,110 Z"
                fill="url(#charHairGrad)"
              />
              {/* Textured Hair Strands */}
              <path
                d="M85,58 C102,46 130,46 148,54 C132,56 112,62 98,72 Z"
                fill="#2a231d"
              />
              <path
                d="M142,50 C156,58 168,72 170,88 C166,76 158,64 148,58 Z"
                fill="#241e19"
              />

              {/* Natural Eyebrows */}
              <path
                d="M88,105 C96,101 106,102 110,105"
                stroke="#1c1612"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M130,105 C134,102 144,101 152,105"
                stroke="#1c1612"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Eye Sockets / Whites */}
              <ellipse cx="99" cy="118" rx="8" ry="6.5" fill="#fdfbf7" />
              <ellipse cx="141" cy="118" rx="8" ry="6.5" fill="#fdfbf7" />

              {/* Dynamic Eye Pupils (Follow Pointer) */}
              <motion.g
                style={{
                  x: prefersReduced ? 0 : pupilX,
                  y: prefersReduced ? 0 : pupilY,
                }}
              >
                {/* Left Pupil */}
                <ellipse cx="99" cy="118" rx="4" ry="4" fill="url(#charIrisGrad)" />
                <circle cx="97.5" cy="116.5" r="1.3" fill="#ffffff" />

                {/* Right Pupil */}
                <ellipse cx="141" cy="118" rx="4" ry="4" fill="url(#charIrisGrad)" />
                <circle cx="139.5" cy="116.5" r="1.3" fill="#ffffff" />
              </motion.g>

              {/* Realistic Blinking Lids */}
              {blink && (
                <>
                  <ellipse cx="99" cy="118" rx="8.5" ry="7" fill="#bd835c" />
                  <ellipse cx="141" cy="118" rx="8.5" ry="7" fill="#bd835c" />
                  <line x1="91" y1="118" x2="107" y2="118" stroke="#7a4f32" strokeWidth="1.5" />
                  <line x1="133" y1="118" x2="149" y2="118" stroke="#7a4f32" strokeWidth="1.5" />
                </>
              )}

              {/* Nose Bridge & Tip */}
              <path
                d="M120,114 L118,128 C118,131 123,132 124,130"
                stroke="#9c633f"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Subtle Smile */}
              <path
                d="M109,143 C115,146 125,146 131,143"
                stroke="#7a482b"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
            </motion.g>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
