const path = require("path");

const controllers = {
	products: (req, res) => {
		res.render("products");
	},
};

module.exports = controllers;
