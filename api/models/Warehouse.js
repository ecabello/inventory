/**
* Warehouse.js
*
* @description :: A Warehouse is a stockroom where stock is kept by a Customer
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // We need at least a name to refer to this wharehouse
    name: {
      type: 'string',
      required: true
    },

    // A Warehouse always belongs to one and only one User
    owner: {
      model: 'User',
      required: true
    },

    // Warehouse transactions
    transactions: {
      collection: 'InventoryTransaction',
      via: 'warehouse'
    }
  }
};
