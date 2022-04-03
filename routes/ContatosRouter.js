const express = require('express');
const router = express.Router();
const ContatosController = require('../controllers/ContatosController');

router.get('/contatos', ContatosController.listarContatos);
router.get('/contatos/:id', ContatosController.capturarContato);

module.exports = router