# Fonts — Locked

The shipping font stack is **canon** (signed off by the project lead). Jost
300 is the official wordmark face and Inter is the official body UI face
unless and until Mawarid supplies different TTFs from their brand vault.

| Locked spec        | Substitute (Google Fonts) | Bound via                    |
|--------------------|---------------------------|------------------------------|
| Avenir / Futura Light | **Jost 300**           | `--bj-font-wordmark`         |
| Helvetica Neue        | **Inter 400/500/600**  | `--bj-font-ui`               |
| Fraunces italic       | **Fraunces ital**      | `--bj-font-narrator` (exact) |
| JetBrains Mono        | **JetBrains Mono**     | `--bj-font-mono` (exact)     |

To install official fonts, drop the files in this directory and rewrite the
`@import url(...)` and `--bj-font-*` declarations at the top of
`../colors_and_type.css`.

**Action requested:** please supply the official wordmark TTFs.
