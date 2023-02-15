const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const findIngredientsUl = document.querySelector("ul#ingredients");
console.log(findIngredientsUl);

const listOfIngredient = ingredient => {

  const createList = document.createElement('li');
  createList.textContent = ingredient;
  createList.classList.add('item');
  
  return createList;
};

const listOfIngredients = ingredients.map(listOfIngredient);
findIngredientsUl.append(...listOfIngredients);