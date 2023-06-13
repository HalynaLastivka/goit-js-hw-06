function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inpetEl = document.querySelector('input');

btnCreate.addEventListener('click', clickOnBtnCreate);
btnDestroy.addEventListener('click', clickOnBtnDestroy);


function clickOnBtnDestroy() {
  boxesEl.innerHTML = '';
}
 
function clickOnBtnCreate() {
  const divEl = createBoxes(inpetEl.value);
  boxesEl.append(...divEl); 
}


function createBoxes(amount) {
  let widhtDiv = 30; 
  let heightDiv = 30;
  const arrayDiv = [];
 

  for (let i = 0; i < amount; i += 1){
    const divEl = document.createElement('div');
    divEl.style.widht = widhtDiv+'px';
    divEl.style.height = heightDiv+'px';
    divEl.style.backgroundColor = getRandomHexColor(); 
    widhtDiv += 10;
    heightDiv += 10;
    arrayDiv.push(divEl);
}
  return arrayDiv;
}


