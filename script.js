//initialize grid
const container = document.querySelector('.container');
buildGrid(16);

const slider = document.querySelector('#user-input');
const displayValue = document.querySelector('#slider-value');
const prideToggle = document.querySelector('#prideToggle');
const opacityToggle = document.querySelector('#opacityToggle');
const favoriteColor = document.querySelector('#favoriteColor');
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => buildGrid(slider.value));
let mouseDownCheck = false;
document.body.addEventListener('mousedown', () => (mouseDownCheck = true));
document.body.addEventListener('mouseup', () => (mouseDownCheck = false));

//user setup
slider.addEventListener('input', () => {
  displayValue.textContent = slider.value + ' squares per side';
  buildGrid(slider.value);
});

//create divs
function buildGrid(squaresPerSide) {
  while (container.firstElementChild) {
    container.removeChild(container.firstElementChild);
  }
  const totalSquares = squaresPerSide * squaresPerSide;
  let squareHeight = 600 / squaresPerSide;
  let squareWidth = squareHeight;
  for (let i = 1; i <= totalSquares; i++) {
    const square = document.createElement('div');
    square.id = `square${i}`;
    square.classList.add('square');
    square.setAttribute(
      'style',
      `height:${squareHeight}px; flex-basis:${squareWidth}px;`
    );
    container.appendChild(square);
  }
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {

    square.addEventListener('mousedown', () => {
      if (prideToggle.checked) {
        square.style.backgroundColor = rainbowColor();
      }
      if (!prideToggle.checked) square.style.backgroundColor = favoriteColor.value;
      if (opacityToggle.checked) {
        +square.style.opacity === 1
          ? (square.style.opacity = 1)
          : (square.style.opacity = +square.style.opacity + 0.1);
      }
    });

    //turn square immediately under cursor a different color so user can target it
    square.addEventListener('mouseenter', () => {
      if (!mouseDownCheck) return;
      square.style.backgroundColor = 'rgb(255, 8, 8)';
    });

    //turn the aim square to color its supposed to be
    square.addEventListener('mouseup', () => {
      if (prideToggle.checked) {
        square.style.backgroundColor = rainbowColor();
      }
      if (!prideToggle.checked) square.style.backgroundColor = favoriteColor.value;
      if (opacityToggle.checked) {
        +square.style.opacity === 1
          ? (square.style.opacity = 1)
          : (square.style.opacity = +square.style.opacity + 0.1);
      }
    });

    square.addEventListener('mouseout', () => {
      if (!mouseDownCheck) return;
      if (prideToggle.checked) {
        square.style.backgroundColor = rainbowColor();
      }
      if (!prideToggle.checked) square.style.backgroundColor = favoriteColor.value;
      if (opacityToggle.checked) {
        +square.style.opacity === 1
          ? (square.style.opacity = 1)
          : (square.style.opacity = +square.style.opacity + 0.1);
      }
    });
  });
}

function rainbowColor() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return `rgb(${R}, ${G}, ${B})`;
}
