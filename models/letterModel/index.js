const mongoose = require('mongoose');
const receiverSchema = require('./receiverObjectSchema.js');
const insertSchema = require('./insertObjectSchema.js')

const letterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Letter name must be specified'],
    unique: [true, 'Letter with this name is already exist'],
    trim: true
  },
  text: {
    type: String,
    required: [true, 'Letter text must be specified'],
    trim: true,
  },
  receivers: [ receiverSchema ],
  inserts: [ insertSchema ]
});

const Letter = mongoose.model('Letter', letterSchema);

module.exports = Letter;