const mongoose = require('mongoose');

const receiverGroupInsertSchema = {
  name: {
    type: String,
    required: true,
    trim: true
  },
  tag: {
    type: String,
    required: true,
    trim: true
  }
};

const receiverPersonalInsertSchema = {
  name: {
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: String,
    required: true
  }
};

const receiverSchema = {
  contact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact',
    required: [true, 'Contact id must be specified']
  },
  groupInserts: [ receiverGroupInsertSchema ],
  personalInserts: [ receiverPersonalInsertSchema ]
};

module.exports = receiverSchema;