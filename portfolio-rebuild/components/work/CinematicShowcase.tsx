"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { projectsData } from "../../data/projects";
import { Project } from "../../types";

function ProjectVideoFrame({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.4 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasError) return;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay policy or codec fallback
            setIsPlaying(false);
          });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isInView, hasError]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video md:aspect-[16/10] bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800/80 group shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
    >
      {/* Poster Image Always Present Beneath */}
      <img
        src={project.posterSrc}
        alt={`${project.title} poster`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
      />

      {/* HTML5 Video Layer */}
      {!hasError && (
        <video
          ref={videoRef}
          src={project.videoSrc}
          poster={project.posterSrc}
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Subtle Overlay & Index Stamp */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

      {/* Video Status Indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 border border-neutral-800 font-mono text-[10px] text-neutral-300">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isPlaying ? "bg-emerald-400 animate-pulse" : "bg-neutral-600"
          }`}
        />
        <span>{isPlaying ? "STREAMING" : "PREVIEW"}</span>
      </div>

      {/* Bottom Category Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-neutral-400">
        <span>{project.category}</span>
        <span className="text-white font-medium">{project.year}</span>
      </div>
    </div>
  );
}

export function CinematicShowcase() {
  return (
    <section id="works" className="relative w-full bg-black text-white py-32 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-900 pb-8 gap-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              // 01 ARCHIVE &amp; DEPLOYMENTS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mt-2">
              SELECTED <span className="font-serif italic font-normal text-neutral-400">WORKS</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-500 max-w-sm">
            Five verified engineering systems encompassing multimodal desktop AI, offline commercial
            mesh networks, and autonomous hardware robotics.
          </p>
        </div>

        {/* Cinematic Showcase Sequence */}
        <div className="mt-20 flex flex-col gap-32">
          {projectsData.map((project, index) => {
            const indexNumber = String(index + 1).padStart(2, "0");
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Media Presentation Column (7 columns) */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <ProjectVideoFrame project={project} index={index} />
                </div>

                {/* Editorial Metadata Column (5 columns) */}
                <div className={`lg:col-span-5 flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-3 font-mono text-xs text-neutral-500 mb-3">
                    <span className="text-white font-semibold">/{indexNumber}</span>
                    <span>—</span>
                    <span className="uppercase">{project.role}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-neutral-400 mt-1">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 text-base text-neutral-300 leading-relaxed font-light">
                    {project.summary}
                  </p>

                  {/* Architecture Metrics Grid */}
                  <div className="mt-8 grid grid-cols-3 gap-3 border-y border-neutral-900 py-4 font-mono">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[10px] text-neutral-600 uppercase tracking-wider">
                          {m.label}
                        </span>
                        <span className="text-xs text-neutral-200 mt-0.5">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Deep-dive Link */}
                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-neutral-400 transition-colors group"
                    >
                      <span>VIEW SYSTEM SPECIFICATION</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
