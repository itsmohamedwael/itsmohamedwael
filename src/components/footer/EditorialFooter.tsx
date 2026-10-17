"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { profileData } from "../../data/profile";

export function EditorialFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white py-16 px-6 sm:px-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-neutral-900">
          <div className="flex items-center gap-4">
            <div className="relative h-9 w-9 rounded-md bg-neutral-900 border border-neutral-800 p-1 flex items-center justify-center">
              <Image
                src="/logo/mw-logo-white.png"
                alt="MWAEL Official Logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold text-white tracking-wider">
                MWAEL
              </span>
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                MOHAMED WAEL // 2026 ARCHIVE
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 font-mono text-xs text-neutral-400">
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={profileData.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
            <button
              onClick={scrollToTop}
              className="text-neutral-500 hover:text-white transition-colors uppercase"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-neutral-600">
          <p>© {new Date().getFullYear()} MOHAMED WAEL. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH NEXT.JS 15, MOTION FOR REACT, &amp; GSAP. PURE BLACK THEME.</p>
        </div>
      </div>
    </footer>
  );
}
