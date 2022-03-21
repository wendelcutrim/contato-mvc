const express = require('express');
const app = express();
const port = 3000;
const ContatosRouter = require('./routes/ContatosRouter');


app.get('/', (req,res) => {
    res.send('Olá');
});

app.use('/', ContatosRouter);


app.listen(port, ()=> console.log(`The server is running on port: ${port} 🚀`));