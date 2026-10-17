---
name: interactive-character
description: Engineering specifications for the interactive illustrated character, pointer tracking physics, idle kinematics, and context reactions.
---

# Interactive Character Engineering Skill

## 1. Role & Identity
The character embodies Mohamed Wael's digital alter-ego: sharp, inquisitive, tech-creative, with curly dark hair, alert expressive eyes, and subtle organic posture shifts.

## 2. Interaction State Machine
1. **Idle State**:
   - Breathing cadence: Subtle `y` oscillation (amplitude `±4px`, period `3.5s`, cubic ease-in-out).
   - Micro-tilts: Very gentle `rotate` shifts (`±1.5deg`).
   - Periodic blink: Rapid eyelid close/open every 4–7 seconds with randomized intervals.
2. **Pointer Tracking**:
   - Compute normalized offset `(dx, dy)` between character center and cursor viewport coordinates.
   - Clamp eye pupils translation to a maximum bounding ellipse (e.g., `±7px` horizontal, `±5px` vertical).
   - Apply head/torso parallax: Subtle rotation (`max ±8deg`) and translation (`max ±10px`) driven by spring interpolation.
3. **Contextual Hover Reactions**:
   - Navigation links: Eyes glance upward towards header with slight curious head tilt.
   - Project cards: Eyes track project media preview and expression brightens.
   - Contact / CTA: Character presents an inviting wave or nod.
4. **Click / Tap Feedback**:
   - Immediate responsive spring squish (`scaleY: 0.94, scaleX: 1.05`) settling back to `1.0` in 280ms.
5. **Scroll Reactions**:
   - Shifts position and gaze direction progressively down the page narrative.

## 3. Technical Constraints
- Never cause layout reflows (operate purely via absolute/fixed positioning or within an isolated transform container).
- Clean up all `mousemove`, `touchmove`, and `IntersectionObserver` listeners upon component unmount.
- Provide full fallback for mobile (touch gestures, gyroscope if permitted, or autonomous conversational idle) and respect `prefers-reduced-motion`.
