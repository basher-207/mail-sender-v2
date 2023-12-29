const Contact = require('../models/contactModel.js');
const contactsPagesPath = 'pages/contacts';
const err500Path = 'pages/errors/500_err.ejs';

exports.renderContacts = async (req, res) => {
  try {
    const query = Contact.find();
    const contacts = await query.sort('name email').lean();
    res.render(contactsPagesPath, { contacts });
  } catch (error) {
    res.render(err500Path);
  }
};

exports.renderAddContact = (req, res) => {
  res.render(contactsPagesPath + '/addContact', {alert: ''});
};

exports.addContact = async (req, res) => {
  try {
    const { name, email } = req.body;
    if(!name || !email){
      throw new Error('Name and email should be specified');
    }
    await Contact.create({ name, email });
    res.render(contactsPagesPath + '/addContact', {alert: 'success'});
  } catch (error) {
    res.render(contactsPagesPath + '/addContact', {alert: error.message});
  }
};

exports.renderContactEdit = async (req, res) => {
  res.send('edit');
};

exports.deleteContact = async (req, res) => {
  res.send('delete');
};