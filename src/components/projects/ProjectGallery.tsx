"use client";

import React, { useState } from "react";
import { Project } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface ProjectGalleryProps {
  projects: Project[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "AI Engineering & Systems",
    "Enterprise Systems & POS UX",
    "Full-Stack Web Architecture",
    "Creative Direction & Fashion",
    "Brand Systems & UI Design",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="mb-12 flex flex-wrap items-center gap-2 border-b border-white/10 pb-6">
        <span className="mr-2 font-mono text-[11px] uppercase tracking-widest text-stone-500">
          Filter Work:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveFilter(cat)}
            className={`rounded-full px-3.5 py-1.5 font-mono text-xs transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-400 ${
              activeFilter === cat
                ? "border border-emerald-400/60 bg-emerald-400/10 text-emerald-300"
                : "border border-white/10 bg-[#161310]/60 text-stone-400 hover:border-white/25 hover:text-stone-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-4">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.slug} delay={index * 0.08} threshold={0.1}>
            <ProjectCard project={project} index={index} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
