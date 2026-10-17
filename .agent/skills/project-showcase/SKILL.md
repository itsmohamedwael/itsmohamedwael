---
name: project-showcase
description: Video playback lifecycle, IntersectionObserver orchestration, dynamic project routes, and media presentation.
---

# Project Showcase & Video Engine Skill

## 1. Showcase Architecture
- Each featured project combines:
  - High-definition video loop with auto-pause out of viewport
  - Poster fallback image
  - Project Title & Category taxonomy
  - Verified technical stack tags
  - Narrative impact description
  - Link to deep-dive `/work/[slug]` route

## 2. Dynamic Project Route `/work/[slug]`
- Strongly typed parameters backed by `src/data/projects.ts`.
- Structured presentation:
  - Hero project header & video player with custom accessible controls
  - Problem space & architectural solution
  - Technology breakdown with exact roles (e.g. Gemini 1.5 Pro API, OpenCV screen analysis, Python desktop daemon, Arduino distance sensors)
  - Key achievements and metrics
  - Seamless navigation to previous/next projects

## 3. Autonomous Video Engine Lifecycle
- Use native HTML5 `<video>` controlled via React `useRef` and `IntersectionObserver`.
- Attributes: `autoPlay`, `loop`, `muted`, `playsInline`, `preload="metadata"`.
- Observer threshold `0.35`: Trigger `video.play()` smoothly when entered, `video.pause()` when exited.
- Audio toggle: Provide explicit mute/unmute toggle control with clear visual indicator.
