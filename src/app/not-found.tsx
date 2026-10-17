import React from "react";
import Link from "next/link";
import { MinimalNav } from "../components/nav/MinimalNav";
import { ArrowLeft, Home, Briefcase, KeyRound, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-[#00D4FF] selection:text-black">
      <MinimalNav />

      <section className="flex-1 flex items-center justify-center px-6 py-32 sm:py-40 text-center">
        <div className="max-w-2xl w-full">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-950 font-mono text-xs text-[#00D4FF] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span>ERROR 404 · ROUTE UNMAPPED</span>
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-9xl font-light tracking-tighter text-white mb-4">
            VOID<span className="font-serif italic text-neutral-500">.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-md mx-auto mb-10 leading-relaxed font-light">
            The requested coordinate or project specification does not exist in this archive.
          </p>

          {/* Quick Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto mb-10 font-mono text-xs">
            <Link
              href="/"
              className="p-4 rounded-xl border border-neutral-800 bg-[#071320] hover:border-[#00D4FF] transition-colors flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-[#00D4FF] transition-colors">
                <Home className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                  Return Home
                </span>
                <span className="text-[11px] text-neutral-500">Main Monograph</span>
              </div>
            </Link>

            <Link
              href="/#works"
              className="p-4 rounded-xl border border-neutral-800 bg-[#071320] hover:border-[#00D4FF] transition-colors flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-[#00D4FF] transition-colors">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                  Selected Works
                </span>
                <span className="text-[11px] text-neutral-500">Engineering Systems</span>
              </div>
            </Link>

            <Link
              href="/unlock"
              className="p-4 rounded-xl border border-neutral-800 bg-[#071320] hover:border-[#00D4FF] transition-colors flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-[#00D4FF] transition-colors">
                <KeyRound className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                  Unlock ORYVEO
                </span>
                <span className="text-[11px] text-neutral-500">PIN Gateway ($20 → $10)</span>
              </div>
            </Link>

            <Link
              href="/#contact"
              className="p-4 rounded-xl border border-neutral-800 bg-[#071320] hover:border-[#00D4FF] transition-colors flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-[#00D4FF] transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                  Contact
                </span>
                <span className="text-[11px] text-neutral-500">Direct Inquiries</span>
              </div>
            </Link>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-950 hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors font-mono text-xs uppercase tracking-wider text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Monograph</span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-neutral-900 px-6 py-4 text-center font-mono text-xs text-neutral-600">
        © {new Date().getFullYear()} Mohamed Wael • All Rights Reserved
      </footer>
    </main>
  );
}
