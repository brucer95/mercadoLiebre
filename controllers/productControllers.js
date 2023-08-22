const path = require("path");

const controllers = {
	products: (req, res) => {
		res.render("products", {
			user: req.session.user,
		});
	},
};

module.exports = controllers;
