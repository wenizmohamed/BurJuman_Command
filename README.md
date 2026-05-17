# BurJuman Command Center — Brand Canon

**Built by AIHUBZ.** Institutional intelligence brand for BurJuman Mall (Dubai),
owned by Mawarid Holding. This system serves executive dashboards (Mawarid board),
operations intelligence (mall ops team), and procurement-grade pitch decks
(CTO + procurement audiences).

> Posture: **institutional intelligence-led**. Never martech. Never
> marketing-vendor framing. The default surface is black, the default voice is
> a serif narrator sentence, the default chart is one hero number — not twelve.

---

## Sources

No codebase, Figma file, or slide deck was attached for this build. The canon
in this repo derives entirely from the locked brand spec provided in the
initial brief, plus the reference brand vault on disk at:

- `~/.claude/Aura-Design/apps/web/brand_vaults/burjuman/MASTER.md` (250 lines —
  locked canon + 26-KPI retail-mall taxonomy + Y1–Y3 engagement arc) — **not
  accessible from this project**; the user holds it.

If you have access to the codebase or Figma, please reattach via the Import
menu so this system can be tightened to the real components.

---

## Subject

**BurJuman Mall** — Sheikh Khalifa Bin Zayed Road, Bur Dubai. Premium shopping ·
dining · entertainment destination, anchored by **Saks Fifth Avenue**, served
by the **B Hub** loyalty program. Mall hours Sun–Thu 10am–10pm, Fri–Sat
10am–11pm. Owned by **Mawarid Holding**.

## Audiences this brand serves

1. **Mawarid Holding board** — executive dashboards, quarterly business
   reviews. Story Mode default.
2. **BurJuman mall ops team** — operations intelligence surfaces. Explore Mode.
3. **CTO + procurement** — 12-slide architecture / ops / commercial pitch decks.
4. **BurJuman.com shoppers** — AURA Concierge consumer assistant.
5. **Tenants** — per-tenant performance portals.

---

## Index

| File / folder                | What it is                                                   |
|-----------------------------|--------------------------------------------------------------|
| `README.md`                  | This file — brand canon, content + visual fundamentals       |
| `colors_and_type.css`        | CSS custom properties + semantic element styles              |
| `SKILL.md`                   | Agent SKILL manifest (cross-compatible with Claude Code)     |
| `assets/`                    | Logos, AIHUBZ pill, gradient bar, icon library reference     |
| `fonts/`                     | (Empty — Google Fonts substitutes; see CONTENT FUNDAMENTALS) |
| `preview/`                   | Design System tab cards — Colors / Type / Spacing / etc.     |
| `ui_kits/command-center/`    | Story Mode + Explore Mode dashboard recreations              |
| `ui_kits/aura-concierge/`    | Consumer-facing BurJuman.com shopping assistant              |
| `slides/`                    | 12-slide pitch deck template (CTO + procurement grade)       |

---

## CONTENT FUNDAMENTALS

### Voice posture

**Institutional intelligence-led.** Not marketing. Not vendor-pitchy. Not
chatty. Think McKinsey deck × Bloomberg terminal × a quiet AI analyst whispering
in your ear. We are the second set of eyes on the mall, not a campaign.

### Person & address

- **Third-person observational** is the default — "footfall climbed 8.4% WoW
  driven by Saks evening traffic," not "we saw footfall climb."
- **Second-person** appears only in CTAs and the AURA Concierge shopper
  product — "Activate this campaign," "Book your fitting." Never in board
  copy.
- **First-person plural** ("we") is reserved for AIHUBZ delivery attribution
  and never appears in dashboards.

### Casing

- **Wordmark + hero brand bar**: UPPERCASE, 0.25em tracking.
- **Eyebrows / section labels** in dashboards: UPPERCASE, 0.18em tracking,
  muted text color.
- **KPI titles, card titles, body**: Title Case for titles, sentence case for
  descriptions. Never ALL CAPS in body copy — it reads martech.
- **AI Narrator strip**: sentence case, full stop at end, serif italic.

