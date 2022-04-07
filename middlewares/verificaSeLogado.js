const verificaSeLogado = (req, res,next) => {
    if(req.session.usuario == undefined){
        res.redirect('/login');
    }else{
        
        //Pendurar informações do usuário na requisição.
        req.usuario = req.session.usuario;

        next();
    }
}

module.exports = verificaSeLogado;