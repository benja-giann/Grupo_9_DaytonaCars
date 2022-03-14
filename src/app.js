const express = require("express");
const path = require("path");
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname,"../", "public")));


app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")))


app.listen(port, () => console.log("estoy funcionando en el puerto " + port));