/**
 * preventOwnerChange
 *
 * @module      :: Policy
 * @description :: Simple policy that prevents specifying a url
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {
  if (req.method === 'POST' || req.method === 'PUT')
    delete req.body.url;
  else if (req.method === 'GET')
    delete req.query.url;

  return next();
};
