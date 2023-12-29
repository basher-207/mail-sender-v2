function createRequestForm(method, action, parentElement) {
  // creating form for request
  const form = document.createElement('form');
  form.setAttribute('method', method);
  form.setAttribute('action', action);
  // append form to DOM
  parentElement.appendChild(form);
  return form;
};

function renderEditContactPage(contactId) {
  const section = document.querySelector('section');
  const form = createRequestForm('get', `/contacts/${contactId}/edit`, section);
  form.submit();
};

function deleteContact(contactId) {
  const section = document.querySelector('section');
  const form = createRequestForm('post', `/contacts/${contactId}/delete`, section);
  form.submit();
};

function contactsSearch(value) {
  const contacts = [document.querySelector('tr')];
  const filter = value.toLowerCase();
  contacts.forEach((contact) => {
    const textContent = contact.innerText.replace('Edit', '').replace('Delete', '');

    textContent.toLowerCase().includes(filter) ?
    contact.style.display = '' :
    contact.style.display = 'none'
  });
};




