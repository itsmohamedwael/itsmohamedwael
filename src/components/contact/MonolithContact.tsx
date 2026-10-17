"use client";

import React, { useState } from "react";
import { profileData } from "../../data/profile";

export function MonolithContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full bg-black text-white py-32 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="border-b border-neutral-900 pb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 font-mono text-xs text-neutral-500 uppercase">
          <span>// 05 INITIATE TRANSMISSION</span>
          <span>LOCATION: CAIRO, EGYPT // GMT+3</span>
        </div>

        {/* Monumental Editorial Contact Callout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 flex flex-col">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[0.95]">
              LET&apos;S ENGINEER
              <br />
              <span className="font-serif italic font-normal text-neutral-400">SOMETHING</span>
              <br />
              RESILIENT.
            </h2>

            <p className="mt-8 text-neutral-400 text-lg max-w-xl font-light leading-relaxed">
              Available for autonomous AI engineering, distributed systems architecture, and bespoke
              high-performance creative interfaces.
            </p>

            {/* Direct Email Action Trigger */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profileData.socials.email}?subject=Project%20Commission%20%E2%80%94%20MWAEL`}
                className="px-8 py-4 rounded-full bg-white text-black font-mono text-xs font-semibold tracking-wider hover:bg-neutral-200 transition-colors uppercase"
              >
                Launch Mail Client_
              </a>
              <button
                onClick={copyEmail}
                className="px-6 py-4 rounded-full border border-neutral-800 bg-neutral-950 font-mono text-xs text-neutral-300 hover:text-white hover:border-neutral-600 transition-all uppercase"
              >
                {copied ? "COPIED TO CLIPBOARD ✓" : "COPY EMAIL ADDRESS"}
              </button>
            </div>
          </div>

          {/* Direct Verified Communication Rails (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 rounded-lg border border-neutral-900 bg-neutral-950 p-8 font-mono">
            <span className="text-[11px] text-neutral-500 uppercase tracking-widest border-b border-neutral-800 pb-3">
              DIRECT PROTOCOLS
            </span>

            <div className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-600 uppercase">EMAIL</span>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="text-white hover:text-neutral-400 transition-colors mt-0.5"
                >
                  {profileData.socials.email}
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-600 uppercase">LINKEDIN</span>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors mt-0.5 flex items-center gap-1"
                >
                  <span>in/itsmohamedwael</span>
                  <span className="text-neutral-500">↗</span>
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-600 uppercase">INSTAGRAM</span>
                <a
                  href={profileData.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors mt-0.5 flex items-center gap-1"
                >
                  <span>@its_mohamedwael_</span>
                  <span className="text-neutral-500">↗</span>
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-600 uppercase">GITHUB</span>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors mt-0.5 flex items-center gap-1"
                >
                  <span>github.com/itsmohamedwael</span>
                  <span className="text-neutral-500">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
