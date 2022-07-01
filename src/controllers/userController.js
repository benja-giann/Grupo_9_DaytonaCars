const { detalle } = require("./productosController");

const controller = {
   register: (req, res) => {
      return res.render("register");
   },
   login: (req, res) => {
      return res.render("login");
   },
   perfil: (req, res) => {
      return res.render("perfil");
   },
}

module.exports = controller;