const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");


router.get("/", mainController.home);

router.get('/carrito', mainController.carrito);

router.get('/productos', mainController.productos);

router.get('/detalle', mainController.detalle);

router.get('/detalle2', mainController.detalle2);

router.get('/detalle3', mainController.detalle3);

router.get('/detalle4', mainController.detalle4);

router.get('/detalle5', mainController.detalle5);

router.get('/detalle6', mainController.detalle6);

router.get('/detalle7', mainController.detalle7);

router.get('/detalle8', mainController.detalle8);

router.get('/detalle9', mainController.detalle9);

router.get('/servicios', mainController.servicios);

router.get('/ayuda', mainController.ayuda);

module.exports = router;