/**
* canAccessProduct
*
* @module      :: Policy
* @description :: Checks if the logged user has permission to access a Product
* @docs        :: http://sailsjs.org/#!documentation/policies
*
*/
module.exports = function(req, res, next) {
  var productId = req.param('product');
  if (!productId)
    return res.serverError('No product specified');

  SecurityManager.checkProductPermission(req.user, 'access', productId, function(err, permission) {
    // Unexpected error occurred-- skip to the app's default error (500) handler
    if (err)
      return next(err);

      // No permission exists giving this user access to the requested product.
    if (!permission)
      return res.forbidden('You dont have access to this Product');

    // If we made it all the way down here, looks like everything's ok, so we'll let the user through
    next();
  });
};
