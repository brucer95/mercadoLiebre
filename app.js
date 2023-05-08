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

const port = process.env.port || 3001;
app.listen(port, () => console.log("servidor corriendo en el puerto 3001"));
