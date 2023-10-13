const express = require("express");
const path = require("path");
const router = express.Router();
const productControllers = require("../controllers/productControllers");
const upload = require("../middleware/userImg");
const { allowAdmin } = require("../middleware/authUser");

router.get("/", [upload.single("imageUrl")], productControllers.products);
router.get("/:id/productDetail", productControllers.detail);
router.get("/:id/edit", allowAdmin, productControllers.edit);
router.put("/:id/edit", allowAdmin, productControllers.modified);

module.exports = router;
