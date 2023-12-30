import { createAlert, handleSubmitButtonAppearence } from './utils.js';

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