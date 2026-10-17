---
name: accessibility-seo
description: Standards for WCAG 2.1 AA compliance, semantic markup, focus management, OpenGraph, JSON-LD, and search indexing.
---

# Accessibility & SEO Directives

## 1. Accessibility (WCAG 2.1 AA Standards)
- **Contrast Ratios**: Body text on `#100e0b` must maintain at least `7:1` contrast; large headings at least `4.5:1`.
- **Keyboard Navigation**:
  - All interactive elements must have visible, elegant focus rings (`focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none`).
  - Skip to content link at top of page for screen reader and keyboard power users.
  - Interactive custom elements must map to appropriate roles (`button`, `dialog`, `link`) with `aria-expanded`, `aria-label`, and `tabIndex`.
- **Motion Consideration**:
  - Full support for `prefers-reduced-motion`. In reduced mode, skip transforms and spring kinetics; retain instant opacity transitions.

## 2. Technical SEO & Rich Structured Data
- **Metadata**: Title template `%s | MWAEL — Creative Developer & AI Engineer`, canonical URLs, meta descriptions tailored to engineering and design.
- **OpenGraph & Twitter Cards**: Dynamic social sharing cards, proper image dimensions (`1200x630`), correct `og:type: "website"`.
- **JSON-LD Schema**:
  - `Person` schema with name, jobTitle, url, sameAs, alumniOf, address, worksFor.
  - `WebSite` schema with description and publisher details.
- **Sitemap & Robots**: Static `sitemap.ts` and `robots.ts` in Next.js App Router for search engines.
