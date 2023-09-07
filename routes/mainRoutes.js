const express = require("express");
const path = require("path");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
const validar = require("../middleware/validations");
const upload = require("../middleware/userImg");
const { allowUnsignedIn } = require("../middleware/authUser");

router.get("/", [upload.single("imageUrl")], mainControllers.inicio);
router.get("/register", allowUnsignedIn, mainControllers.register);
router.post(
	"/register",
	[upload.single("profileImg")],
	mainControllers.registerUser
);
router.get("/login", allowUnsignedIn, mainControllers.login);
router.post("/login", mainControllers.loginController);

module.exports = router;
