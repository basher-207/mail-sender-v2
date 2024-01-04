const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Contact name must be specified'],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Contact email must be specified"],
    unique: [true, "Contact with this email is already exist"]
  },
  letters: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Letter',
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;