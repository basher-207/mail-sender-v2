window.onload = () => {
  showContactsEmptyListMessage();
};

function showContactsEmptyListMessage() {
  const contacts = document.querySelector('tbody').children;
  if(contacts.length === 0){
    createAlert('Your contacts storage is empty', 'warning');
  }
};


// ONCLICK FUNCTIONS

function renderAddContact() {
  const form = createRequestForm('get', '/contacts/add');
  form.submit();
};

function renderEditContactPage(contactId) {
  const form = createRequestForm('get', `/contacts/${contactId}/edit`);
  form.submit();
};

function deleteContact(contactId) {
  const form = createRequestForm('post', `/contacts/${contactId}/delete`);
  form.submit();
};


// SEARCHING INPUTS

function contactsSearch(value) {
  const contacts = [...document.querySelector('tbody').children];
  const filter = value.toLowerCase();
  contacts.forEach((contact) => {
    const textContent = contact.innerText.replace('Edit', '').replace('Delete', '');

    textContent.toLowerCase().includes(filter) ?
    contact.style.display = '' :
    contact.style.display = 'none'
  });
};


// UTILS

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

function createAlert (message, alertType, timeout) {
  const section = document.querySelector('section');

  const alert = document.createElement('div');
  alert.setAttribute('class', `alert alert-${alertType}`);
  alert.setAttribute('role', 'alert');
  alert.innerText = message;

  section.appendChild(alert);
};




