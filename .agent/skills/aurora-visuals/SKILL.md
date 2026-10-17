---
name: aurora-visuals
description: Authoritative implementation guide for the 6-layer Aurora Borealis atmospheric lighting system and film grain overlay.
---

# Aurora Visuals Skill

## When to Use
Apply this skill when implementing or modifying the atmospheric Aurora Borealis backdrop, gradient compositions, blend modes, and film grain texture.

## Implementation Instructions
1. **Foundational Canvas Architecture**:
   - Outermost body canvas must be `#100e0b` (deep warm obsidian).
   - Aurora container must remain `transparent` to allow blend modes (`screen`, `multiply`) to composite correctly against `#100e0b`.
   - Content sits in a higher stacking context (`relative z-10`).
2. **The Six Gradient Layers Specification**:
   - **Layer 1**: Linear gradient (`125deg`, `#093c3f 0%`, `#075e54 35%`, `#0f766e 70%`, `transparent 100%`), `mix-blend-mode: screen`, opacity `1.0`, blur `85px` mobile / `122px` desktop.
   - **Layer 2**: Linear gradient (`215deg`, `#1e1b4b 0%`, `#312e81 40%`, `#4338ca 75%`, `transparent 100%`), `mix-blend-mode: screen`, opacity `0.9`, blur `75px` mobile / `108px` desktop.
   - **Layer 3**: Radial gradient (`ellipse 80% 60% at 75% 20%`, `#059669 0%`, `#10b981 30%`, `#064e3b 60%`, `transparent 100%`), `mix-blend-mode: screen`, opacity `0.9`, blur `70px` mobile / `101px` desktop.
   - **Layer 4**: Radial gradient (`ellipse 90% 70% at 20% 80%`, `#3b82f6 0%`, `#1d4ed8 45%`, `#172554 75%`, `transparent 100%`), `mix-blend-mode: screen`, opacity `1.0`, blur `175px` mobile / `252px` desktop.
   - **Layer 5**: Linear gradient (`340deg`, `#022c22 0%`, `#044e3f 40%`, `transparent 80%`), `mix-blend-mode: multiply`, opacity `0.9`, blur `80px` mobile / `115px` desktop.
   - **Layer 6**: Radial gradient (`ellipse 70% 50% at 50% 50%`, `#a855f7 0%`, `#6366f1 35%`, `#0ea5e9 70%`, `transparent 100%`), `mix-blend-mode: screen`, opacity `0.7`, blur `138px` mobile / `198px` desktop.
3. **Performance Optimization Rules**:
   - **NEVER animate `filter: blur()` during runtime ticks**: Blurs must remain FIXED in CSS classes.
   - Dynamic motion must strictly use hardware-accelerated translations (`transform: translate3d(x, y, 0)`).
   - On low-power mobile devices, layers remain static or use reduced blur values to ensure 60fps scrolling.
4. **Analog Film Grain Overlay**:
   - Utilize a lightweight SVG `<feTurbulence>` or pre-rendered noise tile with `mix-blend-mode: overlay` and `opacity: 0.85` to give a photographic, tactile quality.

## Completion Criteria
- Authentic Aurora Borealis visual presence with ethereal depth.
- 60fps/120fps scrolling with zero GPU frame drops or overheating.
