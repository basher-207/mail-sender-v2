const insertSchema = {
  type: [{
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
    options: {
      type: [{
        tag: {
          type: String,
          trim: true
        },
        value: {
          type: String,
          default: ''
        }
      }],
      validate: {
        validator: function() {
          return this.type === 'group' && this.options.every(option => option.tag !== undefined);
        },
        message: 'Tag is required for group type'
      },
      default: undefined,
      _id: false
    }
  }],
  _id: false
};


module.exports = insertSchema;