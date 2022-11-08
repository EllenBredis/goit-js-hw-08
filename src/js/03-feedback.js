import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);


const feedbackForm= 'feedback-form-state';
const formData = {};

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(feedbackForm, JSON.stringify(formData));
}

function onSubmitForm(event) {
  console.log(JSON.parse(localStorage.getItem(feedbackForm)));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(feedbackForm);
}

(function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(feedbackForm));
        if (data) {
      email.value = data.email;
      message.value = data.message;
    }
  })();