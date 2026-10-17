"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin, Globe, Instagram, Linkedin, Github } from "lucide-react";
import { profileData } from "@/data/profile";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0d0b09] text-stone-400 pt-20 pb-12 overflow-hidden">
      {/* Background ambient accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-3/4 max-w-4xl bg-gradient-to-t from-emerald-500/5 via-blue-500/5 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-[#14110e] p-1.5">
                <Image
                  src="/logo/mw-logo-white.png"
                  alt="MWAEL"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
              <span className="font-serif text-2xl tracking-wide text-[#fbfaf8]">
                {profileData.brandName}
              </span>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-stone-400 font-sans">
              Handcrafted portfolio of Mohamed Abdelhamid (Mohamed Wael) — Computer Engineering scholar, AI systems software engineer, and multidisciplinary visual designer.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-stone-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>{profileData.location}</span>
              </span>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#fbfaf8]">
              Index
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <Link href="/#hero" className="hover:text-emerald-300 transition-colors">
                  Top / Signature
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-emerald-300 transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-emerald-300 transition-colors">
                  Verified Skills
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-emerald-300 transition-colors">
                  Showcase Projects
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-emerald-300 transition-colors">
                  Journey Timeline
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-emerald-300 transition-colors">
                  Connect & Direct
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#fbfaf8]">
              Verified Channels
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <a
                href={`mailto:${profileData.email}`}
                className="group flex items-center gap-2.5 text-stone-300 hover:text-emerald-300 transition-colors"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="break-all">{profileData.email}</span>
              </a>

              <a
                href={`tel:${profileData.phone}`}
                className="flex items-center gap-2.5 text-stone-300 hover:text-emerald-300 transition-colors"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>{profileData.phone}</span>
              </a>

              <a
                href={profileData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-stone-300 hover:text-emerald-300 transition-colors"
              >
                <Globe className="h-4 w-4 text-emerald-400" />
                <span>itsmohamedwael.info</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <MagneticButton
                asLink
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#161310] text-stone-300 hover:border-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
              >
                <Linkedin className="h-4 w-4" />
              </MagneticButton>

              <MagneticButton
                asLink
                href={profileData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#161310] text-stone-300 hover:border-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
              >
                <Instagram className="h-4 w-4" />
              </MagneticButton>

              <MagneticButton
                asLink
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#161310] text-stone-300 hover:border-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10"
              >
                <Github className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {profileData.name} ({profileData.brandName}). Handcrafted with precision.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-stone-400 hover:text-[#fbfaf8] hover:border-white/30 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
