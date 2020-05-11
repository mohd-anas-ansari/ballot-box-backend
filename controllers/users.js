const User = require("../models/User");

module.exports = {
	registerForm: function (req, res) {
		res.render("register");
	},

	registerUser: async function (req, res) {
		try {
			let user = await User.create(req.body);
			// res.json({ success: true, message: "Welcome User", user });
			res.redirect("/api/v1/users/login");
		} catch (error) {
			console.log(error, "error");
			res.send(error.message);
		}
	},

	showloggedinUsers: async function (req, res) {
		try {
			let allUsers = await User.find({});
			res.json(allUsers);
		} catch (error) {
			res.json(error.message);
		}
	},

	loginForm: function (req, res) {
		res.render("login");
	},

	loginAuth: async function (req, res) {
		try {
			let user = await User.findOne({ email: req.body.email });
			if (!user) return res.json({ success: false, message: "User not found" });
			res.json({ success: true, message: "Welcome Logged In User", user });
		} catch (error) {
			console.log(error, "error");
			res.send(error.message);
		}
	},
};
