---
name: advanced-scroll
description: Engineering pinned compositions, horizontal galleries, mask transitions, and scroll-linked kinetics using GSAP and Motion for React.
---

# Advanced Scroll Engineering Skill

## When to Use
Apply this skill when implementing scroll-linked narratives, pinned viewport showcases, horizontal project galleries, scroll-scrubbed typography reveals, and mask-based section transitions.

## Implementation Instructions
1. **Tooling Ownership Separation**:
   - **GSAP ScrollTrigger**: Owns macro-level page pinning, multi-section scrubbed sequence timelines, and desktop horizontal scroll tracking.
   - **Motion for React**: Owns micro-interactions, spring-based cursor tracking, button gestures, magnetic anchors, and component mount/unmount fades.
   - **RULE**: NEVER let GSAP and Motion for React animate the same CSS transform property on the same DOM element simultaneously. Wrap elements in parent containers if dual control is required.
2. **Pinned Horizontal Showcase (Desktop)**:
   - For viewports `≥ 1024px`, pin the showcase container using `ScrollTrigger.create({ trigger, pin: true, scrub: 1, end: () => "+=" + container.scrollWidth })`.
   - On touch viewports `< 1024px`, unpin the layout and convert to a fluid vertical stream.
3. **Scroll Mask Transitions**:
   - Use hardware-accelerated CSS `clip-path` masks (e.g., `polygon(0 0, 100% 0, 100% 100%, 0 100%)`).
   - Scrub polygon coordinates via `useTransform` or ScrollTrigger timelines.
4. **Lifecycle & Memory Management**:
   - Always store ScrollTrigger instances in React `useRef` and invoke `.kill()` inside `useEffect` cleanup routines.
   - Call `ScrollTrigger.refresh()` after dynamic route transitions or DOM resizing.

## Completion Criteria
- Scroll movement remains completely buttery and stutter-free at 60fps/120fps.
- Pinned containers release cleanly without jumping or layout shifts.
- Full unpinning and vertical fallback verified on viewports under 1024px.
