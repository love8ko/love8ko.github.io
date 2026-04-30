# Paywall Hero — 3 prompt вариации (R4 verdict A · 3-experts illustrated band)

**Locked constraints (consilium R4 + CLAUDE.md):**
- Palette **B Clinical Apothecary**: `#264653` ocean teal · `#E76F51` terracotta · `#F4F1DE` warm linen · `#606C38` olive · `#DDA15E` mustard
- 3 circular avatars side-by-side · band ratio 3:1 (1500×500 px) OR 3× separate 1024×1024
- Roles: AI Nurse · AI Dietitian · AI Side-Effect Coach (compliance — explicit "AI" labels, never named-human personas)
- Style: warm-medical illustration · AAFP/Mayo patient-handout aesthetic
- **Forbidden:** photoreal faces · real-person likeness · pharmaceutical branding (Ozempic/Wegovy/Mounjaro) · syringe/injection-pen visuals · before-after weight comparison · scale / weight numbers · cold clinical lab · sterile hospital · pharma blue-white palette · body-fixation imagery

---

## V1 · Watercolor Botanical (warmest · CrySnap-adjacent)

**Verdict:** S1 reassurance peak. Closest to proven CrySnap pattern. **Risk:** face-forward — нужны очевидно-illustrated персонажи, иначе Apple flag «real-person endorsement».

**Best for:** S1 funnel-entry hero, primary launch. Highest emotional warmth.

**Prompt (paste-ready):**
```
Soft watercolor and ink illustration, three round-cropped portrait avatars side by side at equal size on a warm linen background (#F4F1DE). Each avatar inside its own soft circle with delicate sage and eucalyptus botanical leaves curling around the edge.

Three diverse abstractly-stylized characters (clearly illustrated, NOT photorealistic), each holding the tool of their role:

1) AI Nurse — calm, attentive figure in ocean-teal scrubs (#264653), holding a stethoscope. Soft confident posture.
2) AI Dietitian — warm figure in terracotta apron (#E76F51), holding a wooden bowl with fresh produce and a small notebook. Gentle smile.
3) AI Side-Effect Coach — composed figure in olive cardigan (#606C38), holding a small clock and a checklist. Steady gaze.

Style: AAFP / Mayo Clinic patient-handout aesthetic — warm, trustworthy, medical-adjacent but never clinical-cold. Soft ink lines, gentle watercolor washes, delicate botanical accents (sage, eucalyptus, small leaves). Hand-drawn feel.

Output: 1500×500 horizontal band, three equal circles centered.
```

**Negative prompt:**
```
photorealistic faces, real-person likeness, named celebrity, photographic realism, pharmaceutical branding, Ozempic, Wegovy, Mounjaro, syringe, injection pen, before/after weight comparison, scale, weight numbers, body fixation, cold clinical lab, sterile hospital, blue-white pharma palette, neon, dystopian, harsh shadows
```

---

## V2 · Flat Geometric Symbols (compliance-MAX · object-only)

**Verdict:** Apple-bulletproof. Zero face-likeness risk. **Trade-off:** меньше эмоциональной теплоты, проигрывает V1 на S1 reassurance.

**Best for:** compliance fallback if V1 flagged at App Store review. Modern tech-forward feel.

**Prompt (paste-ready):**
```
Three iconic objects in flat vector geometric illustration style, side-by-side circular compositions on a warm linen background (#F4F1DE). Each circle 500×500. Soft long shadows, palette-strict to Clinical Apothecary tokens.

NO human figures. NO faces. Iconography only.

1) Circle 1 — a stethoscope curved into a soft heart shape, ocean-teal (#264653) primary, with a small sleeping crescent-moon backdrop. Reads as "AI Nurse · 24/7 triage."
2) Circle 2 — a wooden bowl with a single fresh leaf rising from it, beside a small balanced-scale graphic; terracotta accent (#E76F51). Reads as "AI Dietitian · protein + plateau."
3) Circle 3 — a minimalist hourglass merged with a small calm caution-triangle into one balanced form; olive accent (#606C38). Reads as "AI Side-Effect Coach."

Modern soft 3D feel, clean medium line-weight, generous negative space, subtle gradient shading. Botanical leaves as small decorative accents around circle borders.

Output: 1500×500 horizontal band, three circles equally spaced.
```

**Negative prompt:**
```
human figures, faces, hands, body, photorealistic, pharmaceutical branding, syringe, injection pen, real product imagery, before/after weight, scale numbers, sterile hospital, dystopian tech, neon, harsh contrast, blue-white pharma palette
```

---

## V3 · Editorial Hand-Drawn Sketch (most differentiated · back-view silhouettes)

**Verdict:** максимально differentiated от competitors (Shotsy/OptiPin/Pode — все utility-led иконографикой). Hybrid warmth: люди есть, но faces never visible → compliance-safe + hand-drawn vulnerability.

**Best for:** A/B-вариант для week 6+ post-launch если V1 conversion plateaued. Unique brand voice.

**Prompt (paste-ready):**
```
Editorial hand-drawn ink sketch with light watercolor wash, three circular vignettes side-by-side on warm linen background (#F4F1DE). Notebook / journal / Mayo Clinic patient-handout aesthetic — meets New York Times health-column illustration. Each circle 500×500.

Sketchy ink contour, intentionally imperfect line-weight, gentle hand-drawn feel — never slick or vector-clean. Light watercolor washes inside the line work. Faces NEVER visible.

1) Back-view silhouette of a healthcare worker (no face shown), shoulders and back of head visible, holding a stethoscope to one side. Ocean-teal wash (#264653). Small sage-leaf doodles floating around the edge.
2) Back-view silhouette of a dietitian seated at a small table, sketching a meal plan in an open notebook — only hands and notebook visible, head turned away. Terracotta wash (#E76F51). Small fork-and-leaf doodles.
3) Back-view silhouette of a calm coach figure looking out toward a small clock on a windowsill, hands resting on a clipboard. Olive wash (#606C38). Tiny hourglass doodle in the corner.

Style: warm, human, hand-drawn — vulnerability over polish. Like a thoughtful health journal illustration.

Output: 1500×500 horizontal band, three circles equally spaced with botanical accents.
```

**Negative prompt:**
```
faces visible, frontal portraits, photorealism, slick vector finish, pharmaceutical branding, syringe, injection pen, real-person likeness, before/after weight comparison, scale, sterile hospital, blue-white pharma, harsh contrast, dystopian
```

---

## Generation tips

- **Engine:** Sora / DALL-E 3 / Midjourney v6+ all work; for compliance-MAX (V2) flat-vector engines (e.g. Recraft) give cleaner output.
- **Aspect:** ask for 3:1 band first (`--ar 3:1` in MJ). If band fails to balance 3 circles, generate each role separately at 1:1 and composite manually.
- **Iteration:** generate 4 candidates per prompt, pick 1, then `--seed` lock и итеративно refine только проблемный персонаж.
- **Final delivery:** PNG 1500×500 (band, transparent bg if asset goes into Swift) или 3× PNG 1024×1024 (separate avatars, code clips to circle).
- **Compliance pre-flight:** перед commit прогнать через consilium-check — no recognizable real person, no brand pen, no scale/weight visible, AI labels in copy below the image (NOT inside the image itself — this is critical, "AI" must be code-rendered text, not bitmap text on the avatar).
