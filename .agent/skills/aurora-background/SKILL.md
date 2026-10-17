---
name: aurora-background
description: Authoritative implementation guide for the 6-layer Aurora Borealis atmospheric lighting system and film grain overlay.
---

# Aurora Borealis Background Engine

## 1. Foundational Architecture
- **Base Canvas**: The root body or outermost application wrapper must be `#100e0b`.
- **Container Rule**:
  - `position: relative`
  - `overflow: hidden`
  - `min-height: 100vh`
  - **CRITICAL**: The `.aurora-container` MUST remain transparent (`background: transparent`). If an opaque background is set on the container itself, blend modes (`screen`, `multiply`) fail against the underlying `#100e0b` dark canvas.
- Every decorative layer uses:
  - `position: absolute`
  - `inset: 0`
  - `pointer-events: none`
  - `aria-hidden: "true"`
- Page content is layered on top via an explicit higher stacking context (`relative z-10`).

## 2. The Six Gradient Layers
All layers must strictly reproduce the specified blend modes, opacities, and responsive blur radii:

### Layer 1
- **Geometry**: Linear gradient (`125deg`, `#093c3f 0%`, `#075e54 35%`, `#0f766e 70%`, `transparent 100%`)
- **Blend Mode**: `screen`
- **Opacity**: `1.0`
- **Blur**: `85px` mobile, `122px` desktop

### Layer 2
- **Geometry**: Linear gradient (`215deg`, `#1e1b4b 0%`, `#312e81 40%`, `#4338ca 75%`, `transparent 100%`)
- **Blend Mode**: `screen`
- **Opacity**: `0.9`
- **Blur**: `75px` mobile, `108px` desktop

### Layer 3
- **Geometry**: Radial gradient (`ellipse 80% 60% at 75% 20%`, `#059669 0%`, `#10b981 30%`, `#064e3b 60%`, `transparent 100%`)
- **Blend Mode**: `screen`
- **Opacity**: `0.9`
- **Blur**: `70px` mobile, `101px` desktop

### Layer 4
- **Geometry**: Radial gradient (`ellipse 90% 70% at 20% 80%`, `#3b82f6 0%`, `#1d4ed8 45%`, `#172554 75%`, `transparent 100%`)
- **Blend Mode**: `screen`
- **Opacity**: `1.0`
- **Blur**: `175px` mobile, `252px` desktop

### Layer 5
- **Geometry**: Linear gradient (`340deg`, `#022c22 0%`, `#044e3f 40%`, `transparent 80%`)
- **Blend Mode**: `multiply`
- **Opacity**: `0.9`
- **Blur**: `80px` mobile, `115px` desktop

### Layer 6
- **Geometry**: Radial gradient (`ellipse 70% 50% at 50% 50%`, `#a855f7 0%`, `#6366f1 35%`, `#0ea5e9 70%`, `transparent 100%`)
- **Blend Mode**: `screen`
- **Opacity**: `0.7`
- **Blur**: `138px` mobile, `198px` desktop

## 3. Analog Film Grain Specification
- **SVG Filter Definition**:
  ```xml
  <svg class="pointer-events-none absolute inset-0 h-full w-full opacity-[0.85] mix-blend-overlay" aria-hidden="true">
    <filter id="aurora-grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" />
    </filter>
    <rect width="100%" height="100%" filter="url(#aurora-grain)" />
  </svg>
  ```
- **Performance Optimization**: Grain can be rendered via SVG data URL or CSS overlay to prevent repetitive GPU re-tessellation.

## 4. Kinetic Behavior & Restraint
- Layers drift smoothly via subtle CSS/Motion translate offsets (`x: [-20, 20], y: [-15, 15]`) over `20s - 35s` cycles with easeInOut.
- Blur values remain FIXED; NEVER animate `filter: blur()` during ticks.
