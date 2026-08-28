const STORAGE_KEY = "typing-speed-test-personal-best";
const TEST_DURATION = 60;

const testView = document.querySelector('[data-view="test"]');
const resultsView = document.querySelector('[data-view="results"]');
const passageElement = document.querySelector("[data-passage]");
const inputElement = document.querySelector("[data-input]");
const statusElement = document.querySelector("#typing-status");
const startPrompt = document.querySelector("[data-start-prompt]");
const statElements = document.querySelectorAll("[data-stat]");
const resultElements = document.querySelectorAll("[data-result]");
const resultStatElements = document.querySelectorAll("[data-result-stat]");
const controlButtons = document.querySelectorAll("[data-control]");
const actionButtons = document.querySelectorAll("[data-action]");
const completeIcon = document.querySelector('[data-result-icon="complete"]');
const newPersonalBestIcon = document.querySelector('[data-result-icon="new-pb"]');
const confettiElement = document.querySelector("[data-result-confetti]");

const state = {
  passages: {},
  difficulty: "hard",
  mode: "timed",
  passage: null,
  typedText: "",
  correctAttempts: 0,
  incorrectAttempts: 0,
  elapsedSeconds: 0,
  remainingSeconds: TEST_DURATION,
  testStatus: "idle",
  personalBest: readPersonalBest(),
  timerId: null,
  lastInputValue: ""
};

function readPersonalBest() {
  try {
    const storedValue = Number.parseInt(localStorage.getItem(STORAGE_KEY), 10);
    return Number.isFinite(storedValue) && storedValue >= 0 ? storedValue : null;
  } catch {
    return null;
  }
}

