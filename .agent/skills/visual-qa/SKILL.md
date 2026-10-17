---
name: visual-qa
description: Multi-pass visual quality assurance, responsive viewport verification, screenshot review, and regression prevention.
---

# Visual QA Directives

## 1. Multi-Viewport Inspection
Verify visual balance and layout integrity across standard device dimensions:
- `320px`: iPhone SE (Ultra-compact mobile)
- `375px`: iPhone standard
- `430px`: iPhone 15/16 Pro Max
- `768px`: iPad Mini / Portrait tablet
- `1024px`: iPad Pro / Compact desktop
- `1440px`: Standard high-density display
- `1920px`: Ultra-wide monitor

## 2. Regression Checklist
- [ ] Canvas is pure black (`#000000`).
- [ ] No generic card grids or SaaS pill components.
- [ ] No old components imported anywhere.
- [ ] No old CSS or color variables loaded.
- [ ] Character follows cursor with smooth spring damping.
- [ ] All 5 verified projects render with posters and video streaming.
- [ ] House Burger is nowhere to be found.
- [ ] BUE and 3.8 GPA credentials rendered accurately.
- [ ] LinkedIn and Instagram links active and correct.
