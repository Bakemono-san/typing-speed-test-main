Global Agent Guidelines
Project

We are building the Frontend Mentor — Typing Speed Test challenge.

Official challenge:

https://www.frontendmentor.io/challenges/typing-speed-test

The project must be implemented as a faithful, responsive reproduction of the provided Frontend Mentor design while satisfying all functional requirements from the challenge brief.

1. NON-NEGOTIABLE RULE: RESEARCH BEFORE IMPLEMENTATION

No agent is allowed to start implementation immediately.

Before modifying any code, the agent must first:

Read the official challenge page.
Read the complete project README.md.
Inspect all provided assets.
Inspect the desktop design.
Inspect the mobile design.
Inspect the style guide.
Inspect the existing HTML/starter files.
Understand the existing project architecture.
Identify the requirements relevant to its role.
Document its findings before implementation.

The objective is to avoid agents making assumptions about the design.

2. SOURCE OF TRUTH

When making decisions, use this priority order:

Official Frontend Mentor challenge brief.
Provided README.
Provided design files/images.
Provided style guide.
Provided assets.
Existing project structure.
Team decisions documented in project documentation.
Agent assumptions.

Never override an explicit requirement with a personal preference.

3. DESIGN MUST BE STUDIED FIRST

Before implementing anything visual, agents must inspect the provided designs.

The desktop design represents the target large-screen layout.

The mobile design represents the target small-screen layout.

Frontend Mentor specifies the reference designs as 1440px desktop and 375px mobile, while expecting the implementation to behave correctly across intermediate screen sizes as well. {"fallbackMarkdown":"(Frontend Mentor
)","reference":{"matched_text":"","prefix":null,"start_idx":2430,"end_idx":2449,"safe_urls":["https://www.frontendmentor.io/challenges/typing-speed-test","https://www.frontendmentor.io/challenges/typing-speed-test?utm_source=chatgpt.com"],"refs":[],"alt":"(Frontend Mentor
)","prompt_text":null,"type":"grouped_webpages","items":[{"title":"Build a Typing Speed Test App | JavaScript Project","url":"https://www.frontendmentor.io/challenges/typing-speed-test?utm_source=chatgpt.com","attribution":"Frontend Mentor","pub_date":null,"snippet":"","attribution_segments":null,"supporting_websites":[],"refs":[{"turn_index":0,"ref_type":"search","ref_index":0}],"hue":null,"attributions":null}],"style":null,"status":"done","fallback_items":null,"error":null},"showLoginRequiredCard":false}

Agents must analyze:

Page dimensions.
Content width.
Horizontal alignment.
Vertical rhythm.
Spacing.
Typography.
Font weights.
Colors.
Borders.
Border radius.
Shadows.
Icons.
Buttons.
Controls.
Interactive states.
Cards.
Result screens.
Empty/loading/error states when applicable.
Responsive changes.

Do not reproduce the design by guessing.

4. DESIGN ANALYSIS BEFORE CODE

Before implementation, create a short design analysis.

Example:

# Design Analysis

## Desktop

Viewport:
1440px

Main content:
...

Header:
...

Controls:
...

Typing area:
...

Results:
...

## Mobile

Viewport:
375px

Main content:
...

Responsive changes:
...

## Typography

Font:
...

Weights:
...

Sizes:
...

## Colors

Background:
...

Primary:
...

Text:
...

Error:
...

Success:
...

## Components

- Header
- Difficulty selector
- Mode selector
- Stats
- Typing passage
- Restart button
- Results
- Personal best


This analysis becomes the reference for implementation.

5. REQUIREMENTS ANALYSIS

Extract every requirement from the official brief.

For this challenge, the core functionality includes:

Starting the test by clicking Start or by typing.
Selecting Easy, Medium, or Hard difficulty.
Selecting Timed 60s or Passage mode.
Restarting the test.
Showing real-time WPM.
Showing real-time accuracy.
Showing elapsed/remaining time.
Showing correct characters.
Showing incorrect characters.
Showing the typing cursor.
Allowing corrections with Backspace.
Keeping original typing errors reflected in accuracy.
Showing final WPM.
Showing final accuracy.
Showing correct/incorrect character counts.
Showing the first-test "Baseline Established!" state.
Showing the "High Score Smashed!" state when a personal best is beaten.
Persisting personal best using localStorage.
Supporting responsive layouts.
Providing hover and focus states.

