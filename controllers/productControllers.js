const path = require("path");
const { Product } = require("../database/models");

const controllers = {
	products: async (req, res) => {
		try {
			const productos = await Product.findAll({ raw: true });
			res.render("products", {
				user: req.session.user,
				productos: productos,
			});
		} catch (error) {
			console.error("Error al obtener los productos:", error);
			res.status(500).send("Error al obtener los productos.");
		}
	},
};

module.exports = controllers;
