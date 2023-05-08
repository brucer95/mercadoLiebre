const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
	res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(5050, () => {
	console.log("La aplicación está escuchando en el puerto 5050");
});
