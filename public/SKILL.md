# Evolution — Studio Dental — Design Skill

---
name: evolution-design
description: Use this skill to generate well-branded interfaces and assets for Evolution Studio Dental, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and components for prototyping social posts, flyers, stationery, and a future website.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, flyers, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view. Always link `colors_and_type.css` for tokens, OR copy the variables you need.

If working on production code, read the rules in `README.md` to become an expert in designing with this brand — especially the **VISUAL FOUNDATIONS** and **CONTENT FUNDAMENTALS** sections.

If the user invokes this skill without any other guidance, ask them what they want to build or design (a social post? a flyer? a section of the website? print collateral?), ask a few targeted questions about audience, tone, and platform, then act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick rules of thumb

- **One typeface, four weights** — Manrope 200 / 300 / 400 / 500. Headlines are LIGHT (300), large, and tightly tracked. Never bold + cramped.
- **Mint is the brand**, but use it on ~30% of any composition. Bone (`#FAF7F2`) and graphite (`#2A2A28`) carry the rest.
- **Eyebrows in UPPERCASE with 0.18em tracking** — the signature lockup style.
- **Speak Spanish, in tú-form, calmly.** No exclamation marks, no clinical jargon.
- **No emoji in marketing copy.** Acceptable in WhatsApp replies.
- **Generous whitespace, soft shadows, organic radii** (24px+ on cards). Borders are hairlines only.
- **No gradients beyond gentle mint→bone washes.** Never blue-purple.
- **Photography**: warm, naturally-lit, real smiles, real hands. Not equipment.

## Files

- `colors_and_type.css` — drop in via `<link>` for full token set.
- `assets/evolution-logo.svg` — **client-provided SVG, source of truth** (full lockup).
- `assets/evolution-mark.svg` — mark-only (lotus + tooth) for tight contexts.
- `assets/evolution-logo-original.png` — original raster reference.
- `preview/` — design system review cards (reference, not for production).
- `deliverables/` — sample brand outputs (business cards, flyers).
