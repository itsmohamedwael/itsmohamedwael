# MWAEL Motion Storyboard & Interaction Choreography
**Version**: 2.0.0 · **Classification**: Kinetic Choreography Specification  
**Project**: MWAEL Portfolio Full Reconstruction  
**Motion Director**: Creative Motion & GSAP Engineering Group  

---

## 1. Global Kinetic Tokens

To ensure rhythm and prevent arbitrary animation timings, all transitions adhere to standardized physics tokens:

```typescript
export const MOTION_TOKENS = {
  // Spring Physics Configurations
  springs: {
    snappy: { stiffness: 350, damping: 25, mass: 0.8 },
    fluid: { stiffness: 200, damping: 22, mass: 1 },
    character: { stiffness: 140, damping: 16, mass: 0.9 },
    float: { stiffness: 60, damping: 14, mass: 1.2 },
  },
  // Duration Curvatures (ms)
  durations: {
    micro: 0.18,      // 180ms - Button hover, tab switch
    standard: 0.35,   // 350ms - Dropdowns, pills, badges
    reveal: 0.65,     // 650ms - Headline reveals, cards
    cinematic: 0.95,  // 950ms - Section masks, scene switches
  },
  // Cubic Bezier Easings
  easings: {
    editorial: [0.16, 1, 0.3, 1],    // Quintic Out: immediate velocity, smooth settle
    smooth: [0.25, 0.1, 0.25, 1],    // Standard CSS ease
    cinematic: [0.77, 0, 0.175, 1],  // Dramatic acceleration curve
  }
};
```

---

## 2. Scene-by-Scene Kinetic Storyboard

### Scene 1: Arrival & Hero Entrance (0.0s – 1.2s)
```
[0.0s] ─────────────────────────────────────────────────────────────
• Root background initialized to #100e0b.
• Aurora Borealis atmospheric layers awaken at fixed blur depth.
• Floating SiteHeader fades down from y: -16px to 0px (opacity: 0 -> 1, duration: 400ms).

[0.2s] ─────────────────────────────────────────────────────────────
• Monospace status beacon blinks green ("AVAILABLE FOR Q2/Q3 2026").
• Live Cairo time ticker calculates GMT+3 time string.

[0.35s – 0.9s] ─────────────────────────────────────────────────────
• Primary Display Headline: Dual-line staggered mask reveal:
  Line 1 ("ENGINEERING AUTONOMOUS AI ARCHITECTURES") slides up from y: 100% inside overflow: hidden container.
  Line 2 ("& DISTINCT DIGITAL EXPERIENCES") follows at 150ms delay.
  Easing: [0.16, 1, 0.3, 1] (Quintic Out).

[0.6s – 1.1s] ─────────────────────────────────────────────────────
• Interactive Character Avatar unfolds with 3D perspective pop:
  scale: 0.92 -> 1.0, opacity: 0 -> 1.
  Spring interpolation activates; pupils smoothly acquire mouse coordinates.
```

---

### Scene 2: Interactive Character Mechanics
```
                      ┌──────────────────────┐
                      │  USER MOUSE POINTER  │
                      └──────────┬───────────┘
                                 │
                 Distance & Angle Vectors (dx, dy)
                                 │
                                 ▼
             ┌────────────────────────────────────────┐
             │ Spring Damping (stiffness: 140, damp: 16)│
             └───────────────────┬────────────────────┘
                                 │
          ┌──────────────────────┴──────────────────────┐
          ▼                                             ▼
  Pupil Translation                     Avatar Card Tilt & Squish
  (max ±7px horizontal,                 (max ±4deg subtle tilt,
   max ±5px vertical)                    scale: 1.02 on hover)
          │                                             │
          ▼                                             ▼
  Autonomous Blinking Kinematics        Context Reaction
  (random 3.5s - 6.5s interval,         (Smiles on Contact hover,
   scaleY: 1 -> 0.1 -> 1 in 140ms)       blinks on click)
```

---

### Scene 3: Editorial About Scroll Unfold
- **Scroll Linkage**: Section container tracked via `useScroll({ target: containerRef, offset: ["start end", "end start"] })`.
- **Text Reveal**: As the section enters the viewport, paragraph lines transition from `opacity: 0.2, y: 12px` to `opacity: 1.0, y: 0px` tied to scroll progression.
- **Academic Milestone Tag**: High-contrast highlight on The British University in Egypt with verified GPA honors badge floating into alignment.

---

### Scene 4: Cinematic Project Showcase

#### Desktop Paradigm (Horizontal Pinning or Cinematic Sticky Stack):
1. **Viewport Entry**: Container pins at top of viewport.
2. **Project Transition**:
   - Project 01 (`Clowdy AI Assistant`) occupies center stage.
   - User scrolls down -> Container scrubs horizontally or slides project layer cards up with mask reveal (`clip-path: inset(0 0 0 0)`).
   - Project 02 (`Oryveo Suite`), Project 03 (`Creator Affiliate`), Project 04 (`ZEN Brand`), Project 05 (`Arduino Navigator`).
3. **Hover & Video Interaction**:
   - Hovering over a card activates high-frame-rate MP4 playback.
   - Mouse leaves -> video smoothly pauses and resets to poster frame.

#### Mobile Paradigm (Vertical Flow):
- Pinning is deactivated to prevent mobile viewport traps.
- Cards stack vertically in a clean editorial stream.
- Each project card triggers an intersection observer: when > 40% visible, subtle scale up (`0.98 -> 1.0`) and video thumbnail enables tap-to-play.

---

### Scene 5: Interactive Skills Explorer
- Category selection tabs (AI, Embedded, Full-Stack, Creative).
- Tab change animates an active pill indicator using `layoutId="activeSkillTab"` with spring physics.
- Skill items render in clean grid cards with micro-interaction hover transforms (`x: 4px` on hover with hairline border illumination).

---

### Scene 6: Contact Section & Character Farewell
- Monumental headline: `"LET'S BUILD SOMETHING EXTRAORDINARY"`.
- Direct email trigger with 1-click clipboard copy and toast confirmation.
- Character shifts to bottom-right anchor, watching the inquiry form, with playful wink animation on click.
