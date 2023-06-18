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
    // Lógica para criar um novo pedido
    // ...
    // Faça uma solicitação POST ao servidor Express para criar o pedido
    fetch('http://localhost:3001/pedidos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Erro ao criar o pedido:', error);
      });
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
