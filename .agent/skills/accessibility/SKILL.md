---
name: accessibility
description: WCAG 2.1 AA compliance, focus management, semantic structure, screen-reader support, and reduced-motion fallbacks.
---

# Accessibility Skill

## When to Use
Apply this skill when implementing interactive controls, dialogs, forms, video players, links, and animated transitions.

## Implementation Instructions
1. **Semantic DOM Architecture**:
   - Use correct HTML elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
   - Ensure a single, logical `<h1>` per page, followed by an unbroken `<h2>`–`<h4>` heading hierarchy.
2. **Keyboard Navigation & Focus States**:
   - Every interactive element (links, buttons, video toggles) must be focusable via `Tab`.
   - Provide high-contrast, visible focus rings (`focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none`).
   - Modal dialogs or expandable menus must trap focus and close on `Escape`.
3. **Screen-Reader & ARIA Standards**:
   - Purely decorative elements (Aurora background, animated particles, graphic lines) must have `aria-hidden="true"`.
   - Videos must feature descriptive labels (`aria-label`) and accessible playback controls.
   - External links must include `rel="noopener noreferrer"` and screen-reader context if opening in a new tab.
4. **Reduced Motion Graceful Degradation**:
   - Respect `prefers-reduced-motion: reduce`.
   - Never hide content behind an animation that fails to trigger when reduced motion is requested.

## Completion Criteria
- 100% operable via keyboard alone.
- Zero accessibility violations under automated audits (axe / Lighthouse Accessibility ≥ 95).
