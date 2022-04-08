const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');
const validateUserRegister = require('../middlewares/validacaoRegistro');

router.get('/registrar', UsuariosController.showRegistrar);
router.post('/registrar', validateUserRegister, UsuariosController.store);
router.get('/login', UsuariosController.mostrarLogin);
router.post('/login', UsuariosController.login)

module.exports = router;