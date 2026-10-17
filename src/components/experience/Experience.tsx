"use client";

import React, { useState } from "react";
import { experienceTimeline } from "@/data/experience";

export function Experience() {
  const [activeType, setActiveType] = useState<string>("All");

  const types = ["All", "Engineering", "Design", "Hardware", "Education"];

  const filteredTimeline =
    activeType === "All"
      ? experienceTimeline
      : experienceTimeline.filter((item) => item.type === activeType);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#242220]">
      {/* Header */}
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#736f69] block mb-2">
            Verified Record
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#dedad5]">
            Experience & Journey
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {types.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveType(type)}
              className={`rounded-full px-3 py-1 font-mono text-xs transition-colors ${
                activeType === type
                  ? "bg-[#dedad5] text-[#0c0b0a] font-medium"
                  : "border border-[#242220] bg-[#141312] text-[#b8b4ae] hover:border-[#3a3836] hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredTimeline.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#242220] bg-[#141312] p-6 sm:p-8 transition-colors duration-200 hover:border-[#3a3836]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-sans text-xl font-normal text-[#dedad5]">
                  {item.role}
                </h3>
                <span className="text-[#33302c]">•</span>
                <span className="font-sans text-base text-[#b8b4ae]">
                  {item.organization}
                </span>
              </div>

              <div className="font-mono text-xs text-[#736f69]">
                {item.period} · {item.location}
              </div>
            </div>

            <p className="font-sans text-sm text-[#736f69] leading-relaxed mb-4 max-w-3xl">
              {item.summary}
            </p>

            {/* Achievements */}
            <ul className="space-y-1.5 mb-5 border-t border-[#242220] pt-4">
              {item.achievements.map((ach, i) => (
                <li key={i} className="text-xs text-[#b8b4ae] flex items-start gap-2">
                  <span className="text-[#736f69]">•</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-[#242220] bg-[#1a1918] px-2 py-0.5 font-mono text-[10px] text-[#736f69]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
