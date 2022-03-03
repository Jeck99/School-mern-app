const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user-model');

const opts = {  
    secretOrKey: process.env.JWT_SECRET
};
opts.jwtFromRequest= ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.user._id)
            .then(user => {
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => {
                console.log(err);
                return done(err, false);
            });
    }));
}