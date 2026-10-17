"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profileData } from "@/data/profile";
import { InteractiveCharacter } from "@/components/character/InteractiveCharacter";

export function Hero() {
  const [cairoTime, setCairoTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCairoTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Top Status & Time Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242220] pb-5 mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#242220] bg-[#141312] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#dedad5]">
            Available for Q4 2026 / 2027 projects
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-[#736f69]">
          <span>{cairoTime || "CAIRO TIME"}</span>
          <span className="text-[#33302c]">•</span>
          <span>CAIRO, EGYPT (GMT+3)</span>
        </div>
      </div>

      {/* Main Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto">
        {/* Left: Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#736f69] block">
              Computer Engineering & AI Software Engineer
            </span>

            <h1 className="text-4xl sm:text-6xl font-sans font-light tracking-tight text-[#dedad5] leading-[1.1]">
              Autonomous AI systems & web platforms for founders.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#b8b4ae] font-sans leading-relaxed max-w-xl">
            Computer Engineering scholar at <span className="text-[#dedad5]">Helwan University</span>.
            I design and build autonomous agent workflows, offline-first enterprise systems, and hyper-refined web experiences — combining low-level systems logic with editorial design.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[#dedad5] px-5 py-2.5 font-sans text-xs font-medium text-[#0c0b0a] hover:bg-white transition-all shadow-sm"
            >
              <span>Selected Works</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="/Mohamed_Wael_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#242220] bg-[#141312] px-5 py-2.5 font-sans text-xs text-[#dedad5] hover:border-[#3a3836] hover:text-white transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CV</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs text-[#736f69] hover:text-[#dedad5] transition-colors"
            >
              <span>Contact Directly</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Right: Interactive Character Stage */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-[#242220] bg-[#141312]/70 p-6 flex flex-col items-center shadow-lg">
            <InteractiveCharacter compact={false} />
            <div className="mt-4 pt-4 border-t border-[#242220] w-full flex items-center justify-between text-[11px] font-mono text-[#736f69]">
              <span>MWAEL AVATAR</span>
              <span>VERIFIED TALENT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom KPI Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#242220] pt-6 mt-12 font-mono text-xs">
        <div>
          <span className="text-[#736f69] block text-[10px] uppercase">Education</span>
          <span className="text-[#dedad5] font-medium">Helwan University</span>
        </div>
        <div>
          <span className="text-[#736f69] block text-[10px] uppercase">Degree / GPA</span>
          <span className="text-[#dedad5] font-medium">Computer Eng. (3.4 / 4.0)</span>
        </div>
        <div>
          <span className="text-[#736f69] block text-[10px] uppercase">Core Focus</span>
          <span className="text-[#dedad5] font-medium">AI & Full-Stack</span>
        </div>
        <div>
          <span className="text-[#736f69] block text-[10px] uppercase">Status</span>
          <span className="text-emerald-400 font-medium">Available</span>
        </div>
      </div>
    </section>
  );
}
