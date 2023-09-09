const ExpressValidator = require("express-validator");
const path = require("path");
const { User } = require("../database/models");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { Product } = require("../database/models");

const controllers = {
	inicio: async (req, res) => {
		try {
			const productos = await Product.findAll({ raw: true });
			res.render("home", {
				user: req.session.user,
				productos: productos,
			});
		} catch (error) {
			res.send("Ocurrio un Error");
			console.log(error);
		}
	},
	register: (req, res) => {
		res.render("register", {
			errors: [],
			values: {},
			user: req.session.user,
		});
	},
	login: (req, res) => {
		res.render("login", {
			errors: {},
			user: req.session.user,
		});
	},
	registerUser: async (req, res) => {
		const user = {
			...req.body,
		};

		const newPassword = bcrypt.hashSync(user.password, 12);
		user.hashedpw = newPassword;
		user.profileImg = "/images/uploads/profile-img/" + req.file.filename;
		if (user.email.endsWith("@mercadoliebre.com.ar")) {
			user.admin = true;
		} else {
			user.admin = false;
		}
		user.uuid_id = uuidv4();
		try {
			User.create(user);

			res.render("registerSuccess", {
				title: "Bienvenido",
				user: req.session.user,
				nuevoUsuario: user.first_name,
			});
		} catch (error) {
			console.log(error);
			res.send("Error al intentar crear el usuario");
		}
	},
	loginController: async (req, res) => {
		try {
			const searchedUser = await User.findOne({
				where: { email: req.body.email },
				raw: true,
			});
			console.log(searchedUser);

			if (!searchedUser) {
				return res.render("login", {
					errors: "Usuario o Contraseña INVALIDOS",
					user: req.session.user,
				});
			}
			console.log(
				"Contraseña ingresada por el usuario:",
				req.body.password
			);
			console.log(
				"Contraseña hash almacenada en la base de datos:",
				searchedUser.hashedpw
			);

			const isCorrect = await bcrypt.compareSync(
				req.body.password,
				searchedUser.hashedpw
			);
			if (!isCorrect) {
				return res.render("login", {
					errors: "Usuario o Contraseña INVALIDOS",
					user: req.session.user,
				});
			}

			req.session.user = searchedUser;
			console.log(searchedUser);

			const productos = await Product.findAll({ raw: true });

			res.render("home", {
				user: searchedUser,
				productos: productos,
			});
		} catch (error) {
			"Hubo un problema" + console.log(error);
		}
	},
};

module.exports = controllers;
