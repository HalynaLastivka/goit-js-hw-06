const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', addNameSpan);

function addNameSpan(event) {
   spanEl.textContent = event.currentTarget.value !== '' ? event.currentTarget.value : 'Anonymous';
}