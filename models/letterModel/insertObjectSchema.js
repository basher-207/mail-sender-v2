const mongoose = require('mongoose');

const optionSchema = {
  tag: {
    type: String,
    required: true,
    trim: true,
  },
  value: {
    type: String,
    required: true,
  }
};

const insertSchema = {
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
};

module.exports = insertSchema;