/**
 * WarehouseController
 *
 * @description :: Server-side logic for managing Warehouses
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  myWarehouses: function(req, res) {
    Warehouse.find({owner: req.user.id}).exec(function(err, warehouses) {
        if (err)
          return res.serverError(err.message);

        return res.json(warehouses);
    });
  },

  update: function(req, res) {
    var warehouseId = req.param('id');
    if (!warehouseId)
      return res.badRequest('No warehouse id specified when trying to update');

    var fields = req.body;

    // TODO: Find by id only and if owner not logged user then check the permissions
    Warehouse.update({id: warehouseId, owner: req.user.id}, fields).exec(function(err, warehouses) {
        if (err)
          return res.serverError(err.message);

        if (!warehouses || !warehouses.length)
          return res.notFound('No record found with the specified id');

        return res.json(warehouses[0]);
    });
  },

  destroy: function(req, res) {
    var warehouseId = req.param('id');
    if (!warehouseId)
      return res.badRequest('No warehouse id specified when trying to delete');

    // TODO: Find by id only and if owner not logged user then check the permissions
    Warehouse.destroy({id: WwrehouseId, owner: req.user.id}).exec(function(err, warehouses) {
      if (err)
        return res.serverError(err.message);

      if (!warehouses || !warehouses.length)
        return res.notFound('No record found with the specified id');

      return res.json(warehouses[0]);
    });
  }
};
