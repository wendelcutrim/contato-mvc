const path = require('path');
const fs = require('fs');
const usuarios = require('../database/usuarios.json');
const bcrypt = require('bcryptjs');
const { check, validationResult, body} = require('express-validator');

const UsuariosController = {
    showRegistrar: (req, res) => {
        res.render('registro');
    },

    store: (req, res) => {
        /* console.log(req.body);
        res.send('Salvando as informações do novo usuário'); */

        let errors = validationResult(req);
        console.log(errors);
        console.log(errors.mapped())

        if (errors.isEmpty()) {
            //Capturar as informações enviadas pelo usuário;
            const { nome, email, senha, confirmacao } = req.body;

            //Criar um objeto com os dados do usuário
            let listaDeUsuarios = usuarios;

            //Criptografar Senha:
            let senhaCriptografada = bcrypt.hashSync(senha, 10);

            //Adicionar o novo usuário a este array de usuários
            let novoUsuario = {
                id: listaDeUsuarios[listaDeUsuarios.length - 1].id + 1,
                nome,
                email,
                senha: senhaCriptografada
            }

            listaDeUsuarios.push(novoUsuario);

            //Salvar este array no arquivo usuarios.json
            const novaListaDeUsuariosEmJson = JSON.stringify(listaDeUsuarios, null, 4);
            fs.writeFileSync(path.resolve("database", "usuarios.json"), novaListaDeUsuariosEmJson);

            res.redirect('/contatos');
        }else{
            res.render('registro', { listaDeErros: errors.mapped(), old: req.body });
        }

        res.redirect('/contatos');
    },

    mostrarLogin: (req, res) => {
        res.render('login');
    },

    login: (req, res) => {
        const { email, senha } = req.body;
        let usuario = usuarios.find((user) => user.email == email);
        if(!usuario){
            res.render('login', {errors: "E-mail/Senha estão incorretos ou não existe"});
        }

        if(!bcrypt.compareSync(senha, usuario.senha)){
            res.render('login', {errors: "E-mail/Senha estão incorretos ou não existe" })
        }

        req.session.usuario = usuario;

        res.redirect('/contatos');
    }
}

module.exports = UsuariosController;