const txtInput = document.querySelector("input#validation-input");
const txtInputNumbers = Number(txtInput.dataset.length);
txtInput.addEventListener("blur", checkNum);

function checkNum() {
    if (txtInput.value.length === txtInputNumbers) {
        return txtInput.classList.add("valid");
    }
    if (txtInput.value.length === 0) {
        return txtInput.removeAttribute("class");
    }
        return txtInput.classList.add("invalid");
};