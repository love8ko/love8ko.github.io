# Paywall Workbench — Porting Guide

This is a **portable, copy-paste design tool** for paywall iteration. CrySnap is the first project to use it (Section 6 of `design.html`). It is intentionally a single-HTML-file workbench so each project owns its own copy and customises freely without a shared dependency.

## What it does

- Loads any hero image (drag/drop, URL, or built-in `paywall-heroes/*`).
- Edits a **JTBD brief** (8 fields) that auto-fills the copy of every preset via `{brand}` / `{audience}` / `{weeklyPrice}` / `{annualPrice}` / `{valueAnchor}` / `{trustLine}` interpolation.
- Edits **brand tokens** (4 hex colours: primary CTA / trust accent / light bg / dark bg) — recolours every preview live.
- Browses **10 paywall preset layouts** (stacked / side-by-side / single-plan / dark mode / features-first / etc.) at scaled-down thumbnails (200 px wide).
- Selects one and shows it in **real iPhone 16 Pro Max dimensions (430×932 pt)** with internal scroll, plus a Tweaks panel for per-block visibility and scheme/layout overrides.
- Exports the chosen preset as **JSON snapshot**, **Swift constants** (paste-ready for `PaywallView.swift`), or a full **Claude prompt** (everything an LLM agent needs to implement the paywall in Swift in a fresh chat).
- Persists all state to `localStorage`.

## Files involved

| Path | What |
|---|---|
| `<project>/design.html` | All HTML + CSS + JS in one file. Section 6 is the workbench. |
| `<project>/paywall-heroes/*.{png,jpg}` | Built-in hero candidates. Listed in the JS `HEROES` map. |
| `<project>/paywall-refs/*.{png,jpg}` | (Optional) reference paywalls from competitors / past projects. |

## Porting to the next project (~10 minutes)

1. **Copy the gh-pages folder structure** for the new project (e.g. `love8ko.github.io/<slug>/`):
   ```
   cp /Users/sl/Documents/apps/love8ko.github.io/crysnap/design.html         <new>/design.html
   cp -R /Users/sl/Documents/apps/love8ko.github.io/crysnap/paywall-heroes   <new>/paywall-heroes
   cp -R /Users/sl/Documents/apps/love8ko.github.io/crysnap/paywall-refs     <new>/paywall-refs
   ```

2. **Replace hero images** in `paywall-heroes/` with the new project's candidates. Update the `HEROES` map (Section 6 IIFE in `design.html`) to point at the new filenames.

3. **Edit the three blocks marked `// ▼ EDIT FOR NEW PROJECT ▼`** in `design.html` (all in the Section 6 `<script>` block):

   - `HEROES` → built-in hero file paths
   - `DEFAULT_TOKENS` → 4 brand colours (light bg + dark bg + CTA + accent)
   - `DEFAULT_BRIEF` → JTBD copy (brand, audience, core pain, killer feature, prices, value anchor, trust line)
   - `PRESETS` → can be left as-is for the first iteration; the same 10 layouts work for any vertical because the copy is token-driven. Tune copy and feature icons later as you discover the project's voice.

4. **Change `STORAGE_KEY`** suffix from `crysnap.paywall.v2` → `<slug>.paywall.v2` so each project's edits stay isolated.

5. **Update sections 1-5** (palette / icon / screenshots / concepts / browse) to the new project's design system. These are independent of the paywall workbench — but they must be in the same file because the workbench's brand tokens default to the project's locked palette. (You can also delete sections 1-5 if not needed; the paywall workbench is self-contained.)

6. **Smoke test locally** by opening `<new>/design.html` in Safari (`open -a Safari design.html`). Check:
   - Section 6 renders without console errors.
   - Hero picker A/B works.
   - Brief edits propagate to thumbnails (live).
   - Token edits recolour every thumbnail.
   - Each of the 10 presets loads in deep-dive at 430×932 with internal scroll.
   - "Copy as Claude prompt" gives a usable brief.

7. **Commit + push** to `love8ko.github.io`. GH Pages serves at `https://love8ko.github.io/<slug>/design.html` after ~1-2 min.

## Where to extend (for v3)

- **More hero variants:** add buttons in the `.pw-builtin` row of Section 6 HTML and entries in the `HEROES` map.
- **More tokens:** if the design system needs a 5th colour, add to `DEFAULT_TOKENS` + a 5th `.tk` block in HTML + a CSS variable in `.pw-paywall { --pw-... }`.
- **More layouts:** extend `renderPlans()` (`stacked` / `side` / `single-*`) or fork to a new `renderPlansVariantX()`.
- **A/B compare in deep-dive:** show two `pw-realdevice` frames side-by-side, each bound to a different `presetId`. Trivial extension to the renderer.
- **Real RevenueCat product pricing:** wire `state.brief.weeklyPrice` to the active offering; for now it's a string placeholder.

## Compliance reminders (CrySnap-specific — adapt for new project)

The CrySnap version embeds a hard-coded compliance footer (ER triggers / 911) in `renderPaywall()`. For a non-medical-adjacent project, edit that block (search for `pw-pw-compliance`) or remove it entirely. Each project's `COMPLIANCE.md` defines its own banned/allowed wordlists — keep that as the source of truth and propagate to the workbench.
