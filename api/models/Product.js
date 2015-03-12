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

    // A Product always belongs to one and only one User
    owner: {
      model: 'User',
      required: true
    },

    // What categories this product belongs to
    categories: {
      collection: 'Category',
      via: 'products'
    },

    // Product transactions
    transactions: {
      collection: 'InventoryTransaction',
      via: 'product'
    },

    toJSON: function() {
      var obj = this.toObject();
      if ('owner' in obj && typeof obj.owner === 'object')
        obj.owner = obj.owner.id;
      return obj;
    }
  }
};
