const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/login" }),
	function (req, res) {
		// Successful authentication, redirect home.
		console.log("success");
		res.redirect("/");
	}
);

router.get("/social_logout", (req, res) => {
	req.logout();
});

router.get("/", (req, res) => {
	res.status(200).json({
		message: "homepage",
	});
});

router.get("/api/current_user", (req, res) => {
	console.log(req.user);
});
module.exports = router;
