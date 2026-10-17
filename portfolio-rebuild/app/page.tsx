import React from "react";
import { MinimalNav } from "../components/nav/MinimalNav";
import { EditorialHero } from "../components/hero/EditorialHero";
import { CinematicShowcase } from "../components/work/CinematicShowcase";
import { MonographAbout } from "../components/about/MonographAbout";
import { KineticMatrix } from "../components/skills/KineticMatrix";
import { LedgerTimeline } from "../components/experience/LedgerTimeline";
import { MonolithContact } from "../components/contact/MonolithContact";
import { EditorialFooter } from "../components/footer/EditorialFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Architectural Navigation */}
      <MinimalNav />

      {/* Monumental Editorial Hero with Observer Character */}
      <EditorialHero />

      {/* Cinematic Showcase of Selected Works */}
      <CinematicShowcase />

      {/* Editorial Monograph & Verified Academic Pedigree */}
      <MonographAbout />

      {/* Interactive Capability Matrix & Technical Taxonomy */}
      <KineticMatrix />

      {/* Chronological Engineering Ledger */}
      <LedgerTimeline />

      {/* Monumental Direct Contact Protocol */}
      <MonolithContact />

      {/* Minimal Architectural Footer */}
      <EditorialFooter />
    </main>
  );
}
