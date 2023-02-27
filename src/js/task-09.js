function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const backGround = document.body;
const colorStyle = document.querySelector("span.color");
const changeCol = document.querySelector("button.change-color");

changeCol.addEventListener("click", () => {
  backGround.style.backgroundColor = getRandomHexColor();
  changeCol.textContent = backGround.style.backgroundColor;
});