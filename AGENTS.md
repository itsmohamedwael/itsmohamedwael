# MWAEL Portfolio — Autonomous Creative Engineering Directives

## Architecture & Mission
This repository houses the personal, award-worthy interactive portfolio for **MWAEL** (Mohamed Abdelhamid / Mohamed Wael) — Computer Engineering scholar, AI Software Engineer, and Creative Visual Designer.

The site is built as a high-performance, dark atmospheric, editorial experience combining:
- Extreme minimalism and disciplined whitespace
- Multi-layered Aurora Borealis ambient lighting engine
- Interactive illustrated character with pointer-physics tracking
- High-impact showcase videos with autonomous viewport playback
- Deeply-typed project dossiers and verified technical taxonomy
- 60fps transform-based motion orchestration via `motion/react`

## Codebase Principles
1. **No Artificial Templates**: Every component is bespoke, handcrafted, and free of generic UI framework cliches (no cookie-cutter SaaS cards, no uncontrolled glassmorphism, no garish rainbow gradients).
2. **Strict Verification**: Every skill, credential, timeline entry, and project links strictly back to Mohamed's verified academic and professional record.
3. **Motion with Purpose**: All animations must use hardware-accelerated transforms (`transform`, `opacity`) with spring physics. Avoid animating `filter: blur()` or layout properties (`width`, `height`, `margin`) during runtime loops.
4. **Resilient Accessibility**: All interactive elements must support keyboard navigation, explicit ARIA descriptions, and full graceful degradation under `prefers-reduced-motion: reduce`.
5. **Zero Hydration Clutter**: Strict separation between Server Components (SEO metadata, content layout, structured data) and Client Components (motion, canvas, pointer tracking).

## Team Role Guidance
- **Creative Director & UI/UX**: Enforce typography hierarchy (`Playfair`/editorial display + Swiss sans body), strict palette anchored on `#100e0b` with aurora accents, and editorial layouts.
- **Motion Engineer**: Leverage `motion/react` (`useScroll`, `useTransform`, `useSpring`, `useMotionValue`, `AnimatePresence`).
- **Performance Engineer**: Enforce Core Web Vitals (LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms, Lighthouse 95+ target).
- **QA Specialist**: Strict TypeScript type-checking, zero build errors, zero horizontal overflow at 320px–1920px.
