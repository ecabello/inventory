/**
* Product.js
*
* @description :: Products are the stuff that gets inventoried
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // We need a name to refer to the product
    name: {
      type: 'string',
      required: true
    },

    // optional
    sku: {
      type: 'string'
    },

    // A Product always belongs to one and only one User
    owner: {
      model: 'User',
      required: true
    },

    // Product transactions
    transactions: {
      collection: 'InventoryTransaction',
      via: 'product'
    },

    locked: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    }
  }
};
