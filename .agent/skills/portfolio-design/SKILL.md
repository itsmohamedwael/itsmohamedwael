---
name: portfolio-design
description: Creative direction, editorial design system, typography hierarchy, and visual restraint rules for MWAEL portfolio.
---

# Portfolio Design Skill & Directives

## 1. Aesthetic Identity
- **Mood**: High-fashion editorial meets deep computational engineering. Dark atmospheric canvas, ultra-refined typography, generous negative space, purposeful kinetic accents.
- **Base Environment**: `#100e0b` (warm obsidian black) applied strictly to root container or body. Never paint an opaque background over the translucent Aurora canvas.
- **Palette Discipline**:
  - Background Base: `#100e0b`
  - Text Primary: `#fbfaf8` (pure soft ivory, 96% luminance)
  - Text Secondary: `#a6a096` (muted warm gray)
  - Text Teriary: `#635e55` (deep subtle stone)
  - Accent Aurora Cyan: `#4ef2bb` / Emerald `#10b981`
  - Accent Deep Indigo: `#3b82f6` / Violet `#8b5cf6`
  - Border Subtlety: `rgba(255, 255, 255, 0.07)` to `rgba(255, 255, 255, 0.12)`

## 2. Typography Rules
- **Display Heading**: Editorial serif or high-contrast display font for signature statements, large numerals, and project names.
- **Interface & Body**: Hyper-legible modern neo-grotesque sans-serif with tabular numerals for technical metrics and technical descriptions.
- **Micro-labels**: Monospace uppercase tracked labels (`text-[10px] tracking-[0.25em] uppercase font-mono text-stone-400`).
- **Hierarchy Rules**:
  - H1 / Hero: Fluid `clamp(2.75rem, 7vw, 6.5rem)` with tight tracking (`-0.03em`) and controlled line-height (`1.05`).
  - Section Titles: Fluid `clamp(1.75rem, 4vw, 3.25rem)`.
  - Body: Fluid `clamp(0.95rem, 1.2vw, 1.125rem)`, relaxed leading (`1.7`).

## 3. Strict Prohibitions
- NO generic AI-generated landing page cliches (e.g., standard 3-column pricing cards, floating colored pill badges with random emoji).
- NO thick plastic rounded cards with `rounded-3xl` + heavy drop shadows.
- NO uncontrolled, full-page frosted glassmorphism that destroys contrast or introduces GPU lag.
- NO decorative elements without structural or communicative meaning.
