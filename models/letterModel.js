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

const letterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Letter name must be specified'],
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