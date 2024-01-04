const Contact = require('../models/contactModel/index.js');
const contactsPagesPath = 'pages/contacts';
const err500Path = 'pages/errors/500_err.ejs';

// /contacts route
exports.renderContacts = async (req, res) => {
  try {
    const query = Contact.find();
    const contacts = await query.sort('name email').lean();
    res.render(contactsPagesPath, { contacts });
  } catch (error) {
    res.render(err500Path);
  }
};


// /contacts/add route
exports.validateContactCreation = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    await Contact.validate({ name, email });
    const contact = await Contact.findOne({ email });
    if(contact){
      throw new Error('Contact with this email is already exist');
    }
    next();
  } catch (error) {
    res.render(contactsPagesPath + '/addContact', {alert: error.message});
  }
};

exports.renderAddContact = (req, res) => {
  res.render(contactsPagesPath + '/addContact', {alert: ''});
};

exports.addContact = async (req, res) => {
  try {
    const { name, email } = req.body;
    await Contact.create({ name, email });
    res.render(contactsPagesPath + '/addContact', {alert: 'Contact successfully added'});
  } catch (error) {
    res.render(err500Path);
  }
};


// /contacts/:id/edit route
exports.validateContactUpdate = async (req, res, next) => {
  const contactId = req.params.id;
  const { name, email } = req.body;
  try {
    await Contact.validate({ name, email });
    const foundContact = await Contact.findOne({ email });
    if(foundContact && String(foundContact._id) !== contactId){
      throw new Error('Contact with this email is already exist');
    }
    next();
  } catch (error) {
    res.render(contactsPagesPath + '/editContact', {
      contact: { _id: contactId, name, email }, 
      alert: error.message
    });
  }
};

exports.renderContactEdit = async (req, res) => {
  try {
    const contactId = req.params.id;
    const contact = await Contact.findById(contactId);
    res.render(contactsPagesPath + '/editContact', { contact, alert: '' });
  } catch (error) {
    res.redner(err500Path);
  }
};

exports.editContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const { name, email } = req.body;
    await Contact.updateOne({ _id: contactId }, { name, email });
    res.redirect('/contacts');
  } catch (error) {
    res.redner(err500Path);
  }
};


//contacts/:id/delete route
exports.deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    await Contact.deleteOne({ _id: contactId });
    res.redirect('/contacts');
  } catch (error) {
    res.render(err500Path);
  }
};