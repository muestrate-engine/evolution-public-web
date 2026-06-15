# Evolution — Studio Dental
### Design System

> **Evolution — Tu sonrisa, en su mejor versión.**
> *"Cuidamos tu sonrisa con elegancia, confianza y sin miedo."*

Evolution is a modern dental studio brand. Its mission is to make oral care feel less like a clinic visit and more like a visit to a beauty studio: calm, elegant, human, and accessible. The brand's three pillars are **trato humano** (human warmth), **estética elegante** (refined aesthetic), and **precios justos** (fair pricing).

This design system gives any designer or AI agent everything they need to make on-brand visuals — from social media posts to business cards to a future website — without re-deriving the brand from scratch each time.

---

## Sources

- **Logo** — Client-provided SVG, stored as `assets/evolution-logo.svg` (full lockup) and `assets/evolution-mark.svg` (mark only). The original PNG capture is preserved in `assets/evolution-logo-original.png` for reference.
- **Brand brief** — Pasted as a long-form business model document. Key extracts captured throughout this README.
- **Typeface** — Manrope, requested by the client. Loaded from Google Fonts inside `colors_and_type.css`.
- **Primary color** — `#98CAC0`, requested by the client.

No codebase or Figma file exists yet — Evolution is a new brand. Everything here is built fresh from the brief and the logo.

---

## CONTENT FUNDAMENTALS

The voice is **calm, warm, and confident** — never clinical, never aggressive, never "salesy." Evolution speaks the way a thoughtful friend who happens to be a great dentist would speak.

### Voice traits
- **Cercana** (close) — uses **tú**, never *usted*. Speaks one-to-one, never to "patients" as a category.
- **Tranquila** (calm) — short sentences. Lots of breathing room. Avoids medical jargon ("endodoncia" → "tratamiento de la raíz", with the technical name only as a clarifier).
- **Confiada, sin presumir** — confident, never boastful. We don't say "the best dentist in town" — we show the work.
- **Optimista, no eufórica** — positive but never over-excited. No exclamation marks unless something genuinely deserves one. Never two in a row.

### Tone examples
✅ **On-brand**
- "Sonríe sin miedo."
- "Tu sonrisa, en su mejor versión."
- "Una limpieza, una conversación, un café. Así empieza."
- "Te explicamos todo, paso a paso. Sin sorpresas."
- "Esta semana: evaluación + diagnóstico, sin costo."

❌ **Off-brand**
- "¡¡¡PROMOCIÓN IMPERDIBLE!!!" — too loud, too discount-y.
- "El mejor dentista de la ciudad." — boastful, unprovable.
- "Ofrecemos servicios de estomatología integral de alta complejidad." — clinical, distant.
- "No te pierdas esta oportunidad única" — pressure language. Not us.

### Casing
- **Headlines** — sentence case, with the brand wordmark always lowercase ("evolution"). Never ALL CAPS for headlines.
- **Eyebrows / labels** — `UPPERCASE` with `0.18em` letter-spacing. This is the only place caps appear (e.g. *STUDIO DENTAL*, *AGENDA*, *NUESTROS SERVICIOS*).
- **Buttons** — sentence case ("Agenda tu cita", "Conversemos"). Never CTA-style caps.
- **Body** — natural sentence case.

### Pronouns & address
- Always **tú** when speaking to the client.
- **Nosotros** when speaking as the studio ("Te recibimos…", "Cuidamos tu sonrisa").
- Never "usted." It distances.

### Punctuation
- One period, no triple-dot drama.
- Em-dashes are welcome — they create the calm, breathing rhythm we want.
- Avoid exclamation marks. If you need one, you only get one per piece.

### Emoji
- **Almost never** in marketing copy. The brand is elegant and minimalist; emoji breaks that.
- **Acceptable** in WhatsApp replies (one per message max — typically a single 🙂 or ✨ at the end of a confirmation).
- **Never** as bullet markers, decoration, or as a substitute for an icon.

### Recurring phrases (use these verbatim)
- "Tu sonrisa, en su mejor versión."
- "Sonríe sin miedo."
- "Donde tu sonrisa evoluciona."
- "Cuidado dental con trato humano."
- "Odontología elegante, cómoda y accesible."

### Numbers & prices
- Prices use the local currency symbol with no decimals when round (`S/ 80`, not `S/ 80.00`).
- "Desde S/ 80" is preferred over "Solo S/ 80" — it sets a floor without sounding cheap.
- Promotional callouts are stated plainly: *"Esta semana: limpieza + evaluación, S/ 80."* No "ONLY!" "LIMITED!"

