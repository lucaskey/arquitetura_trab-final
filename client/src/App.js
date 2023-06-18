import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
const socket = io.connect("http://localhost:3001");

function App() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    // Listener para receber notificações de novos pedidos
    socket.on('novoPedido', (novoPedido) => {
      setPedidos((prevPedidos) => [...prevPedidos, novoPedido]);
    });

    return () => {
      // Remova o listener quando o componente for desmontado
      socket.off('novoPedido');
    };
  }, []);

  const handleCriarPedido = () => {
    // Emita um evento para criar um novo pedido
    socket.emit('criarPedido');
  };

  return (
    <div className="App">
      <h1>Sistema de Vendas</h1>
      <button onClick={handleCriarPedido}>Criar Pedido</button>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>Pedido #{pedido.id} - Status: {pedido.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
