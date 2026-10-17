"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is your primary engineering stack?",
    answer:
      "My core systems stack spans Python, C/C++, and Windows Win32 API for autonomous desktop agents and hardware interfaces. For web platforms, I build on Next.js 15 (App Router), TypeScript in strict mode, React 19, Tailwind CSS, PostgreSQL, and edge-native deployments on Vercel.",
  },
  {
    question: "How do we collaborate on a project?",
    answer:
      "Async-first with high transparency: GitHub repositories, milestone roadmaps, shared architectural specs, and structured sprint reviews. I operate on GMT+3 (Cairo), with direct communication channels across Discord, Telegram, and email.",
  },
  {
    question: "Are you available for full-time or contract roles?",
    answer:
      "Yes. I am actively open to high-impact software engineering roles, autonomous AI agent contracts, and bespoke product development with ambitious founders.",
  },
  {
    question: "How do you achieve 60fps performance and zero lag?",
    answer:
      "By eliminating costly CSS filter blurs and layout shifts, leveraging hardware-accelerated transform3d properties, optimizing video decoding lifecycles, and profiling bundle sizes to ensure Core Web Vitals remain in the top 99th percentile.",
  },
  {
    question: "Can I inspect your verified academic and engineering credentials?",
    answer:
      "Yes. You can download my complete verified CV directly from the header or hero section. It details my Computer Engineering coursework at The British University in Egypt (BUE) with 3.8 GPA honors, production deployments, and technical achievements.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#242220]">
      {/* Header */}
      <div className="mb-14">
        <span className="font-mono text-xs uppercase tracking-widest text-[#736f69] block mb-2">
          Clarity & Scope
        </span>
        <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#dedad5]">
          Quick answers
        </h2>
      </div>

      {/* Accordion */}
      <div className="divide-y divide-[#242220] border-y border-[#242220]">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-5">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between text-left focus:outline-none group"
              >
                <span className="font-sans text-base sm:text-lg text-[#dedad5] group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-[#736f69] transition-transform duration-200 shrink-0 ml-4 ${
                    isOpen ? "rotate-180 text-[#dedad5]" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="mt-3 font-sans text-sm text-[#736f69] leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
