"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/portfolio";
import { ProjectVideo } from "./ProjectVideo";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const indexFormatted = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative w-full border border-[#242220] bg-[#141312] rounded-2xl p-6 sm:p-8 transition-colors duration-300 hover:border-[#3a3836]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left / Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div>
            {/* Meta row */}
            <div className="flex items-center gap-3 font-mono text-xs text-[#736f69] mb-3">
              <span className="text-[#dedad5] font-semibold">{indexFormatted}</span>
              <span>/</span>
              <span className="uppercase tracking-wider">{project.category}</span>
              <span className="ml-auto">{project.year}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-sans font-light tracking-tight text-[#dedad5] mb-2 group-hover:text-white transition-colors">
              <Link href={`/work/${project.slug}`} className="inline-flex items-baseline gap-1.5">
                <span>{project.title}</span>
                <ArrowUpRight className="h-4 w-4 text-[#736f69] group-hover:text-white transition-colors" />
              </Link>
            </h3>

            {/* Tagline */}
            <p className="text-xs font-mono text-[#b8b4ae] mb-4">
              {project.tagline}
            </p>

            {/* Summary */}
            <p className="text-sm text-[#736f69] leading-relaxed mb-6 font-sans">
              {project.summary}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-[#242220] bg-[#1a1918] px-2.5 py-0.5 font-mono text-[10px] text-[#b8b4ae]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#242220] bg-[#1a1918] px-4 py-2 text-xs font-mono text-[#dedad5] hover:border-[#3a3836] hover:text-white transition-colors"
            >
              <span>Explore Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Right / Video Column */}
        <div className="lg:col-span-7">
          <ProjectVideo
            src={project.videoSrc}
            poster={project.posterSrc}
            title={project.title}
            aspectRatio={project.aspectRatio}
          />
        </div>
      </div>
    </article>
  );
}
