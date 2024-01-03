const pomodoroSelect = document.querySelector("#pomodoro");
const shortBreakSelect = document.querySelector("#short-break");
const longBreakSelect = document.querySelector("#long-break");
const startButton = document.querySelector("#start");
const timerParagraph = document.querySelector("#counter");

let selectedTimer = "pomodoro"; // pomodoro, short-break, long-break

function changeSelectClasses(timer) {
  if (timer === "pomodoro") {
    pomodoroSelect.classList.add("active-button");
    shortBreakSelect.classList.remove("active-button");
    longBreakSelect.classList.remove("active-button");
  } else if (timer === "short-break") {
    pomodoroSelect.classList.remove("active-button");
    shortBreakSelect.classList.add("active-button");
    longBreakSelect.classList.remove("active-button");
  } else if (timer === "long-break") {
    pomodoroSelect.classList.remove("active-button");
    shortBreakSelect.classList.remove("active-button");
    longBreakSelect.classList.add("active-button");
  }
}

function secondsToMinutesSeconds(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const padSeconds = seconds.toString().padStart(2, "0");
  return `${minutes}:${padSeconds}`;
}

function getTimerValue(timer) {
  return {
    pomodoro: 25 * 60,
    "short-break": 5 * 60,
    "long-break": 25 * 60,
  }[timer];
}

function changeTimerValue(timer) {
  timerParagraph.textContent = secondsToMinutesSeconds(getTimerValue(timer));
}

function selectTimer(timer) {
  selectedTimer = timer;

  changeSelectClasses(timer);
  changeTimerValue(timer);
}

function startTimer(timer) {
  let seconds = getTimerValue(timer);

  const interval = setInterval(() => {
    seconds--;

    timerParagraph.textContent = secondsToMinutesSeconds(seconds);
    document.title = `${secondsToMinutesSeconds(seconds)} - Pomodoro`;

    if (seconds === 0) {
      clearInterval(interval);
    }
  }, 1000);
}
