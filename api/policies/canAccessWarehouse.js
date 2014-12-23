/**
* canAccessWarehouse
*
* @module      :: Policy
* @description :: Checks is the logged user has permission to access a warehouse
* @docs        :: http://sailsjs.org/#!documentation/policies
*
*/
module.exports = function(req, res, next) {
  var warehouseId = req.param('warehouse');
  if (!warehouseId)
    return res.serverError('No warehouse specified');

  SecurityManager.checkWarehousePermission(req.user, 'access', warehouseId, function(err, permission) {
    // Unexpected error occurred-- skip to the app's default error (500) handler
    if (err)
      return next(err);

    // No permission exists giving this user access to the requested warehouse.
    if (!permission)
      return res.forbidden('You dont have access to this warehouse');

    // If we made it all the way down here, looks like everything's ok, so we'll let the user through
    next();
  });
};
