/**
 * setLoggedUserAsOwner
 *
 * @module      :: Policy
 * @description :: Simple policy that injects the logged user as the owner
  * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    if (req.method === 'POST' || req.method === 'PUT')
      req.body.owner = req.user.id;
    else if (req.method === 'GET')
      req.query.owner = req.user.id;

    return next();
  }

  // User is not allowed
  return res.forbidden('You need to login to execute this action');
};
