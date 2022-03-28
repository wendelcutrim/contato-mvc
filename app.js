const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ContatosRouter = require('./routes/ContatosRouter');

//Configuração do template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve("views"));

// Rotas
app.get('/', (req,res) => {
    res.send('Olá');
});

app.use('/', ContatosRouter);


// Rodar a nossa aplicação
app.listen(port, ()=> console.log(`The server is running on port: ${port} 🚀`));