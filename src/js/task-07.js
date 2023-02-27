const slider = document.querySelector("input#font-size-control");
const txtStyle = document.querySelector("span#text");

txtStyle.style.fontSize = slider.value + "px";
const changeSize = () => {
    txtStyle.style.fontSize = `${slider.value}px`;
};

slider.addEventListener("input", changeSize);