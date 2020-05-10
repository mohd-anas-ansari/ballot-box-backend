var express = require("express");
var router = express.Router();

//require controller
const userController = require("../controllers/users");

/* GET users listing. */
router.get("/", userController.loggedinUsers);
//POST handle login route
router.post("/login", userController.loginAuth);
//GET Login form
router.get("/login", userController.loginForm);
//POST handle Register route
router.post("/register", userController.registerUser);

//export the router
module.exports = router;