function savePersonalBest(value) {
  try {
    localStorage.setItem(STORAGE_KEY, String(value));
  } catch {
    return;
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function getAttempts() {
  return state.correctAttempts + state.incorrectAttempts;
}

function getAccuracy() {
  const attempts = getAttempts();
  return attempts === 0 ? 100 : Math.round((state.correctAttempts / attempts) * 100);
}

function getWpm() {
  const elapsedMinutes = state.elapsedSeconds / 60;
  return elapsedMinutes === 0 ? 0 : Math.round((state.correctAttempts / 5) / elapsedMinutes);
}

function setStat(name, value) {
  document.querySelectorAll(`[data-stat="${name}"]`).forEach((element) => {
    element.textContent = value;
  });
}

function setResultStat(name, value) {
  document.querySelectorAll(`[data-result-stat="${name}"]`).forEach((element) => {
    element.textContent = value;
  });
}

function updateStatistics() {
  setStat("wpm", getWpm());
  setStat("accuracy", `${getAccuracy()}%`);
  setStat("time", state.mode === "timed" ? formatTime(state.remainingSeconds) : formatTime(state.elapsedSeconds));
}

function updatePersonalBest() {
  setStat("personal-best", state.personalBest ?? 0);
}

function choosePassage() {
  const availablePassages = state.passages[state.difficulty] || [];
  if (availablePassages.length === 0) {
    state.passage = null;
    passageElement.textContent = "No passages are available for this difficulty.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * availablePassages.length);
  state.passage = availablePassages[randomIndex];
  renderPassage();
}

function renderPassage() {
  if (!state.passage) {
    passageElement.textContent = "No passage is available.";
    return;
  }

  const fragment = document.createDocumentFragment();
  const typedLength = state.typedText.length;

  [...state.passage.text].forEach((character, index) => {
    const characterElement = document.createElement("span");
    characterElement.textContent = character;

    if (index < typedLength) {
      characterElement.classList.add(state.typedText[index] === character ? "is-correct" : "is-incorrect");
    }

    if (index === typedLength && state.testStatus === "running") {
      characterElement.classList.add("is-current");
    }

    fragment.appendChild(characterElement);
  });

  passageElement.replaceChildren(fragment);
}

function resetTest({ chooseNewPassage = true } = {}) {
  stopTimer();
  state.typedText = "";
  state.correctAttempts = 0;
  state.incorrectAttempts = 0;
  state.elapsedSeconds = 0;
  state.remainingSeconds = TEST_DURATION;
  state.testStatus = "idle";
  state.lastInputValue = "";
  inputElement.value = "";
  testView.classList.remove("is-started", "is-complete");
  resultsView.hidden = true;
  testView.hidden = false;
  startPrompt.hidden = false;
  statusElement.textContent = "Or click the text and start typing";

  if (chooseNewPassage) {
    choosePassage();
  } else {
    renderPassage();
  }

  updateStatistics();
  updatePersonalBest();
}

function startTest() {
  if (state.testStatus === "complete" || !state.passage) {
    return;
  }

  if (state.testStatus === "idle") {
    state.testStatus = "running";
    testView.classList.add("is-started");
    startPrompt.hidden = true;
    statusElement.textContent = "Type the passage as accurately as possible";
    startTimer();
    renderPassage();
  }

  inputElement.focus();
}

function startTimer() {
  stopTimer();
  state.timerId = window.setInterval(() => {
    if (state.mode === "timed") {
      state.remainingSeconds -= 1;
      state.elapsedSeconds += 1;
      if (state.remainingSeconds <= 0) {
        state.remainingSeconds = 0;
        updateStatistics();
        finishTest();
        return;
      }
    } else {
      state.elapsedSeconds += 1;
    }

    updateStatistics();
  }, 1000);
}

function stopTimer() {
  if (state.timerId !== null) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function countNewAttempts(previousValue, nextValue) {
  let commonLength = 0;
  const maxCommonLength = Math.min(previousValue.length, nextValue.length);

  while (commonLength < maxCommonLength && previousValue[commonLength] === nextValue[commonLength]) {
    commonLength += 1;
  }

  if (nextValue.length <= commonLength || !state.passage) {
    return;
  }

  [...nextValue.slice(commonLength)].forEach((character, offset) => {
    const passageCharacter = state.passage.text[commonLength + offset];
    if (character === passageCharacter) {
      state.correctAttempts += 1;
    } else {
      state.incorrectAttempts += 1;
    }
  });
}

function handleInput() {
  if (state.testStatus === "complete") {
    return;
  }

  if (state.testStatus === "idle" && inputElement.value.length > 0) {
    startTest();
  }

  const nextValue = inputElement.value.slice(0, state.passage?.text.length || 0);
  if (inputElement.value !== nextValue) {
    inputElement.value = nextValue;
  }

  countNewAttempts(state.lastInputValue, nextValue);
  state.typedText = nextValue;
  state.lastInputValue = nextValue;
  renderPassage();
  updateStatistics();

  if (state.passage && state.typedText.length >= state.passage.text.length) {
    finishTest();
  }
}

function finishTest() {
  if (state.testStatus === "complete") {
    return;
  }

  stopTimer();
  state.testStatus = "complete";
  testView.classList.add("is-complete");
  renderPassage();
  updateStatistics();
  showResults();
}

function showResults() {
  const wpm = getWpm();
  const accuracy = getAccuracy();
  const isFirstTest = state.personalBest === null;
  const isNewPersonalBest = !isFirstTest && wpm > state.personalBest;

  if (isFirstTest) {
    resultElements.forEach((element) => {
      if (element.dataset.result === "title") element.textContent = "Baseline Established!";
      if (element.dataset.result === "message") element.textContent = "You've set the bar. Now let's see you break it!";
    });
  } else if (isNewPersonalBest) {
    resultElements.forEach((element) => {
      if (element.dataset.result === "title") element.textContent = "High Score Smashed!";
      if (element.dataset.result === "message") element.textContent = "You're getting faster. Keep up the momentum!";
    });
  } else {
    resultElements.forEach((element) => {
      if (element.dataset.result === "title") element.textContent = "Test Complete!";
      if (element.dataset.result === "message") element.textContent = "Solid run. Keep pushing to beat your high score.";
    });
  }

  setResultStat("wpm", wpm);
  setResultStat("accuracy", `${accuracy}%`);
  setResultStat("correct", state.correctAttempts);
  setResultStat("incorrect", state.incorrectAttempts);

  const shouldCelebrate = isFirstTest || isNewPersonalBest;
  completeIcon.hidden = shouldCelebrate;
  newPersonalBestIcon.hidden = !shouldCelebrate;
  confettiElement.hidden = !isNewPersonalBest;
  resultsView.classList.toggle("is-new-pb", isNewPersonalBest);

  if (isFirstTest || isNewPersonalBest) {
    state.personalBest = wpm;
    savePersonalBest(wpm);
    updatePersonalBest();
  }

  testView.hidden = true;
  resultsView.hidden = false;
  resultsView.querySelector("[data-action=again]").focus();
}

function updateControl(control, value) {
  controlButtons.forEach((button) => {
    const matches = control === "difficulty"
      ? button.dataset.difficulty === value
      : button.dataset.mode === value;

    if ((control === "difficulty" && button.dataset.control === "difficulty") || (control === "mode" && button.dataset.control === "mode")) {
      button.setAttribute("aria-pressed", String(matches));
    }
  });
}

function handleControlClick(button) {
  if (button.dataset.control === "difficulty") {
    state.difficulty = button.dataset.difficulty;
    updateControl("difficulty", state.difficulty);
  } else {
    state.mode = button.dataset.mode;
    updateControl("mode", state.mode);
  }

  resetTest();
}

function handleAction(action) {
  if (action === "start") {
    startTest();
  }

  if (action === "restart") {
    resetTest();
    inputElement.focus();
  }

  if (action === "again") {
    resetTest();
    inputElement.focus();
  }
}

async function loadPassages() {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error("Passages could not be loaded");
    }

    const passages = await response.json();
    state.passages = Object.fromEntries(
      ["easy", "medium", "hard"].map((difficulty) => [
        difficulty,
        Array.isArray(passages[difficulty])
          ? passages[difficulty].filter((passage) => passage && typeof passage.text === "string")
          : []
      ])
    );

    choosePassage();
    updateStatistics();
    statusElement.textContent = "Or click the text and start typing";
  } catch {
    passageElement.textContent = "Unable to load the typing passages.";
    statusElement.textContent = "Please open this project through a local web server.";
    actionButtons.forEach((button) => {
      if (button.dataset.action === "start") button.disabled = true;
    });
  }
}

controlButtons.forEach((button) => {
  button.addEventListener("click", () => handleControlClick(button));
});

actionButtons.forEach((button) => {
  button.addEventListener("click", () => handleAction(button.dataset.action));
});

inputElement.addEventListener("input", handleInput);
passageElement.addEventListener("click", startTest);

updateControl("difficulty", state.difficulty);
updateControl("mode", state.mode);
updateStatistics();
updatePersonalBest();
loadPassages();
