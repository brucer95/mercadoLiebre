const ExpressValidator = require("express-validator");
const userModel = require("../database/models/User");

const validaciones = {
	validacionesRegistro: [
		ExpressValidator.body("username")
			.custom(async (value) => {
				const usuarioExistente = await userModel.findOne({
					where: { username: value },
				});
				if (usuarioExistente) {
					throw new Error("El nombre de usuario ya está en uso");
				}
			})
			.trim()
			.notEmpty()
			.withMessage("El nombre de usuario es requerido"),

		ExpressValidator.body("email")
			.trim()
			.notEmpty()
			.withMessage("El correo electrónico es requerido")
			.isEmail()
			.withMessage("El correo electrónico debe ser válido")
			.custom(async (value) => {
				const emailExistente = await userModel.findOne({
					where: { email: value },
				});
				if (emailExistente) {
					throw new Error("El correo electrónico ya está en uso");
				}
			}),

		ExpressValidator.body("password")
			.trim()
			.notEmpty()
			.withMessage("La contraseña es requerida")
			.isLength({ min: 8 })
			.withMessage("La contraseña debe tener al menos 8 caracteres")
			.matches(/[A-Z]/)
			.withMessage(
				"La contraseña debe contener al menos una letra mayúscula"
			),

		ExpressValidator.body("confirmPassword").custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error("Las contraseñas no coinciden");
			}
			return true;
		}),
	],
};

module.exports = validaciones;
