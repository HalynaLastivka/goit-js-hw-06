const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', OutFocusInput);

function OutFocusInput(event) {
    const expectedLength = parseInt(inputEl.dataset.length);
    if (event.currentTarget.value.length === expectedLength) {
        inputEl.classList.add('valid'); 
        inputEl.classList.remove('invalid'); 
    } else {
        inputEl.classList.add('invalid'); 
        inputEl.classList.remove('valid'); 
   }
}