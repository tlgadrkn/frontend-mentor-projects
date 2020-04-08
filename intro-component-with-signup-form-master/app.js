const form = document.querySelector("#form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstNameInput = document.querySelector("input#firstName");
    const lastNameInput = document.querySelector("input#lastName");
    const emailInput = document.querySelector("input#email");
    const passwordInput = document.querySelector("input#password");

    if (firstNameInput.value === '') {
        firstNameInput.parentElement.classList.add('form-error')
    } else {
        firstNameInput.parentElement.classList.remove('form-error')

    }

    if (lastNameInput.value === '') {
        lastNameInput.parentNode.classList.add('form-error')
    } else {
        lastNameInput.parentNode.classList.remove('form-error')

    }

    if (emailInput.value === '') {
        emailInput.parentNode.classList.add('form-error')

    } else if (!validateEmail(emailInputValue.value)) {

    } else {
        emailInput.parentNode.classList.remove('form-error')

    }

    if (passwordInput.value === '') {
        passwordInput.parentNode.classList.add('form-error')

    } else {
        passwordInput.parentNode.classList.remove('form-error')

    }

})

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toUpperCae());

}