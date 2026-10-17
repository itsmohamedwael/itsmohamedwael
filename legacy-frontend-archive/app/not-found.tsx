import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuroraBackground } from "@/components/visual/AuroraBackground";

export default function NotFound() {
  return (
    <AuroraBackground intensity="minimal" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg space-y-6">
        <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase">
          Error 404 // Lost in Orbit
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-white">
          Coordinates Not Found
        </h1>
        <p className="text-stone-400 text-sm sm:text-base font-sans">
          The requested project dossier or resource does not exist or has migrated to another sector.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white hover:border-emerald-400 hover:text-emerald-300 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </AuroraBackground>
  );
}
