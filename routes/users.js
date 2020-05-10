var express = require("express");
var router = express.Router();

//require controller
const userController = require("../controllers/users");

/* GET users listing. */
router.get("/", userController.loginForm);
router.post("/login", userController.loginAuth);
router.post("/register", userController.registerUser);

module.exports = router;
