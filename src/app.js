const express = require("express");
const path = require("path");
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname,"../", "public")));


app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")));

app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")));

app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")));

app.get("/productos", (req, res) => res.sendFile(path.join(__dirname, "views", "productos.html")));

app.get("/detalle-producto", (req, res) => res.sendFile(path.join(__dirname, "views", "detalle-producto.html")));

app.get("/detalle-producto2", (req, res)=> res.sendFile(path.join(__dirname,"views","detalle-producto2.html")));

app.get("/detalle-producto3", (req, res)=> res.sendFile(path.join(__dirname,"views","detalle-producto3.html")));

app.get("/detalle-producto4", (req, res)=> res.sendFile(path.join(__dirname,"views","detalle-producto4.html")));

app.get("/detalle-producto5", (req, res)=> res.sendFile(path.join(__dirname,"views","detalle-producto5.html")));

app.get("/detalle-producto6", (req, res)=> res.sendFile(path.join(__dirname,"views","detalle-producto6.html")));

app.get("/detalle-producto7", (req, res)=> res.sendFile(path.join(__dirname,"views","detalle-producto7.html")));

app.get("/detalle-producto8", (req, res)=> res.sendFile(path.join(__dirname,"views","detalle-producto8.html")));

app.get("/detalle-producto9", (req, res)=> res.sendFile(path.join(__dirname,"views","detalle-producto9.html")));

app.get("/servicios", (req, res) => res.sendFile(path.join(__dirname, "views", "servicios.html")));

app.get("/ayuda", (req, res) => res.sendFile(path.join(__dirname, "views", "ayuda.html")));

app.get("/carrito", (req, res) => res.sendFile(path.join(__dirname, "views", "carrito.html")));

app.listen(port, () => console.log("estoy funcionando en el puerto " + port));