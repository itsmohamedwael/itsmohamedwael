---
name: performance-engineering
description: Performance budgeting, Core Web Vitals targets, Server Components boundaries, and asset optimization standards.
---

# Performance Engineering Directives

## 1. Non-Negotiable Core Web Vitals Targets
- **Largest Contentful Paint (LCP)**: ≤ 2.2s on standard mobile 4G throttled profiles.
- **Cumulative Layout Shift (CLS)**: ≤ 0.05 (target 0.00). All images, videos, and dynamic containers MUST declare explicit aspect ratios or intrinsic sizing.
- **Interaction to Next Paint (INP)**: ≤ 150ms. Zero long JavaScript tasks blocking the main thread during animations.
- **Lighthouse Performance Score**: 95+ in production build.

## 2. Server vs. Client Component Segregation
- The root layout and page shells are React Server Components (RSC) to maximize server-side streaming and SEO markup delivery.
- Interactive widgets (character, video player with observer, magnetic button, aurora canvas) are strictly isolated leaf client components with `"use client"`.
- Never mark high-level layouts `"use client"` unless strictly necessary.

## 3. Media & Asset Pipeline
- **Next/Image**: All raster imagery must use `next/image` with `sizes`, `priority` on above-the-fold hero assets, and WebP/AVIF formats.
- **Video Previews**:
  - Encoded with H.264/AAC for universal mobile/desktop compatibility.
  - Viewport-aware autoplay: Only play when intersecting viewport (`threshold: 0.35`), pause immediately when scrolled out of view.
  - `playsInline`, `muted`, `preload="metadata"`, and high-quality poster frames to prevent white/black flash before load.
- **CSS / Font Delivery**: Zero layout shifts from fonts by utilizing `next/font` with `display: "swap"` and preloading.
