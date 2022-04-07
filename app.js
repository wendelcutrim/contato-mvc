const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const session = require('express-session');
const ContatosRouter = require('./routes/ContatosRouter');
const UsuariosRouter = require('./routes/UsuariosRouter');
const marcaEntradaDaRequisicao = require('./middlewares/marcaEntradaDaRequisicao');

//Configuração do template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve("views"));

//Configuração de arquivos estáticos
app.use(express.static('public'));

//Configuração para receber dados em json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Configurando o uso da session, middleware global.
app.use(session({
    secret: 'segredo',
    resave: false,
    saveUninitialized: false,
}))

//Middlewares global
app.use(marcaEntradaDaRequisicao);

// Rotas
app.get('/', (req,res) => {
    res.send('Olá');
});

app.use('/', ContatosRouter);
app.use('/', UsuariosRouter);


// Rodar a nossa aplicação
app.listen(port, ()=> console.log(`The server is running on port: ${port} 🚀`));