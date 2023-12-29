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




