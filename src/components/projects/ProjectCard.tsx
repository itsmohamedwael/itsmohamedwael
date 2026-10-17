"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/portfolio";
import { ProjectVideo } from "./ProjectVideo";
import { formatNumber } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 1;

  return (
    <article className="relative w-full border-t border-white/10 pt-12 pb-16 transition-colors duration-500 hover:border-white/20">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Editorial Text Info */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div>
            {/* Meta header */}
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-xs tracking-widest text-emerald-400">
                {formatNumber(index + 1)}
              </span>
              <span className="h-[1px] w-8 bg-white/20" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400">
                {project.category}
              </span>
              <span className="ml-auto font-mono text-[11px] text-stone-500">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-tight text-[#fbfaf8] mb-4">
              <Link
                href={`/work/${project.slug}`}
                className="group inline-flex items-baseline gap-2 hover:text-emerald-400 transition-colors"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-emerald-400" />
              </Link>
            </h3>

            {/* Tagline */}
            <p className="text-sm font-medium text-emerald-300/80 mb-3 font-mono">
              {project.tagline}
            </p>

            {/* Summary */}
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {project.summary}
            </p>

            {/* Verified Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {project.technologies.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-[#161310] px-3 py-1 font-mono text-[10px] tracking-wide text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <div>
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-mono tracking-widest uppercase text-white transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span>Explore Case Study</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Video Canvas Container */}
        <div
          className={`lg:col-span-7 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
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
