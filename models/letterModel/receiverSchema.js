const mongoose = require('mongoose');

const receiverInsertSchema = {
  type: [{
    name: {
      type: String,
      trim: true,
      required: true
    },
    type: {
      type: String,
      enum: ['personal', 'group'],
      required: true
    },
    tag: {
      type: String,
      trim: true,
      required: function() {
        return this.type === 'group';
      },
      validate: {
        validator: function() {
          if(this.type === 'personal') return this.tag === undefined
        },
        message: 'Receiver insert error. Tag should not be specified with personal type insert'
      },
      default: undefined
    },
    value: {
      type: String,
      trim: true,
      required: function() {
        return this.type === 'personal'
      },
      validate: {
        validator: function() {
          if(this.type === 'group') return this.value === undefined
        },
        message: 'Receiver insert error. Value should not be specified with group type insert'
      },
      default: undefined
    }
  }],
  _id: false
}

const receiverSchema = {
  type: [{
    contact: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contact',
      required: [true, 'Contact id must be specified']
    },
    inserts: receiverInsertSchema
  }],
  _id: false
};



module.exports = receiverSchema;