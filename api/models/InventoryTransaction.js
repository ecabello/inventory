/**
* InventoryTransaction.js
*
* @description :: InventoryTransactions track product stock movement
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // An InventoryTransaction is always associated to a Warehouse
    // Stuff gets into the warehouse or goes out of it.
    // (If there are ever a need to track Inventory "On Order" a new entity is needed )
    warehouse: {
      model: 'Warehouse'
    },

    // It always affects a product...
    product: {
      model: 'Product'
    },

    // ...and modifies stock
    quantity: {
      type: 'float',
      required: true
    }
  }
};
