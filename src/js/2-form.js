const form = document.querySelector('.feedback-form')

form.addEventListener('submit', handlerGetFormValue)
function handlerGetFormValue (evt) {
    evt.preventDefault()
    console.dir(evt.currentTarget.elements);
      const { email, message } = evt.currentTarget.elements;
    
const data = {
    email: email.value,
    message: message.value
}


    console.log(data)
    
    }

