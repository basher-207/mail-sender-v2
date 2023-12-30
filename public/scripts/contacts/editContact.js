window.onload = () => {
  loadAlertIfExist();
  handleSubmitButtonAppearence();
};

// Disabling or anabling submit button if inputs are filled
document.querySelector('form').addEventListener('input', handleSubmitButtonAppearence);

function loadAlertIfExist() {
  const alertMessage = document.querySelector('#alertMessage').value;
  if(alertMessage === '') return;
  createAlert(alertMessage, 'danger');
};

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