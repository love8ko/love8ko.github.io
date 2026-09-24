# r7 — eight-frame continuation, 2026-09-24

The owner approved r6 and requested eight screenshots in the same direction. Frames 1–3 are preserved byte-for-byte. Added: seven-day paths, chapter context, saved verses, widget appearance, cumulative journey without a missed-day reset.

## Bounded semantic check

- First pass: 19 synthetic personas, seven existing cohorts, exact headlines + composition descriptions, 15 questions each (clarity / affinity / additional download motive for frames 4–8).
- Scores are 0–4. Cohort weights are prior estimates, not observed traffic. No images were sent to Jev; pixel review was separate.
- Saved verses: clarity 3.76, affinity 2.73, incremental download motive 1.77. Strongest supplementary need fit in this run.
- Daily path: 3.72 / 2.53 / 1.44. Chapter context: 3.62 / 2.34 / 1.31.
- Widget styles: 3.20 / 1.85 / 0.91. Supports keeping appearance later as a narrower benefit.
- Original frame 8, “Miss a day? Keep growing”: 2.60 / 2.24 / 1.28. The benefit was too abstract.
- Revised frame 8, “Miss a day? Nothing resets”: 19 additional calls on the same personas, only its three questions repeated. Final 3.14 / 2.21 / 1.53. More explicit about what a missed day does; this is not independent validation or measured uplift.
- No third run. No optimization of the full screenshot order. The later sequence follows the user journey: start → understand → keep → personalize → return.

## Limits

Model judgments are neither real customer interviews nor conversion measurements. English/BSB does not solve Spanish, Catholic lectionary or KJV-only requirements. Subscription and existing free alternatives constrain interest even when a screenshot is clear. All low scores are retained. The exact copy hash is recorded per pass; the final pass changed only frame 8's headline.

## Visual and product checks

New headlines at 51 CSS px; approved first three unchanged. No small marketing subtitles or footer captions on new frames. Verse references and native UI labels remain part of the product proof. Review at 110/180/220 px per frame and full resolution. Interface is an editorial reconstruction with enlarged controls.

Feature evidence in release-sprint: PathDayView.swift and paths/path_days in the shipped content DB; ChapterCard in Components.swift; HeartButton and MyVersesView.swift; WidgetConfig.swift and WidgetsTabView.swift. “My journey” uses cumulative activity and explicitly says missed days do not reset it. Personal activity numbers in frame 8 are examples. Colored widget styles apply to Home Screen, not system-tinted Lock Screen.
