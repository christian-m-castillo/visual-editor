const imageInput = document.getElementById('image-input');
const imageContainer = document.getElementById('image-container');
const rotateLeftButton = document.getElementById('rotate-left');
const rotateRightButton = document.getElementById('rotate-right');
const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const resizeButton = document.getElementById('resize-button');

let currentImage = null;
let currentRotation = 0;

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.onload = function() {
        widthInput.value = img.width;
        heightInput.value = img.height;
      };
      currentImage = img;
      currentRotation = 0;
      imageContainer.innerHTML = '';
      imageContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

rotateLeftButton.addEventListener('click', function() {
  if (currentImage) {
    currentRotation -= 90;
    currentImage.style.transform = `rotate(${currentRotation}deg)`;
  }
});

rotateRightButton.addEventListener('click', function() {
  if (currentImage) {
    currentRotation += 90;
    currentImage.style.transform = `rotate(${currentRotation}deg)`;
  }
});

resizeButton.addEventListener('click', function() {
  if (currentImage) {
    const width = widthInput.value;
    const height = heightInput.value;
    if (width && height) {
      currentImage.style.width = `${width}px`;
      currentImage.style.height = `${height}px`;
    }
  }
});