/**
 * InventoryTransactionController
 *
 * @description :: Server-side logic for managing Inventorytransactions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	affectInventory: function(req,res) {
		var warehouse = req.param('warehouse');
		var product = req.param('product');
		var quantity = req.param('quantity');
		InventoryManager.affectStock(warehouse, product, quantity, function(err, tran) {
			if (err)
				return res.serverError(err.message);

			return res.json(tran);
		});
	}
};


module.exports.blueprints = {

	// Expose a route for every method,
	actions: true,

	// Expose a RESTful API, e.g.
	rest: true,

	// Dont Expose simple CRUD shortcuts
	shortcuts: false

};
