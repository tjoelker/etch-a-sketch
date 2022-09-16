/* Create canvas grid (16*16) */ 
const canvas = document.querySelector('.canvas');

createGrid(canvas);

function createGrid(canvas) {
  let i = 0;
  do {
    let div = document.createElement('div');
    div.classList.add('pixel');
    canvas.appendChild(div);
    ++i;
  } while (i != (16 * 16));
};

/* Make canvas's pixels interactive */
const pixels = canvas.querySelectorAll('.pixel');

pixels.forEach(pixel => {
  pixel.addEventListener('mouseenter', fillPixel);
});

function fillPixel(e) {
  e.target.style.background = 'black';
};