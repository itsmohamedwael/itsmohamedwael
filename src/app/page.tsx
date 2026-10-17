import React from "react";
import { AuroraBackground } from "@/components/visual/AuroraBackground";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Contact } from "@/components/contact/Contact";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { projectsData } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="relative w-full">
      {/* =====================================================================
          HERO SECTION — ATMOSPHERIC AURORA
          ===================================================================== */}
      <AuroraBackground intensity="full" className="w-full">
        <Hero />
      </AuroraBackground>

      {/* Transition to About */}
      <SectionTransition number="01" label="About & Academic Record" />

      {/* =====================================================================
          ABOUT & BACKGROUND
          ===================================================================== */}
      <About />

      {/* Transition to Skills */}
      <SectionTransition number="02" label="Verified Skills Taxonomy" />

      {/* =====================================================================
          VERIFIED SKILLS
          ===================================================================== */}
      <Skills />

      {/* Transition to Works */}
      <SectionTransition number="03" label="Selected Cinematic Showcases" />

      {/* =====================================================================
          PROJECT SHOWCASE (VIDEOS ENGINE)
          ===================================================================== */}
      <section id="work" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs tracking-widest text-emerald-400">03 //</span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-stone-400">
            Selected Works & Motion Repertoire
          </span>
        </div>

        <div className="mb-16 max-w-3xl">
          <AnimatedText
            text="Autonomous AI assistants, enterprise systems, and brand direction."
            className="text-3xl sm:text-5xl font-serif text-[#fbfaf8] leading-[1.15]"
          />
          <p className="mt-4 font-mono text-xs text-stone-400">
            * Every project incorporates verified engineering and production video assets.
          </p>
        </div>

        {/* Project Gallery with all videos */}
        <ProjectGallery projects={projectsData} />
      </section>

      {/* Transition to Experience */}
      <SectionTransition number="04" label="Professional Journey" />

      {/* =====================================================================
          EXPERIENCE & TIMELINE
          ===================================================================== */}
      <Experience />

      {/* Transition to Contact */}
      <SectionTransition number="05" label="Initiate Dialogue" />

      {/* =====================================================================
          CONTACT & DIRECT CHANNELS (SUBTLE AURORA REAPPEARANCE)
          ===================================================================== */}
      <AuroraBackground intensity="subtle" className="w-full">
        <Contact />
      </AuroraBackground>
    </div>
  );
}
