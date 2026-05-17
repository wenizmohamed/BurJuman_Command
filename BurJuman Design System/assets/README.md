# BurJuman — Assets directory

This folder is a placeholder for visual assets that should come from the
official Mawarid Holding / BurJuman brand vault:

- **Wordmark TTF/OTF** (Avenir Light or Futura Light) — currently substituted
  with Google Fonts Jost 300 in `colors_and_type.css`.
- **Body UI font** (Helvetica Neue) — currently substituted with Inter.
- **Saks Fifth Avenue lockup** for anchor-tenant references.
- **B Hub program mark**.
- **Mawarid Holding wordmark** for co-brand bars.
- Tenant logos (~142 tenants) for the Explore Mode tenant table.

**No icon files** are stored here — see the ICONOGRAPHY section in
`../README.md`. Lucide is loaded from CDN and rendered inline as SVG
in JSX components (`ui_kits/command-center/Icon.jsx` and the AURA copy).

To supply official files, drop them in this directory and update the
relevant `--bj-font-*` CSS variables in `colors_and_type.css`.
