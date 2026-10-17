"use client";

import React, { useState, useMemo } from "react";
import { skillsData } from "../../data/skills";

export function KineticMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "AI & Vision", "Languages", "Systems & Cloud", "Frameworks", "Design & Creative"];

  // Flatten all skills for interactive filtering
  const allSkills = useMemo(() => {
    return skillsData.flatMap((group) =>
      group.items.map((item) => ({
        ...item,
        domain: group.domain,
      }))
    );
  }, []);

  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesCategory =
        activeCategory === "All" || skill.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allSkills, activeCategory, searchQuery]);

  return (
    <section id="skills" className="relative w-full bg-black text-white py-32 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-900 pb-8 gap-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              // 03 TECHNICAL TAXONOMY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mt-2">
              CAPABILITY <span className="font-serif italic font-normal text-neutral-400">MATRIX</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-500 max-w-sm">
            Interactive indexing of verified technical skills, systems protocols, and creative
            disciplines derived from verified engineering practice.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors uppercase ${
                  activeCategory === cat
                    ? "bg-white text-black font-medium"
                    : "bg-neutral-950 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Real-time Search Filter */}
          <div className="relative min-w-[240px]">
            <input
              type="text"
              placeholder="Search taxonomy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-full px-4 py-2 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 font-mono text-[10px] text-neutral-500 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Interactive Capability Ledger Table */}
        <div className="mt-8 border border-neutral-900 rounded-lg overflow-hidden bg-neutral-950/60">
          <div className="grid grid-cols-12 bg-neutral-900/60 px-6 py-3 font-mono text-[11px] text-neutral-500 uppercase tracking-wider border-b border-neutral-900">
            <span className="col-span-5 sm:col-span-4">CAPABILITY / PROTOCOL</span>
            <span className="col-span-4 sm:col-span-4">DOMAIN CATEGORY</span>
            <span className="col-span-3 sm:col-span-4 text-right">PROFICIENCY RECORD</span>
          </div>

          <div className="divide-y divide-neutral-900">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, idx) => (
                <div
                  key={`${skill.name}-${idx}`}
                  className="grid grid-cols-12 px-6 py-4 items-center font-mono text-xs transition-colors hover:bg-neutral-900/40 group"
                >
                  <div className="col-span-5 sm:col-span-4 flex items-center gap-3">
                    <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white font-medium group-hover:translate-x-1 transition-transform">
                      {skill.name}
                    </span>
                  </div>

                  <div className="col-span-4 sm:col-span-4 text-neutral-400">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px]">
                      {skill.category}
                    </span>
                  </div>

                  <div className="col-span-3 sm:col-span-4 text-right">
                    <span
                      className={`text-[11px] uppercase tracking-wider ${
                        skill.level === "Specialist"
                          ? "text-emerald-400"
                          : skill.level === "Advanced"
                          ? "text-neutral-300"
                          : "text-neutral-500"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center font-mono text-xs text-neutral-600">
                No matching technologies found for &quot;{searchQuery}&quot;
              </div>
            )}
          </div>
        </div>

        {/* High-Level Domain Summaries */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <div
              key={group.domain}
              className="p-6 rounded-lg border border-neutral-900 bg-neutral-950 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-neutral-600">// FOCUS 0{idx + 1}</span>
                <h4 className="font-mono text-sm uppercase text-white mt-1 font-medium">
                  {group.domain}
                </h4>
                <p className="font-light text-xs text-neutral-400 mt-2 leading-relaxed">
                  {group.tagline}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-900 font-mono text-[10px] text-neutral-500">
                {group.items.length} VERIFIED PROTOCOLS
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
