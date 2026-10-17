# MWAEL Responsive Motion & Adaptive Kinetics
**Version**: 2.0.0 · **Classification**: Multi-Device Motion Specification  
**Project**: MWAEL Portfolio Full Reconstruction  
**Engineer**: Responsive & Performance Engineering Group  

---

## 1. Multi-Device Breakpoint Matrix

| Breakpoint Tier | Target Viewport Range | Input Modality | Motion Complexity Tier | Layout Architecture |
|---|---|---|---|---|
| **Compact Mobile** | 320px – 389px | Touch | Minimal, Fast (120ms–250ms) | Single-column, vertical flow |
| **Standard Mobile** | 390px – 480px | Touch | Fluid Vertical Reveals | Single-column, edge-to-edge media |
| **Tablet Portrait** | 481px – 768px | Touch / Stylus | Medium Kinetics | Balanced 2-column grids |
| **Tablet Landscape / Laptop** | 769px – 1023px | Touch / Trackpad | High Kinetics | Asymmetric editorial grid |
| **Desktop High-Res** | 1024px – 1920px+ | Mouse / Pointer | Full Cinematic Orchestration | Pinned galleries, magnetic anchors |

---

## 2. Desktop vs. Mobile Motion Transformation Rules

### 2.1 Project Showcase Transformation
- **Desktop (≥ 1024px)**:
  - Pinned viewport storytelling: Projects sequence through scrubbed horizontal or multi-layer stacked reveals.
  - Media frames react to mouse cursor position with subtle tilt.
  - Hover states trigger video stream buffering and preview playback.
- **Mobile (< 1024px)**:
  - **Zero Horizontal Pinning**: Strict prohibition of scroll-hijacked horizontal scroll containers on touch screens, which violate user expectations and cause gesture traps.
  - **Vertical Cinematic Stream**: Full-width cards with high-contrast typography and poster previews.
  - **Tap-to-Play**: Videos only load and play on direct touch or explicit viewport centering, preserving mobile battery and cellular data limits.

### 2.2 Character Tracking Transformation
- **Desktop (Pointer Available)**:
  - Continuous 2D pupil tracking calculated relative to mouse window coordinates.
  - Spring-damped head tilt and squish dynamics.
- **Mobile (Touch-Only)**:
  - Mouse coordinates are simulated or tied to scroll progression (e.g., character glances downwards as the user scrolls through projects).
  - Tap interaction triggers playful greeting or wink animation.
  - Idle breathing kinematics remain active.

### 2.3 Typography & Masking Transformation
- **Desktop**:
  - Complex dual-line overflow masking with sub-pixel line clipping.
  - Massive fluid headings (`clamp(3.5rem, 8vw, 7.5rem)`).
- **Mobile**:
  - Simplified opacity and vertical slide transitions (`y: 16px -> 0px`).
  - Fluid heading scales tailored to avoid ugly word wraps (`clamp(2rem, 7vw, 3.25rem)`).
  - Zero horizontal overflow guaranteed down to 320px screen width.

---

## 3. Reduced Motion & Accessibility Protocol (`prefers-reduced-motion`)

When a user enables `prefers-reduced-motion: reduce`:
1. **Zero Transform Displacement**: Eliminate large translations (`y: 100px`, `x: -200px`), parallax scrolling, and pinned scroll scrubbers.
2. **Instant / Fade Fallback**: Replace complex kinetic choreography with clean, immediate opacity transitions (`opacity: 0 -> 1` over 150ms).
3. **Character Kinematics**: Pupil tracking and idle swaying are disabled; character rests in an attentive, welcoming static pose.
4. **All Content Available**: Ensure 100% of text, project case studies, and skills are immediately visible and navigable via keyboard (Tab / Shift+Tab) and screen readers.
