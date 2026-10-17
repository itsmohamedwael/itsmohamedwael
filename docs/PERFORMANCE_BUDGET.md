# MWAEL Performance Budget & Optimization Specification
**Version**: 2.0.0 · **Classification**: Frontend Performance Standard  
**Project**: MWAEL Portfolio Full Reconstruction  
**Performance Lead**: Web Performance & Runtime Profiling Group  

---

## 1. Core Web Vitals Targets

| Metric | Target Threshold | Critical Failure Threshold | Optimization Strategy |
|---|---|---|---|
| **LCP (Largest Contentful Paint)** | **≤ 2.0s** | > 2.5s | Next.js Server Components, preload hero fonts/posters, prioritize LCP text over heavy images. |
| **CLS (Cumulative Layout Shift)** | **≤ 0.05** | > 0.10 | Fixed aspect-ratio boxes (`aspect-video`, `aspect-[4/5]`) on all media; zero layout reflows during animation. |
| **INP (Interaction to Next Paint)** | **≤ 150ms** | > 200ms | Offload scroll handlers from React state; leverage Motion values and native compositor threads. |
| **FCP (First Contentful Paint)** | **≤ 1.2s** | > 1.8s | Critical CSS inlined; Zero blocking external stylesheets or font render delays. |
| **Lighthouse Performance Score** | **≥ 95** | < 90 | Tree-shaken bundles, lazy video hydration, optimized SVG assets. |

---

## 2. Asset & Resource Budgets

### JavaScript Payload:
- **Total Initial JS Shared (Gzip)**: ≤ 120 KB (Currently 103 KB)
- **First Load JS for Index Route**: ≤ 180 KB (Currently 164 KB)
- **Motion Engine**: Tree-shaken `motion/react` imports only (no legacy `@framer/motion` polyfills).

### CSS & Styling:
- **Tailwind Utility Output**: ≤ 25 KB
- **Custom CSS (aurora & animations)**: ≤ 5 KB

### Video & Media Assets:
- **Showcase Videos**:
  - H.264/AAC encoded MP4s with `faststart` (moov atom at head of file).
  - Video poster fallbacks pre-generated in JPEG format (average size ≤ 60 KB).
  - Lazy buffering: `preload="none"` on off-screen videos; `preload="metadata"` on visible hero elements.
  - Video decoding: Max 1 active decoding stream concurrently; pause immediately upon exiting viewport.

---

## 3. Runtime Rendering Rules & Frame Budget (16.6ms per frame)
1. **Never Animate Layout Properties**: Strictly prohibit runtime transitions on `width`, `height`, `margin`, `padding`, `top`, `left`.
2. **Never Animate Runtime CSS Filter Blurs**: Keep blur values fixed (`122px`, `108px`, etc.) while moving elements via hardware-accelerated `translate3d(x, y, 0)`.
3. **Hardware Acceleration Declarations**: Apply `will-change: transform` or `transform: translateZ(0)` exclusively on actively transforming components during interaction, and remove upon completion to free GPU VRAM.
4. **Passive Event Listeners**: Ensure all scroll, wheel, and resize listeners use `{ passive: true }`.
