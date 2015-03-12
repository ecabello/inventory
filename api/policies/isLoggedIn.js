/**
 * isLoggedIn
 *
 * @module      :: Policy
 * @description :: Simple policy that checks if the user is logged in
 *                 Assumes that your login action in one of your controllers calls req.logIn
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {
  // User is allowed, proceed to controller
  if (req.isAuthenticated())
    return next();

  // User is not allowed
  return res.forbidden({error: 'You need to login to execute this action'});
};
