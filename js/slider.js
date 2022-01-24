const images = [
  "../images/geschiedenis.png",
  "../images/slider1.jpeg",
  "../images/slider2.jpeg",
  "../images/slider3.jpeg",
];
let imageIndex = 0;

const imageEl = document.querySelector(".slider");

function setImage(index) {
  imageIndex = index;
  imageEl.style.backgroundImage = `url(${images[imageIndex]})`;
}

function nextImage() {
  if (imageIndex + 1 == images.length) {
    setImage(0);
    return;
  }
  setImage(imageIndex + 1);
}

function previousImage() {
  if (imageIndex === 0) {
    setImage(images.length - 1);
    return;
  }
  setImage(imageIndex - 1);
}
