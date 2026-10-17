---
name: responsive-engineering
description: Mobile-first architecture, fluid typography scaling, breakpoint disciplines, and touch interaction standards.
---

# Responsive Engineering Directives

## 1. Breakpoint Grid
- `xs`: 320px–374px (Ultra-compact mobile, iPhone SE)
- `sm`: 375px–479px (Modern mobile standard)
- `md`: 768px–1023px (Tablets, iPads)
- `lg`: 1024px–1279px (Laptops, netbooks)
- `xl`: 1280px–1535px (Standard desktop displays)
- `2xl`: 1536px+ (Wide canvas / 4K displays)

## 2. Fluid Scale Architecture
- Utilize CSS `clamp()` and proportional scaling for all primary typographic anchors:
  ```css
  --font-display: clamp(2.5rem, 6vw + 1rem, 7rem);
  --font-heading: clamp(1.75rem, 3.5vw + 0.5rem, 3.75rem);
  --font-subheading: clamp(1.125rem, 1.8vw + 0.25rem, 1.75rem);
  --font-body: clamp(0.95rem, 0.4vw + 0.85rem, 1.15rem);
  --spacing-section: clamp(4rem, 10vw, 10rem);
  ```

## 3. Interaction & Touch Safeguards
- Touch targets must be at minimum `44px x 44px`.
- Prevent accidental hover stickiness on iOS/Android via `@media (hover: hover)` media queries for cursor hover effects.
- Ensure horizontal scroll containment: `overflow-x: clip` or `overflow-x: hidden` on parent containers to eliminate accidental horizontal wiggle.
