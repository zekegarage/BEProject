const express = require("express");
const router = express.Router();
const controller = require("../controller/main.controller.js")

router.get("/", controller.main_get);

module.exports = router;