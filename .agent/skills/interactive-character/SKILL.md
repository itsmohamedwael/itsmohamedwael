---
name: interactive-character
description: Engineering specifications for the interactive illustrated character, pointer tracking physics, idle kinematics, and context reactions.
---

# Interactive Character Skill

## When to Use
Apply this skill when implementing, styling, or animating the 2D illustrated character avatar across the hero, navigation, or contact sections.

## Implementation Instructions
1. **Asset Identity & Integrity**:
   - Preserve Mohamed's authentic illustrated vector character asset. Do not alter facial structure or identity.
2. **2D Pointer Tracking Physics**:
   - Track mouse coordinates relative to the avatar container's bounding rectangle.
   - Calculate normalized displacement (`dx`, `dy`) between `-1.0` and `1.0`.
   - Apply spring interpolation (`stiffness: 140, damping: 16`) to drive pupil translations (clamped to `±7px` horizontal, `±5px` vertical).
3. **Autonomous & Contextual Kinematics**:
   - **Natural Blinking**: Trigger spontaneous blinks at randomized intervals (3.5s–6.5s) using quick vertical eyelid scale (`scaleY: 1 -> 0.1 -> 1` in 140ms).
   - **Idle Breathing**: Subtle vertical chest/head oscillation (`y: [0, -3px, 0]` over 4s cycle).
   - **Interactive Feedback**: On button hover or form focus, character's gaze locks onto the target; on direct click, character triggers a quick playful reaction.
4. **Mobile & Reduced Motion Behavior**:
   - On touch devices, disable continuous pointer listeners; drive gaze based on page scroll progression or subtle touch taps.
   - Under `prefers-reduced-motion: reduce`, disable gaze motion and display the character in a serene, static attentive pose.

## Completion Criteria
- Character feels alive, organic, and responsive without distracting from reading comprehension.
- Performance impact is negligible (< 1ms per frame).
