const path = require('path');
//Para testes, assumindo que o usuário logado é o user de id=1;
const uid = 1;


const ContatosController = {
    listarContatos: (req,res) =>{
        // Importanto os contatos do usuário
        let listaDecontatos = require(`../database/contatos_${uid}.json`);
        res.render('home', {contatos: listaDecontatos});
    },
    capturarContato: (req,res) =>{
        const {id} = req.params;
        let listaDecontatos = require(`../database/contatos_${uid}.json`);
        const buscarUsuario = listaDecontatos.find((contato) => contato.id == id);
        if(!buscarUsuario){
            res.send({msg:"Contato não encontrando ou não existe"});
        }else{
            res.send(buscarUsuario);
        }
    }
};

module.exports = ContatosController;