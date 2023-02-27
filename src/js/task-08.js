const formField = document.querySelector(".login-form");

const toSubmit = (event) => {
    event.preventDefault();
    const {
        elements: {email, password }
    } = event.currentTarget;

    if (email.value.length < 1 || password.value < 1) {
        return alert("All fields must be filled! Check it.");
    }
    const userForm = {
        email: email.value,
        password: password.value,
    }
    console.log(userForm);

    event.currentTarget.reset();
};

formField.addEventListener("submit", toSubmit);