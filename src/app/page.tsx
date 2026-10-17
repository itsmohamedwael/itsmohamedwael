import React from "react";
import { AuroraBackground } from "@/components/visual/AuroraBackground";
import { Hero } from "@/components/hero/Hero";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { Skills } from "@/components/skills/Skills";
import { Process } from "@/components/process/Process";
import { Experience } from "@/components/experience/Experience";
import { FAQ } from "@/components/faq/FAQ";
import { Contact } from "@/components/contact/Contact";
import { projectsData } from "@/data/projects";

export default function HomePage() {
  return (
    <AuroraBackground className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Selected Works Section */}
      <section id="work" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#242220]">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#736f69] block mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#dedad5] mb-4">
            Works & Systems
          </h2>
          <p className="text-base text-[#b8b4ae] font-sans max-w-xl">
            Autonomous desktop assistants, offline-first restaurant infrastructure, and production platforms.
          </p>
        </div>

        <ProjectGallery projects={projectsData} />
      </section>

      {/* Services & Technical Taxonomy */}
      <Skills />

      {/* Engineering Process (How It Works) */}
      <Process />

      {/* Journey & Experience */}
      <Experience />

      {/* Quick Answers / FAQ */}
      <FAQ />

      {/* Direct Contact */}
      <Contact />
    </AuroraBackground>
  );
}
