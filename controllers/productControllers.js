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
	detail: async (req, res) => {
		const id = Number(req.params.id);
		try {
			const detailProduct = await Product.findByPk(id);

			if (!detailProduct) {
				return res.send("error de ID");
			}

			res.render("productDetail", {
				title: "Detalle del producto",
				detailProduct,
				user: req.session.user,
			});
		} catch (error) {
			console.log(error);
			res.send("Error inesperado");
		}
	},
	edit: async (req, res) => {
		const idEdit = Number(req.params.id);

		try {
			const editProduct = await Product.findByPk(idEdit);

			if (!editProduct) {
				return res.send("Error de id");
			}

			res.render("edit", {
				title: "editar productos",
				editProduct,
				user: req.session.user,
			});
		} catch (error) {
			res.send("error al editar");
			console.log(error);
		}
	},
	modified: async (req, res) => {
		const modifiedProduct = req.body;
		try {
			await Product.update(modifiedProduct, {
				where: {
					id: req.body.id,
				},
			});
			const productos = await Product.findAll({ raw: true });

			res.render("products", {
				user: req.session.user,
				productos: productos,
			});
		} catch (error) {
			console.log(error);
		}
	},
};

module.exports = controllers;
