const path = require('path');
const fs = require('fs');
const usuarios = require('../database/usuarios.json');
const bcrypt = require('bcryptjs');

const UsuariosController = {
    showRegistrar: (req, res) => {
        /*  const { nome, email, senha, confirmacao } = req.query;
         const user = {
             nome,
             email,
             senha,
             confirmacao
         }
         console.log(user); */
        res.render('registro');
    },

    store: (req, res) => {
        /* console.log(req.body);
        res.send('Salvando as informações do novo usuário'); */

        //Capturar as informações enviadas pelo usuário;
        const {
            nome,
            email,
            senha,
            confirmacao
        } = req.body;

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
    }
}

module.exports = UsuariosController;