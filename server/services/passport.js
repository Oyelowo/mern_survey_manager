const passport = require('passport');
const {Strategy: GoogleStrategy} = require('passport-google-oauth20');
const keys = require('../config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
console.log('accessToken', accessToken);
console.log('refreshToken', refreshToken);
console.log('profile', profile);
}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));