const Contact = require('../models/contactModel.js');
const contactsPagesPath = 'pages/contacts';
const err500Path = 'pages/errors/500_err.ejs';

exports.renderContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().lean();
    res.render(contactsPagesPath, { contacts });
  } catch (error) {
    console.log(error);
    res.render(err500Path);
  }
};

exports.renderContactEdit = async (req, res) => {
  res.send('edit');
};

exports.deleteContact = async (req, res) => {
  res.send('delete');
};