//Require Mongoose
const mongoose = require("mongoose");

//Create Schema
const pollSchema = new mongoose.Schema({
	question: {
		type: String,
		required: true,
	},

	yes: {
		type: Number,
	},

	no: {
		type: Number,
	},
});

//Create Model
module.exports = mongoose.model("Poll", pollSchema);
