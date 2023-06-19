import "./App.css";
import RadioButton from "./components/RadioButton";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faLaptop, faShirt, faGamepad } from '@fortawesome/free-solid-svg-icons';

import io from "socket.io-client";
import { useEffect, useState } from "react";
const socket = io.connect("http://localhost:3001");

function App() {
  const [pedidos, setPedidos] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState('');
  const [formulario, setFormulario] = useState({
    usuario: '',
    produto: '',
    tipoProduto: '',
  });

  const handleSelect = (value) => {
    setSelectedProductType(value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(selectedProductType)
    setFormulario((prevState) => ({
      ...prevState,
      tipoProduto: selectedProductType,
      [name]: value,
    }));

  };

  useEffect(() => {
    socket.on('novoPedido', (novoPedido) => {
      setPedidos((prevPedidos) => [...prevPedidos, novoPedido]);
    });

    return () => {
      socket.off('novoPedido');
    };
  }, []);

  const handleCriarPedido = () => {
    socket.emit('criarPedido', formulario);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="form-container">
          <div>
            <div>
              <h2 className="container-title">Cadastrar pedido</h2>
            </div>
            <div>
              <input name="usuario" type="text" placeholder="Nome do usuário*" class="input" onChange={handleChange} />
            </div>
            <div>
              <input name="produto" type="text" placeholder="Produto*" class="input" onChange={handleChange} />
            </div>
            <label>Tipo de produto: </label>
            <div className="radio-group">
              <RadioButton
                icon={faShirt}
                selected={selectedProductType === "Roupas"}
                onSelect={() => handleSelect('Roupas')}
              />
              <RadioButton
                icon={faLaptop}
                selected={selectedProductType === 'Eletrônicos'}
                onSelect={() => handleSelect('Eletrônicos')}
              />
              <RadioButton
                icon={faGamepad}
                selected={selectedProductType === 'Brinquedos'}
                onSelect={() => handleSelect('Brinquedos')}
              />
            </div>
            <div>
              <button className="btn" onClick={handleCriarPedido}>Criar pedido</button>
            </div>
          </div>
        </div>
        <div className="list-container">
          <div>
            <h2 className="container-title">Pedidos</h2>
          </div>
          <ul>
            {pedidos.map((pedido) => (
              <li key={pedido.id}>Pedido #{pedido.id} - Status: {pedido.status} - usuario: {pedido.usuario}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
