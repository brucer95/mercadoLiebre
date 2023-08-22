const path = require("path");

const controllers = {
	shoppingCart: (req, res) => {
		res.render("shoppingCart", {
			user: req.session.user,
		});
	},
};

module.exports = controllers;
