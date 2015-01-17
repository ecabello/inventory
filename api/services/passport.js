var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
GitHubStrategy = require('passport-github').Strategy,
FacebookStrategy = require('passport-facebook').Strategy,
GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
TwitterStrategy = require('passport-twitter').Strategy;


// Passport session support.
// In a typical web application, the credentials used to authenticate a user will
// only be transmitted during the login request. If authentication succeeds,
// a session will be established and maintained via a cookie set in the user's
// browser.
// Each subsequent request will not contain credentials, but rather the unique
// cookie that identifies the session. In order to support login sessions,
// Passport will serialize and deserialize user instances to and from the session.
// Typically, this will be as simple as storing the user ID when serializing,
// and finding the user by ID when deserializing.
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findOne(id, function (err, user) {
    if (err)
      return done(null, null);
    return done(null, user);
  });
});


passport.initStrategies=function() {
  // Use the LocalStrategy within Passport.
  // Strategies in passport require a `verify` function, which accept
  // credentials (in this case, a username and password), and invoke a callback
  // with a user object.
  passport.use(new LocalStrategy(
    function (username, password, done) {
      // locate user in the db
      User.findOne({ username: username }, function (err, user) {
        if (err)
          return done(err);
        // Couldnt locate user
        if (!user)
          return done(null, false, { message: 'Unknown user ' + username });

        var bcrypt = require('bcryptjs');
        // Hash compare
        bcrypt.compare(password, user.password, function (err, res) {
          if (!res)
            return done(null, false, {message: 'Invalid Password'});
          // Hash matched
          var returnUser = {
            id: user.id,
            name: user.name,
            username: user.username,
            createdAt: user.createdAt
          };
          return done(null, returnUser, {message: 'Logged In Successfully'});
        });
      });
    }
  ));

  // Verify function for all social networks
  var socialVerify = function(token, tokenSecret, profile, done) {
    User.findOne({uid: profile.id}, function(err, user) {
      if (err)
        return done(err);

      // If the user is found, return it.
      if (user)
        return done(null, user, {message: 'Logged In Successfully'});

      //return done(null, false, {message: 'No user found'});

      // Not found, create one
      var data = {
        provider: profile.provider,
        uid: profile.id,
        name: profile.displayName,
        type: 'individual'
      };

      if (profile.emails && profile.emails[0] && profile.emails[0].value)
        data.email = profile.emails[0].value;

      if (profile.name && profile.name.givenName)
        data.firstname = profile.name.givenName;
      if (profile.name && profile.name.familyName)
        data.lastname = profile.name.familyName;

      User.create(data, function(err, user) {
        sails.log.info(user.name + ', a ' + user.provider + ' user was created');
        return done(err, user);
      });
    });
  };

  passport.use(new GitHubStrategy({
    clientID: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    callbackURL: "http://localhost:1337/github/return"
  }, socialVerify));

  passport.use(new FacebookStrategy({
    clientID: "624281547701619",
    clientSecret: "edcdde6c19ce96711c6cb2e451039d8e",
    //callbackURL: "http://localhost:1337/facebook/return"
    callbackURL: "https://nameless-island-7983.herokuapp.com/facebook/return"
  }, socialVerify));

  passport.use(new GoogleStrategy({
    clientID: '236188842599-kotmjf2ba9002spg42n4bjgrtqng4mlr.apps.googleusercontent.com',
    clientSecret: 'PdgdRaq8VJC6EZjS5-Epf9RF',
    callbackURL: 'https://nameless-island-7983.herokuapp.com/google/return',
  }, socialVerify));

  passport.use(new TwitterStrategy({
    consumerKey: 'x0UbWhxkG0MVlYXk8e8xhkS05',
    consumerSecret: '6rmGDeSQwU348HAYznqOi3HgMHKdkZMWovO8O5fUXVNlxDK2FK',
    //callbackURL: 'http://localhost:1337/twitter/return'
    callbackURL: "https://nameless-island-7983.herokuapp.com/twitter/return"
  }, socialVerify));
};
