---
name: quality-assurance
description: Testing strategies, TypeScript strict validation, automated build verification, and regression prevention.
---

# Quality Assurance & Build Verification Directives

## 1. Zero-Error Mandate
- **TypeScript**: Strict mode enabled (`"strict": true`, `"noImplicitAny": true`). Zero warnings, zero `any` types on business logic.
- **Linting**: Clean ESLint run with Next.js core web vitals plugin.
- **Production Build**: `npm run build` must succeed without warnings or dynamic server usage errors on static routes.

## 2. Cross-Device & Responsive Verification
- Verify layouts at:
  - 320px (iPhone SE)
  - 375px (iPhone 13/14/15)
  - 430px (iPhone Pro Max)
  - 768px (iPad portrait)
  - 1024px (iPad landscape / small laptop)
  - 1440px (MacBook / Desktop monitor)
  - 1920px (Full HD / 4K canvas)
- Verify zero horizontal scrolling (`document.documentElement.scrollWidth === window.innerWidth`).

## 3. Interaction & Media Validation
- Every showcase video must load valid media and have an available poster fallback.
- Character interactions must operate smoothly at 60fps without hitching.
- All outbound links (`mailto`, `https://itsmohamedwael.info/`, GitHub, LinkedIn, Instagram) must be valid and open in safe tabs (`rel="noopener noreferrer"`).
