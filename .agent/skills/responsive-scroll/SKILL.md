---
name: responsive-scroll
description: Viewport-specific scrolling strategies (320px–1920px), desktop horizontal/split presentations vs mobile vertical flow.
---

# Responsive Scroll Directives

## 1. Viewport Adaptation Discipline
- **Desktop (≥ 1024px)**:
  - Pinned editorial compositions with side-by-side sticky metadata and media scrub.
  - Interactive cursor tracking and magnetic triggers enabled.
- **Tablet (768px – 1023px)**:
  - Semi-split layout with fluid vertical flow. Pointer tracking disabled in favor of touch velocity.
- **Mobile (320px – 767px)**:
  - Strictly unpinned, high-velocity vertical scrolling.
  - Touch-safe button targets (minimum 44x44px).
  - No horizontal scrolling locks that trap the user's touch thumb.

## 2. Breakpoint Matrix
- `320px`: iPhone SE / small viewport check (zero text clipping, readable font scales).
- `375px`: Standard compact mobile.
- `430px`: Large modern smartphones (iPhone Pro Max, Pixel).
- `768px`: Tablet portrait.
- `1024px`: Desktop transition point.
- `1440px`: Standard desktop monitor.
- `1920px`: Ultra-wide / 4K displays (max-width containers with elegant gutters).
