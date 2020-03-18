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