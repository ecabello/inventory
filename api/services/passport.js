var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcryptjs');

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

      // Hash compare
      bcrypt.compare(password, user.password, function (err, res) {
        if (!res)
          return done(null, false, {message: 'Invalid Password'});
        // Hash matched
        var returnUser = {
          id: user.id,
          username: user.username,
          createdAt: user.createdAt
        };
        return done(null, returnUser, {message: 'Logged In Successfully'});
      });
    });
  }
));
