'use strict';

const slides = document.getElementById('thumbs');
const dots = document.getElementsByClassName('carousel__dot');
let position = 0;
let currentDot = 0;

function changeDots(n) {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' carousel__dot_active', '');
  }
  dots[n].className += ' carousel__dot_active';
}

function moveNext() {
  position += 330;

  if (position > 990) {
    position = 0;
    currentDot = -1;
  }

  slides.style.right = `${position}px`;
  slides.style.transition = 'right 1s';

  currentDot++;
  changeDots(currentDot);
}

function movePrev() {
  position -= 330;

  if (position < 0) {
    position = 990;
    currentDot = 3;
  }

  slides.style.right = `${position}px`;
  slides.style.transition = 'right 1s';

  currentDot--;
  changeDots(currentDot);
}
