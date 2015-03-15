/**
* File.js
*
* @description :: A File in our system
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // A File always belongs to one and only one User
    owner: {
      model: 'User',
      required: true
    },

    filename: {
      type: 'string'
    },

    // How to get to the file
    url: {
      type: 'string',
      required: true
    },

    size: {
      type: 'integer',
      required: true
    },

    type: {
      type: 'string',
      required: true
    },

    // Temporary files can be discarded or made permanent
    temporary: {
      type: 'boolean'
    },

    toJSON: function() {
      var obj = this.toObject();
      if ('owner' in obj && typeof obj.owner === 'object')
        obj.owner = obj.owner.id;
      return obj;
    }
  }
};
