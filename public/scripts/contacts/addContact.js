window.onload = () => {
  const alertMessage = document.querySelector('#alertMessage').value;
  if(alertMessage === '') return;
  if(alertMessage === 'success'){
    createAlert('Contact successfully added', 'success');
    return;
  }
  if(alertMessage.includes('duplicate')) {
    createAlert('Contact with this email is already exist', 'danger');
    return;
  }
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
  }, 4000);
};