### Numbers, units, currency

- Currency is **AED** prefixed (`AED 14.2M`), tabular-nums, never trailing
  zeros on millions. Lakhs/crores never appear.
- KPI deltas always carry sign and unit: `+8.4% WoW`, `−1,240 ft/hr`.
- Time windows are explicit: `WoW`, `MoM`, `YoY`, `today 10:00–13:00`. Never
  bare "vs last."

### Tone examples

✅ **Good (narrator strip)**
> *Saturday traffic is tracking 11% above plan; the Saks evening window is
doing most of the work — consider holding off on a discount push.*

✅ **Good (driver card)**
> Saks Fifth Avenue evening footfall (18:00–22:00) is the primary lift driver
> — 3,420 visits, +14.2% WoW.

✅ **Good (Next Best Action)**
> Activate the *Late Dining* push to B Hub Gold members within 2 km. Projected
> uplift: +AED 84K basket value over the weekend window.

❌ **Wrong** (martech)
> 🚀 Boost your weekend! Don't miss this opportunity to engage shoppers!

❌ **Wrong** (vendor-pitchy)
> Our AI-powered platform delivers actionable insights that drive real results.

❌ **Wrong** (chatty)
> Hey team! Footfall's looking great this weekend 😊

### Emoji policy

**Forbidden.** No emoji-as-icon, no emoji in copy. Icons come from Lucide or
Heroicons (SVG) only. See ICONOGRAPHY below.

### Vocabulary — preferred vs avoid

| Use                         | Avoid                              |
|-----------------------------|------------------------------------|
| Footfall, dwell             | Traffic, hangout time              |
| Tenant, anchor              | Store, shop                        |
| Activate, snooze            | Launch, dismiss                    |
| Next Best Action            | Recommendation, suggestion         |
| Driver, lift                | Reason, boost                      |
| Narrator, concierge         | Bot, assistant (in board context)  |
| Story Mode / Explore Mode   | View / Detail                      |
| B Hub member                | Customer, user                     |

### Forbidden strings

- **"Phoenix" / "Phoenix Mobility"** — pre-2026-04-16 AIHUBZ rebrand artifact,
  never ship.
- Any ADIB lexicon (cyan, navy, "Banking the Future," etc.).
- "Powered by ChatGPT / GPT-4 / Gemini" or any model name.
- "Gamma" / generic AI-tool watermarks.

---

## VISUAL FOUNDATIONS

### The brand identity moment

A single horizontal **coral → magenta → purple gradient ribbon**
(`#FF6B47 → #C7256D → #8B2D8E`) is the brand's signature. It appears as:

1. The brand bar at the top of every dashboard (h=80px).
2. The hero ribbon on title and section-break slides.
3. A 2px accent on selected tiles and active mode toggles.

Never tilt it past 135°. Never use it as a card background — it lives at the
top of the surface, not behind content. Never re-color the stops.

### Surfaces

Pure black `#000000` is the canonical body. Cards float at `#0E0E10`. Modals
at `#15151A`. **White void surfaces are forbidden** — even printable exports
keep the dark mode.

### Type

- **Wordmark**: light geometric sans (Avenir Light / Futura Light feel),
  substituted with **Jost 300** until brand TTFs are supplied. 0.25em tracking,
  uppercase, white.
- **Body UI**: **Inter** (or Helvetica Neue when on macOS systems).
- **Narrator strip**: **Fraunces** italic — the one serif in the system. It
  marks the AI's voice and only the AI's voice.
- **Mono**: **JetBrains Mono** for any code, IDs, or raw values in Explore Mode.

### Backgrounds

- Pure black. No noise, no grain, no patterns, no full-bleed imagery.
- **No stock photography.** Ever. Tenant logos and the Saks mark are the only
  raster brand artifacts allowed on a board-facing deliverable.

### Spacing

- Base unit 4px. The cadence: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80.
- Brand bar h=80, narrator strip h=64, footer h=56 — these are constants.
- AIHUBZ delivery pill is **24px from edges**, always bottom-left.

### Radii

