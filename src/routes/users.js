const express = require('express');
let { body } = require('express-validator');
const router = express.Router();
const middelwares = require("../middlewares/userMiddleware.js")

const { controller, apiController } = require('../controllers/userController');

const validateRegister = [
  body('name').notEmpty().withMessage('Nombre requerido'),
  body('email').isEmail().withMessage('Correo electronico requerido'),
  body('password').notEmpty().withMessage('Contraseña requerido'),
];

router.get('/register', controller.renderRegister);
router.post('/register', validateRegister, controller.register);

router.get('/login', controller.renderLogin);
router.post('/login', controller.login);
router.get('/logout', controller.logout);


router.get('/perfil',middelwares.validacionUsuario, controller.perfil);
router.get('/perfil/edit', middelwares.validacionUsuario, controller.edit);
router.put('/perfil/edit', middelwares.validacionUsuario,controller.update);
router.delete('/perfil/edit', controller.delete);
router.get('/perfilUsuario', controller.perfilUsuario);

router.get('/historial', controller.historial);

// API
router.get('/listado', apiController.listado);

module.exports = router;
