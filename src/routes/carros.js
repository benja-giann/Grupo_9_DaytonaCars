var express = require('express');
var router = express.Router();
var { carrosController, carrosApiController } = require('../controllers/carrosController');

router.get('/', carrosController.listado);
router.get('/crear', carrosController.crear);
router.post('/crear', carrosController.guardado);
router.get('/detalle/:id', carrosController.detalle);
router.post('/comprar/:carroId', carrosController.comprar);

router.get('/listado', carrosApiController.listado);
router.get('/comprados/:usuario', carrosApiController.comprados);

module.exports = router;
