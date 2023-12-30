window.onload = () => {
  loadAlertIfExist();
};

function loadAlertIfExist() {
  const alertMessage = document.querySelector('#alertMessage').value;
  if(alertMessage === '') return;
  if(!alertMessage.includes('success')){
    createAlert(alertMessage, 'danger');
    return;
  }
  createAlert(alertMessage, 'success');
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
