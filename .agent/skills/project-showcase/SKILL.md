---
name: project-showcase
description: Video playback lifecycle, IntersectionObserver orchestration, dynamic project routes, and media presentation.
---

# Project Showcase Skill

## When to Use
Apply this skill when structuring showcase video components, managing video autoplay lifecycles, building project galleries, or implementing dynamic case study pages (`/work/[slug]`).

## Implementation Instructions
1. **Showcase Video Lifecycle**:
   - Every video must have a lightweight JPEG poster fallback (`/videos/posters/poster-...jpg`).
   - Use `preload="none"` on offscreen videos to avoid saturating network bandwidth on initial page load.
   - Attach an `IntersectionObserver`: When video is out of view, call `.pause()`.
   - Maximize playback performance: Use hover-to-play on desktop or viewport-centered tap-to-play on mobile.
2. **Verified Project Portfolio**:
   - Ensure all verified showcase works are represented:
     1. `Clowdy AI Assistant`
     2. `Oryveo Restaurant Operations Suite`
     3. `Creator Affiliate Registration Platform`
     4. `ZEN Local Brand`
     5. `Assistive Haptic & Acoustic Obstacle Navigator`
   - House Burger and unrelated placeholder projects must remain strictly excluded.
3. **Dynamic Project Route Experience (`/work/[slug]`)**:
   - SSG generation via `generateStaticParams()`.
   - Rich case study dossier: Problem statement, technical architecture, verified technologies, impact metrics, and outbound links.
   - Smooth page transitions with native browser back/forward support.

## Completion Criteria
- Video playback is instant, smooth, and pauses cleanly when navigating away.
- All 5 verified projects load with accurate metadata and working video/poster assets.
