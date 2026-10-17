# PROJECT MWAEL — Ultra-Minimal, High-Performance Interactive Portfolio

> An award-worthy, high-performance personal portfolio for **Mohamed Abdelhamid** (**MWAEL** / **itsmohamedwael**) — Computer Engineering Scholar, AI Software Engineer, and Multidisciplinary Digital Art Designer.

---

## ✦ Key Architecture & Highlights

1. **Atmospheric Aurora Borealis Background**
   - Implemented via the authoritative 6-layer gradient specification blending against the obsidian base `#100e0b`.
   - Responsive blur radii (85px–175px mobile, 108px–252px desktop) with hardware-accelerated GPU translate drifts.
   - SVG analog film-grain texture (`feTurbulence` fractalNoise, 4 octaves, 0.7 frequency, `mix-blend-mode: overlay`).

2. **Interactive Articulated Character**
   - Bespoke vectorized alter-ego representing Mohamed Wael's likeness, curly dark hair, and expressive demeanor.
   - Pointer physics tracking using `useSpring` and `useMotionValue` from `motion/react`.
   - Autonomous blinking cadence (every 3.5s–7s) and eye pupil tracking.
   - Click squish physics with interactive confetti burst.
   - Dual-mode switch between **Articulated Vector Character** and **Verified Studio Portrait**.
   - Full graceful degradation under `prefers-reduced-motion`.

3. **Cinematic Showcase Video Engine**
   - Viewport-aware autonomous video playback using `IntersectionObserver` (threshold 0.35).
   - High-fidelity poster frame fallbacks (zero Cumulative Layout Shift).
   - PlaysInline, muted previews with explicit audio and play/pause controls.
   - Dynamic `/work/[slug]` case study dossier routes.

4. **Editorial Typography & Dark Aesthetics**
   - High-contrast Playfair Display headings paired with Swiss modern sans-serif and tabular JetBrains Mono micro-labels.
   - Strict color restraint anchored on `#100e0b` obsidian, ivory `#fbfaf8`, and aurora mint/cyan `#4ef2bb`.
   - Mobile-first responsive fluid scaling using CSS `clamp()`.

5. **100% Verified Credentials & Taxonomy**
   - Computer Engineering at The British University in Egypt (BUE).
   - Pre-engineering honors graduate (GPA 3.8 / 4.0).
   - C++ Programming Training and Digital Design Diploma.
   - Flagship projects: **Clowdy** Desktop AI Assistant, **ORYVEO** POS/KDS Suite, **Creator Monetization Platform**, **ZEN Local Brand**, **House Burger** UI (+25% sales), and **Arduino Assistive Obstacle Navigator**.

---

## ✦ Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **Language**: TypeScript (Strict Mode)
- **Animation**: Motion for React (`motion/react`)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Micro-Interactions**: Canvas Confetti
- **Typography**: Next/Font Google (Playfair Display, Inter, JetBrains Mono)

---

## ✦ Project Structure

```
portofolio/
├── AGENTS.md                          # Creative engineering agent directives
├── .agent/
│   └── skills/                        # Bespoke Antigravity skills
│       ├── portfolio-design/SKILL.md
│       ├── creative-motion/SKILL.md
│       ├── aurora-background/SKILL.md
│       ├── interactive-character/SKILL.md
│       ├── performance-engineering/SKILL.md
│       ├── responsive-engineering/SKILL.md
│       ├── project-showcase/SKILL.md
│       ├── accessibility-seo/SKILL.md
│       └── quality-assurance/SKILL.md
├── public/
│   ├── logo/                          # Official MW monogram (transparent & soft-white)
│   ├── character/                     # Verified studio photographic portrait
│   ├── videos/                        # Showcase project videos
│   │   └── posters/                   # High-res poster frames
│   ├── images/                        # Clowdy, branding, and product graphics
│   └── Mohamed_Wael_CV.pdf            # Authoritative CV download
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout with JSON-LD schema & SEO
│   │   ├── page.tsx                   # Interactive portfolio home
│   │   ├── globals.css                # Fluid clamp styles & design tokens
│   │   ├── sitemap.ts                 # Dynamic sitemap
│   │   ├── robots.ts                  # Search engine robots
│   │   ├── not-found.tsx              # Bespoke 404 page
│   │   └── work/[slug]/page.tsx       # Dynamic project dossiers
│   ├── components/
│   │   ├── visual/AuroraBackground.tsx
│   │   ├── character/InteractiveCharacter.tsx
│   │   ├── hero/Hero.tsx
│   │   ├── navigation/Header.tsx & Footer.tsx
│   │   ├── motion/                    # Kinetic primitives (ScrollReveal, AnimatedText, MagneticButton...)
│   │   ├── projects/                  # Video engine & showcase cards
│   │   ├── skills/                    # Verified skills taxonomy
│   │   ├── experience/                # Timeline of roles & education
│   │   └── contact/                   # Verified channels & copy-email action
│   ├── hooks/                         # Pointer tracking, spring kinetics, character state
│   ├── data/                          # Strongly typed profile, skills, experience, projects
│   ├── styles/aurora.css              # Authoritative 6-layer CSS spec
│   ├── lib/utils.ts
│   └── types/portfolio.ts
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## ✦ Local Development & Production Verification

```bash
# Run development server
npm run dev

# Run TypeScript strict validation
npm run type-check

# Run production build
npm run build

# Start production server
npm run start
```
