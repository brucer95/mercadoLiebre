const path = require("path");

const controllers = {
	shoppingCart: (req, res) => {
		res.render("shoppingCart");
	},
};

module.exports = controllers;
