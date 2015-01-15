/**
 * UserController
 *
 * @description :: Server-side logic for managing users and login functionality
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 var passport = require('passport');

 // Common login functionality
 var loginCallback=function(err, user, network, req, res) {
   if (err || !user) {
     sails.log.info(network  + ' authentication failed');
     return res.send({
       message: 'login failed'
     });
   }
   req.logIn(user, function(err) {
     if (err)
       return res.send(err);

     return res.send({
       message: 'login successful'
     });
   });
 };

module.exports = {

  login: function (req, res) {
    res.view();
  },

  processLogin: function(req, res){
    passport.authenticate('local', function(err, user, info) {
      return loginCallback(err, user, 'Local', req, res);
    })(req, res);
  },

  googleLogin: function(req, res) {
    passport.authenticate('google', {scope: ['https://www.googleapis.com/auth/plus.login', 'email']},
      function(err, user) {
        return loginCallback(err, user, 'Google', req, res);
      }
    )(req, res);
  },

  facebookLogin: function(req, res) {
    passport.authenticate('facebook', { scope: ['email'] },
      function(err, user) {
        return loginCallback(err, user, 'Facebook', req, res);
      }
    )(req, res);
  },

  twitterLogin: function(req, res) {
    passport.authenticate('twitter', {},
      function(err, user) {
        return loginCallback(err, user, 'twitter', req, res);
      }
    )(req, res);
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
