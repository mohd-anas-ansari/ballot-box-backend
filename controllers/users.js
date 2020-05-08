const User = require("../models/User");

module.exports = {
	registerUser: async function (req, res, next) {
		try {
			let user = await User.create(req.body);
			res.json({ success: true, message: "Welcome User", user });
		} catch (error) {
			console.log(error, "error");
			res.status(400).send(error.message);
		}
	},

	loginForm: function (req, res, next) {
		res.send("User page");
	},

	loginAuth: function (req, res, next) {},
};
