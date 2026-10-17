import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center selection:bg-white selection:text-black">
      <span className="font-mono text-xs text-neutral-600 tracking-widest uppercase mb-4">
        // ERROR 404 // ROUTE UNMAPPED
      </span>
      <h1 className="text-6xl sm:text-8xl font-light tracking-tighter text-white">
        VOID<span className="font-serif italic text-neutral-500">.</span>
      </h1>
      <p className="mt-4 font-mono text-xs text-neutral-400 max-w-sm">
        The requested system coordinate does not exist in this archive.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-950 font-mono text-xs text-white hover:border-neutral-500 transition-colors uppercase"
      >
        Return to Monograph ←
      </Link>
    </main>
  );
}
