const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");


router.get("/", mainController.home);

router.get('/carrito', mainController.carrito);

router.get('/productos', mainController.productos);

router.get('/detalle', mainController.detalle);

router.get('/servicios', mainController.servicios);

router.get('/ayuda', mainController.ayuda);


/*git add nombreArchivo // Agregar archivos al repositorio
git status // Muestra el estado actual de los archivos del repositorio
git commit -m "mensaje" // Agregar commit de los cambios
git log //Muestra historial de commits

git push origin master //Subir archivos a GitHub*/


module.exports = router;