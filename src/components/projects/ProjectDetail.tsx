"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Cpu, Code2, Globe } from "lucide-react";
import { Project } from "@/types/portfolio";
import { ProjectVideo } from "./ProjectVideo";
import { MagneticButton } from "@/components/motion/MagneticButton";

interface ProjectDetailProps {
  project: Project;
  nextProject?: Project;
}

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  return (
    <article className="min-h-screen bg-[#0c0b0a] text-[#dedad5] pt-28 pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Back button */}
      <div className="mb-10">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161310] px-4 py-2 font-mono text-xs text-stone-300 transition-all hover:border-emerald-400/50 hover:text-emerald-400"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Works</span>
        </Link>
      </div>

      {/* Header Dossier */}
      <header className="mb-12 border-b border-white/10 pb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-400">
            {project.category}
          </span>
          <span className="font-mono text-xs text-stone-500">· {project.year}</span>
          <span className="font-mono text-xs text-stone-500">· {project.role}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white mb-6 leading-[1.1]">
          {project.title}
        </h1>

        <p className="max-w-3xl text-lg sm:text-xl text-stone-300 font-sans leading-relaxed">
          {project.tagline}
        </p>

        {/* External Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          {project.liveUrl && (
            <MagneticButton
              asLink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-mono text-xs text-white hover:border-emerald-400 hover:bg-emerald-400/20 hover:text-emerald-300 transition-all"
            >
              <Globe className="h-4 w-4" />
              <span>Visit Live Platform</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </MagneticButton>
          )}

          {project.githubUrl && (
            <MagneticButton
              asLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 rounded-full border border-white/10 bg-[#161310] px-5 py-2.5 font-mono text-xs text-stone-300 hover:border-white/30 hover:text-white transition-all"
            >
              <Code2 className="h-4 w-4" />
              <span>Source Repository</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </MagneticButton>
          )}
        </div>
      </header>

      {/* Primary Video Canvas Showcase */}
      <div className="mb-16">
        <ProjectVideo
          src={project.videoSrc}
          poster={project.posterSrc}
          title={project.title}
          aspectRatio={project.aspectRatio}
          className="max-h-[640px] shadow-2xl"
        />
      </div>

      {/* Deep-Dive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-white/10 pb-16">
        {/* Left: Summary & Verified Stack */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-3">
              Role & Responsibility
            </h3>
            <p className="text-base text-stone-300 font-sans">{project.role}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-3">
              Verified Technical Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-md border border-white/10 bg-[#161310] px-2.5 py-1 font-mono text-[11px] text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-3">
              Key Metrics & Impact
            </h3>
            <ul className="space-y-2.5">
              {project.impact.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-stone-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Challenge & Architectural Solution */}
        <div className="lg:col-span-8 space-y-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500 mb-2 block">
              01 // The Problem Space
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4">
              The Engineering Challenge
            </h2>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans">
              {project.challenge}
            </p>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500 mb-2 block">
              02 // The Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4">
              Architectural Solution & Innovation
            </h2>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans mb-6">
              {project.solution}
            </p>
            <p className="text-stone-400 text-base leading-relaxed font-sans">
              {project.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Next Project Footer Link */}
      {nextProject && (
        <nav aria-label="Next project navigation" className="mt-16 flex items-center justify-between">
          <div className="text-left">
            <span className="font-mono text-[11px] uppercase tracking-widest text-stone-500 block mb-1">
              Next Project Dossier
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group inline-flex items-center gap-2 text-xl sm:text-2xl font-serif text-white hover:text-emerald-400 transition-colors"
            >
              <span>{nextProject.title}</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-emerald-400" />
            </Link>
          </div>

          <Link
            href="/#work"
            className="hidden sm:inline-flex rounded-full border border-white/10 px-5 py-2 font-mono text-xs text-stone-400 hover:border-white/30 hover:text-white transition-all"
          >
            All Projects
          </Link>
        </nav>
      )}
    </article>
  );
}
