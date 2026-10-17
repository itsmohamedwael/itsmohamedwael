"use client";

import React from "react";
import { motion } from "motion/react";
import { ObserverAvatar } from "../character/ObserverAvatar";
import { profileData } from "../../data/profile";

export function EditorialHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-black text-white pt-32 pb-20 px-6 sm:px-10 flex flex-col justify-between overflow-hidden border-b border-neutral-900">
      {/* Top Editorial Grid Index */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900 pb-5 font-mono text-[11px] text-neutral-500 uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <span className="text-white">FOLIO 2026—2027</span>
            <span className="text-neutral-700">/</span>
            <span>SYSTEMS &amp; CREATIVE CODE</span>
          </div>
          <div>
            <span>THE BRITISH UNIVERSITY IN EGYPT</span>
            <span className="text-neutral-600"> [3.8 GPA HONORS]</span>
          </div>
          <div className="hidden md:block">
            <span>COORDINATES: 30.0444° N, 31.2357° E</span>
          </div>
        </motion.div>

        {/* Central Asymmetric Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-12 lg:pt-16">
          {/* Monumental Editorial Typography (7 columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase mb-3">
              // DIGITAL ARCHITECT &amp; RESEARCH SCHOLAR
            </span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.88] text-white">
              MOHAMED
              <br />
              <span className="font-serif italic font-normal text-neutral-300">WAEL</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-neutral-400 font-light max-w-xl leading-relaxed">
              Creator of <span className="text-white font-medium">Clowdy</span>—an autonomous
              multimodal Windows desktop companion with real-time visual perception and local memory.
              Architecting zero-latency offline systems and bespoke editorial digital artifacts.
            </p>

            {/* Quick Action Matrix */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs font-semibold tracking-wider hover:bg-neutral-200 transition-colors uppercase"
              >
                Explore Works (05)
              </a>
              <a
                href="#about"
                className="px-6 py-3.5 rounded-full border border-neutral-800 bg-neutral-950 font-mono text-xs text-neutral-300 hover:text-white hover:border-neutral-600 transition-all uppercase"
              >
                Read Monograph
              </a>
            </div>
          </motion.div>

          {/* Integrated Interactive Character Stage (5 columns) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Ambient Deep Glow Anchor */}
            <div className="absolute -inset-4 bg-radial from-neutral-900/60 to-transparent blur-2xl pointer-events-none rounded-full" />

            <div className="relative z-10 w-full flex flex-col items-center">
              <ObserverAvatar size="lg" statusText="OBSERVER ACTIVE // GMT+3" />

              <div className="mt-4 text-center">
                <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                  INTERACTIVE AVATAR — SPRING POINTER TRACKING
                </p>
                <p className="font-mono text-[9px] text-neutral-600 mt-1">
                  CLICK AVATAR TO TRIGGER SQUISH KINEMATICS
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Editorial Meta Bar */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto pt-16 border-t border-neutral-900 mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 font-mono text-xs text-neutral-500"
      >
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-neutral-600 uppercase tracking-widest">
            CORE DISCIPLINE
          </span>
          <span className="text-neutral-300">
            Multimodal AI Systems · Distributed Offline POS · Kinetic Web
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-neutral-300">STATUS: AVAILABLE</span>
          </div>
          <span className="text-neutral-700">|</span>
          <a
            href="#works"
            className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 uppercase"
          >
            <span>SCROLL TO DISCOVER</span>
            <span>↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
