//Criar e exportar uma função middleware
//A função deve registrar a data e a hora em que a requisição foi realizada
const fs = require('fs')

module.exports = (req, res, next) => {
    // Capturar a string com a data e a hora em que
    let dataHora = (new Date()).toISOString();
    const userIp = req.ip;

    // Escrever em um arquivo (com quebra de linha)
    fs.appendFileSync("hora_acessada.txt", `O ip: ${userIp}, acessou a URL ${req.url} em ${dataHora} \n`);
    next();
    //executar a função next para direcionar a req para o próximo middleware
}

