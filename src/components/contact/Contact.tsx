"use client";

import React, { useState } from "react";
import { Mail, Phone, ArrowUpRight, Check, Send } from "lucide-react";
import { profileData } from "@/data/profile";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    scope: "AI Systems Architecture",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profileData.email}?subject=${encodeURIComponent(
      `Project Inquiry: ${formState.scope} — ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nScope: ${formState.scope}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#242220]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#736f69] block mb-2">
              Start a Conversation
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#dedad5] mb-4">
              Got something to build?
            </h2>
            <p className="text-base text-[#b8b4ae] font-sans leading-relaxed">
              Tell me about your product, roadmap, or engineering challenge. I reply to all inquiries within 24 hours.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#242220]">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#736f69] block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="font-mono text-sm text-[#dedad5] hover:text-white transition-colors"
              >
                {profileData.email}
              </a>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase text-[#736f69] block mb-1">
                Location & Timezone
              </span>
              <span className="font-mono text-xs text-[#b8b4ae]">
                Cairo, Egypt · GMT+3 (Async-first)
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs text-[#736f69]">
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
                className="inline-flex items-center gap-1 rounded-full border border-[#242220] bg-[#141312] px-3 py-1 text-[#b8b4ae] hover:border-[#3a3836] hover:text-white transition-colors"
              >
                <span>{s.platform}</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#242220] bg-[#141312] p-6 sm:p-8 space-y-4"
          >
            <div>
              <label className="font-mono text-xs text-[#b8b4ae] block mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-[#242220] bg-[#100e0b] px-3.5 py-2.5 text-sm text-[#f5f2eb] placeholder-[#736f69] focus:border-[#f5f2eb] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-[#b8b4ae] block mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full rounded-lg border border-[#242220] bg-[#100e0b] px-3.5 py-2.5 text-sm text-[#f5f2eb] placeholder-[#736f69] focus:border-[#f5f2eb] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-[#b8b4ae] block mb-1.5">
                What do you need?
              </label>
              <select
                value={formState.scope}
                onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                className="w-full rounded-lg border border-[#242220] bg-[#100e0b] px-3.5 py-2.5 text-sm text-[#f5f2eb] focus:border-[#f5f2eb] focus:outline-none transition-colors"
              >
                <option value="AI Systems Architecture">AI Systems & Autonomous Agents</option>
                <option value="Full-Stack Web Development">Full-Stack Web Application (Next.js)</option>
                <option value="Enterprise POS & Offline Systems">Enterprise POS & Offline Systems</option>
                <option value="Hardware & Embedded IoT">Hardware & Embedded Computing</option>
                <option value="Creative Direction & Branding">Creative Direction & UI Engineering</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-xs text-[#b8b4ae] block mb-1.5">
                Project Details
              </label>
              <textarea
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Briefly describe your objectives, timeline, or current challenge..."
                className="w-full rounded-lg border border-[#242220] bg-[#100e0b] px-3.5 py-2.5 text-sm text-[#f5f2eb] placeholder-[#736f69] focus:border-[#f5f2eb] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#f5f2eb] py-3 text-sm font-medium text-[#100e0b] hover:bg-white transition-colors"
            >
              <span>{submitted ? "Opening Mail Client..." : "Send Inquiry"}</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
