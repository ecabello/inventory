/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 var passport = require('passport');

module.exports = {
  login: function (req, res) {
    res.view();
  },

  processLogin: function(req, res){
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return res.send({
          message: 'login failed'
        });
        res.send(err);
      }
      req.logIn(user, function(err) {
        if (err) res.send(err);
        return res.send({
          message: 'login successful'
        });
      });
    })(req, res);
  },

  logout: function (req,res){
    req.logout();
    res.send('logout successful');
  }
};


module.exports.blueprints = {
  // Expose a route for every method
  actions: true,

  // Expose a RESTful API
  rest: true,

  // Expose simple CRUD shortcuts
  shortcuts: true
};
