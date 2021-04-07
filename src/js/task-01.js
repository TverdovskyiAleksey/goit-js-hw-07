const quantityOfCategories = document.querySelector('#categories').children.length;
console.log(`В списке ${quantityOfCategories} категории`);

const quantityOfEements = document.querySelector('#categories').children;
for (let elem of quantityOfEements) {
    let categoryEl = elem.firstElementChild.textContent;   
    let quantityEl = elem.lastElementChild.children.length;
    console.log(`Категория: ${categoryEl} \nКоличество элементов: ${quantityEl}`);
};