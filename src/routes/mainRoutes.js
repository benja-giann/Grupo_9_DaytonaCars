const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");


router.get("/", mainController.home);

router.get('/carrito', mainController.carrito);

router.get('/productos', mainController.productos);

router.get('/detalle', mainController.detalle);

router.get('/servicios', mainController.servicios);

router.get('/ayuda', mainController.ayuda);

module.exports = router;