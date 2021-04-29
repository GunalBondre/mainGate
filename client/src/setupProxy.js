const createProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
	app.use(
		["/users/api", "/auth/google"],
		createProxyMiddleware({
			target: "http://localhost:5000",
		})
	);
};
