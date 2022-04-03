const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');

router.get('/registrar', UsuariosController.showRegistrar);
router.post('/registrar', UsuariosController.store)

module.exports = router;