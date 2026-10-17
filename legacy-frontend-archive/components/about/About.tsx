"use client";

import React from "react";
import Link from "next/link";
import { Download, GraduationCap, Award, Compass, Music } from "lucide-react";
import { profileData } from "@/data/profile";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { MagneticButton } from "@/components/motion/MagneticButton";

/**
 * Editorial About Section — Section 2
 * Unfolds Mohamed's authentic engineering and design background with generous
 * editorial whitespace, verified academic credentials at BUE, and subtle scroll kinetics.
 */
export function About() {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#242220]"
    >
      {/* Editorial Section Kicker */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-emerald-400">
          02 //
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#736f69]">
          The Technologist Behind the Code
        </span>
      </div>

      {/* Main Editorial Headline */}
      <div className="mb-16 max-w-4xl">
        <AnimatedText
          text="Where computational systems logic converges with uncompromising visual discipline."
          className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#f5f2eb] leading-[1.15]"
        />
      </div>

      {/* Two-Column Editorial Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Biography & First Principles */}
        <div className="lg:col-span-7 space-y-6 text-[#b8b4ae] font-sans text-base sm:text-lg leading-relaxed">
          <ScrollReveal delay={0.1}>
            <p>
              I am{" "}
              <strong className="text-[#f5f2eb] font-medium">
                {profileData.name}
              </strong>
              , known professionally as{" "}
              <span className="text-emerald-400 font-mono text-base">
                {profileData.brandName}
              </span>
              . Based in Cairo, Egypt, I study Computer Engineering at{" "}
              <span className="text-[#f5f2eb]">
                The British University in Egypt (BUE)
              </span>{" "}
              while architecting autonomous AI software and directing commercial
              visual brand systems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p>
              My engineering path began in physical computing and embedded
              microcontrollers—developing an Arduino-powered obstacle navigator
              equipped with real-time acoustic frequency modulation to restore
              spatial autonomy to visually impaired individuals. That early work
              cemented my core technical philosophy:{" "}
              <span className="text-[#f5f2eb] italic">
                software and hardware must be responsive, empowering, and
                physically grounded.
              </span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p>
              Over the last three years, I expanded across commercial brand
              identity, offline-first enterprise software, and desktop AI
              autonomy. As the sole engineer behind{" "}
              <strong className="text-[#f5f2eb]">Clowdy</strong>, I built an
              autonomous Windows daemon integrating multimodal screen analysis,
              instantaneous voice control, and localized memory vectors.
              Concurrently, my brand design systems have driven documented +25%
              commercial growth through unified digital interfaces.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.4}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              asLink
              href="/Mohamed_Wael_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-emerald-300 hover:bg-emerald-400 hover:text-black transition-all shadow-sm"
            >
              <Download className="h-4 w-4" />
              <span>Verified Resume (PDF)</span>
            </MagneticButton>

            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#242220] bg-[#171512] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#b8b4ae] hover:text-[#f5f2eb] hover:border-[#3a3836] transition-colors"
            >
              <span>Initiate Collaboration</span>
            </Link>
          </ScrollReveal>
        </div>

        {/* Right Column: Academic & Credentials Dossier */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-[#242220] bg-[#171512]/90 p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Verified Academic Record</span>
              </h3>

              <div className="space-y-4 border-b border-[#242220] pb-6">
                <div>
                  <span className="font-mono text-xs text-[#736f69]">
                    2025 — 2028 (In Progress)
                  </span>
                  <h4 className="font-sans text-lg text-[#f5f2eb] font-medium mt-0.5">
                    Bachelor of Science in Computer Engineering
                  </h4>
                  <p className="text-xs text-[#b8b4ae] font-sans mt-1">
                    The British University In Egypt (BUE) · Cairo, Egypt
                  </p>
                  <p className="text-xs text-[#736f69] mt-2 font-mono">
                    Focus: Electronic Materials, Circuit Analysis, Data
                    Structures, Algorithms, Discrete Mathematics.
                  </p>
                </div>

                <div className="pt-3">
                  <span className="font-mono text-xs text-[#736f69]">
                    2023 — 2025
                  </span>
                  <h4 className="font-sans text-base text-[#f5f2eb] font-medium mt-0.5">
                    Liverpool Language School (Engineering Prep)
                  </h4>
                  <p className="text-xs text-emerald-400 font-mono mt-0.5">
                    Graduated with Highest Honors · GPA: 3.8 / 4.0
                  </p>
                </div>
              </div>

              {/* Verified Certifications */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#736f69] flex items-center gap-2">
                  <Award className="h-4 w-4 text-emerald-400" />
                  <span>Verified Credentials</span>
                </h4>

                <div className="rounded-xl border border-[#242220] bg-[#121110] p-3 text-xs">
                  <strong className="text-[#f5f2eb] block font-medium">
                    C++ Programming Training
                  </strong>
                  <span className="text-[#736f69] text-[11px]">
                    Object-oriented architecture, pointer memory management, and
                    computational problem-solving.
                  </span>
                </div>

                <div className="rounded-xl border border-[#242220] bg-[#121110] p-3 text-xs">
                  <strong className="text-[#f5f2eb] block font-medium">
                    Digital Design Diploma
                  </strong>
                  <span className="text-[#736f69] text-[11px]">
                    Digital systems architecture, logic gates, Boolean algebra,
                    and circuit synthesis.
                  </span>
                </div>
              </div>

              {/* Multidisciplinary Arts */}
              <div className="pt-2 border-t border-[#242220] flex items-center justify-between text-xs font-mono text-[#736f69]">
                <span className="flex items-center gap-1.5">
                  <Music className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Piano & Audio Synthesis</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Compass className="h-3.5 w-3.5 text-blue-400" />
                  <span>Bilingual (EN / AR)</span>
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
