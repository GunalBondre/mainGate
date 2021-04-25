const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		userName: "String",
		googleId: "String",
		googleProfileName: "String",
	},
	{ timestam: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
