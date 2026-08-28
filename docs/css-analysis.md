# CSS Analysis

## Design Sources

- Frontend Mentor brief and `README.md`
- `style-guide.md`
- 1440x1024 desktop captures: initial, started, results, hover, focus
- 375x812 mobile captures: initial, started, results, dropdown
- `assets/images` and local Sora font files
- Existing semantic structure in `index.html`

## Layout

Desktop uses a centered content rail of roughly 1216px with a 40px top header offset. The header aligns the large logo left and personal-best summary right. The test toolbar sits below with live statistics left and settings right, separated from the passage by a 1px neutral border. The passage is large and fluid, followed by a bordered action rail. Results are centered in the same rail, with decorative assets positioned around the summary.

Mobile uses 16px side padding. The logo collapses to the 32px mark and personal best becomes a compact inline summary. Statistics occupy three equal columns, while only the selected difficulty and mode buttons are visible in the compact toolbar. The passage uses 32px type and the results metric cards stack vertically.

## Typography

Sora from `assets/fonts/Sora/Sora-VariableFont_wght.ttf`, with 400, 600 and 700 weights. Body labels are 16px. Passage text is 40px / 1.35 desktop and 32px / 1.35 mobile. Result heading is 40px desktop and 24px mobile.

## Colors

- Background: Neutral 900, `hsl(0 0% 7%)`
- Primary text: Neutral 0, `hsl(0 0% 100%)`
- Muted text: Neutral 400, `hsl(240 1% 59%)`
- Borders and inactive controls: Neutral 800, `hsl(0 0% 15%)`
- Primary action: Blue 600 / hover Blue 400
- Correct: Green 500
- Error and low accuracy: Red 500
- Timer emphasis: Yellow 400

## Components

Header, statistics, segmented desktop controls, compact mobile controls, blurred idle passage, character-state passage, start prompt, restart action, result summary, result metric cards, decorative celebration assets, and attribution.

## States

CSS supports `[aria-pressed="true"]`, hover/focus-visible controls, `[hidden]` view switching, idle blur, started passage, and JS-added `.is-correct`, `.is-incorrect`, `.is-current`, `.is-active`, `.is-complete`, `.is-new-pb` hooks.

## Responsive Rules

Base styles target mobile with a 767px breakpoint. At 768px and above, the desktop logo, horizontal toolbar, inline controls, larger passage type, and three-column results return. A 1100px max content width is used at narrower desktop widths while preserving 16px minimum page padding.

## Accessibility and Motion

Visible `:focus-visible` rings use Blue 400. Interactive controls retain minimum touch-friendly heights. Reduced motion disables decorative result animation and transitions. Hidden input is visually clipped but remains available to keyboard users.

## Risks

The HTML contains two buttons per mode/difficulty for desktop semantics, while mobile needs compact selected controls rather than duplicate visible controls. CSS hides unselected controls on mobile and keeps the selected button full-width; JS should update `aria-pressed` and selection consistently.
