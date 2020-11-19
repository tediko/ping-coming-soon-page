const form = document.querySelector('[data-form]');
const input = document.querySelector('[data-input]');
const submitBtn = document.querySelector('[data-cta]');

const validateForm = (event) => {
    event.preventDefault();
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(input.value)) {
        form.classList.add('active');
    } else {
        form.submit();
    }
    
}

submitBtn.addEventListener('click', validateForm);