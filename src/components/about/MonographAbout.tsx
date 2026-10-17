"use client";

import React from "react";
import { profileData } from "../../data/profile";

export function MonographAbout() {
  return (
    <section id="about" className="relative w-full bg-black text-white py-32 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900 pb-6 gap-4">
          <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
            // 02 MONOGRAPH &amp; PEDIGREE
          </span>
          <span className="font-mono text-xs text-neutral-600">
            THE BRITISH UNIVERSITY IN EGYPT · 3.8 GPA HONORS
          </span>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Monumental Statement (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                BRIDGING
                <br />
                <span className="font-serif italic font-normal text-neutral-400">FOUNDATION</span>
                <br />
                INTELLIGENCE WITH
                <br />
                <span className="text-neutral-500">NATIVE OS STATE.</span>
              </h2>

              <p className="mt-8 text-neutral-400 text-base leading-relaxed font-light">
                {profileData.narrative.lead}
              </p>
            </div>

            {/* Academic Credentials Card on Black */}
            <div className="mt-12 rounded-lg border border-neutral-800 bg-neutral-950 p-6 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-neutral-500">
                <span>INSTITUTIONAL RECORD</span>
                <span className="text-emerald-400">VERIFIED</span>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <span className="text-sm font-semibold text-white">
                  The British University in Egypt (BUE)
                </span>
                <span className="text-neutral-400">
                  Bachelor of Science — Computer Engineering
                </span>
                <div className="mt-2 inline-flex items-center gap-2 text-neutral-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span>Academic Standing: 3.8 GPA (Preparatory Honors)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              <p>
                My engineering practice centers on building software that operates with absolute
                autonomy and local resilience. While contemporary software trends lean heavily on
                ephemeral cloud dependencies, I engineer desktop-native daemons, offline-first mesh
                networks, and fault-tolerant embedded systems.
              </p>
              <p className="mt-6 text-neutral-400 text-base">
                As the creator of <strong className="text-white">Clowdy</strong>, I merged Gemini multimodal
                APIs with direct Windows display buffers, allowing artificial intelligence to visually
                comprehend the user's desktop workspace and orchestrate native tasks while preserving
                zero-cloud local memory privacy.
              </p>
            </div>

            {/* Three Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-900">
              <div className="flex flex-col">
                <span className="font-mono text-xs text-neutral-500">// 01</span>
                <h4 className="font-mono text-sm uppercase text-white mt-1">Autonomous Systems</h4>
                <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
                  Real-time OCR perception, local associative memory graphs, and native OS automation.
                </p>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs text-neutral-500">// 02</span>
                <h4 className="font-mono text-sm uppercase text-white mt-1">Distributed Mesh</h4>
                <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
                  Offline-first peer-to-peer LAN sockets guaranteeing 100% uptime without internet.
                </p>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs text-neutral-500">// 03</span>
                <h4 className="font-mono text-sm uppercase text-white mt-1">Kinetic Aesthetics</h4>
                <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
                  Editorial typographic discipline, 60fps spring physics, and restrained dark minimalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
