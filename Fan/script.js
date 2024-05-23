let fan = document.querySelector('.fan');
let isSpinning = false;
let speed = 0;

function rotate1() {
  setFanSpeed(4);
}

function rotate2() {
  setFanSpeed(6);
}

function rotate3() {
  setFanSpeed(8);
}

function rotate4() {
  setFanSpeed(10);
}

function setFanSpeed(level) {
  if (isSpinning) {
    fan.style.animationDuration = `${5 / level}s`;
  } else {
    fan.style.animation = `spin ${5 / level}s linear infinite`;
    isSpinning = true;
  }
  speed = level;
}

document.getElementById('btn5').addEventListener('click', () => {
  if (isSpinning) {
    fan.style.animation = '';
    isSpinning = false;
  } else {
    setFanSpeed(speed);
  }
});