const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		userName: { type: "String" },
		googleId: { type: "String" },
		googleProfileName: { type: "String" },
		email: { type: "String" },
	},
	{ timestam: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
