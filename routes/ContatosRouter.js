const express = require('express');
const router = express.Router();
const ContatosController = require('../controllers/ContatosController');
const verificaAdimplencia = require('../middlewares/verificaAdimplencia');

router.get('/contatos', verificaAdimplencia, ContatosController.listarContatos);
router.get('/contatos/:id', ContatosController.capturarContato);

module.exports = router