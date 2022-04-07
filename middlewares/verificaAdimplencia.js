// TODO: Supondo que o usuário é o de id uid = 1
module.exports = (req, res, next) => {
    // importar usuários
    const usuarios = require('../database/usuarios.json');
    

    //Capturar o usuário de id = uid, agora estamos capturando a session
    let buscarUsuario = usuarios.find((usuario) => usuario.id == req.usuario.id)

    // Verificar se o usuário é adimplente
    if (buscarUsuario.adimplente) {
        next();
    }else{
        res.render("login", {errors: 'Acesso bloqueado, entre em contato com o administrativo'});
    }
        
}