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

io.on('connection', (socket) => {

  socket.on('criarPedido', (data) => {

    var date = new Date()
    
    const novoPedido = { id: pedidos.length + 1, status: 'Em andamento', date: date.toLocaleDateString('en-GB'), order: data };
    pedidos.push(novoPedido);

    io.emit('novoPedido', novoPedido);
  });
});

server.listen(3001, () => {
  console.log('Servidor Socket.io está ouvindo na porta 3001...');
});