These requirements come from the official challenge brief. {"fallbackMarkdown":"(Frontend Mentor
)","reference":{"matched_text":"","prefix":null,"start_idx":4441,"end_idx":4460,"safe_urls":["https://www.frontendmentor.io/challenges/typing-speed-test","https://www.frontendmentor.io/challenges/typing-speed-test?utm_source=chatgpt.com"],"refs":[],"alt":"(Frontend Mentor
)","prompt_text":null,"type":"grouped_webpages","items":[{"title":"Build a Typing Speed Test App | JavaScript Project","url":"https://www.frontendmentor.io/challenges/typing-speed-test?utm_source=chatgpt.com","attribution":"Frontend Mentor","pub_date":null,"snippet":"","attribution_segments":null,"supporting_websites":[],"refs":[{"turn_index":0,"ref_type":"search","ref_index":0}],"hue":null,"attributions":null}],"style":null,"status":"done","fallback_items":null,"error":null},"showLoginRequiredCard":false}

Each agent must identify which requirements affect its responsibilities.

6. DO NOT INVENT FEATURES

Agents must not add features simply because they seem useful.

Optional ideas from the challenge include:

Multiple durations.
Additional text categories.
Historical statistics.
Keyboard heatmaps.
Shareable result cards.

These are optional extensions and must not be implemented unless explicitly requested by the project owner. {"fallbackMarkdown":"(Frontend Mentor
)","reference":{"matched_text":"","prefix":null,"start_idx":4910,"end_idx":4929,"safe_urls":["https://www.frontendmentor.io/challenges/typing-speed-test","https://www.frontendmentor.io/challenges/typing-speed-test?utm_source=chatgpt.com"],"refs":[],"alt":"(Frontend Mentor
)","prompt_text":null,"type":"grouped_webpages","items":[{"title":"Build a Typing Speed Test App | JavaScript Project","url":"https://www.frontendmentor.io/challenges/typing-speed-test?utm_source=chatgpt.com","attribution":"Frontend Mentor","pub_date":null,"snippet":"","attribution_segments":null,"supporting_websites":[],"refs":[{"turn_index":0,"ref_type":"search","ref_index":0}],"hue":null,"attributions":null}],"style":null,"status":"done","fallback_items":null,"error":null},"showLoginRequiredCard":false}

Core requirements always have priority over bonus features.

7. TEAM WORKFLOW

The team works in this order:

                    ┌─────────────────┐
                    │  FRONTEND MENTOR│
                    │      BRIEF       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ DESIGN RESEARCH │
                    │   + DOCUMENTATION│
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    DESIGNER     │
                    │ UX/UI ANALYSIS   │
                    └────────┬────────┘
                             │
             ┌───────────────┼───────────────┐
             ▼               ▼               ▼
          HTML AGENT      CSS AGENT       JS AGENT
             │               │               │
             └───────────────┼───────────────┘
                             ▼
                    ┌─────────────────┐
                    │   QA REVIEWER   │
                    └────────┬────────┘
                             │
                     ┌───────┴───────┐
                     ▼               ▼
                   FAIL             PASS
                     │               │
                     ▼               ▼
                  Fixes          Delivery

8. DESIGNER FIRST

The Designer Agent is responsible for creating the initial implementation specification.

The Designer must first research the project and then document:

Page structure.
Component hierarchy.
Design tokens.
Typography.
Colors.
Spacing.
Responsive behavior.
Interactive states.
User flow.
Result states.
Typing states.

The other agents should use this analysis as a reference.

9. HTML AGENT RULES

The HTML agent must first understand:

Page hierarchy.
Components.
Semantic structure.
Accessibility requirements.
CSS hooks.
JavaScript hooks.

Before coding, it must document its proposed DOM structure.

The HTML agent must not make visual decisions that contradict the design specification.

10. CSS AGENT RULES

The CSS agent must first analyze:

Desktop design.
Mobile design.
Style guide.
Typography.
Color palette.
Spacing.
Component states.
Responsive transformations.

The CSS agent must not start styling based only on the HTML.

It must compare the implementation against the provided design.

The objective is visual fidelity, not merely "a nice-looking page".

11. JS AGENT RULES

The JavaScript agent must first map the complete user flow.

Example:

Initial state
     │
     ▼
Select difficulty
     │
     ▼
Select mode
     │
     ▼
Start typing / click Start
     │
     ▼
