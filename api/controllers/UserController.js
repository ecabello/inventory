/**
 * UserController
 *
 * @description :: Server-side logic for managing users and login functionality
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require('passport');
// Common login functionality
var loginCallback = function(err, user, network, req, res) {
    if (err || !user) {
        sails.log.info(network + ' authentication failed');
        return res.send({
            success : false,
            messages: ['login failed']
        });
    }
    req.logIn(user, function(err) {
        if (err)
          return res.send(err);

        return res.send({
            success : true,
            messages: ['login successful'],
            user: user
        });
    });
};

module.exports = {
    login: function(req, res) {
        res.render('user/login', {
            name: 'Rey'
        });
    },

    processLogin: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            return loginCallback(err, user, 'Local', req, res);
        })(req, res);
    },

    logged: function(req, res) {
      if (req.isAuthenticated())
        return res.json(req.user);

      return res.notFound('No user is logged in');
    },

    googleLogin: function(req, res) {
        var success = req.param('success');
        var fail = req.param('fail');
        sails.log.info('success: ' + success);
        sails.log.info('fail: ' + fail);
        passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/plus.login', 'email']
        }, function(err, user) {
            return loginCallback(err, user, 'Google', req, res);
        })(req, res);
    },

    facebookLogin: function(req, res) {
        passport.authenticate('facebook', {
            scope: ['email']
        }, function(err, user) {
            return loginCallback(err, user, 'Facebook', req, res);
        })(req, res);
    },

    twitterLogin: function(req, res) {
        passport.authenticate('twitter', {}, function(err, user) {
            return loginCallback(err, user, 'twitter', req, res);
        })(req, res);
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    },

    create: function(req, res) {
      var user = req.body ? req.body : req.params;
      if (!user.username)
        return res.badRequest('No username provided');

      if (!user.password)
        return res.badRequest('No password provided');

      User.findOne({username: user.username}).exec(function(err, existing) {
        if (err)
          return res.serverError(err.message);

        if (existing)
          return res.badRequest('Specified username is already taken');

        user.provider = 'local';
        if (!('type' in user))
            user.type = 'individual';

        // Create User
        User.create(user, function(err, user) {
          if (err)
            return res.serverError(err.message);

          return res.json(user);
        });
      });
    },

    update: function(req, res) {
      var fields = req.body ? req.body : req.params;

      User.findOne({id: req.user.id}).exec(function(err, user) {
        if (err)
          return res.serverError(err.message);

        if (!user)
          return res.notFound('No record found with the specified id');

        function saveUser(user) {
          // Hash password
          User.hashPassword(fields, function(err){
            if (err)
              return res.serverError(err.message);

            // Update the user
            User.update({id: user.id}, fields).exec(function(err, users) {
              if (err)
                return res.serverError(err.message);

              return res.json(users[0]);
            });
          });
        }
        // If trying to change username, check for collisions...
        if ('username' in fields) {
          User.findOne({username: fields.username}).exec(function(err, existing) {
            if (err)
              return res.serverError(err.message);
            // if existing and not the same user
            if (existing && existing.id != user.id)
              return res.badRequest('Specified username is already taken');
            else
              saveUser(user);
          });
        }
        else
          saveUser(user);
      });
    }
};

module.exports.blueprints = {
    // Expose a route for every method
    actions: true,
    // Expose a RESTful API
    rest: true,
    // Expose simple CRUD shortcuts
    shortcuts: false
};
