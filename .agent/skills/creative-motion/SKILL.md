---
name: creative-motion
description: Comprehensive motion orchestration using Motion for React (motion/react), springs, scroll-linked kinetics, and GPU optimization.
---

# Creative Motion Skill & Architecture

## 1. Package Specification
- Import strictly from `"motion/react"` (the current official package from Motion):
  ```typescript
  import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue,
    useReducedMotion,
  } from "motion/react";
  ```

## 2. Physics & Easing Constants
- **Editorial Spring**: `{ stiffness: 180, damping: 24, mass: 0.8 }` — crisp, authoritative response with organic settling.
- **Atmospheric Floating**: `{ stiffness: 40, damping: 15, mass: 1.2 }` — ethereal, slow gliding for ambient light and character breath.
- **Magnetic Buttons**: `{ stiffness: 350, damping: 20, mass: 0.5 }` — snappy tactile feedback on pointer proximity.
- **Scroll Easing**: Smooth cubic bezier `[0.16, 1, 0.3, 1]` (custom quintic out) for natural momentum.

## 3. Kinetic Patterns
- **Scroll-Linked Reveals**: Use `useScroll` with explicit target refs and scroll offsets (e.g. `["start end", "end start"]`). Avoid attaching scroll listeners to global `window` when localized element tracking is possible.
- **Transform-Only Budget**:
  - ALLOWED in hot animation paths: `transform` (`x`, `y`, `scale`, `rotate`, `skew`), `opacity`.
  - FORBIDDEN in animation loops: `width`, `height`, `top`, `left`, `margin`, `padding`, `filter: blur()`.
- **Text Word Reveals**: Stagger words or lines using `variants` with `staggerChildren: 0.04` and `overflow: hidden` line wrappers for seamless masking.
- **Graceful Fallback**:
  ```typescript
  const prefersReduced = useReducedMotion();
  const transition = prefersReduced ? { duration: 0 } : defaultSpring;
  ```
