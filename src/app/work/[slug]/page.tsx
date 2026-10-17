import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "../../../data/projects";
import { MinimalNav } from "../../../components/nav/MinimalNav";
import { EditorialFooter } from "../../../components/footer/EditorialFooter";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <MinimalNav />

      <article className="pt-36 pb-32 px-6 sm:px-10 max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-8 uppercase">
          <Link href="/#works" className="hover:text-white transition-colors">
            ← Selected Works
          </Link>
          <span>/</span>
          <span className="text-neutral-400">{project.category}</span>
        </div>

        {/* Project Header */}
        <div className="border-b border-neutral-900 pb-12">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
              SYSTEM ARCHITECTURE // {project.year}
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl font-serif italic text-neutral-400 max-w-2xl mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-xs text-neutral-400">
            <div>
              <span className="text-neutral-600 uppercase">ROLE: </span>
              <span className="text-neutral-200">{project.role}</span>
            </div>
            <span>·</span>
            <div>
              <span className="text-neutral-600 uppercase">STATUS: </span>
              <span className="text-emerald-400">PRODUCTION DEPLOYED</span>
            </div>
          </div>
        </div>

        {/* Hero Video Presentation */}
        <div className="mt-12 w-full aspect-video md:aspect-[16/9] rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 relative shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          <video
            src={project.videoSrc}
            poster={project.posterSrc}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        </div>

        {/* Architecture Metrics Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-neutral-900 py-8 font-mono">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-xs text-neutral-600 uppercase tracking-wider">{m.label}</span>
              <span className="text-2xl text-white font-medium">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Narrative & Engineering Deep-Dive */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
                // SYSTEM OVERVIEW
              </h2>
              <p className="text-lg text-neutral-300 font-light leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-900 pt-8">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
                  // THE ENGINEERING CHALLENGE
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
                  // THE DEPLOYED SOLUTION
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-900 pt-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
                // VERIFIED OPERATIONAL IMPACT
              </h3>
              <div className="flex flex-col gap-3 font-mono text-xs text-neutral-300">
                {project.impact.map((imp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-400">↳</span>
                    <span>{imp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Rail: Technologies & Artifact Links */}
          <div className="lg:col-span-4 flex flex-col gap-8 rounded-lg border border-neutral-900 bg-neutral-950 p-6 font-mono text-xs">
            <div>
              <span className="text-[11px] text-neutral-500 uppercase tracking-widest block mb-3 border-b border-neutral-800 pb-2">
                TECHNOLOGY STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-6 flex flex-col gap-3">
              <span className="text-[11px] text-neutral-500 uppercase tracking-widest">
                VERIFIED LINKS
              </span>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-white hover:text-neutral-400 transition-colors"
                >
                  <span>SOURCE REPOSITORY</span>
                  <span>↗</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="flex items-center justify-between text-white hover:text-neutral-400 transition-colors"
                >
                  <span>LIVE ENVIRONMENT</span>
                  <span>↗</span>
                </a>
              )}
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <Link
                href="/#works"
                className="w-full block text-center py-3 rounded-full bg-white text-black font-semibold uppercase hover:bg-neutral-200 transition-colors"
              >
                Back to Archive
              </Link>
            </div>
          </div>
        </div>
      </article>

      <EditorialFooter />
    </main>
  );
}
