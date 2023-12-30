window.onload = () => {
  loadAlertIfExist();
};

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