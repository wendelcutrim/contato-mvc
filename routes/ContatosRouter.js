const express = require('express');
const router = express.Router();
const ContatosController = require('../controllers/ContatosController');
const verificaAdimplencia = require('../middlewares/verificaAdimplencia');
const verificaSeLogado = require('../middlewares/verificaSeLogado');

router.get('/contatos', verificaSeLogado, verificaAdimplencia, ContatosController.listarContatos);
router.get('/contatos/:id', verificaSeLogado, verificaAdimplencia, ContatosController.capturarContato);

module.exports = router