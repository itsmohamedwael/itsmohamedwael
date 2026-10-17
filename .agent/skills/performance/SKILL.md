---
name: performance
description: Core Web Vitals targets, Server Component boundaries, runtime profiling, and asset optimization standards.
---

# Performance Engineering Directives

## 1. Core Web Vitals Targets
- **Largest Contentful Paint (LCP)**: ≤ 1.8s
- **Cumulative Layout Shift (CLS)**: ≤ 0.02
- **Interaction to Next Paint (INP)**: ≤ 100ms
- **First Contentful Paint (FCP)**: ≤ 1.0s

## 2. Rendering & Bundling Discipline
- Maximum Server Components: Keep pages and static editorial text as React Server Components (RSC).
- Confine `"use client"` strictly to interactive leaves (character tracker, video player, navigation drawer).
- Video Lifecycle: Use IntersectionObserver to lazy-load video streams. Never load or decode videos outside the viewport. Provide WebP/JPEG posters for instant visual fill.

## 3. Zero Lag Execution
- No CSS blurs during animation ticks.
- Only transform and opacity animations.
- Memory leak prevention: Clean up all event listeners and animation frames on component unmount.
