"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Problem Scope",
    description:
      "I analyze the domain constraints, operational requirements, and technical criteria — before anything gets designed or architected.",
  },
  {
    number: "02",
    title: "System Architecture",
    description:
      "We define the technical blueprint, API contracts, state management, and edge deployment strategy. Nothing gets built until this is verified.",
  },
  {
    number: "03",
    title: "Core Engineering",
    description:
      "The software engine takes shape with strict TypeScript typing, modular components, and resilient algorithmic logic.",
  },
  {
    number: "04",
    title: "Performance Profiling",
    description:
      "Zero-lag optimization: profiling bundle weights, GPU compositing layers, sub-50ms render times, and offline capabilities.",
  },
  {
    number: "05",
    title: "Deployment & Handover",
    description:
      "Production deployment to edge CDNs, automated CI/CD pipelines, DNS aliasing, and comprehensive architectural documentation.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#242220]">
      {/* Section Header */}
      <div className="mb-14">
        <span className="font-mono text-xs uppercase tracking-widest text-[#736f69] block mb-2">
          Engineering Methodology
        </span>
        <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#dedad5] mb-4">
          How it works
        </h2>
        <p className="text-base text-[#b8b4ae] font-sans max-w-xl">
          The same disciplined five steps whether architecting an autonomous desktop agent, an enterprise POS suite, or a web platform.
        </p>
      </div>

      {/* 5-Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className={`border border-[#242220] bg-[#141312] rounded-xl p-6 flex flex-col justify-between transition-colors duration-200 hover:border-[#3a3836] ${
              idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div>
              <div className="font-mono text-xl text-[#736f69] mb-4 font-semibold">
                {step.number}
              </div>
              <h3 className="font-sans text-lg text-[#dedad5] font-normal mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-[#736f69] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
