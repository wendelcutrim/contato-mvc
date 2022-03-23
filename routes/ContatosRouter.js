const express = require('express');
const router = express.Router();
const ContatosController = require('../controllers/ContatosController');

router.get('/contato', ContatosController.listarContatos);
router.get('/contato/:id', ContatosController.capturarContato);

module.exports = router