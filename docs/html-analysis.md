# HTML Analysis

## Sources inspected

- Frontend Mentor challenge brief
- `README.md`
- Desktop and mobile design captures, including hover/focus states
- `style-guide.md`
- All assets in `assets/images` and `assets/fonts`
- Existing `index.html`
- `data.json`
- `docs/global-guidelines.md`

## Requirements

The document must support starting by button or passage interaction, difficulty and mode selection, live WPM/accuracy/time values, typed-character feedback, restart, result states, personal-best messaging, and responsive layouts. JavaScript will own state, timing, persistence, and character rendering.

## Page structure

- `header`: responsive logo and personal-best summary
- `main`: test view and results view
- Test view: live statistics, difficulty/mode controls, passage surface, start prompt, restart action
- Results view: status icon, result heading/message, WPM/accuracy/character metrics, replay action, decorative result assets
- `footer`: challenge attribution

## Semantic elements

Use `header`, `main`, `section`, `form`, `fieldset`, `legend`, `button`, `output`, `p`, and `footer`. Controls are buttons with `aria-pressed`; the hidden textarea provides a native keyboard target and an accessible name.

## Accessibility

- One page `h1` per active view, with result heading kept in the results section.
- Every control has visible text and a keyboard-focusable native button.
- Stats use `output` and stable labels.
- Decorative icons and celebration patterns use empty alt text and `aria-hidden`.
- Passage input exposes status through `aria-describedby`; live result messaging uses `aria-live`.
- No duplicate IDs; controls use `data-*` hooks rather than visual classes.

## CSS hooks

Stable hooks include `site-header`, `test-view`, `test-toolbar`, `test-stats`, `test-controls`, `typing-area`, `passage`, `start-prompt`, `restart-button`, `results-view`, `result-summary`, and `result-metrics`. State classes can be added by CSS/JS without changing the semantic structure.

## JavaScript hooks

Use `data-view`, `data-stat`, `data-control`, `data-difficulty`, `data-mode`, `data-action`, `data-passage`, `data-input`, `data-result`, and `data-result-stat`. The data attributes describe behavior and remain independent from CSS class names.

## Risks

The passage must be rendered character-by-character by JavaScript while preserving whitespace and original errors. The mobile design collapses the desktop button groups into compact controls, so each control needs a single semantic button that CSS can resize without duplicating interactive state.
