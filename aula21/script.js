const http = require('http'); // importa o modulo http
const PORT = 3000;
const server = http.createServer((req, res) => {
    // req: informação da requisição (o que o cliente pediu)
    // res: objeto para enviar a resposta ao cliente
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    // Define o tipo da resposta(text/plain)
    res.end('Servidor Node.js funcionando! acesse em http://localhost:3000');
    // envia a resposta de volta para o cliente
});
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});