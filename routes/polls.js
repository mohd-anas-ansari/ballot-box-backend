const express = require("express");
const router = expess.Router();



router.get("/", pollController);

module.exports = router;
