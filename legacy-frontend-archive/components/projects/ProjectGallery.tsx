"use client";

import React, { useState } from "react";
import { Project } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";

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
    "Embedded Hardware & Assistive Tech",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-[#242220] pb-5">
        <span className="mr-3 font-mono text-[11px] uppercase tracking-wider text-[#736f69]">
          Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveFilter(cat)}
            className={`rounded-full px-3 py-1 font-mono text-xs transition-colors ${
              activeFilter === cat
                ? "bg-[#dedad5] text-[#0c0b0a] font-medium"
                : "border border-[#242220] bg-[#141312] text-[#b8b4ae] hover:border-[#3a3836] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
