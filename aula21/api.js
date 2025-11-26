const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = 3000;

app.use(express.json());

const MONGODB_URI = 'mongodb://127.0.0.1:27017/minha_api'

mongoose.connect(MONGODB_URI)
    .then(() => console.log('mongoDBconectado'))
    .catch(err => console.error('Erro de conexão com o mongoDB:', err));

// Simulação
let clientes = [
    { id: 1, nome: "Alice", email: "alice@exemplo.com" },
    { id: 2, nome: "Bruno", email: "bruno@exemplo.com" }
];

app.get('/clientes', (req, res) => {
    res.json(clientes);
});

app.get('/clientes/:id', (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const cliente = clientes.find(c => c.id === idBuscado);

    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({mensagem: "cliente não encontrado"});
    }
});

app.post('/clientes', (req, res) => {
    const novoCliente = req.body;
    const novoId = clientes.length > 0 ? clientes [clientes.length-1].id + 1 : 1;
    const clienteComId = {id:novoId, ... novoCliente}; // Adiciona o ID
    
    clientes.push(clienteComId);
    res.status(201).json(clienteComId);
});

app.put('/clientes/:id', (req, res) => {
    
    const idBuscado = parseInt(req.params.id);

    const novosDados = req.body;

    const indice = clientes.findIndex(c => c.id === idBuscado);

    if (indice !== -1) {
        clientes[indice] = {...[indice], ... novosDados};
        res.json(clientes[indice]);
    } else {
        res.status(404).json({mensagem: 'cliente para atualização não encontrado!'});
    }
});

app.delete('/clientes/:id', (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const tamanhoInicial = clientes.length;

    clientes = clientes.filter(c => c.id !== idBuscado);

    if (clientes.length < tamanhoInicial){
        res.status(204).send(); // deletado com sucesso
    } else {
        res.status(404).json({ mensagem: 'cliente para deletar não encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Api rodando em http://localhost:${PORT}`);
});
