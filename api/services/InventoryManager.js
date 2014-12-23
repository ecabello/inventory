/**
* InventoryManager
*
* @description :: Inventory management business logic
* @help        :: See http://sailsjs.org/#/documentation/concepts/Services
*/

module.exports = {

  affectStock: function(warehouse, product, quantity, cb) {
    if (quantity > 0)
      this.addStock(warehouse, product, quantity, cb)
    else
      this.removeStock(warehouse, product, quantity, cb)
  },

  // For now  you can always add to a warehouse
  addStock: function(warehouse, product, quantity, cb) {
    var transaction = {
      warehouse: warehouse,
      product: product,
      quantity: quantity
    };
    InventoryTransaction.create(transaction, cb);
  },

  removeStock: function(warehouse, product, quantity, cb) {
    // First we need to check how much stock we currently have
    InventoryTransaction.find({
      warehouse: warehouse,
      product: product
    }).sum('quantity').exec(function(err, existing){
      if (err && cb)
        return cb(err, null);

      var existingqty = (!existing || existing.length==0) ? 0 : existing[0].quantity;
      if ((existingqty + quantity) >= 0) {
        var transaction = {
          warehouse: warehouse,
          product: product,
          quantity: quantity
        };
        InventoryTransaction.create(transaction, cb);
      }
      else if (cb)
        cb(new Error('Not enough stock to satisfy removal'), null);
    });
  }
};
