---
name: character-animation
description: Engineering specifications for the interactive illustrated character, pointer tracking physics, idle breathing, and squish reactions.
---

# Character Animation Directives

## 1. Character Identity & Preservation
- The character represents Mohamed Abdelhamid (Mohamed Wael) as an illustrated digital observer.
- Preserve original facial structure, hair silhouette, and distinctive features.
- Never add artificial photo toggles or switch buttons.

## 2. Kinematic Specifications
- **Head & Gaze Tracking**:
  - Head rotation clamped to `[-12deg, +12deg]`.
  - Head displacement clamped to `[-10px, +10px]`.
  - Eye pupils track pointer offset relative to avatar center, clamped to `[-6px, +6px]`.
- **Idle Breathing**:
  - Torso sways subtly along Y axis (`0px` to `2.5px`, period `3.8s`) using sine ease.
- **Micro-Interactions**:
  - Click / tap squish reaction: scale down Y to `0.92`, scale up X to `1.08`, then spring back to neutral (`stiffness: 450, damping: 20`).
  - Active section reaction: context pills update based on current page anchor.
