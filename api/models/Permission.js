/**
* Permission.js
*
* @description :: A Permission grants access to a User to different resources in the system
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user: {
      model: 'User',
      required: true
    },

    type: {
      type: 'string',
      required: true,
      enum: ['general', 'warehouse', 'product']
    },

    action: {
      type: 'string',
      required: true
    }
  }
};