---

## VISUAL FOUNDATIONS

### Color
- **Primary** — `#98CAC0` (mint). Communicates freshness, calm, hygiene without feeling medical-blue.
- **Mint scale** — 50 (`#F2F9F7`) through 900 (`#1B3530`). Use 50/100 for backgrounds, 400 for the brand mark, 700/800 for text *on mint*, 900 only for deep contrast moments.
- **Neutral base** — warm bone (`#FAF7F2`) over pure white. Pure white is reserved for elevated cards and photo cutouts; everything else lives on bone or mint-50.
- **Premium contrast** — graphite (`#2A2A28`) instead of pure black. Text is graphite on bone, never `#000` on `#FFF` — that combination feels too clinical.
- **Beige / cream** (`#F5EFE6`) — used sparingly as a warm accent (e.g. one section per page, never as a primary background).
- **Status colors** are intentionally muted (sage for success, ochre for warning, terracotta for danger) — bright reds and greens break the brand calm.
- See `colors_and_type.css` for the full token set.

### Typography — Manrope
- **One family, four weights**: 200 (display), 300 (headlines), 400 (body), 500 (eyebrows/labels). 600+ only for very small UI elements that need to read.
- **Headlines are LIGHT (300), large, and tightly tracked (-0.02em).** This is the signature: large + airy + light, never bold + cramped + heavy.
- **Eyebrows** use 500 weight, small (12-14px), `UPPERCASE`, with very wide tracking (`0.18em`). This echoes "STUDIO DENTAL" under the wordmark.
- **Body** is 16-18px, 400 weight, generous line-height (`1.6`).
- **Italics** are reserved for pull-quotes only.
- Type pairs with itself — no secondary serif, no display oddity. Manrope's range is enough.

### Spacing
- 8px grid, used loosely. The brand prefers **more whitespace than feels necessary** — let layouts breathe.
- Section padding starts at `var(--sp-7)` (48px) on mobile and grows from there. Never crammed.

### Backgrounds
- **Default** — solid bone (`#FAF7F2`) or mint-50 (`#F2F9F7`).
- **Photographic backgrounds** — soft, naturally-lit photographs of smiles, hands, the studio interior. Always warm-cool balanced, never cold-blue. Never high-contrast.
- **Subtle organic shapes** — large soft mint blobs/petals at low opacity (8-15%) as background motif. Inspired by the lotus leaves of the logo. Never as decorative noise — always as a single calming presence.
- **No gradients** beyond the gentlest mint-50 → bone wash. No blue-purple gradients ever.
- **No textures or patterns** beyond a very light grain on photography (optional). The space stays clean.

### Imagery vibe
- **Warm, soft, natural light.** Never flash-lit, never clinical.
- **Skin tones rendered honestly** — no aggressive smoothing, no plastic finish. The brand respects real faces.
- **Smiles, hands, environment** — three subjects. Not equipment. Equipment screams "clinic."
- **Compositional negative space** — leave room for type to land.

### Animation & motion
- **Soft easing** (`cubic-bezier(0.34, 1.2, 0.64, 1)` for arrivals, `cubic-bezier(0.22, 0.61, 0.36, 1)` for exits).
- **Slow-medium duration** — 240–420ms. Nothing snappy, nothing sluggish.
- **Fades + small Y-translates** are the default entrance. No spins, no bounces, no slide-from-edge.
- **Hover** — opacity drop to 0.85 OR a subtle deepening to mint-500 / mint-600. Never a colour shift to a *different* hue.
- **Press** — `transform: scale(0.98)` plus a brief shadow softening. Never a hard color change.

### Borders & lines
- Hairline borders only — `1px solid var(--line)` (`#DDDCD8`) or `1px solid var(--line-soft)` (mint-100).
- Borders are **descriptive**, not decorative. They define a card edge or a divider — not used for accents.
- No coloured left-border accents on cards. (Off-brand AI cliché.)

### Shadows
- **Mint-tinted, very soft**, low contrast. See `--shadow-sm/md/lg` in tokens.
- The brand never uses pure-black drop shadows. Shadows whisper.
- A "glow" treatment exists for focus rings (`--shadow-glow`) — 6px ring at 18% mint opacity.

### Corner radii
- **Generous and rounded**, but not pill-everything. Cards use `--r-lg` (24px) or `--r-xl` (32px). Buttons use `--r-pill` (capsule). Inputs use `--r-md` (16px).
- The "soft, organic" feel asked for in the brief comes from these radii combined with the mint colour and Manrope's already-rounded letterforms. No need to push to extreme blob shapes.

