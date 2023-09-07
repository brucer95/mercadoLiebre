module.exports = (Sequelize, DataType) => {
	const alias = "Product";
	const cols = {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
		},
		price: {
			type: DataType.DECIMAL(10, 2),
			validate: {
				isDecimal: true,
			},
		},
		description: {
			type: DataType.STRING(2000),
			allowNull: false,
		},
		imageUrl: {
			type: DataType.STRING,
		},
		off: {
			type: DataType.DECIMAL(10, 2),
			validate: {
				isDecimal: true,
			},
		},
	};
	const config = {
		tableName: "products",
		timestamps: false,
	};
	const Product = Sequelize.define(alias, cols, config);

	return Product;
};
