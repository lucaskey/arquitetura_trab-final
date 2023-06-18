const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');

const cors = require('cors');

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

const pedidos = [];

// Rota para receber a criação de um novo pedido
app.post('/pedidos', (req, res) => {
    // Lógica para criar um novo pedido e adicioná-lo à estrutura de dados dos pedidos
    const novoPedido = { id: pedidos.length + 1, status: 'Em andamento' };
    pedidos.push(novoPedido);

    // Notifique todos os clientes conectados sobre a criação do novo pedido
    io.emit('novoPedido', novoPedido);
    console.log("pedidos")

    res.status(200).json({ message: 'Pedido criado com sucesso!' });
});

server.listen(3001, () => {
    console.log('Servidor Socket.io está ouvindo na porta 3001...');
});


