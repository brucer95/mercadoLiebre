const path = require("path");
const express = require("express");
const app = express();

const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// identifica los archivos de la carpeta public como css e imagenes
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use(mainRoutes);

app.listen(3001, () => {
	console.log("Escuchando en el servidor 3001");
});
