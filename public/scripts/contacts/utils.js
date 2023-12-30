function createAlert (message, alertType, timeout) {
  const section = document.querySelector('section');

  const alert = document.createElement('div');
  alert.setAttribute('class', `alert alert-${alertType}`);
  alert.setAttribute('role', 'alert');
  alert.innerText = message;

  section.appendChild(alert);

  if(timeout){
    setTimeout(() => {
      section.removeChild(alert);
    }, timeout);
  }
};

function handleSubmitButtonAppearence() {
  const button = document.querySelector('button[type=submit]');
  const nameInput = document.querySelector('input[id=name]');
  const emailInput = document.querySelector('input[id=email]');

  if(nameInput.value && emailInput.value) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

function createRequestForm(method, action) {
  const section = document.querySelector('section');
  // creating form for request
  const form = document.createElement('form');
  form.setAttribute('method', method);
  form.setAttribute('action', action);
  // insert form in DOM
  section.appendChild(form);
  return form;
};

export { createAlert, handleSubmitButtonAppearence, createRequestForm }