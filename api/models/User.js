/**
* User.js
*
* @description :: User model for authentication.
*                 Only authenticated Users can use the system
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcryptjs');

module.exports = {
  attributes: {
    // Minimal set of attributes required for authentication
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },

    // We need a name to refer to the customer
    name: {
      type: 'string'
    },

    // Individual | Business | Other
    type: {
      type: 'string',
      required: true,
      enum: ['individual', 'business', 'other']
    },
    //  Warehouses owned/operated by this customer
    warehouses: {
      collection: 'Warehouse',
      via: 'owner'
    },
    // Products owned by this customer
    products: {
      collection: 'Product',
      via: 'owner'
    },

    toJSON: function() {
      var obj = this.toObject();
      // There is no valid reason to ever return a password
      delete obj.password;
      return obj;
    }
  },

  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }
        else{
          user.password = hash;
          cb(null, user);
        }
      });
    });
  }
};
