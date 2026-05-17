# Command Center — UI Kit

The flagship BurJuman surface. Two modes:

- **Story Mode** (default, executive audience): AI narrator sentence → one hero
  number → three driver cards → one Next Best Action.
- **Explore Mode** (mall ops): hex/honeycomb KPI grid + tenant performance
  table.

## Files

| File                 | What it is                                            |
|----------------------|-------------------------------------------------------|
| `index.html`         | Mount + mode router + mock data                       |
| `BrandBar.jsx`       | h=80 gradient bar (wordmark · title · date · avatar)  |
| `NarratorStrip.jsx`  | h=64 Fraunces italic + Why? pill + Mode toggle        |
| `KPITile.jsx`        | Eyebrow · number · sparkline · delta — reusable       |
| `HeroTile.jsx`       | Story Mode hero — 72px number with gradient rail      |
| `DriverCard.jsx`     | Campaign / Footfall / CRM source-colored card         |
| `NextBestAction.jsx` | Coral-ringed NBA with Activate + Snooze               |
| `ExploreGrid.jsx`    | Honeycomb 26-KPI taxonomy view                        |
| `TenantTable.jsx`    | Mono tenant rows with deltas                          |
| `Footer.jsx`         | Powered by AIHUBZ + mode toggle + refresh-status      |
| `AihubzPill.jsx`     | Charcoal delivery pill, bottom-left                   |
| `Icon.jsx`           | Lucide SVG icon registry                              |
