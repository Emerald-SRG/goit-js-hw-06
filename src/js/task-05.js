{/* <input type="text" id="name-input" placeholder="Please enter your name" />
    <h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}

const txtInput = document.querySelector("input#name-input");
const txtOutput = document.querySelector("span#name-output");

txtInput.addEventListener("input", inputEntering);
function inputEntering(event) {
    txtOutput.textContent = event.currentTarget.value;
    if (txtOutput.textContent.length <= 0) {
        txtOutput.textContent = "Anonymous"
    }
};