### Cards
- White (`#FFFFFF`) on bone background, OR mint-50 on bone, OR bone on mint-100 — three valid recipes.
- `--shadow-sm` by default. `--shadow-md` on hover, with a 2px lift (`translateY(-2px)`) and a 240ms ease-soft transition.
- 24-32px internal padding minimum.
- Border-radius `--r-lg` (24px) is the default.

### Transparency & blur
- Used **very sparingly** — only for floating elements that sit over photography (e.g. a sticky CTA over a hero image).
- When used: `backdrop-filter: blur(20px)` with a `rgba(255, 255, 255, 0.72)` fill. Never a heavy frosted look.

### Layout rules
- Maximum content width `1200px` for marketing pages, `680px` for prose.
- Content is **rarely centered** — most layouts use a small left-side gutter and let content breathe to the right.
- Hero sections are **tall and uncluttered**: one statement, one image, one CTA. Nothing more.
- Multi-column grids prefer asymmetric splits (e.g. 5/7, 4/8) over balanced 6/6 — it feels editorial, not corporate.

---

## ICONOGRAPHY

Evolution does **not** use a heavy iconography system. The brand's voice is verbal and photographic, not pictographic. Where icons are needed:

- **System** — [Lucide](https://lucide.dev) icons, loaded via CDN. Stroke-based, 1.5px stroke, rounded line caps and joins. Mint-700 stroke on light backgrounds, white stroke on mint. Always 20px or 24px, never smaller.
- **CDN substitution** — Lucide is the closest match to Manrope's friendly-but-precise feel. *(Flagged: no proprietary icon set was provided. If the client wants their own, we'll commission one.)*
- **Brand mark uses** — the lotus-tooth mark from the logo can be used as a decorative motif (large, low opacity, watermark-style) but never at icon size — it's a logo, not an icon.
- **Emoji** — never as iconography. Acceptable only in WhatsApp replies, see Content Fundamentals.
- **Unicode glyphs** — `→`, `·`, `—` are encouraged for inline arrows and bullets. They feel editorial. Avoid bullets-with-emoji.
- **Background motifs** — soft mint petal/leaf shapes inspired by the logo's lotus, used as a watermark behind big type. These are **decorative shapes**, not icons.

---

## INDEX

```
README.md                      ← you are here
SKILL.md                       ← how an AI agent should use this system
colors_and_type.css            ← tokens (CSS variables)

assets/
  evolution-logo.svg           ← client SVG: full lockup (mark + wordmark)
  evolution-mark.svg           ← mark only (lotus + tooth) — for tight contexts
  evolution-logo-original.png  ← original raster reference
  evolution-wordmark.svg       ← legacy wordmark recreation
  evolution-lockup.svg         ← legacy full-logo recreation
  evolution-monogram.svg       ← single-letter "e" / petal mark

preview/                       ← design system review cards
  logo.html                    ← logo lockup
  colors-primary.html          ← mint scale
  colors-neutral.html          ← bone / cream / graphite
  colors-semantic.html         ← status colours
  type-display.html            ← display + headline specimens
  type-scale.html              ← full type scale
  type-eyebrow.html            ← signature eyebrow style
  spacing.html                 ← spacing tokens
  radii.html                   ← corner radii
  shadows.html                 ← shadow system
  buttons.html                 ← button states
  cards.html                   ← card variants
  pills.html                   ← chip / pill components
  inputs.html                  ← form fields
  voice.html                   ← copy do's and don'ts

deliverables/                  ← actual brand assets, not previews
  business-cards.html          ← tarjetas de presentación
  flyer-promocion.html         ← Instagram flyer (square, promo)
  flyer-paquete.html           ← Instagram flyer (square, package)
  flyer-cita.html              ← Instagram flyer (square, appointment CTA)
  flyer-stories.html           ← Stories / Reels covers (vertical 9:16)
```

---

## CAVEATS & ASSUMPTIONS

- **Logo** — the original PNG is the source of truth. Our SVG recreation is close but not pixel-perfect — for print, request the original `.ai`/`.svg` from the client.
- **Iconography** — substituted Lucide on CDN. If the brand wants a bespoke set, that's a separate commission.
- **Photography** — no photo assets were provided. Mocks use placeholder colour blocks. For the final brand library, commission warm, naturally-lit photography in line with the imagery vibe described above.
- **Spanish copy** — the brand operates in Spanish. All visible copy in deliverables follows the brief's tone. English equivalents exist in this README only as documentation.
