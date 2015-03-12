/**
 * ProductCategoryController
 *
 * @description :: Server-side logic for managing Productcategories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	myCategories: function(req, res) {
    Category.find({owner: req.user.id}).exec(function(err, categories) {
        if (err)
          return res.serverError(err.message);

        return res.json(categories);
    });
  },

  update: function(req, res) {
    var categoryId = req.param('id');
    if (!categoryId)
      return res.badRequest('No category id specified when trying to update');

    var fields = req.body;

    // TODO: Find by id only and if owner not logged user then check the permissions
		Category.update({id: categoryId, owner: req.user.id}, fields).exec(function(err, categories) {
        if (err)
          return res.serverError(err.message);

        if (!categories || !categories.length)
          return res.notFound('No record found with the specified id');

        return res.json(categories[0]);
    });
  },

  destroy: function(req, res) {
    var categoryId = req.param('id');
    if (!categoryId)
      return res.badRequest('No category id specified when trying to delete');

    // TODO: Find by id only and if owner not logged user then check the permissions
    Category.destroy({id: categoryId, owner: req.user.id}).exec(function(err, categories) {
      if (err)
        return res.serverError(err.message);

      if (!categories || !categories.length)
        return res.notFound('No record found with the specified id');

      return res.json(categories[0]);
    });
  }
};
