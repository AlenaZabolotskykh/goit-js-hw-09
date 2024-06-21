const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', handlerGetFormValue);
function handlerGetFormValue(evt) {
  const { name, value } = evt.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', checkLocalStorage)
function checkLocalStorage() {
  const value = localStorage.getItem('feedback-form-state');
  if (value) {
    const { email, message } = JSON.parse(value);
    formData.email = email;
    formData.message = message;
  }
}

console.log(formData);
