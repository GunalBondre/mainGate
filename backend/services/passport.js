const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");
const User = require("../models/user.model");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});
passport.use(
	new GoogleStrategy(
		{
			clientSecret: keys.googleClientSecret,
			clientID: keys.googleClientID,
			callbackURL: "/users/auth/google/callback",
		},
		async function (accessToken, refreshToken, profile, cb, done) {
			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				console.log("user already exists");
				return done(null, existingUser);
			}
			const user = await new User({
				googleId: profile.id,
				googleProfileName: profile.displayName,
			}).save();

			done(null, user);
		}
	)
);