- `12px` for KPI tiles + cards.
- `16px` for hero tile.
- `999px` for pills and delta chips.
- `6px` for chips inside tables.
- `8px` for HexCard primitives (slight softening on the honeycomb corner).

Radii are restrained on purpose — sharp enough to read institutional, soft
enough not to look like a Bloomberg terminal.

### Borders / hairlines

A single hairline color `#26262C` at **0.75pt** divides everything. Cards do
not get heavy borders — they get a 1px `rgba(255,255,255,0.06)` inset glow
that reads as elevation against the black body.

### Shadows

There is **no drop shadow on cards** in the dark canon — cards differentiate
by surface tone (`#0E0E10` vs `#000000`), not by shadow. The two exceptions:

1. **Modals**: `0 24px 80px rgba(0,0,0,0.6)` to lift them off the surface.
2. **CTA glow**: the coral-red Activate button carries a soft
   `0 8px 24px rgba(229,41,74,0.25)` and a 1px coral ring at hover.

### Hover & press states

**No layout shift.** No `transform: scale()`. Hover = opacity ramp (90% → 100%)
or hairline color shift (`#26262C → #34343C`). Press = darker fill, never a
shrink animation.

### Motion

- Easing: `cubic-bezier(0.2, 0.6, 0.2, 1)` — flat, no overshoot.
- Durations: `120ms` for control flips, `220ms` for tile transitions, `420ms`
  for mode-router crossfades. Nothing else moves on its own.
- The live-status dot in the footer pulses 2s. That's it.

### Transparency & blur

Reserved for the modal scrim (`rgba(0,0,0,0.6)` + `backdrop-filter: blur(12px)`)
and the brand-bar hairline. Body cards are opaque.

### Cards

```css
background: #0E0E10;
border-radius: 12px;
box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
padding: 24px; /* KPI tile */
```

Every KPI tile carries: eyebrow label, big number, sparkline, delta chip.
Hex/honeycomb card primitives (HexCard) are a layout option for dense
ops-mode taxonomy — they use the same surface but soften the polygon
corner to 8px.

### Layout rules (fixed elements)

```text
┌─────────────────────────────────────────────────┐  brand bar h=80
│ [BURJUMAN]      Story Mode · 16 May 2026     ⓐ│  ↑ gradient
├─────────────────────────────────────────────────┤  narrator h=64
│ "Saturday traffic is tracking 11% above plan…"  │  ↑ #0E0E10
│                            [Why?]  [Story|Expl] │
├─────────────────────────────────────────────────┤
│                                                 │
│   HERO TILE  +  3 satellite KPI tiles           │
│   3 driver cards (campaign / footfall / CRM)    │
│   1 Next Best Action card                       │
│                                                 │
├─────────────────────────────────────────────────┤  footer h=56
│ Powered by AIHUBZ AI Concierge   • live   ↻    │
└─────────────────────────────────────────────────┘
[Built by AIHUBZ] ← 24px from bottom-left
```

### AIHUBZ delivery attribution

Every dashboard and every deck slide carries a charcoal `#1A1A1A` pill,
`#F5F5F5` text at 11pt, reading **"Built by AIHUBZ"**, **bottom-left, 24px
from edges**. It is small, persistent, and never gets dressed up.

### Color vibe of imagery

There is no imagery. Tenant logos are reproduced as-supplied (Saks Fifth
Avenue mark, etc.) and otherwise the visual energy comes entirely from the
gradient ribbon, the dark canvas, and tabular-nums.

---

## ICONOGRAPHY

### System

**Lucide** is the canonical icon set, loaded from CDN. Stroke icons,
1.5px stroke weight, sized at 16px / 20px / 24px. Where Lucide is missing a
glyph (rare for retail-ops surfaces), **Heroicons (outline 24)** is the
sanctioned fallback — same stroke feel.

