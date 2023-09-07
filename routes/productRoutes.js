const express = require("express");
const path = require("path");
const router = express.Router();
const productControllers = require("../controllers/productControllers");
const upload = require("../middleware/userImg");

router.get("/", [upload.single("imageUrl")], productControllers.products);

module.exports = router;