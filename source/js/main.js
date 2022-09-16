const white = '#ffffff';
const black = '#000000';

/* Create canvas grid */
const settings = document.querySelector('.settings');

settings.addEventListener('click', createGrid);

/* Reset drawing */
const clear = document.querySelector('.clear');

clear.addEventListener('click', clearPixels);

function clearPixels() {
  const pixels = canvas.querySelectorAll('.pixel');
  pixels.forEach(pixel => pixel.style.background = white);
}

/* Function for creation canvas grid */ 
const canvas = document.querySelector('.canvas');

function createGrid(e) {
  let num = +prompt('Please supply the number of squares per side (max. 64)', +'');
  if (isNaN(num) || num < 0 || num > 64 || num == '' || num == null) return console.log('ERROR');
  canvas.innerHTML = null;
  canvas.style.cssText = `grid-template-columns: repeat(${num}, 1fr);
                          grid-template-rows: repeat(${num}, 1fr);`;
  let i = 0;
  do {
    let div = document.createElement('div');
    div.classList.add('pixel');
    canvas.appendChild(div);
    ++i;
  } while (i != (num * num));
  indexPixels();
};

/* Make canvas's pixels interactive */
function indexPixels() {
  const pixels = canvas.querySelectorAll('.pixel');
  pixels.forEach(pixel => pixel.addEventListener('mouseenter', fillPixels));
};

function fillPixels(e) {
  e.target.style.background = color();
};

function color() {
  const hex = '0123456789abcdef';
  let color = '#';
  while (color.length < 7) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}