"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Sparkles, FileText, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { InteractiveCharacter } from "@/components/character/InteractiveCharacter";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Top Meta Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-emerald-400 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Computer Engineering & AI Systems
          </span>
          <span className="text-white/20 hidden sm:inline">/</span>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-stone-400 hidden sm:inline">
            The British University in Egypt
          </span>
        </div>

        <div className="font-mono text-[11px] text-stone-500">
          Cairo, EG · 2026
        </div>
      </motion.div>

      {/* Main Composition: Editorial Typography + Interactive Character */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left: Signature Display Typography */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="space-y-1">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400 block"
            >
              Independent Technologist & Designer
            </motion.span>

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl xl:text-7xl font-serif tracking-tight text-[#fbfaf8] leading-[1.05]"
            >
              Designing ideas. <br />
              <span className="text-gradient-aurora italic font-light">
                Engineering experiences.
              </span>
            </motion.h1>
          </div>

          {/* Subtitle / Bio extract */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-base sm:text-lg text-stone-300 font-sans max-w-xl leading-relaxed"
          >
            I am <strong className="text-white font-medium">{profileData.name}</strong>, a computer engineering student combining low-level systems programming and autonomous desktop AI with award-winning visual craftsmanship.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton
              asLink
              href="#work"
              className="rounded-full border border-emerald-400 bg-emerald-400 px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#100e0b] font-semibold transition-all hover:bg-emerald-300 hover:shadow-[0_0_25px_rgba(78,242,187,0.5)]"
            >
              <span>Explore Works</span>
              <ArrowDown className="ml-2 h-3.5 w-3.5" />
            </MagneticButton>

            <MagneticButton
              asLink
              href="/Mohamed_Wael_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-widest text-stone-200 transition-all hover:bg-white/10 hover:border-white/40"
            >
              <FileText className="mr-2 h-3.5 w-3.5 text-emerald-400" />
              <span>Download CV</span>
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-60" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: Interactive Character Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
            delay: 0.35,
          }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <InteractiveCharacter activeSection="hero" />
        </motion.div>
      </div>

      {/* Bottom Bar: Key Metrics & Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Quick Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full md:w-auto">
          {profileData.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-serif text-2xl text-[#fbfaf8]">
                {metric.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll down indicator */}
        <Link
          href="#about"
          className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-stone-400 hover:text-emerald-300 transition-colors"
          aria-label="Scroll to About section"
        >
          <span>Scroll to explore</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-[#161310] transition-transform group-hover:translate-y-1">
            <ArrowDown className="h-3.5 w-3.5 text-emerald-400" />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
