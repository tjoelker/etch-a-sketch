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
  console.log('active');
  e.target.style.background = black;
};

/* On mousemovemnt */
canvas.addEventListener('mousemove', catchHorizontalMouse);
canvas.addEventListener('mousemove', catchVerticalMouse);
let temp_xAxis = 0;
let temp_yAxis = 0;

function catchHorizontalMouse(e) {
  const xWheel = document.querySelector('.horizontal.wheel');
  const xAxis = e.pageX;
  switch (true) {
    case (xAxis < temp_xAxis):
      xWheel.style.transform = 'rotate(-45deg)';
      break;
    case (xAxis > temp_xAxis):
      xWheel.style.transform = 'rotate(45deg)';
      break;
    case (xAxis == temp_xAxis):
      xWheel.style.transform = 'rotate(0deg)';
      break;
  }
  return temp_xAxis = xAxis;
};

function catchVerticalMouse(e) {
  const yWheel = document.querySelector('.vertical.wheel');
  const yAxis = e.pageY;
  switch (true) {
    case (yAxis < temp_yAxis):
      yWheel.style.transform = 'rotate(45deg)';
      break;
    case (yAxis > temp_yAxis):
      yWheel.style.transform = 'rotate(-45deg)';
      break;
    case (yAxis == temp_yAxis):
      yWheel.style.transform = 'rotate(0deg)';
      break;
  }
  return temp_yAxis = yAxis;
};