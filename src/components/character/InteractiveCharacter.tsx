"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import confetti from "canvas-confetti";
import { usePointerTracking } from "@/hooks/usePointerTracking";
import { useCharacterMotion } from "@/hooks/useCharacterMotion";
import { useCharacterInteractions } from "@/hooks/useCharacterInteractions";

interface InteractiveCharacterProps {
  activeSection?: string;
  className?: string;
  compact?: boolean;
}

export function InteractiveCharacter({
  activeSection = "hero",
  className = "",
  compact = false,
}: InteractiveCharacterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"avatar" | "portrait">("avatar");
  const prefersReduced = useReducedMotion();

  const pointer = usePointerTracking();
  const { isBlinking, mood, statusMessage, triggerSquish } =
    useCharacterInteractions(activeSection);

  const { headRotate, headX, headY, pupilX, pupilY, bodyY, bodyRotate } =
    useCharacterMotion(containerRef, pointer, prefersReduced ?? false);

  const handleClick = (e: React.MouseEvent) => {
    triggerSquish();

    // Subtle micro-confetti burst from character position
    if (!prefersReduced && typeof window !== "undefined") {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const originX = (rect.left + rect.width / 2) / window.innerWidth;
        const originY = (rect.top + rect.height / 2) / window.innerHeight;
        confetti({
          particleCount: 28,
          spread: 60,
          origin: { x: originX, y: originY },
          colors: ["#4ef2bb", "#3b82f6", "#a855f7", "#fbfaf8"],
          disableForReducedMotion: true,
          ticks: 120,
          scalar: 0.8,
        });
      }
    }
  };

  const isSquish = mood === "squish";

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center select-none ${className}`}
    >
      {/* Interactive Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-3 flex items-center gap-2 rounded-full border border-white/10 bg-[#14110e]/80 px-3 py-1 backdrop-blur-md shadow-lg"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span className="font-mono text-[11px] tracking-wider uppercase text-stone-300">
          {statusMessage}
        </span>
      </motion.div>

      {/* Main Interactive Stage */}
      <motion.div
        onClick={handleClick}
        animate={
          isSquish
            ? { scaleX: 1.08, scaleY: 0.92, rotate: -3 }
            : { scaleX: 1, scaleY: 1, rotate: 0 }
        }
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={`relative cursor-pointer group ${
          compact ? "w-44 h-44" : "w-64 h-64 sm:w-72 sm:h-72"
        }`}
        title="Click to interact with MWAEL"
      >
        {/* Ambient Glow Aura */}
        <div className="absolute inset-2 -z-10 rounded-full bg-gradient-to-tr from-emerald-500/20 via-blue-500/15 to-purple-500/20 blur-2xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-70" />

        {/* Outer Circular Frame */}
        <div className="relative h-full w-full rounded-full border border-white/10 bg-gradient-to-b from-[#1c1814] to-[#100e0b] p-2 shadow-2xl overflow-hidden backdrop-blur-sm">
          {viewMode === "avatar" ? (
            /* =============================================================
               ARTICULATED ILLUSTRATED AVATAR OF MOHAMED WAEL
               Features pointer-tracked eyes, blinking eyelids & head tilt
               ============================================================= */
            <svg
              viewBox="0 0 240 240"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d8a37f" />
                  <stop offset="100%" stopColor="#bf855e" />
                </linearGradient>
                <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e1814" />
                  <stop offset="60%" stopColor="#151210" />
                  <stop offset="100%" stopColor="#0a0807" />
                </linearGradient>
                <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2c2724" />
                  <stop offset="100%" stopColor="#191613" />
                </linearGradient>
                <linearGradient id="irisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3d2719" />
                  <stop offset="100%" stopColor="#1d120a" />
                </linearGradient>
                <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* TORSO / SHOULDERS (breathing motion) */}
              <motion.g
                style={{
                  y: prefersReduced ? 0 : bodyY,
                  rotate: prefersReduced ? 0 : bodyRotate,
                  originX: "120px",
                  originY: "220px",
                }}
              >
                {/* Crewneck / Shirt */}
                <path
                  d="M45,240 C55,185 90,172 120,172 C150,172 185,185 195,240 Z"
                  fill="url(#shirtGrad)"
                />
                {/* Collar Ribbing */}
                <path
                  d="M96,172 C104,182 136,182 144,172 C138,187 102,187 96,172 Z"
                  fill="#38322e"
                />
              </motion.g>

              {/* HEAD & FACE GROUP (follows pointer with spring physics) */}
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

                {/* Face Base */}
                <path
                  d="M72,118 C72,75 168,75 168,118 C168,154 148,174 120,174 C92,174 72,154 72,118 Z"
                  fill="url(#skinGrad)"
                  filter="url(#softShadow)"
                />

                {/* Jaw shadow */}
                <path
                  d="M84,146 C102,166 138,166 156,146 C144,168 96,168 84,146 Z"
                  fill="#9e6744"
                  opacity="0.25"
                />

                {/* Eyebrows */}
                <path
                  d="M84,107 Q97,103 110,107"
                  stroke="#231b16"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M130,107 Q143,103 156,107"
                  stroke="#231b16"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* LEFT EYE CONTAINER */}
                <g transform="translate(97, 120)">
                  {/* Eye Sclera (White) */}
                  <ellipse cx="0" cy="0" rx="10" ry="6" fill="#f8fafc" />
                  {/* Pupil & Iris (Spring Tracked) */}
                  <motion.g
                    style={{
                      x: prefersReduced ? 0 : pupilX,
                      y: prefersReduced ? 0 : pupilY,
                    }}
                  >
                    <circle cx="0" cy="0" r="4.8" fill="url(#irisGrad)" />
                    <circle cx="0" cy="0" r="2.6" fill="#000000" />
                    {/* Catchlight */}
                    <circle cx="-1.5" cy="-1.5" r="1.1" fill="#ffffff" />
                  </motion.g>
                  {/* Eyelid (Blink) */}
                  <motion.path
                    d="M-11,-7 Q0,-1 11,-7 L11,7 Q0,7 -11,7 Z"
                    fill="#bf855e"
                    initial={false}
                    animate={{
                      scaleY: isBlinking ? 1 : 0,
                    }}
                    transition={{ duration: 0.08 }}
                    style={{ originY: "0px" }}
                  />
                  {/* Lash line */}
                  <path
                    d="M-11,-2 Q0,-7 11,-2"
                    stroke="#1e1814"
                    strokeWidth="1.8"
                    fill="none"
                  />
                </g>

                {/* RIGHT EYE CONTAINER */}
                <g transform="translate(143, 120)">
                  {/* Eye Sclera (White) */}
                  <ellipse cx="0" cy="0" rx="10" ry="6" fill="#f8fafc" />
                  {/* Pupil & Iris (Spring Tracked) */}
                  <motion.g
                    style={{
                      x: prefersReduced ? 0 : pupilX,
                      y: prefersReduced ? 0 : pupilY,
                    }}
                  >
                    <circle cx="0" cy="0" r="4.8" fill="url(#irisGrad)" />
                    <circle cx="0" cy="0" r="2.6" fill="#000000" />
                    {/* Catchlight */}
                    <circle cx="-1.5" cy="-1.5" r="1.1" fill="#ffffff" />
                  </motion.g>
                  {/* Eyelid (Blink) */}
                  <motion.path
                    d="M-11,-7 Q0,-1 11,-7 L11,7 Q0,7 -11,7 Z"
                    fill="#bf855e"
                    initial={false}
                    animate={{
                      scaleY: isBlinking ? 1 : 0,
                    }}
                    transition={{ duration: 0.08 }}
                    style={{ originY: "0px" }}
                  />
                  {/* Lash line */}
                  <path
                    d="M-11,-2 Q0,-7 11,-2"
                    stroke="#1e1814"
                    strokeWidth="1.8"
                    fill="none"
                  />
                </g>

                {/* Nose */}
                <path
                  d="M120,118 L117,136 Q120,139 123,136 Z"
                  stroke="#aa7553"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Mouth / Smile */}
                <motion.path
                  d={
                    mood === "celebrating" || isSquish
                      ? "M107,151 Q120,162 133,151"
                      : "M110,152 Q120,157 130,152"
                  }
                  stroke="#683d26"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  fill="none"
                  transition={{ duration: 0.2 }}
                />

                {/* MOHAMED'S SIGNATURE CURLY HAIR (Sculpted clusters) */}
                <path
                  d="M66,105 
                     C55,95 56,76 68,68 
                     C63,55 76,42 90,44 
                     C95,33 112,28 124,31 
                     C136,27 152,32 158,43 
                     C170,41 184,52 180,66 
                     C192,75 190,95 180,105 
                     C183,92 175,82 165,82 
                     C162,72 148,70 142,75 
                     C132,68 116,68 108,74 
                     C100,69 88,72 84,81 
                     C74,83 67,93 66,105 Z"
                  fill="url(#hairGrad)"
                />
                {/* Distinctive Forehead Curls */}
                <circle cx="88" cy="80" r="9" fill="#1b1512" />
                <circle cx="103" cy="74" r="10" fill="#201a16" />
                <circle cx="120" cy="72" r="11" fill="#191411" />
                <circle cx="137" cy="75" r="10" fill="#201a16" />
                <circle cx="152" cy="81" r="9" fill="#1b1512" />
                <circle cx="112" cy="84" r="8" fill="#15110e" />
                <circle cx="128" cy="84" r="8" fill="#15110e" />
              </motion.g>
            </svg>
          ) : (
            /* =============================================================
               OFFICIAL STUDIO PHOTOGRAPHY VIEW
               High-resolution photographic portrait with kinetic tracking
               ============================================================= */
            <motion.div
              style={{
                rotate: prefersReduced ? 0 : headRotate,
                x: prefersReduced ? 0 : headX,
                y: prefersReduced ? 0 : headY,
              }}
              className="relative h-full w-full rounded-full overflow-hidden"
            >
              <Image
                src="/character/mohamed-portrait.jpg"
                alt="Mohamed Abdelhamid (MWAEL)"
                fill
                sizes="(max-width: 768px) 180px, 280px"
                className="object-cover object-top scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b]/70 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          )}

          {/* View Mode Switcher Pill */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode((m) => (m === "avatar" ? "portrait" : "avatar"));
            }}
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-2.5 py-0.5 text-[9px] font-mono tracking-wider uppercase text-stone-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-colors backdrop-blur-md"
            title="Toggle between Interactive Avatar and Verified Portrait"
          >
            <span>{viewMode === "avatar" ? "Photo View" : "Avatar View"}</span>
          </button>
        </div>
      </motion.div>

      {/* Subtle Hint */}
      <p className="mt-2 text-center font-mono text-[10px] tracking-wider text-stone-400">
        [ Tap or move cursor to interact ]
      </p>
    </div>
  );
}
