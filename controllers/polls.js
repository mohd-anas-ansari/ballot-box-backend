const Poll = require("../models/Poll");
module.exports = {
	//GET all polls
	getPolls: async function (req, res) {
		try {
			let allPolls = await Poll.find({});
			res.json(allPolls);
		} catch (error) {
			res.json(error.message);
		}
  },
  
	//POST create new poll
	createPoll: async function (req, res) {
		try {
			let poll = await Poll.create(req.body);
			res.json({ success: true, poll });
		} catch (error) {
			res.send(error.message);
		}
	},
};
