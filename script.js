//initialize grid
const container = document.querySelector('.container');
buildGrid(16);

const slider = document.querySelector('#user-input');
const displayValue = document.querySelector('#slider-value');

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
      square.style.backgroundColor = 'black';
    });
  });
}

/*
Create a webpage with a 16x16 grid of square divs.

Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.
Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!
Be careful with borders and margins, as they can adjust the size of the squares!
*/
