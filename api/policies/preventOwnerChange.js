/**
 * preventOwnerChange
 *
 * @module      :: Policy
 * @description :: Simple policy that prevents specifying an owner
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {
  if (req.method === 'POST' || req.method === 'PUT')
    delete req.body.owner;
  else if (req.method === 'GET')
    delete req.query.owner;

  return next();
};
