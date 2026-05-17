---
name: burjuman-design
description: Use this skill to generate well-branded interfaces and assets for BurJuman Mall (a Mawarid Holding property in Dubai), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the BurJuman Command Center (executive + ops dashboards), Mawarid pitch decks, and the AURA Concierge consumer assistant. The brand is INSTITUTIONAL INTELLIGENCE-LED, dark-mode canonical, never martech.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available
files. The brand canon is locked — every token in `colors_and_type.css`,
every motif in the README's VISUAL FOUNDATIONS section, and every forbidden
token in the FORBIDDEN TOKENS section must be honored without negotiation.

## What to read first

1. `README.md` — full brand canon, CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS,
   ICONOGRAPHY, FORBIDDEN TOKENS, and the 26-KPI retail-mall taxonomy.
2. `colors_and_type.css` — CSS custom properties for every color, type, radius,
   spacing, shadow, and motion token. Import this; do not redefine tokens.
3. `preview/` — small reference cards for every primitive (gradient, surfaces,
   KPI tile, NBA card, etc.). Useful as visual lookup.
4. `ui_kits/command-center/` — Story + Explore dashboard recreation.
5. `ui_kits/aura-concierge/` — consumer chat surface.
6. `slides/index.html` — 8-slide pitch-deck template (title · agenda · hero
   KPI · drivers · NBA · architecture · quote · rollout).

## When making visual artifacts

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets and the relevant component JSX out of `ui_kits/<kit>/` and `slides/`,
import `colors_and_type.css`, and build static HTML files for the user to
view. The component files in `ui_kits/` are factored so you can grab one
(e.g. `HeroTile.jsx`) without dragging the whole app.

## When working on production code

If working on production code, copy assets and treat the rules in `README.md`
as policy. The forbidden-token list is non-negotiable — never bleed ADIB
tokens (cyan #0099D6, navy #1E2D5C), never use amber/gold, never use indigo
outside the locked #8B2D8E, never use the string "Phoenix", never use
emoji-as-icon, never use scale-transform on hover, never use white void
surfaces, never use stock photography.

## Story Mode discipline (CRITICAL for executive audiences)

When designing dashboards or board decks for the Mawarid Holding board, the
Story Mode pattern is the ONLY acceptable executive layout:

1. 1 AI Narrator sentence at top (Fraunces italic, dark strip)
2. ONE hero number (72pt+ on a hero tile)
3. 3 driver cards explaining the hero
4. 1 Next Best Action card (coral-bordered, Activate + Snooze)

Never use cluttered 12-chart grids for executive Story view. Use Explore
Mode (the full 26-KPI honeycomb taxonomy) only for ops audiences.

## Default invocation

If the user invokes this skill without any other guidance, ask them:

- Which audience? (Mawarid board · mall ops · CTO/procurement · B Hub member)
- Which deliverable? (Command Center screen · pitch slide · concierge surface
  · QBR export · tenant portal)
- Story Mode or Explore Mode posture?

Then act as an expert designer who outputs HTML artifacts or production
code, depending on the need.

## Delivery attribution

Every deliverable carries "Built by AIHUBZ" — charcoal `#1A1A1A` pill,
`#F5F5F5` text at 11pt, bottom-left, 24px from edges. This is non-removable
on Mawarid-facing surfaces.
