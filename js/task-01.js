// 1
console.log(1);
const countCatedEl = document.querySelector('#categories'); 
console.log('Number of categories:' + countCatedEl.children.length);

// 2

const itemEl = document.querySelectorAll('.item'); 
itemEl.forEach(element => {
    const h2 = element.querySelector('h2');
    const categEl = element.querySelectorAll('li');
    console.log('Category:' + h2.textContent);
    console.log('Elements:'+ categEl.length);
});





