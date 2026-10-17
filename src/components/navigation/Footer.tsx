"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#242220] bg-[#100e0b] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Monogram and title */}
        <div className="flex items-center gap-3">
          <div className="relative h-7 w-7 overflow-hidden rounded border border-[#242220] bg-[#141312] p-1">
            <Image
              src="/logo/mw-logo-white.png"
              alt="MW"
              fill
              sizes="28px"
              className="object-contain p-0.5"
            />
          </div>
          <span className="font-sans text-xs text-[#b8b4ae]">
            Mohamed Wael · Computer Engineering Scholar & AI Engineer
          </span>
        </div>

        {/* Center: Social links */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[#736f69]">
          {[
            { platform: "GitHub", url: profileData.socials.github },
            { platform: "LinkedIn", url: profileData.socials.linkedin },
            { platform: "Instagram", url: profileData.socials.instagram },
          ].map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dedad5] transition-colors"
            >
              {s.platform}
            </a>
          ))}
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-[#736f69]">
            © 2026 MOHAMED WAEL
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#242220] bg-[#141312] text-[#b8b4ae] hover:text-white hover:border-[#3a3836] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
