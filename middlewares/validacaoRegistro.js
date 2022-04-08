const { check, body } = require('express-validator');

const validateUserRegister = [
    check('nome')
        .notEmpty().withMessage("Deve preencher o nome completo")
        .isLength({min: 3, max: 150}).withMessage("O nome, deve ter pelo menos 3 caracteres"),
    check('email')
        .notEmpty().withMessage('Deve inserir o e-mail')
        .isEmail().withMessage('Insira um e-mail válido'),
    check('senha')
        .notEmpty().withMessage('Deve inserir uma senha')
        .isLength({min: 3}).withMessage('A senha deve ter no mínimo, 3 caracteres')
]

module.exports = validateUserRegister;