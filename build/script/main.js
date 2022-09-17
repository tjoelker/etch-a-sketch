'use strict';var white='#ffffff',black='#000000',settings=document.querySelector('.settings'),clear=(settings.addEventListener('click',createGrid),document.querySelector('.clear'));function clearPixels(){canvas.querySelectorAll('.pixel').forEach(function(e){return e.style.background=white})}clear.addEventListener('click',clearPixels);var canvas=document.querySelector('.canvas');function createGrid(e){var t=+prompt('Please supply the number of squares per side (max. 64)',0);if(isNaN(t)||t<0||64<t||''==t||null==t)return console.log('ERROR');canvas.innerHTML=null,canvas.style.cssText='grid-template-columns: repeat('.concat(t,', 1fr);\n                          grid-template-rows: repeat(').concat(t,', 1fr);');var a=0;do{var r=document.createElement('div')}while(r.classList.add('pixel'),canvas.appendChild(r),++a!=t*t);indexPixels()}function indexPixels(){canvas.querySelectorAll('.pixel').forEach(function(e){return e.addEventListener('mouseenter',fillPixels)})}function fillPixels(e){console.log('active'),e.target.style.background=black}canvas.addEventListener('mousemove',catchHorizontalMouse),canvas.addEventListener('mousemove',catchVerticalMouse);var temp_xAxis=0,temp_yAxis=0;function catchHorizontalMouse(e){var t=document.querySelector('.horizontal.wheel'),e=e.pageX;switch(!0){case e<temp_xAxis:t.style.transform='rotate(-45deg)';break;case temp_xAxis<e:t.style.transform='rotate(45deg)';break;case e==temp_xAxis:t.style.transform='rotate(0deg)'}return temp_xAxis=e}function catchVerticalMouse(e){var t=document.querySelector('.vertical.wheel'),e=e.pageY;switch(!0){case e<temp_yAxis:t.style.transform='rotate(45deg)';break;case temp_yAxis<e:t.style.transform='rotate(-45deg)';break;case e==temp_yAxis:t.style.transform='rotate(0deg)'}return temp_yAxis=e}