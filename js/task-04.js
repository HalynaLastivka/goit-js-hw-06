
const valueEl = document.querySelector('#value');
const btnPMinus = document.querySelector('[data-action="decrement"]');
const btnPlus = document.querySelector('[data-action="increment"]');

let counterValue = 0;

btnPlus.addEventListener('click', onBtnPlus);
btnPMinus.addEventListener('click', onBtnMinus);

function onBtnPlus(event) {
     
    counterValue = counterValue + 1;
    updateValue();
}

function onBtnMinus(event) {

    counterValue = counterValue - 1;
    updateValue();
}

function updateValue() { 
    valueEl.textContent = counterValue;
}

