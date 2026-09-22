# C3 — eight screenshot concepts

2026-09-22. Goal: clear install motivation, continuing the approved C2 direction.

C01–C03 are preserved byte-for-byte from C2. C04 medicines; C05 saved shelf; C06 food ingredients; C07 explain a flag; C08 automatic OB questions. Same cream/sage Manrope system, one scene and a readable result card. C04/C07 use fresh built-in ImageGen photos; C05/C06/C08 reuse T1 photos. Exact text is rendered in HTML/CSS, never baked by image generation.

## Product basis

Read-only verification against sprint-v2 commit 8f4e3185d2fadc800e98776d5fff15252033d9d2: SPRINT_V2.md, docs/v2/DOCTOR_AND_CHAT.md, DoctorView.swift and ingredients.json. Name/photo medicine checks, saved checks, ingredient explanations and auto-collected flagged items are implemented. DoctorView shares plain text, NOT PDF. Barcode discovery uses cosmetics/food databases; C04 deliberately does not promise medication barcodes.

No app build performed. These are enlarged explanatory product concepts, not literal captured UI. No new Jev run; no claim of measured conversion uplift. The order reflects sprint research and owner feedback. Actual install uplift needs an App Store experiment.

## Claims and sources

- C04 ibuprofen / third trimester matches the ingredient database and [FDA NSAIDs communication](https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic). No dosing or permission to take medicine.
- C06 unpasteurized milk matches the ingredient database and [FDA Listeria information](https://www.fda.gov/food/health-educators/listeria-food-safety-moms-be). Cheese photograph illustrates the food context; pasteurization cannot be inferred visually. The card explicitly asks to check the label. [FDA dairy guidance](https://www.fda.gov/food/people-risk-foodborne-illness/dairy-and-eggs-food-safety-moms-be).
- C07 concise educational retinoid explanation checked against [ACOG](https://www.acog.org/womens-health/faqs/skin-conditions-during-pregnancy). AI explanation is not a doctor or medical advice.
- C05 saved examples are not blanket safety conclusions for whole formulations.
- C08 illustrates existing automatic collection and sharing, without promising a doctor conversation inside the app or unimplemented PDF.

## Export and validation

8 RGB PNGs, each 1320 × 2868. Manifest includes SHA-256 of copy, renderer, font, sources and exports. Renderer asserts font availability, header/card bounds, clipping and PNG geometry. Frozen first three are checked against C2 hashes. Contact sheets at 440, 220 and 180 px; desktop/mobile gallery checks cover overflow, thumbnail width, keyboard zoom, image decode and historic tabs. Archive contains eight final PNGs and this note. Prior revisions remain available.

ImageGen prompts: sources/C04.prompt.md and sources/C07.prompt.md. Reproduce: node marketing/appstore-v2/c3/render.mjs. Stage only into the verified love8ko.github.io checkout using stage-pages.mjs.
