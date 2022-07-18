let db = require('../database/models');

let carrosController = {
  listado: function (req, res) {
    db.Carros.findAll().then(function (carros) {
      res.render('productos', { carros: carros });
    });
  },
  detalle: function (req, res) {
    db.Carros.findByPk(req.params.id).then(function (carro) {
      carro.fichaTecnica = carro['ficha-tecnica'];
      res.render('detalle', { carro: carro });
    });
  },
  crear: (req, res) => {
    return res.render('crear');
  },
  guardado: function (req, res) {
    db.Carros.create({
      name: req.body.name,
      descuento: req.body.descuento,
      precio: req.body.precio,
      'ficha-tecnica': req.body.ficha_tecnica,
      marca: req.body.marca,
    });
    res.redirect('/carros');
  },
  comprar: function (req, res) {
    db.Carros.update({ comprador: res.locals.usuario.id }, { where: { id: req.params.carroId } });
    res.redirect('/users/historial');
  },
};

let carrosApiController = {
  listado: function (req, res) {
    db.Carros.findAll().then(function (carros) {
      res.json(carros);
    });
  },
  comprados: function (req, res) {
    db.Carros.findAll({
      where: {
        comprador: req.params.usuario,
      },
    }).then((carros) => {
      res.json(carros);
    });
  },
};

module.exports = { carrosController, carrosApiController };
