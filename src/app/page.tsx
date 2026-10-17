import React from "react";
import { AuroraBackground } from "@/components/visual/AuroraBackground";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { Skills } from "@/components/skills/Skills";
import { Process } from "@/components/process/Process";
import { Experience } from "@/components/experience/Experience";
import { FAQ } from "@/components/faq/FAQ";
import { Contact } from "@/components/contact/Contact";
import { projectsData } from "@/data/projects";

/**
 * HomePage — Complete MWAEL Portfolio Experience
 * Editorial Minimalism + Expressive Motion + Digital Character + Atmospheric Lighting
 */
export default function HomePage() {
  return (
    <AuroraBackground className="w-full">
      {/* 01. Signature Cinematic Hero */}
      <Hero />

      {/* 02. Editorial About & First Principles */}
      <About />

      {/* 03. Selected Works & Video Showcase */}
      <section
        id="work"
        className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#242220]"
      >
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs tracking-widest text-emerald-400">
              03 //
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#736f69]">
              Verified Systems & Engineering
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#f5f2eb] mb-4">
            Selected Works
          </h2>
          <p className="text-base text-[#b8b4ae] font-sans max-w-xl leading-relaxed">
            Autonomous desktop daemons, offline-first restaurant infrastructure,
            creator monetization platforms, and assistive embedded hardware.
          </p>
        </div>

        <ProjectGallery projects={projectsData} />
      </section>

      {/* 04. Services & Technical Taxonomy */}
      <Skills />

      {/* 05. Engineering Process (How It Works) */}
      <Process />

      {/* 06. Experience & Academic Chronology */}
      <Experience />

      {/* 07. Quick Answers / FAQ */}
      <FAQ />

      {/* 08. Direct Inquiry / Contact */}
      <Contact />
    </AuroraBackground>
  );
}
