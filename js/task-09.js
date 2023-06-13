function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector('.change-color');
const textSpanEl = document.querySelector('.color');

btnColor.addEventListener('click', onBtnColor);

function onBtnColor(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor; 
  textSpanEl.textContent = newColor;
}

