const express = require("express");
const app = express();
require("./services/passport");
require("./models/db");
const keys = require("./config/keys");
const cors = require("cors");
const users = require("./routes/authRoutes");
const cookieSession = require("cookie-session");
const passport = require("passport");
const { initialize } = require("passport");
const port = process.env.PORT || 5000;
app.use(express.json());

app.use(
	cookieSession({
		name: "session",
		keys: [keys.cookieKey],
		maxAge: 30 * 24 * 60 * 60 * 1000,
	})
);
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
app.use("/users", users);

app.listen(port);
