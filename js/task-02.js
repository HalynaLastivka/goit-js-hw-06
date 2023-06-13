const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItemEl = [];
ingredients.forEach(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  liEl.classList.add('item');
  listItemEl.push(liEl);
});

const categEl = document.querySelector('#ingredients'); 
categEl.append(...listItemEl);