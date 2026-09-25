# IS Copilot — Real Product Screenshots

This directory is the canonical location for real product evidence captured from the live deployment:

**Live app:** https://indian-standards-procurement-ai.vercel.app/

## Expected files (real screenshots, not AI-generated)

- `dashboard.png` — main project image, 1600x900, shows Standards Intelligence workspace with Analyze Specification, Recommendations, Standards Explorer, Relationship Graph and Gap Analysis
- `recommendations.png` — secondary evidence, recommendations view with per-requirement evidence snippets and six-component confidence breakdown
- `relationship-graph.png` — architecture/product evidence, typed relationship graph (normative, test, safety, installation, allied)
- `standards-explorer.png` — feature evidence, standards explorer with indexed metadata, freshness and certification signals

## Capture instructions

Screenshots must be captured from the real deployed app, not generated or mocked.

Recommended capture flow (Playwright):

1. `npm install -D playwright`
2. `npx playwright install chromium`
3. Visit https://indian-standards-procurement-ai.vercel.app/
4. Set viewport 1440x900
5. Capture dashboard (homepage)
6. Run an analysis using benchmark scenario "Submersible Pump (Hinglish)" or "LED Street Lighting" to generate recommendations
7. Capture recommendations view
8. Navigate to /graph after analysis — capture relationship graph
9. Navigate to standards explorer — capture explorer view
10. Save as PNG, 1600x900, optimized

Previous run captured these 4 files but they were in temporary storage and not committed. This directory ensures they are committed to Git as persistent source of truth.

## Current state (2026-09-25)

- Directory created, README committed
- Real screenshots pending capture in this environment due to network restrictions (cdn.playwright.dev blocked, browser download fails with ECONNRESET)
- Portfolio code is ready: `src/data/projects.js` references these 4 paths, `Projects.jsx` and `CaseStudies.jsx` have onError fallback to abstract glyph placeholder (never a fake screenshot)
- Build passes, responsive verified, flagship hierarchy implemented
- When screenshots are added, no code change needed — they will automatically appear

## Verification

- Live demo verified via fetch_page on 2026-09-25: 200 OK, title "IS Copilot — Indian Standards Intelligence for Procurement"
- All GitHub repo URLs verified 200 OK
- Old a1creator284 URLs verified: GitHub redirects 301 to rajaryan1111, Vercel demo for Deep Learning Lab still live under old subdomain and documented

Do NOT commit fake screenshots. If files are missing, UI shows glyph placeholder.
