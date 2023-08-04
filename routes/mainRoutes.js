const express = require("express");
const path = require("path");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.inicio);
router.get("/register", mainControllers.register);

module.exports = router;