```html
<!-- CDN -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

Icons are referenced by name in JSX: `<Icon name="trending-up" />`. Common
glyphs in this brand:

| Surface                | Icon (Lucide)               |
|------------------------|-----------------------------|
| Activate CTA           | `zap`                       |
| Snooze                 | `bell-off`                  |
| Mode toggle            | `layout` / `grid-3x3`       |
| Refresh                | `refresh-cw`                |
| Live dot               | (no icon — `<span>` dot pulsing) |
| Driver: campaign       | `megaphone`                 |
| Driver: footfall       | `users-round`               |
| Driver: CRM            | `id-card`                   |
| Footfall KPI           | `footprints`                |
| Sales KPI              | `coins`                     |
| Conversion KPI         | `git-pull-request-arrow`    |
| Why? pill              | `help-circle`               |

### What's forbidden

- **Emoji-as-icon.** Never. No 🚀, no 📊, no 💡.
- **Unicode chars as icons** (▲ ▼ ★) — except the `+ / −` sign prefix on delta
  chips, which is text.
- **Custom hand-rolled SVG glyphs** that try to imitate Lucide style. If we
  need a custom mark (e.g. the BurJuman B), commission it; otherwise use the
  Lucide equivalent.
- **PNG icons** — vector only.

### The BurJuman wordmark

The wordmark is set in type, not in an SVG file, until the official Mawarid
brand asset is supplied. CSS class `.bj-wordmark` produces the canonical
look: `Jost 300, 0.25em tracking, uppercase, white`. When the real TTF
arrives, swap `--bj-font-wordmark` and the mark updates everywhere.

---

## FONT CANON

The wordmark and body fonts are locked to embeddable Google Fonts equivalents
of the spec's preferred families — signed off by the project lead:

| Role            | Locked spec preference   | Shipping font (Google Fonts) | CSS variable          |
|-----------------|--------------------------|------------------------------|-----------------------|
| Wordmark        | Avenir / Futura Light    | **Jost 300** *(locked)*      | `--bj-font-wordmark`  |
| Body UI         | Helvetica Neue           | **Inter 400/500/600**        | `--bj-font-ui`        |
| AI Narrator     | Fraunces italic          | **Fraunces ital** *(exact)*  | `--bj-font-narrator`  |
| Code / Mono     | —                        | **JetBrains Mono**           | `--bj-font-mono`      |

Jost 300 carries the light-geometric-sans posture the spec asks for and
covers Latin + numeric ranges; it is the canonical wordmark face for the
foreseeable future. If Avenir or Futura Light TTFs ever ship with the
Mawarid brand vault, drop them in `fonts/` and rebind `--bj-font-wordmark`
in `colors_and_type.css` — no other change required.

---

## FORBIDDEN TOKENS (refuse on sight)

- **ADIB cyan #0099D6 / navy #1E2D5C / electric cyan #00B0E5** — different
  client, will bleed if dropped into BurJuman code.
- **Amber / gold accents** — wrong category energy.
- **Indigo / generic AI-purple** outside the locked `#8B2D8E`.
- The string **"Phoenix"** or **"Phoenix Mobility"** anywhere (AIHUBZ rebrand
  2026-04-16).
- Marketing-dashboard framing or martech-vendor energy.
- Stock photography.
- 12-chart cluttered grids (Story Mode default = 1 hero number + 3 drivers +
  1 action card).
- Emoji-as-icon.
- Hover scale-transforms.
- White void surfaces.
- Gamma / AI-tool watermarks on Mawarid-facing deliverables.

---

## 26-KPI Retail-Mall Taxonomy

Used as the canonical KPI scaffold for Command Center surfaces.

- **Footfall (5)**: total daily / total weekly / by-zone / by-hour /
  peak-trough delta
- **Sales (5)**: tenant sales AED / sales-per-sqft / top tenant / category mix
  / avg basket
- **Conversion (4)**: footfall→purchase / dwell→purchase / anchor draw /
  cross-zone flow
- **CRM (4)**: active loyalty / visit frequency / AOV per member / churn
- **Digital (4)**: .com sessions / campaign CTR / landing→visit attribution /
  brand page views
- **Operations (4)**: avg dwell / parking utilisation / amenity usage /
  tenant satisfaction
