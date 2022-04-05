// TODO: Supondo que o usuário é o de id uid = 1
let uid = 1;

module.exports = (req, res, next) => {
    // importar usuários
    const usuarios = require('../database/usuarios.json');

    //Capturar o usuário de id = uid
    let buscarUsuario = usuarios.find((usuario) => usuario.id == uid)

    // Verificar se o usuário é adimplente
    if (buscarUsuario.adimplente) {
        next();
    }else{
        res.send('Acesso bloqueado, entre em contato com o administrativo');
    }
        
}