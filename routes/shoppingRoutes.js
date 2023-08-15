const express = require("express");
const path = require("path");
const router = express.Router();
const shoppingControllers = require("../controllers/shoppingControllers");

router.get("/", shoppingControllers.shoppingCart);

module.exports = router;
