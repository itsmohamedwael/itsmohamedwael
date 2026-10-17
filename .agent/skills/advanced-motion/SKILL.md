---
name: advanced-motion
description: Comprehensive motion orchestration using Motion for React, GSAP ScrollTrigger, spring physics, and GPU-composited transformations.
---

# Advanced Motion Directives

## 1. Motion Architecture
- Use `motion/react` as the primary animation engine.
- All animated properties must be GPU-composited: `transform` (`x`, `y`, `scale`, `rotate`) and `opacity`.
- Strictly prohibit animating layout dimensions (`width`, `height`, `margin`, `padding`, `top`, `left`) or runtime CSS filters (`filter: blur()`).

## 2. Spring Physics Tokens
- **Micro-interactions (Buttons/Hovers)**:
  `stiffness: 400, damping: 25, mass: 0.5`
- **Character Head & Pointer Tracking**:
  `stiffness: 180, damping: 22, mass: 0.8`
- **Page Transitions & Reveal Curtains**:
  `ease: [0.16, 1, 0.3, 1], duration: 0.85`
- **Squish Impact**:
  `stiffness: 500, damping: 15, mass: 0.3`

## 3. Scroll Interactions
- Mask reveals: `clipPath: inset(100% 0% 0% 0%)` transitioning to `clipPath: inset(0% 0% 0% 0%)`.
- Scroll scrubbing: Sync transform deltas with scroll position using `useScroll` and `useTransform`.
- Respect reduced motion: Always test `useReducedMotion()` and deactivate continuous kinetic loops when enabled.
