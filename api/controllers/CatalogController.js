/**
 * CatalogController
 *
 * @description :: Server-side logic for managing Catalogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  myCatalogs: function(req, res) {
    Catalog.find({owner: req.user.id}).exec(function(err, catalogs) {
        if (err)
          return res.serverError(err.message);

        return res.json(catalogs);
    });
  },

  update: function(req, res) {
    var catalogId = req.param('id');
    if (!catalogId)
      return res.badRequest('No catalog id specified when trying to update');

    var fields = req.body;

    // TODO: Find by id only and if owner not logged user then check the permissions
    Catalog.update({id: catalogId, owner: req.user.id}, fields).exec(function(err, catalogs) {
        if (err)
          return res.serverError(err.message);

        if (!catalogs || !catalogs.length)
          return res.notFound('No record found with the specified id');

        return res.json(catalogs[0]);
    });
  },

  destroy: function(req, res) {
    var catalogId = req.param('id');
    if (!catalogId)
      return res.badRequest('No catalog id specified when trying to delete');

    // TODO: Find by id only and if owner not logged user then check the permissions
    Catalog.destroy({id: catalogId, owner: req.user.id}).exec(function(err, catalogs) {
      if (err)
        return res.serverError(err.message);

      if (!catalogs || !catalogs.length)
        return res.notFound('No record found with the specified id');

      return res.json(catalogs[0]);
    });
  }
};
