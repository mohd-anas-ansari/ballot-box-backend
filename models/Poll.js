//Require Mongoose
const mongoose = require("mongoose");

//Create Schema
const pollSchema = new mongoose.Schema({
	question: {
		type: String,
		required: true,
	},

	optionA: {
		type: String,
	},

	optionB: {
		type: String,
	},
	// createdBy: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: "User",
	// },
});

//Create Model
module.exports = mongoose.model("Poll", pollSchema);
