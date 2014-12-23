/**
* isAdmin
*
* @module      :: Policy
* @description :: Simple policy that checks if current user is an admin
* @docs        :: http://sailsjs.org/#!documentation/policies
*
*/
module.exports = function(req, res, next) {
  SecurityManager.checkGeneralPermission(req.user, 'admin', function(err, permission) {
    // Unexpected error occurred-- skip to the app's default error (500) handler
    if (err)
      return next(err);

    // No permission exists indicating this user is an admin
    if (!permission)
      return res.forbidden('You need to be an Administrator to execute this action');

    // If we made it all the way down here, looks like everything's ok, so we'll let the user through
    next();
  });
};
