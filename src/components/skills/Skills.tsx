"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Cpu, Palette, ShieldCheck, Sparkles, Binary, Layers } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedText } from "@/components/motion/AnimatedText";

export function Skills() {
  const [selectedTag, setSelectedTag] = useState<string>("ALL");

  const filterTabs = [
    { label: "All Disciplines", tag: "ALL" },
    { label: "Engineering & Code", tag: "ENGINEERING" },
    { label: "AI & Automation", tag: "AI & INTELLIGENCE" },
    { label: "Web & Motion", tag: "WEB & MOTION" },
    { label: "Physical Computing", tag: "PHYSICAL COMPUTING" },
    { label: "Visual Arts", tag: "VISUAL ARTS" },
    { label: "Cyber Defense", tag: "DEFENSIVE SECURITY" },
  ];

  const displayedCategories =
    selectedTag === "ALL"
      ? skillCategories
      : skillCategories.filter((c) => c.tag === selectedTag);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Meta header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-emerald-400">02 //</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-stone-400">
          Verified Competencies & Taxonomy
        </span>
      </div>

      {/* Title */}
      <div className="mb-12 max-w-3xl">
        <AnimatedText
          text="A balanced dual-discipline: Rigorous systems engineering and creative art direction."
          className="text-3xl sm:text-5xl font-serif text-[#fbfaf8] leading-[1.15]"
        />
        <p className="mt-4 font-mono text-xs text-stone-400">
          * Strictly verified from academic transcripts, professional deployments, and technical projects.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap gap-2 border-b border-white/10 pb-6">
        {filterTabs.map((tab) => (
          <button
            key={tab.tag}
            type="button"
            onClick={() => setSelectedTag(tab.tag)}
            className={`rounded-full px-4 py-2 font-mono text-xs transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-400 ${
              selectedTag === tab.tag
                ? "border border-emerald-400 bg-emerald-400/10 text-emerald-300 shadow-[0_0_15px_rgba(78,242,187,0.2)]"
                : "border border-white/10 bg-[#14110e] text-stone-400 hover:border-white/20 hover:text-stone-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {displayedCategories.map((category, catIndex) => (
            <motion.div
              key={category.tag}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, delay: catIndex * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#14110e]/90 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-400/30 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    {category.tag}
                  </span>
                  <span className="font-mono text-xs text-stone-500">
                    {category.skills.length} Capabilities
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
                  {category.title}
                </h3>

                <p className="text-stone-400 text-xs sm:text-sm font-sans mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Items */}
                <div className="grid grid-cols-1 gap-2.5">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border p-3 transition-all ${
                        skill.highlight
                          ? "border-emerald-400/30 bg-emerald-500/[0.04] hover:bg-emerald-500/[0.08]"
                          : "border-white/5 bg-[#181512] hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            skill.highlight ? "bg-emerald-400" : "bg-stone-500"
                          }`}
                        />
                        <span className="font-medium text-sm text-stone-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
                        {skill.tags?.map((t, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-[9px] uppercase tracking-wider text-stone-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                        <span className="font-mono text-[10px] text-emerald-300/80 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
