const express = require("express");
const path = require("path");
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname,"../", "public")));


app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")))

app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views", "carrito.html")))

app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")))

app.get("/detalles-del-producto", (req, res) => res.sendFile(path.join(__dirname, "views", "detalles-del-producto.html")))

app.listen(port, () => console.log("estoy funcionando en el puerto " + port));