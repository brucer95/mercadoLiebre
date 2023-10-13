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

			res.cookie("userCookie", searchedUser.username, {
				maxAge: 7 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			});

			res.render("home", {
				user: searchedUser,
				productos: productos,
			});
		} catch (error) {
			"Hubo un problema" + console.log(error);
		}
	},
	logOut: (req, res) => {
		res.clearCookie("userCookie");

		req.session.destroy();

		res.redirect("/login");
	},
	editUser: async (req, res) => {
		const idedit = req.params.id;
		try {
			const edituser = await User.findOne({
				where: { id: idedit },
			});

			if (!edituser) {
				return res.send("error al modificar el usuario");
			}
			res.render("editUser", {
				edituser,
				user: req.session.user,
			});
		} catch (error) {
			"ha surgido un error" + console.log(error);
		}
	},
	modifiedUser: async (req, res) => {
		const userId = req.params.id;
		const { username, email } = req.body;

		try {
			const userpost = await User.findOne({
				where: { id: userId },
			});
			if (!userpost) {
				return res.send("no se puede acceder al usuario");
			}

			await userpost.update({ username, email });

			req.session.user = userpost;

			const productos = await Product.findAll({ raw: true });

			res.locals.successMessage = "Usuario Modificado";

			res.render("home", {
				user: req.session.user,
				productos: productos,
				successMessage: "Nombre modificado con éxito",
			});
		} catch (error) {
			console.log("Error al modificar el usuario: " + error);
		}
	},
};

module.exports = controllers;
