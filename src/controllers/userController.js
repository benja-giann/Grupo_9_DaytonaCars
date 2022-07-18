let { validationResult } = require('express-validator');
let db = require('../database/models');

const controller = {
  renderRegister: (req, res) => {
    return res.render('register', { errors: [] });
  },
  register: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Usuarios.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.redirect('/');
    } else {
      res.render('register', { errors: errors.array(), old: req.body });
    }
  },
  renderLogin: (req, res) => {
    return res.render('login');
  },
  login: (req, res) => {
    db.Usuarios.findAll({
      where: {
        email: req.body.email,
      },
    }).then(function (usuario) {
      req.session.usuario = usuario[0];
      res.cookie('usuario', usuario[0]);
      res.redirect('/');
    });
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('usuario');
    res.locals.usuario = null;
    res.redirect('/');
  },
  perfil: (req, res) => {
    return res.render('perfil');
  },
  historial: (req, res) => {
    db.Carros.findAll({
      where: {
        comprador: req.session.usuario.id,
      },
    }).then((carros) => {
      return res.render('historial', { carros: carros });
    });
  },
};

let apiController = {
  listado: function (req, res) {
    db.Usuarios.findAll().then(function (usuarios) {
      res.json(usuarios);
    });
  },
};

module.exports = { controller, apiController };
