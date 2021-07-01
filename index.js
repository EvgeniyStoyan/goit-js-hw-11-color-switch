const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

let intervalId = null;
let btnIsActive = false;

function onStartClick() {
  if (btnIsActive) {
    return;
  }

  intervalId = setInterval(callBackSetInterval, 1000);

  btnIsActive = true;
}

function onStopClick() {
  clearInterval(intervalId);
  btnIsActive = false;
}

function callBackSetInterval() {
  const randomInteger = randomIntegerFromInterval(0, colors.length - 1);
  return (refs.body.style.backgroundColor = colors[randomInteger]);
}
