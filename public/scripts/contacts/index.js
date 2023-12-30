import { createAlert, createRequestForm } from './utils.js';

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

document.querySelector('section').addEventListener('click', (event) => {
  if(event.target.localName !== 'button') return;
  const targetClasses = [...event.target.classList];
  if(targetClasses.includes('add-contact')){     //redirect to /contacts/add route
    const form = createRequestForm('get', '/contacts/add');
    form.submit();
    return;
  }
  if(targetClasses.includes('edit')){            //redirect to contacts/;id/edit route
    const contactId = event.target.value;
    const form = createRequestForm('get', `/contacts/${contactId}/edit`);
    form.submit();
    return;
  }
  if(targetClasses.includes('delete')){          //redirect to /contacts/:id/delete route
    const contactId = event.target.value;
    const form = createRequestForm('post', `/contacts/${contactId}/delete`);
    form.submit();
    return;
  }
});


// SEARCHING 

document.querySelector('input.search-input').addEventListener('input', (event) => {
  const contacts = [...document.querySelector('tbody').children];
  const filter = event.target.value.toLowerCase();
  contacts.forEach((contact) => {
    const textContent = contact.innerText.replace('Edit', '').replace('Delete', '');

    textContent.toLowerCase().includes(filter) ?
    contact.style.display = '' :
    contact.style.display = 'none'
  });
});




