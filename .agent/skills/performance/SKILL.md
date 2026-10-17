---
name: performance
description: Core Web Vitals targets, Server Component boundaries, runtime profiling, and asset optimization.
---

# Performance Engineering Skill

## When to Use
Apply this skill when structuring React component trees, analyzing client bundle sizes, auditing scroll handlers, or optimizing asset loading across the application.

## Implementation Instructions
1. **Target Budgets**:
   - **LCP**: ≤ 2.0s
   - **CLS**: ≤ 0.05
   - **INP**: ≤ 150ms
   - **Lighthouse Performance**: ≥ 95 target
2. **Server vs. Client Boundaries**:
   - Keep page metadata, static layout scaffolding, and structured JSON-LD schemas inside Server Components.
   - Restrict `"use client"` directives strictly to leaf components that genuinely require interactivity (pointer tracking, canvas, motion hooks).
3. **Scroll Listener Discipline**:
   - Avoid attaching raw `window.addEventListener('scroll')` handlers that update React state.
   - Use `useScroll` motion values or native CSS scroll timelines to execute animations entirely on the GPU compositor thread.
4. **Media & Bundle Optimization**:
   - Ensure all image tags have explicit `width` and `height` (or `fill` with parent aspect ratio) to prevent CLS.
   - Tree-shake icons from `lucide-react`.

## Completion Criteria
- Production build completes cleanly with minimal JS chunk overhead.
- No layout shifts or performance warnings during runtime profiling.
