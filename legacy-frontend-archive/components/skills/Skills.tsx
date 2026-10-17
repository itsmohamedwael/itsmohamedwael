"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { skillCategories } from "@/data/skills";

const services = [
  {
    title: "AI & Autonomous Systems",
    tagline: "For teams building intelligent desktop, agentic, or local LLM workflows.",
    focus: "CORE CAPABILITIES",
    features: [
      "Gemini Multimodal API integration",
      "Screen perception & real-time OCR",
      "Local vector memory graphs",
      "Native Windows Win32 automation",
      "Defensive security anomaly shields",
    ],
    timeline: "PROJECT SCOPE: 3-5 WEEKS",
  },
  {
    title: "Full-Stack Web Architecture",
    tagline: "For founders who need high-performance, edge-deployed web applications.",
    focus: "CORE CAPABILITIES",
    popular: true,
    features: [
      "Next.js 15 App Router & React 19",
      "TypeScript strict-mode architecture",
      "Real-time WebSockets & LAN sync",
      "Payment rails (Stripe / PayPal / Wise)",
      "Zero-lag Core Web Vitals profiling",
    ],
    timeline: "PROJECT SCOPE: 2-4 WEEKS",
  },
  {
    title: "Creative Systems & UI Engineering",
    tagline: "For brands that need an unmistakable digital presence and motion.",
    focus: "CORE CAPABILITIES",
    features: [
      "Editorial typography & dark minimalist layouts",
      "Motion for React hardware transforms",
      "Custom vector illustrations & SVG avatars",
      "Commercial brand identity & art direction",
      "Accessible WCAG 2.1 AA compliance",
    ],
    timeline: "PROJECT SCOPE: 2-3 WEEKS",
  },
];

export function Skills() {
  const [selectedTag, setSelectedTag] = useState<string>("ALL");

  const filterTabs = [
    { label: "All", tag: "ALL" },
    { label: "Engineering", tag: "ENGINEERING" },
    { label: "AI & Automation", tag: "AI & INTELLIGENCE" },
    { label: "Web & Motion", tag: "WEB & MOTION" },
    { label: "Hardware", tag: "PHYSICAL COMPUTING" },
    { label: "Visual Arts", tag: "VISUAL ARTS" },
    { label: "Security", tag: "DEFENSIVE SECURITY" },
  ];

  const displayedCategories =
    selectedTag === "ALL"
      ? skillCategories
      : skillCategories.filter((c) => c.tag === selectedTag);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#242220]">
      {/* Services Header */}
      <div className="mb-14">
        <span className="font-mono text-xs uppercase tracking-widest text-[#736f69] block mb-2">
          Engineering Capabilities
        </span>
        <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#dedad5] mb-4">
          Services
        </h2>
        <p className="text-base text-[#b8b4ae] font-sans max-w-xl">
          From system architecture and autonomous agent pipelines to published, edge-optimized production apps.
        </p>
      </div>

      {/* Services 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {services.map((service) => (
          <div
            key={service.title}
            className={`relative rounded-2xl border bg-[#141312] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 ${
              service.popular
                ? "border-[#3a3836] shadow-xl"
                : "border-[#242220] hover:border-[#3a3836]"
            }`}
          >
            {service.popular && (
              <span className="absolute -top-2.5 right-6 rounded-full bg-[#dedad5] px-2.5 py-0.5 text-[10px] font-mono font-medium text-[#0c0b0a] uppercase tracking-wider">
                Popular
              </span>
            )}

            <div>
              <h3 className="font-sans text-xl font-medium text-[#dedad5] mb-2">
                {service.title}
              </h3>
              <p className="font-sans text-xs text-[#736f69] mb-6 leading-relaxed">
                {service.tagline}
              </p>

              <div className="border-t border-[#242220] pt-4 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#736f69] block mb-3">
                  {service.focus}
                </span>
                <ul className="space-y-2.5">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-[#b8b4ae]">
                      <Check className="h-3.5 w-3.5 text-[#dedad5] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-[#242220] pt-4 mt-6">
              <span className="font-mono text-[10px] text-[#736f69] tracking-wider block">
                {service.timeline}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Verified Taxonomy & Stack */}
      <div id="stack" className="pt-12 border-t border-[#242220]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#736f69] block mb-1">
              Technical Taxonomy
            </span>
            <h3 className="text-2xl font-sans font-light text-[#dedad5]">
              Verified Tech Stack & Tools
            </h3>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {filterTabs.map((tab) => (
              <button
                key={tab.tag}
                type="button"
                onClick={() => setSelectedTag(tab.tag)}
                className={`rounded-full px-3 py-1 font-mono text-xs transition-colors ${
                  selectedTag === tab.tag
                    ? "bg-[#dedad5] text-[#0c0b0a] font-medium"
                    : "border border-[#242220] bg-[#141312] text-[#b8b4ae] hover:border-[#3a3836] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedCategories.map((cat) => (
            <div
              key={cat.tag}
              className="rounded-xl border border-[#242220] bg-[#141312] p-5 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#736f69] block mb-1">
                  {cat.tag}
                </span>
                <h4 className="font-sans text-sm font-medium text-[#dedad5] mb-2">
                  {cat.title}
                </h4>
                <p className="font-sans text-xs text-[#736f69] mb-4">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 border-t border-[#242220] pt-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded border border-[#242220] bg-[#1a1918] px-2 py-0.5 font-mono text-[10px] text-[#b8b4ae]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
