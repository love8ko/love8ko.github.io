# EO5 — phone-excerpt comparison

2026-09-30. Existing cohort-v3 panel: 27 personas including 9 skeptics, 54 cached requests, forward/reverse order. Model: jev-1.13.0.
Synthetic text judgments, not image viewing, real users or a conversion forecast. Existing cohort weights are planning estimates, not observed market shares.

## Exact controlled change

A and B share photos, actual UI/phone geometry, original headline wording with pink emphasis, and one subtitle without a dot. B adds one cream speech card per frame at y2520 (1168px wide, min-height250px, 82px italic, upper pointer). A omits the cards. This tests adding three cards as a set, not individual effects.

| Frame | Same subtitle | B exact phone excerpt |
| --- | --- | --- |
| EO5-01 | Affirmations in your own AI voice. | My voice can shake and still be heard. |
| EO5-02 | For the days you feel “not enough”. | Feeling sure of myself |
| EO5-03 | Ten quiet minutes in your own voice. | I do not have to solve it all tonight. |

First/third cards repeat the displayed playable phrase; second repeats the first wish-picker choice. Evening UI was adapted from the real player in EO2. Exact texts and PNG hashes in manifests and cached requests.

## Model results

| Metric, 0–4 | A no cards | B cards |
| --- | ---: | ---: |
| download | 2.081 | 2.434 |
| clarity | 2.906 | 3.225 |
| affinity | 2.466 | 2.926 |
| value | 2.593 | 3.195 |
| hook | 2.538 | 3.003 |
| overpromise | 0.527 | 0.563 |
| story | 2.807 | 3.200 |
| purchase | 2.991 | 3.001 |

Preference probabilities: B 58.5%, A 15.8%, none 25.7%. Not user vote counts or download rates.

| Order | A download | B download | B preference |
| --- | ---: | ---: | ---: |
| 0 | 2.169 | 2.429 | 57.5% |
| 1 | 1.992 | 2.439 | 59.5% |

| Existing cohort | Weight | A download | B download | B preference | None |
| --- | ---: | ---: | ---: | ---: | ---: |
| self_worth | 0.327 | 2.252 | 2.700 | 62.8% | 21.0% |
| love | 0.163 | 1.775 | 2.042 | 48.7% | 31.7% |
| money | 0.118 | 1.883 | 2.163 | 52.2% | 34.5% |
| career | 0.099 | 2.203 | 2.607 | 63.3% | 23.7% |
| body_glow | 0.098 | 1.960 | 2.273 | 60.3% | 30.2% |
| home_life | 0.057 | 1.805 | 2.005 | 43.2% | 31.3% |
| friends | 0.048 | 2.208 | 2.492 | 62.2% | 26.0% |
| family | 0.046 | 2.290 | 2.662 | 73.5% | 13.7% |
| new_chapter | 0.044 | 2.463 | 2.862 | 64.7% | 14.3% |

Skeptics: A download 1.451, B 1.723; B preference 34.6%, none 40.4%. No universal acceptance.

## Author decision and visual audit

Publish B for owner review. Personal excerpts make the application concrete without a second list under the headline. JewelSnap informed only the principle of bringing a meaningful interface detail forward, not layout or palette.

110px: headline, earbuds, photo and phone recognizable; subtitle/card fine text requires enlargement. 180/220px: subtitle and excerpt legible; pointer subtle. Full size: faces, scene titles and Play unobscured. Lower phone lines deliberately covered by their excerpt. Matching card bounds, no external brand/category or tiny footer. Webpage gaps 8px only; none in PNGs/search strips.

Author cohort assessment: work/self-worth connect to being heard and confidence; evening support crosses cohorts. Love/family/own-place/new-chapter still depend on broad life headline and actual picker. One card cannot show every job; avoid adding more to force coverage.

No measured CVR, no Jev pixel inference, no cross-audit causal claim, no automatic approval. Real effect needs an App Store experiment after owner approval.

## Usage

{
  "requests": 54,
  "models": [
    "jev-1.13.0"
  ],
  "usage": {
    "input_tokens": 314826,
    "output_tokens": 20196
  },
  "cost": "Not returned; no amount inferred",
  "panel_source": "research/cohorts-v3-2026-09-26/people.json"
}
