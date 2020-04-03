const form = document.querySelector('form');
const input = document.querySelector('input');

const validateEmail = (email) => {


    return
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



    const emailValue = input.value;
    console.log(emailValue);

    if (!regex.test(emailValue)) {
        form.classList.add('error')
        setTimeout(() => form.classList.remove('error'), 60000)
    } else {
        form.classList.remove('error')
        document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`
    }
})