let timeout = false;
const delay = 50;
const carouselImageResize = () => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    const images = Array.prototype.slice.call(document.getElementsByClassName("cover"));
    const width = window.getComputedStyle(images[0]).width;
    images.forEach( img => img.style.height = width);
    const currentContainer = document.getElementsByClassName('current')[0];
    const computedContainerStyle = window.getComputedStyle(currentContainer);
    const containerHeight = computedContainerStyle.height;
    const containerWidth = computedContainerStyle.width;
    const buttons = document.getElementsByClassName('arrow-button');
    buttons[0].style.height = containerHeight;
    buttons[1].style.height = containerHeight;

    buttons[0].style.lineHeight = containerHeight;
    buttons[1].style.lineHeight = containerHeight;

    buttons[1].style.left = (parseInt(containerWidth) - 40) + 'px';
  }, delay)

};

window.addEventListener('resize', carouselImageResize);
window.addEventListener('DOMContentLoaded', carouselImageResize);

let currIndex = 0;
const containers = document.getElementsByClassName('container');
const containerSize = containers.length;
const lastIndex = containerSize - 1;


document.getElementById('next-button').addEventListener('click', () => {
  const current = document.getElementsByClassName('current')[0];
  current.classList.remove('current');

  const next = document.getElementsByClassName('next')[0];
  next.classList.remove('next');
  next.classList.add('current');

  const previous = document.getElementsByClassName('previous')[0];
  previous.classList.remove('previous');
  if((currIndex + 1) === lastIndex) {
    containers[0].classList.add('next');
    currIndex++;
  } else if(currIndex === lastIndex) {
    containers[1].classList.add('next');
    currIndex = 0;
  } else {
    containers[currIndex + 2].classList.add('next');
    currIndex++;
  }

  current.classList.add('previous');
});


document.getElementById('previous-button').addEventListener('click', () => {
  const current = document.getElementsByClassName('current')[0];
  current.classList.remove('current');

  const next = document.getElementsByClassName('next')[0];
  next.classList.remove('next');

  const previous = document.getElementsByClassName('previous')[0];
  previous.classList.remove('previous');
  previous.classList.add('current');

  if((currIndex - 1) === 0) {
    containers[lastIndex].classList.add('previous');
    currIndex--;
  } else if(currIndex === 0) {
    containers[lastIndex-1].classList.add('previous');
    currIndex = lastIndex;
  } else {
    containers[currIndex - 2].classList.add('previous');
    currIndex--;
  }

  current.classList.add('next');
});