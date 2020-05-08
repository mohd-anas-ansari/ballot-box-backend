var express = require("express");
var router = express.Router();

//require controller
const userController = require("../controllers/users");

/* GET users listing. */
router.get("/", userController.loginForm);

module.exports = router;
