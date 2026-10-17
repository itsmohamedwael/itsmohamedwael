---
name: visual-testing
description: Multi-pass visual quality assurance, responsive viewport verification, screenshot review, and regression prevention.
---

# Visual Testing Skill

## When to Use
Apply this skill after completing any major visual feature or refactor, before committing code, and prior to production deployment.

## Implementation Instructions
1. **The Three-Pass Visual Review**:
   - **Pass 1 — Composition & Layout**: Inspect typography scale, negative space, hairline contrast, alignment across columns, and visual hierarchy.
   - **Pass 2 — Motion & Choreography**: Verify entrance timings, scroll synchronization, spring settle behaviors, pupil tracking limits, and video hover responsiveness.
   - **Pass 3 — Responsiveness & Performance**: Test across all viewport tiers:
     - `320px` (iPhone SE): Verify zero horizontal overflow and readable text.
     - `375px` / `430px` (Modern mobile): Verify vertical video showcase and touch targets.
     - `768px` / `1024px` (Tablets): Verify smooth transition from vertical to horizontal.
     - `1440px` / `1920px` (Desktop): Verify pinned showcase and high-res layout restraint.
2. **Automated & Tool-Based Verification**:
   - Run `npm run type-check` (`tsc --noEmit`) to ensure 0 TypeScript errors.
   - Run `npm run build` to verify Next.js production compilation and static route generation.
   - Run Playwright browser automation or headless screenshot capture to visually confirm rendering.
3. **Defect Remediation Protocol**:
   - Immediately fix any horizontal scrollbars, layout shifts, or clipping issues discovered during review.

## Completion Criteria
- Zero console errors or warnings.
- Layout remains visually pristine across all target breakpoints.
