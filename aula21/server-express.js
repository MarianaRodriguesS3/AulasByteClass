//server-express.js
const express = require('express');
const app = express();
const PORT = 3000;

// Rota GET para a URL raiz(/)
app.get('/', (req, res) => {
    res.send('Olá do Servidor Express! Você usou o método GET.');
});

app.get('/sobre', (req, res) => {
    res.send('Essa é nossa página sobre e o nosso backend é o node.js');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});