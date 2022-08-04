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
      }).then((usuarioData) => {
       const user = usuarioData.toJSON();
       req.session.usuario = user.id;
       res.cookie('usuario', user['id']);
       res.redirect('/users/perfil')})
        } else {
      res.render('register', { errors: errors.array(), old: req.body });
    }
  },
  renderLogin: (req, res) => {
    return res.render('login', {errors:[{msg:''}]});
  },
  login: (req, res) => {
    db.Usuarios.findOne({
      where: {
        email: req.body.email,
      },
    }).then(function (usuario) {
      if (usuario) {
        const user = usuario.toJSON();
        console.log('userrr', user.id)
        req.session.usuario = user.id;
        res.cookie('usuario', user);
        res.redirect('/');
      } else {
        res.render('login', {errors: [{msg:'Error, no se encontro usuario con ese correo'}]})
      }
    });
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('usuario');
    res.locals.usuario = null;
    res.redirect('/');
  },
  perfilUsuario:(req, res)=>{
    db.Usuarios.findByPk(req.params.id).then(function (usuario) {
      res.render("perfilUsuario",
        { usuario: usuario});
    })
  },

  perfil: (req, res) => {

    if (req.session.usuario) {
     db.Carros.findAll({
      where: {
        comprador: req.session.usuario,
      },
    }).then((carrosdata) => {
        //const carros = JSON.stringify(carrosdata, null, 2)
        return res.render('perfilUsuario', {carros:carrosdata})
      });
    
     // db.Usuarios.findOne({
       // where: {
       //   id: req.session.usuario,
       // },
      //}).then((datosDeUsuario) => {
      //  return res.render('perfilUsuario', {datos:datosDeUsuario.toJSON()});
      //});
    }
   // return res.render('perfilUsuario', {carros:[]});     
  },
  edit: function (req, res) {
    db.Usuario.findByPk(req.params.id)
      .then(function (usuario) {
        res.render("editarUsuario",
          { usuario: usuario});
      })
  },
  update: function(req, res){
    db.Usuario.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },{
      where:{
        id: req.params.id
      }
    })
    res.redirect("/perfil/edit/" + req.params.id)
  },
  delete: function (req, res) {
    db.Carros.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect("/home")
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
