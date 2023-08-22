const path = require("path");
const express = require("express");
const app = express();

const mainRoutes = require("./routes/mainRoutes");
const productRoutes = require("./routes/productRoutes");
const shoppingRoutes = require("./routes/shoppingRoutes");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", [
	path.join(__dirname, "./views"),
	path.join(__dirname, "./views/products"),
	path.join(__dirname, "./views/shoppingCart"),
]);
// identifica los archivos de la carpeta public como css e imagenes
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(
	session({
		secret: "mlibre",
		resave: false,
		saveUninitialized: true,
	})
);

// routes
app.use(mainRoutes);
app.use("/products", productRoutes);
app.use("/shoppingCart", shoppingRoutes);

app.listen(3001, () => {
	console.log("Escuchando en el servidor 3001");
});
