/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  myProducts: function(req, res) {
    // TODO: Find your products and the products you have access to
    Product.find({owner: req.user.id}).exec(function(err, products) {
        if (err)
          return res.serverError(err.message);

        return res.json(products);
    });
  },

  update: function(req, res) {
    var productId = req.param('id');
    if (!productId)
      return res.badRequest('No product id specified when trying to update');

    var fields = req.body;

    // TODO: Find by id only and if owner not logged user then check the permissions
    Product.update({id: productId, owner: req.user.id}, fields).exec(function(err, products) {
        if (err)
          return res.serverError(err.message);

        if (!products || !products.length)
          return res.notFound('No record found with the specified id');

        return res.json(products[0]);
    });
  },

  destroy: function(req, res) {
    var productId = req.param('id');
    if (!productId)
      return res.badRequest('No product id specified when trying to delete');

    // TODO: Find by id only and if owner not logged user then check the permissions
    Product.destroy({id: productId, owner: req.user.id}).exec(function(err, products) {
      if (err)
        return res.serverError(err.message);

      if (!products || !products.length)
        return res.notFound('No record found with the specified id');

      return res.json(products[0]);
    });
  }
};
