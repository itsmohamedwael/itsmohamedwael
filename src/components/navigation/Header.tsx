"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";

interface HeaderProps {
  activeSection?: string;
}

export function Header({ activeSection = "hero" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { label: "About", href: "/#about", id: "about" },
    { label: "Skills", href: "/#skills", id: "skills" },
    { label: "Works", href: "/#work", id: "work" },
    { label: "Experience", href: "/#experience", id: "experience" },
    { label: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#100e0b]/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo Brand Anchor */}
          <Link
            href="/#hero"
            className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded-lg p-1"
            aria-label="MWAEL — Return to top"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-[#161310] p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-emerald-400/40">
              <Image
                src="/logo/mw-logo-white.png"
                alt="MWAEL Official Logo"
                fill
                sizes="40px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wider text-[#fbfaf8] group-hover:text-emerald-300 transition-colors">
                MWAEL
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400">
                Studio Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-[#14110e]/70 px-4 py-1.5 backdrop-blur-md shadow-inner"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-1.5 font-mono text-xs tracking-wider transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded-full ${
                    isActive ? "text-emerald-300" : "text-stone-400 hover:text-[#fbfaf8]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-full bg-white/10 border border-emerald-400/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action / CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <MagneticButton
              asLink
              href="/#contact"
              className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-5 py-2 font-mono text-xs tracking-widest uppercase text-emerald-300 transition-all hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_20px_rgba(78,242,187,0.4)]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#161310] text-stone-300 focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-[65px] z-30 border-b border-white/10 bg-[#100e0b]/95 px-6 py-8 backdrop-blur-2xl md:hidden shadow-2xl"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-3 font-serif text-2xl text-stone-200 hover:text-emerald-300 transition-colors"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-stone-500">
                  {link.id.toUpperCase()}
                </span>
              </Link>
            ))}

            <div className="pt-4">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 py-3 font-mono text-xs uppercase tracking-widest text-emerald-300"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}
