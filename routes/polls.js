const express = require("express");

const router = express.Router();

//require polls Controllers
const pollsController = require("../controllers/polls");

router.get("/", pollsController.getPolls);
router.post("/create", pollsController.createPoll);

module.exports = router;
