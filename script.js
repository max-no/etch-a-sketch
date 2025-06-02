//initialize grid
const container = document.querySelector('.container');
buildGrid(16);

const slider = document.querySelector('#user-input');
const displayValue = document.querySelector('#slider-value');
const prideToggle = document.querySelector('#prideToggle');
const opacityToggle = document.querySelector('#opacityToggle');

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
    square.addEventListener('mouseenter', () => {
      if (prideToggle.checked) {
        square.style.backgroundColor = rainbowColor();
      }
      if (!prideToggle.checked) square.style.backgroundColor = 'black';
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


