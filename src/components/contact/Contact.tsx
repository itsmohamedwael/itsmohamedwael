"use client";

import React, { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight, Sparkles, MapPin, Globe } from "lucide-react";
import confetti from "canvas-confetti";
import { profileData } from "@/data/profile";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("AI Systems Engineering");

  const topics = [
    "AI Systems Engineering",
    "Brand & Visual Art Direction",
    "Full-Stack Web Architecture",
    "Hardware & IoT Prototyping",
    "General Inquiry",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    confetti({
      particleCount: 20,
      spread: 45,
      origin: { y: 0.8 },
      colors: ["#4ef2bb", "#3b82f6", "#ffffff"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoHref = `mailto:${profileData.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${selectedTopic} — MWAEL`
  )}&body=${encodeURIComponent(
    `Hello Mohamed,\n\nI reviewed your portfolio and would like to discuss a project regarding ${selectedTopic}.\n\nBest regards,\n`
  )}`;

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Subtle Aurora Ambient Reappearance */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-purple-500/10 blur-[130px]" />
      </div>

      {/* Meta Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-emerald-400">04 //</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-stone-400">
          Direct Channels & Inquiries
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Topic Selector */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <AnimatedText
              text="Let's build something remarkable together."
              className="text-4xl sm:text-6xl font-serif text-[#fbfaf8] leading-[1.08] mb-6"
            />
            <p className="text-stone-300 text-base sm:text-lg font-sans max-w-xl leading-relaxed">
              Whether you need to architect an autonomous AI agent, develop high-performance software, or elevate your brand with distinctive visual direction, my channels are always open.
            </p>
          </div>

          {/* Topic Selector */}
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-stone-400 block mb-3">
              Select inquiry topic (pre-fills your message):
            </label>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    selectedTopic === topic
                      ? "border border-emerald-400 bg-emerald-400/15 text-emerald-300"
                      : "border border-white/10 bg-[#14110e] text-stone-400 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <MagneticButton
              asLink
              href={mailtoHref}
              className="gap-2 rounded-full border border-emerald-400 bg-emerald-400 px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-[#100e0b] font-semibold hover:bg-emerald-300 hover:shadow-[0_0_25px_rgba(78,242,187,0.4)] transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>Send Message</span>
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-stone-300 hover:border-white/35 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-stone-400 group-hover:text-emerald-400 transition-colors" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Contact Dossier Card */}
        <div className="lg:col-span-5">
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-[#14110e]/95 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
              <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Verified Contact Dossier</span>
              </h3>

              <div className="space-y-4 font-mono text-xs">
                {/* Email item */}
                <div className="rounded-xl border border-white/5 bg-[#181512] p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-[10px] uppercase text-stone-500">Email</span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-stone-200 hover:text-emerald-300 transition-colors truncate"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded text-stone-400 hover:text-white transition-colors"
                    title="Copy email"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="rounded-xl border border-white/5 bg-[#181512] p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-stone-500">Direct Phone</span>
                      <a
                        href={`tel:${profileData.phone}`}
                        className="text-stone-200 hover:text-blue-300 transition-colors"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${profileData.phone}`}
                    className="p-1.5 text-stone-400 hover:text-white"
                    title="Call"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Location */}
                <div className="rounded-xl border border-white/5 bg-[#181512] p-4 flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-purple-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-stone-500">Base Location</span>
                    <span className="text-stone-200">{profileData.location}</span>
                  </div>
                </div>

                {/* Website */}
                <div className="rounded-xl border border-white/5 bg-[#181512] p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-emerald-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-stone-500">Official Web</span>
                      <span className="text-stone-200">itsmohamedwael.info</span>
                    </div>
                  </div>
                  <a
                    href={profileData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-stone-400 hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-stone-400 font-mono text-[11px]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently available for selected AI & Creative projects.</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
