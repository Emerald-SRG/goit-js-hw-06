let counterValue = document.querySelector('span#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrement = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
};
const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);