Running test
     │
     ├── correct character
     ├── incorrect character
     ├── backspace
     ├── timer update
     └── statistics update
     │
     ▼
Test complete
     │
     ├── baseline
     ├── normal result
     └── new high score


The agent must identify all states before implementing the interaction logic.

12. QA AGENT RULES

The QA agent must not only check whether the application works.

It must compare the implementation against:

The original brief.
The README.
The desktop design.
The mobile design.
The style guide.
The documented UX decisions.

QA must verify both:

FUNCTIONAL CORRECTNESS
+
VISUAL FIDELITY


A functionally correct application that looks significantly different from the provided design is not considered complete.

13. NO BLIND IMPLEMENTATION

An agent must not say:

"I assume the design uses..."

when the information can be obtained from the project files or official challenge.

Instead:

Inspect the source/design first.

If information genuinely cannot be determined, document the assumption before implementing it.

14. NO CROSS-AGENT OVERWRITING

Agents must respect ownership.

Designer

Owns:

UX.
Visual specifications.
Component behavior specification.
HTML

Owns:

Semantic structure.
DOM.
Accessibility markup.
CSS

Owns:

Styling.
Layout.
Responsive behavior.
Visual states.
JS

Owns:

Behavior.
State.
Interaction.
Application logic.
QA

Owns:

Verification.
Regression detection.
Acceptance/rejection.

An agent should not rewrite another agent's work unless required to solve an integration issue.

15. DOCUMENTATION BEFORE IMPLEMENTATION

Every agent must produce a short internal analysis containing:

# Research

## Sources inspected

- Frontend Mentor brief
- README
- Desktop design
- Mobile design
- Style guide
- Assets
- Existing code

## Requirements relevant to me

...

## Design observations

...

## Implementation plan

...

## Risks / ambiguities

...

## Dependencies on other agents

...


Only after this step should implementation begin.

16. VALIDATION LOOP

Implementation is iterative.

The process is:

Research
   ↓
Document
   ↓
Implement
   ↓
Compare with design
   ↓
Test
   ↓
Fix
   ↓
QA
   ↓
Compare again


Do not consider the task complete immediately after writing code.

17. VISUAL COMPARISON

Whenever possible, compare the implementation directly against the supplied designs.

Check:

Overall proportions.
Content positioning.
Header alignment.
Typography.
Spacing.
Button dimensions.
Border radius.
Colors.
Stats positioning.
Passage width.
Result card positioning.
Mobile stacking.
Responsive transitions.

Small differences should be corrected when they affect visual fidelity.

18. ACCESSIBILITY

Accessibility is part of the definition of done.

The application must consider:

Semantic HTML.
Keyboard navigation.
Visible focus states.
Accessible buttons.
Accessible controls.
Screen-reader semantics.
Color contrast.
Reduced motion.
Focus management.
Touch target sizes.

Accessibility should not be added as an afterthought.

19. PERFORMANCE AND CODE QUALITY

The implementation should favor:

Simple architecture.
Small focused functions.
Reusable components.
Minimal dependencies.
Clear naming.
No unnecessary abstractions.
No duplicated logic.
No unnecessary DOM operations.
No console errors.

Do not over-engineer a relatively focused frontend challenge.

20. DEFINITION OF DONE

The project is considered complete only when:

 All required user stories work.
 Desktop matches the provided design closely.
 Mobile matches the provided design closely.
 Intermediate screen sizes behave correctly.
 Typography matches the style guide.
 Colors match the style guide.
 Interactive states are implemented.
 Keyboard interactions work.
 Typing logic works.
 Timer logic works.
 WPM calculation works.
 Accuracy calculation works.
 Backspace behavior works.
 Difficulty selection works.
 Mode selection works.
 Restart works.
 Results work.
 Personal best persists.
 Baseline state works.
 High-score state works.
 No obvious console errors remain.
 QA has passed.
 README/documentation is complete.
21. FINAL PRINCIPLE

Study first. Think second. Document third. Implement fourth. Validate last.

Never:

See task → immediately code


Always:

Brief
  ↓
README
  ↓
Design
  ↓
Assets
  ↓
Requirements
  ↓
Analysis
  ↓
Plan
  ↓
Implementation
  ↓
Visual comparison
  ↓
Testing
  ↓
QA


The goal is not merely to produce a working typing test.

The goal is to produce a high-quality Frontend Mentor solution that faithfully reproduces the supplied design, implements every required interaction, and demonstrates clean frontend engineering.