const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');
const validacaoRegistro = require('../middlewares/validacaoRegistro');

router.get('/registrar', UsuariosController.showRegistrar);
router.post('/registrar', validacaoRegistro, UsuariosController.store)

module.exports = router;