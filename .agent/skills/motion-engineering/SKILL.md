---
name: motion-engineering
description: Motion choreography, spring physics, natural easing curves, and GPU-accelerated interaction feedback.
---

# Motion Engineering Skill

## When to Use
Apply this skill when orchestrating entrance/exit transitions, tuning spring damping constants, engineering magnetic buttons, building shared-element transitions, and optimizing micro-interactions.

## Implementation Instructions
1. **Spring Physics Standards**:
   - High-responsiveness (buttons, switches): `{ stiffness: 350, damping: 25, mass: 0.8 }`
   - Fluid typography & cards: `{ stiffness: 200, damping: 22, mass: 1 }`
   - Expressive character & gaze tracking: `{ stiffness: 140, damping: 16, mass: 0.9 }`
2. **Standardized Easing Curves**:
   - Editorial Quintic Out: `[0.16, 1, 0.3, 1]` — delivers instant initial velocity with graceful, luxurious deceleration.
   - Cinematic Acceleration: `[0.77, 0, 0.175, 1]` — for dramatic mask reveals and full-screen scene switches.
3. **Hardware Acceleration Protocols**:
   - Animate ONLY `transform` (`translate3d`, `scale`, `rotate`) and `opacity`.
   - Never animate layout properties (`width`, `height`, `margin`, `padding`, `top`, `left`).
   - Avoid re-rendering React trees on scroll: pass motion values directly to `motion.div` styles (`style={{ x, y, opacity }}`).
4. **Cleanup & Memory**:
   - Clean up all event listeners and RAF tickers when components unmount.
   - Use `useReducedMotion()` to swap spring physics with instant transitions when requested by the OS.

## Completion Criteria
- Zero dropped frames during intensive user interactions.
- All animations feel physical, grounded, and devoid of mechanical robotic stiffness.
