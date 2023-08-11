const express = require("express");
const path = require("path");
const router = express.Router();
const productControllers = require("../controllers/productControllers");

router.get("/", productControllers.products);

module.exports = router;
