function createAlert (message, alertType) {
  const section = document.querySelector('section');

  const alert = document.createElement('div');
  alert.setAttribute('class', `alert alert-${alertType}`);
  alert.setAttribute('role', 'alert');
  alert.innerText = message;

  section.appendChild(alert);
  setTimeout(() => {
    section.removeChild(alert);
  }, 5000);
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

export { createAlert, handleSubmitButtonAppearence }