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

app.get('/clientes', async (rec, res) => {
    try {
        const Clientes = await Clientes.find();
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'erro no servidor interno ao buscar clientes.' });
    }
});

app.get('/clientes/:id', async (req, res) => {
    try {
        const clientes = await Cliente.findById(req.params.id);
        if (!clientes) {
            return res.status(404).json({ mensagem: 'cliente não encontrado' });
        }
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ mensagem: 'ID inválido' });
    }
});

app.post('/clientes', async (req, res) => {
    try {
        const novoCliente = new Cliente(req.body);
        await novoCliente.save();
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ mensagem: 'erro ao cadastrar cliente', erro: error.mensage });
    }
});

app.put('/clientes/:id', async (req, res) => {
    try {
        const clienteAtualizado = await Cliente.findByIdUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
        if (!clienteAtualizado) {
            return res.status(404).json({ mensagem: 'cliente para atualizar não encontrado' });
        }
    } catch (error) {
        req.status(400).json({ mensagem: 'erro ao atualizar cliente', erro: error.mensage });
    }
});

app.delete('/clientes/:id', async (req, res) => {
    try {
        const clienteRemovido = await Cliente.findByIdAndDelete(req.params.id);

        if (!clienteRemovido) {
            return res.status(404).json({  mensagem: 'cliente para deletar não encontrado'});
        }
        res.status(204).send();

    } catch (error) {
        res.status (500).json({ mensagem: 'erro interno ao tentar deletar cliente'});
    }
});

app.listen(PORT, () => {
    console.log(`Api rodando em http://localhost:${PORT}`);
});
