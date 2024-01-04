const mongoose = require('mongoose');

const receiverGroupInsertSchema = new mongoose.Schema({
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
},{
  _id: false
});

const receiverPersonalInsertSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: String,
    required: true
  }
},{
  _id: false
});

const receiverSchema = new mongoose.Schema({
  contact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact',
    required: [true, 'Contact id must be specified']
  },
  groupInserts: [ receiverGroupInsertSchema ],
  personalInserts: [ receiverPersonalInsertSchema ]
},{
  _id: false
});

module.exports = receiverSchema;