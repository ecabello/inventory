/**
* canAffectInventory
*
* @module      :: Policy
* @description :: Checks if the logged user has permission to affect a Product's inventory
* @docs        :: http://sailsjs.org/#!documentation/policies
*
*/
module.exports = function(req, res, next) {
  var userId = req.user.id;
  var productId = req.param('product'); //req.body.product;
  if (!productId)
    return res.badRequest('No product specified');
  var quantity = req.param('quantity'); //req.body.quantity;
  if (!quantity)
    return res.badRequest('No quantity specified');

  var action = (quantity > 0) ? 'add' : 'remove';

  SecurityManager.checkProductPermission(req.user, action, productId, function(err, permission) {
    // Unexpected error occurred-- skip to the app's default error (500) handler
    if (err)
      return next(err);

      // No permission exists giving this user permission to affect inventory in this manner
    if (!permission)
      return res.forbidden('You are not allowed to affect inventory for this product in the manner requested');

    // If we made it all the way down here, looks like everything's ok, so we'll let the user through
    next();
  });
};
