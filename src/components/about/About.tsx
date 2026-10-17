"use client";

import React from "react";
import Link from "next/link";
import { Download, GraduationCap, Award, Compass, Music, Code2, Cpu } from "lucide-react";
import { profileData } from "@/data/profile";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-emerald-400">01 //</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-stone-400">
          The Technologist Behind the Code
        </span>
      </div>

      {/* Editorial Title */}
      <div className="mb-16 max-w-4xl">
        <AnimatedText
          text="Where computational logic converges with pure visual discipline."
          className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#fbfaf8] leading-[1.15]"
        />
      </div>

      {/* Two-Column Editorial Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Biography & Philosophy */}
        <div className="lg:col-span-7 space-y-6 text-stone-300 font-sans text-base sm:text-lg leading-relaxed">
          <ScrollReveal delay={0.1}>
            <p>
              I am <strong className="text-white font-medium">{profileData.name}</strong>, known as <span className="text-emerald-300 font-mono text-base">{profileData.brandName}</span>. Based in Cairo, Egypt, I study Computer Engineering at The British University in Egypt while actively architecting AI software systems and designing commercial visual identities.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p>
              My journey began in physical computing and embedded systems—engineering Arduino-powered obstacle detection devices with real-time sensor feedback to grant spatial autonomy to visually impaired individuals. That early pursuit of meaningful, accessible technology established the core principle of everything I build today: <span className="text-white italic">technology must be responsive, empowering, and intuitive.</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p>
              Over the last three years, I expanded into commercial digital art, brand design systems, and autonomous software. As lead AI software engineer on <strong className="text-white">Clowdy</strong>, I built a Windows desktop assistant with real-time speech processing, screen comprehension, and Gemini multimodal intelligence. Concurrently, my design work for brands like House Burger generated a documented 25% surge in sales through frictionless visual and digital menu architectures.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="pt-4 flex flex-wrap items-center gap-4">
            <MagneticButton
              asLink
              href="/Mohamed_Wael_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-emerald-300 hover:bg-emerald-400 hover:text-black transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Verified Resume (PDF)</span>
            </MagneticButton>

            <Link
              href="#contact"
              className="rounded-full border border-white/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-stone-400 hover:text-white hover:border-white/30 transition-all"
            >
              Discuss a Collaboration
            </Link>
          </ScrollReveal>
        </div>

        {/* Right Column: Academic & Credentials Dossier */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-[#14110e] p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Academic Record</span>
              </h3>

              <div className="space-y-4 border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs text-stone-500">2025 — 2028 (In Progress)</span>
                  <h4 className="font-serif text-lg text-white">
                    BA in Computer Engineering
                  </h4>
                  <p className="text-xs text-stone-400 font-sans mt-1">
                    The British University In Egypt (BUE) · Cairo, Egypt
                  </p>
                  <p className="text-xs text-stone-500 mt-2 font-mono">
                    Focus: Electronic Materials, Circuit Analysis, Data Structures, Algorithms, Discrete Math.
                  </p>
                </div>

                <div className="pt-3">
                  <span className="font-mono text-xs text-stone-500">2023 — 2025</span>
                  <h4 className="font-serif text-base text-white">
                    Liverpool Language School (Pre-Engineering)
                  </h4>
                  <p className="text-xs text-emerald-400 font-mono mt-0.5">
                    Graduated with Honors · GPA: 3.8 / 4.0
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 flex items-center gap-2">
                  <Award className="h-4 w-4 text-emerald-400" />
                  <span>Verified Certifications</span>
                </h4>

                <div className="rounded-lg border border-white/5 bg-[#1a1714] p-3 text-xs">
                  <strong className="text-white block font-medium">C++ Programming Training</strong>
                  <span className="text-stone-400 text-[11px]">
                    Object-oriented architecture, memory management, and computational problem-solving.
                  </span>
                </div>

                <div className="rounded-lg border border-white/5 bg-[#1a1714] p-3 text-xs">
                  <strong className="text-white block font-medium">Digital Design Diploma</strong>
                  <span className="text-stone-400 text-[11px]">
                    Digital systems architecture, logic gates, Boolean algebra, and circuit synthesis.
                  </span>
                </div>
              </div>

              {/* Creative Passions */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Music className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Piano & Audio Production</span>
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
