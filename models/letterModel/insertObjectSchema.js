const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema ({
  tag: {
    type: String,
    required: true,
    trim: true,
  },
  value: {
    type: String,
    required: true,
  }
},{
  _id: false
});

const insertSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['group', 'personal']
  },
  options: [ optionSchema ]
},{
  _id: false
});

module.exports = insertSchema;