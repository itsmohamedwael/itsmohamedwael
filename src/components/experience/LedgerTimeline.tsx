"use client";

import React from "react";
import { experienceData } from "../../data/experience";

export function LedgerTimeline() {
  return (
    <section id="timeline" className="relative w-full bg-black text-white py-32 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-900 pb-8 gap-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              // 04 CHRONOLOGICAL ARCHIVE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mt-2">
              ENGINEERING <span className="font-serif italic font-normal text-neutral-400">LEDGER</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-500 max-w-sm">
            Verified academic milestones and systems engineering appointments across AI perception,
            distributed protocols, and robotics.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="mt-16 divide-y divide-neutral-900 border-y border-neutral-900">
          {experienceData.map((item, index) => (
            <div
              key={`${item.role}-${index}`}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-neutral-950/40 transition-colors"
            >
              {/* Period & Institution (4 cols) */}
              <div className="lg:col-span-4 flex flex-col font-mono">
                <span className="text-xs text-emerald-400 font-medium tracking-wider">
                  {item.period}
                </span>
                <span className="text-base text-white font-medium mt-1">
                  {item.institution}
                </span>
                <span className="text-xs text-neutral-500 mt-0.5">
                  {item.location} · {item.type.toUpperCase()}
                </span>
              </div>

              {/* Role & Narrative (8 cols) */}
              <div className="lg:col-span-8 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                  {item.role}
                </h3>

                <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="mt-4 flex flex-col gap-1.5 font-mono text-xs text-neutral-300">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-neutral-600">↳</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 font-mono text-[11px] text-neutral-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
