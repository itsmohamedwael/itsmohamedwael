"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  activeSection?: string;
}

export function Header({ activeSection = "hero" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Works", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#100e0b]/90 backdrop-blur-md border-b border-[#242220] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Name */}
          <Link
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Mohamed Wael — Top"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded border border-[#242220] bg-[#141312] p-1 transition-colors group-hover:border-[#3a3836]">
              <Image
                src="/logo/mw-logo-white.png"
                alt="MW Logo"
                fill
                sizes="32px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-medium tracking-tight text-[#dedad5] group-hover:text-white transition-colors">
                Mohamed Wael
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#736f69]">
                AI & Systems Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-1 rounded-full border border-[#242220] bg-[#141312]/90 px-4 py-1.5 shadow-sm"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1 font-mono text-xs tracking-wider transition-colors rounded-full ${
                    isActive
                      ? "text-white bg-[#242220]"
                      : "text-[#b8b4ae] hover:text-[#dedad5]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Availability Pill */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-[#242220] bg-[#141312] px-3 py-1 text-[11px] font-mono text-[#b8b4ae]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available</span>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#dedad5] px-4 py-1.5 font-sans text-xs font-medium text-[#0c0b0a] hover:bg-white transition-all shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden items-center justify-center h-9 w-9 rounded-md border border-[#242220] bg-[#141312] text-[#dedad5] hover:text-white"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0c0b0a]/95 pt-24 px-6 md:hidden flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-2xl font-light text-[#dedad5] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-6 border-t border-[#242220]">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-full bg-[#dedad5] py-3 text-sm font-medium text-[#0c0b0a]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
