"use client";

import React, { useState } from "react";
import { Briefcase, GraduationCap, Cpu, Palette, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experienceTimeline } from "@/data/experience";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedText } from "@/components/motion/AnimatedText";

export function Experience() {
  const [activeType, setActiveType] = useState<string>("All");

  const types = ["All", "Engineering", "Design", "Hardware", "Education"];

  const filteredTimeline =
    activeType === "All"
      ? experienceTimeline
      : experienceTimeline.filter((item) => item.type === activeType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Engineering":
        return <Briefcase className="h-4 w-4 text-emerald-400" />;
      case "Education":
        return <GraduationCap className="h-4 w-4 text-blue-400" />;
      case "Design":
        return <Palette className="h-4 w-4 text-purple-400" />;
      case "Hardware":
        return <Cpu className="h-4 w-4 text-amber-400" />;
      default:
        return <Briefcase className="h-4 w-4 text-stone-400" />;
    }
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-emerald-400">03 //</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-stone-400">
          Professional Record & Trajectory
        </span>
      </div>

      {/* Title */}
      <div className="mb-12 max-w-3xl">
        <AnimatedText
          text="A documented track record of systems engineering and creative leadership."
          className="text-3xl sm:text-5xl font-serif text-[#fbfaf8] leading-[1.15]"
        />
      </div>

      {/* Filter Tabs */}
      <div className="mb-16 flex flex-wrap gap-2 border-b border-white/10 pb-6">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setActiveType(type)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-400 ${
              activeType === type
                ? "border border-emerald-400/60 bg-emerald-400/10 text-emerald-300"
                : "border border-white/10 bg-[#161310] text-stone-400 hover:border-white/20 hover:text-stone-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Editorial Timeline */}
      <div className="relative border-l border-white/15 pl-6 sm:pl-10 space-y-16">
        {filteredTimeline.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 0.08} threshold={0.15}>
            <div className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-[#100e0b] group-hover:border-emerald-400 group-hover:scale-110 transition-all shadow-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              {/* Content Card */}
              <div className="rounded-2xl border border-white/10 bg-[#14110e] p-6 sm:p-8 transition-colors hover:border-white/25 shadow-xl">
                {/* Meta Top */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-stone-300">
                    {getTypeIcon(item.type)}
                    <span className="uppercase tracking-wider">{item.type}</span>
                  </div>

                  <div className="flex items-center gap-4 font-mono text-xs text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 hidden sm:inline-flex">
                      <MapPin className="h-3.5 w-3.5 text-stone-500" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Role & Org */}
                <h3 className="text-2xl sm:text-3xl font-serif text-white mb-1">
                  {item.role}
                </h3>
                <h4 className="text-sm sm:text-base font-mono text-emerald-300 mb-4">
                  {item.organization}
                </h4>

                {/* Summary */}
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans mb-6">
                  {item.summary}
                </p>

                {/* Bulleted Achievements */}
                <ul className="space-y-2 mb-6">
                  {item.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300 font-sans">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {item.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-white/10 bg-[#1a1713] px-2.5 py-0.5 font-mono text-[10px] text-stone-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
