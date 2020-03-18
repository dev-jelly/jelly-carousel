let timeout = false;
const delay = 50;
const carouselImageResize = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    const images = Array.prototype.slice.call(document.getElementsByClassName("cover"));
    const width = window.getComputedStyle(images[0]).width;
    images.forEach( img => img.style.height = width);
  }, delay)
};

window.addEventListener('resize', carouselImageResize);
window.addEventListener('DOMContentLoaded', carouselImageResize);

document.getElementById('next-button').addEventListener('click', () => {
  const previous = document.getElementsByClassName('previous')[0];
  previous.classList.remove('previous');
  previous.parentElement.appendChild(previous);

  const current = document.getElementsByClassName('current')[0];
  current.classList.remove('current');
  current.classList.add('previous');

  const next = document.getElementsByClassName('next')[0];
  next.classList.remove('next');
  next.classList.add('current');
  setTimeout(() => next.nextElementSibling.classList.add('next'), 0);

});