# EO4 — one headline and one short subtitle per frame

2026-09-30 UTC. Existing cohort-v3 panel: 27 personas, including skeptics; no audience research. Two stages, 54 + 54 = 108 cached requests. Returned models: jev-1.13.0.
**Synthetic text panel, not real users or measured conversion.** Jev receives exact copy, neutral composition descriptions and artifact hashes; it does not view PNGs. Weights are pre-existing audience estimates, not measured market or payment shares.

## What was held fixed

Original EO photographs, headlines, frame order, phone content/width/position. One 76px subtitle/bullet with a small dot. No external brand/category/footer. Gallery spacing is not added to App Store PNGs. Per question, replace one bullet in one frame; other frames remain at a fixed reference. Forward/reverse candidate order and a none option are included.

Stage 1 reference is A/A/A. Independently score download intent, clarity, affinity and value for each literal candidate. These are separate 0–4 described scales in run.py, not a composite beauty score. Stage 2 fixes frames 2/3 at C/C and compares only the first bullet D versus E.

## Stage 1: specific alternatives

| Frame | Candidate | Exact bullet | Download | Clarity | Affinity | Value |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | A | Your scene. Your AI voice. | 1.87 | 2.53 | 1.72 | 2.09 |
| 1 | B | A new chapter in your AI voice. | 1.93 | 2.39 | 1.95 | 2.30 |
| 1 | C | Love. Work. Life. Your AI voice. | 1.73 | 2.20 | 1.72 | 1.61 |
| 2 | A | Built around your life. | 1.76 | 1.84 | 1.67 | 1.46 |
| 2 | B | Before you speak up or ask for more. | 2.21 | 2.06 | 2.57 | 2.80 |
| 2 | C | For the days you feel “not enough”. | 2.40 | 2.00 | 2.82 | 2.61 |
| 3 | A | Your scene, on a gentle loop. | 2.12 | 2.56 | 2.27 | 2.52 |
| 3 | B | Something kind, on repeat. | 2.31 | 2.32 | 2.46 | 2.39 |
| 3 | C | Ten quiet minutes in your own voice. | 2.32 | 2.72 | 2.46 | 3.10 |

## Decisions and tradeoffs

- First frame: the initial A/B/C comparison has low absolute scores and unstable pairwise preference. We did not call a winner. The author proposed explicit product wording, D: affirmations in her AI voice, instead of the less clear scene wording E. A separate controlled test follows below.
- Critic: C has the highest modeled download intent and affinity, ahead of B and generic A. C is most preferred in both orders (54.9% / 52.5%). We select C, the recognisable thought, under the unchanged critic headline. This is not a promise to eliminate self-doubt.
- Night: C and B are near tied on modeled download intent (2.32 / 2.31); preference flips by order. We do not claim a stable conversion winner. C is the editorial choice for clearer use and greater modeled value: ten quiet minutes in her own voice. Long listen supports 10/20/30 minutes. The phone shows a saved short scene, which can be repeated; no sleep outcome is promised.

## Stage 2: clearer first-frame explanation

| First bullet | Download | Clarity | Affinity | Value | Preference, forward | Preference, reverse |
| --- | --- | --- | --- | --- | --- | --- |
| Affirmations in your own AI voice. | 2.05 | 2.63 | 2.16 | 2.44 | 59.0% | 68.2% |
| Your scene. Your AI voice. | 1.91 | 2.20 | 1.80 | 2.11 | 24.8% | 16.4% |

D is preferred in both orders and improves modeled clarity and download intent in this narrow comparison. Skeptic preference is nearly split: D 32.3%, E 32.9%, none 34.8%. Broad trust or an acquisition win is not established.

## Per-cohort diagnostics

| Cohort | Estimated weight | Final first: download | Critic C: download | Night C: download |
| --- | --- | --- | --- | --- |
| Поверить в себя | 32.7% | 2.21 | 2.71 | 2.48 |
| Любовь: найти своего человека или вернуть тепло | 16.3% | 1.97 | 2.17 | 2.07 |
| Деньги: больше дохода и спокойствие за счета | 11.8% | 1.84 | 2.18 | 2.11 |
| Работа: новая работа, рост, своё дело | 9.9% | 2.30 | 2.44 | 2.38 |
| Glow-up и мир со своим телом | 9.8% | 1.73 | 2.16 | 2.28 |
| Своё место и свобода: дом, переезд, путешествия, питомец | 5.7% | 1.43 | 1.79 | 1.88 |
| Свои люди: друзья и принадлежность | 4.8% | 2.23 | 2.44 | 2.50 |
| Семья и дети (желанная беременность — осторожно) | 4.6% | 2.25 | 2.52 | 2.62 |
| Новая глава: после разрыва, развода, потери, переезда | 4.4% | 2.22 | 2.57 | 2.60 |

Frame 2/3 numbers come from stage 1's A/A/A reference; the first-frame follow-up comes from the final C/C context. They must not be averaged into a final-sequence score or compared as if they share one test context. There is no measured conversion uplift.

## Author visual review

One headline plus one short subtitle, one thought per frame. Balanced line wrapping avoids orphaned final words. No independent second subtitle, topic list, extra photo caption or large check/minus badges. At 110px, headlines and listening context carry the first impression. At 180/220px the short subtitle is more legible; phone microtext needs enlargement. The same original warm photographs, burgundy/day/night rhythm and recognizable Herself screens are preserved. Gallery gaps are 8px only on the website.

Final words are D/C/C and match candidate D's complete sequence PNGs/copy. One bullet per frame, no header/footer, unchanged photo/UI hashes, 1320×2868 RGB and web spacing are checked in verify.py. Prior EO3 is kept as history of the three-bullet exploration.

## Usage and evidence

Stage 1 usage: `{"input_tokens": 500748, "output_tokens": 39366}`. Stage 2 usage: `{"input_tokens": 234636, "output_tokens": 9288}`. API money cost was not returned; no amount inferred.
Exact states/questions/responses: each stage's raw/audit. Source variants and hashes: design/screenshots-v2/eo4/candidates. Final manifest: design/screenshots-v2/eo4/gallery.json. Only aggregate results and this report are published, not raw personas or requests. Status is on review; no localization or App Store upload.
