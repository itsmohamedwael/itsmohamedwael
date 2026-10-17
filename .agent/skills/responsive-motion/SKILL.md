---
name: responsive-motion
description: Multi-device kinetic adaptation, breakpoint discipline, touch-safe interactions, and viewport transformation rules.
---

# Responsive Motion Skill

## When to Use
Apply this skill when tailoring animations across mobile, tablet, and desktop viewports, handling touch gestures, preventing horizontal scroll trapping, and enforcing breakpoint discipline.

## Implementation Instructions
1. **Breakpoint Disciplines**:
   - `Compact Mobile (320px–389px)`: Streamlined vertical flow, minimal motion, tap-to-play media, 0 horizontal overflow.
   - `Standard Mobile (390px–480px)`: Vertical cinematic scroll, lightweight scroll-linked reveals.
   - `Tablet (481px–1023px)`: 2-column adaptive layouts, native scrolling, touch-optimized gestures.
   - `Desktop (≥ 1024px)`: Pinned horizontal showcases, 2D mouse cursor pupil tracking, magnetic interaction anchors.
2. **Horizontal-to-Vertical Fallback Rule**:
   - NEVER force desktop horizontal pinned sequences onto mobile or touch screens.
   - On screens `< 1024px`, unpin the layout and convert projects into a responsive vertical stream with scroll-linked scale and opacity reveals.
3. **Touch Modality Standards**:
   - Never require hover to access essential information, project links, or skill details.
   - Ensure touch targets are at least `44px x 44px`.
   - Prevent gesture conflicts: preserve native mobile momentum scrolling without virtual scroll hijacking.

## Completion Criteria
- Flawless, responsive layout from 320px to 1920px+ with zero horizontal layout shift or overflow.
- Mobile experience feels completely natural and native to touch interfaces.
