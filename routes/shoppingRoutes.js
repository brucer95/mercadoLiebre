const express = require("express");
const path = require("path");
const router = express.Router();
const shoppingControllers = require("../controllers/shoppingControllers");
const { allowAdmin } = require("../middleware/authUser");

router.get("/", allowAdmin, shoppingControllers.shoppingCart);

module.exports = router;
