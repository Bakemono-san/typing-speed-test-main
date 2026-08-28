# JavaScript Analysis

## Research

### Sources inspected

- Frontend Mentor challenge brief and complete `README.md`
- `docs/global-guidelines.md`
- Existing semantic hooks in `index.html`
- Existing states and hooks in `style.css`, `docs/html-analysis.md`, and `docs/css-analysis.md`
- `data.json` passages and provided result assets

### Requirements relevant to JavaScript

Implement start by button or typing, difficulty selection, Timed 60s and Passage modes, random passage selection, restart, live WPM/accuracy/time, correct and incorrect visual states, backspace, result states, personal-best persistence, baseline/new-high-score messaging, and keyboard/focus behavior.

## User Flow

Initial load -> load passages -> show selected passage -> select settings -> start by button or first input -> type/backspace -> update character state and statistics -> complete by passage or timer -> persist/display result -> go again/restart.

## Application State

- `difficulty`: `easy`, `medium`, or `hard`
- `mode`: `timed` or `passage`
- `passage`: selected `{ id, text }`
- `typedText`: current textarea value
- `correctAttempts`: number of typed characters matching the passage
- `incorrectAttempts`: number of typed characters not matching the passage; never decremented by backspace
- `elapsedSeconds`: elapsed active time
- `remainingSeconds`: timed-mode countdown
- `testStatus`: `idle`, `running`, or `complete`
- `personalBest`: persisted numeric WPM or null
- `timerId`: active interval handle
- `lastInputValue`: previous textarea value, used to count only newly entered characters

DOM text is a rendering target, not a second source of truth.

## Statistics

- Attempts = `correctAttempts + incorrectAttempts`
- Accuracy = `correctAttempts / attempts * 100`, with 100% before the first attempt
- WPM = `(correctAttempts / 5) / elapsedMinutes`, rounded to the nearest integer; zero before elapsed time
- Timed display = remaining seconds formatted as `0:SS`
- Passage display = elapsed seconds formatted as `M:SS`

Backspace changes `typedText` and visual highlighting but does not undo prior attempt counters, as required by the brief.

## Timer

The timer starts on the first character or Start button. Timed mode begins at 60 seconds and completes at zero. Passage mode counts upward and completes when the typed value reaches the passage length. The interval is cleared on completion and restart.

## Typing Logic

The textarea is the keyboard target. On input, a newly added suffix is compared character-by-character against the same passage positions and increments the attempt counters. The passage is rendered as spans with `is-correct`, `is-incorrect`, and `is-current` classes. Whitespace is preserved through text content and CSS `white-space: pre-wrap`.

A start click focuses the textarea without modifying the value. Clicking the passage also focuses it. The textarea prevents browser spellcheck/autocorrect through existing HTML attributes.

## Difficulty and Modes

Settings update `aria-pressed`, select a new random passage, reset the test, and keep the test view visible. Mobile CSS shows only the selected button. Mode changes also reset timer display semantics.

## Results

First completed test with no stored personal best shows `Baseline Established!`. A completed test with WPM greater than the stored personal best shows `High Score Smashed!`, enables the new-PB icon and confetti, and stores the new score. Other completed tests show `Test Complete!`.

## Persistence

Use localStorage key `typing-speed-test-personal-best`. Read malformed or missing values as no personal best. Store only the numeric WPM after a completion that establishes or beats the best.

## Edge Cases

Handle empty data, failed data loading, empty input, repeated Start clicks, immediate restart, backspace at index zero, pasted text, timer expiry, passage completion, malformed localStorage, and unavailable localStorage without uncaught errors.

## Accessibility

Use native buttons and textarea, keep `aria-pressed` synchronized, announce result summary with the existing live region, expose loading/error text in the status paragraph, and return focus to the textarea after starting or restarting. Keep result view focusable through its action button.

## Risks

A static file opened with `file:` may block `fetch('./data.json')`; the app reports a readable loading error in that environment. Running a small local HTTP server is required for data loading when browser file restrictions apply.
