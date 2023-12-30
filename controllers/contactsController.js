const Contact = require('../models/contactModel.js');
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
exports.validateContact = async (req, res, next) => {
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
exports.renderContactEdit = async (req, res) => {
  res.send('edit');
};


//contacts/:id/delete route
exports.deleteContact = async (req, res) => {
  res.send('delete');
};