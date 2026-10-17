"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "Selected Works", href: "#works", tag: "01" },
  { label: "Monograph", href: "#about", tag: "02" },
  { label: "Capabilities", href: "#skills", tag: "03" },
  { label: "Timeline", href: "#timeline", tag: "04" },
  { label: "Contact", href: "#contact", tag: "05" },
];

export function MinimalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cairoTime, setCairoTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCairoTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Cairo",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-neutral-900 bg-black/85 backdrop-blur-xl py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Identity / Official Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="MWAEL Home"
          >
            <div className="relative h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 p-1 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/logo/mw-logo-white.png"
                alt="MWAEL Official Logo"
                width={26}
                height={26}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold tracking-wider text-white">
                MWAEL
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                SYSTEMS ARCHITECT
              </span>
            </div>
          </Link>

          {/* Editorial Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex items-center gap-1.5 font-mono text-xs text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors">
                  {item.tag}
                </span>
                <span className="tracking-wide uppercase">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Cairo Telemetry & Inquire Trigger */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 border-l border-neutral-800 pl-6 font-mono text-[11px] text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>CAIRO</span>
              <span className="text-neutral-600">{cairoTime || "12:00:00"} GMT+3</span>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950 font-mono text-xs text-white hover:border-neutral-500 hover:bg-neutral-900 transition-all duration-300"
            >
              INQUIRE_
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col items-end justify-center w-8 h-8 gap-1.5 text-white focus:outline-none"
            aria-label="Toggle navigation drawer"
          >
            <span
              className={`h-[1px] bg-white transition-all duration-300 ${
                mobileOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`h-[1px] bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0 w-4" : "w-4"
              }`}
            />
            <span
              className={`h-[1px] bg-white transition-all duration-300 ${
                mobileOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Editorial Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <p className="font-mono text-xs tracking-widest text-neutral-600 uppercase">
                // DIRECTORY
              </p>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline justify-between border-b border-neutral-900 pb-4 text-3xl font-light tracking-tight text-neutral-300 hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-neutral-600">/{item.tag}</span>
                </a>
              ))}
            </div>

            <div className="border-t border-neutral-900 pt-6 flex flex-col gap-4 font-mono text-xs text-neutral-500">
              <div className="flex justify-between items-center">
                <span>LOCAL TIME:</span>
                <span className="text-white">{cairoTime} CAIRO</span>
              </div>
              <div className="flex gap-6 pt-2">
                <a
                  href="https://www.linkedin.com/in/itsmohamedwael-9b220830b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/its_mohamedwael_/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="mailto:itsmohamedwael@gmail.com"
                  className="text-neutral-400 hover:text-white"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
