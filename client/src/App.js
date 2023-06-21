import "./App.css";
import RadioButton from "./components/RadioButton";
import Card from "./components/Card";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  faLaptop,
  faShirt,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

import io from "socket.io-client";
import { useEffect, useState } from "react";
const socket = io.connect("http://localhost:3001");

function App() {
  const [pedidos, setPedidos] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState("");
  const [formulario, setFormulario] = useState({
    usuario: "",
    produto: "",
    tipoProduto: "",
  });

  const handleSelect = (value) => {
    setSelectedProductType(value);
    handleChange({ target: { name: "tipoProduto", value: value } });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(selectedProductType);
    setFormulario((prevState) => ({
      ...prevState,
      tipoProduto: selectedProductType,
      [name]: value,
    }));
  };

  useEffect(() => {
    socket.on("novoPedido", (novoPedido) => {
      setPedidos((prevPedidos) => [...prevPedidos, novoPedido]);
      alert(`Novo pedido ${novoPedido.id}: ${novoPedido.order.produto} lançado por ${novoPedido.order.usuario}`);
    });

    return () => {
      socket.off("novoPedido");
    };
  }, []);

  const handleCriarPedido = () => {
    socket.emit("criarPedido", formulario);
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
              <input
                name="usuario"
                type="text"
                placeholder="Nome do usuário*"
                class="input"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="produto"
                type="text"
                placeholder="Produto*"
                class="input"
                onChange={handleChange}
              />
            </div>
            <label>Tipo de produto: </label>
            <div className="radio-group">
              <RadioButton
                icon={faShirt}
                selected={selectedProductType === "Roupas"}
                onSelect={() => {
                  handleSelect("Roupas");
                }}
              />
              <RadioButton
                icon={faLaptop}
                selected={selectedProductType === "Eletrônicos"}
                onSelect={() => handleSelect("Eletrônicos")}
              />
              <RadioButton
                icon={faGamepad}
                selected={selectedProductType === "Brinquedos"}
                onSelect={() => handleSelect("Brinquedos")}
              />
            </div>
            <div>
              <button className="btn" onClick={handleCriarPedido}>
                Criar pedido
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="list-container">
            {pedidos.map((pedido) => (
              <Card
                tipoProduto={pedido.order.tipoProduto}
                id={pedido.id}
                date={pedido.date}
                status={pedido.status}
                key={pedido.id}
                vendedor={pedido.order.usuario}
                produto={pedido.order.produto}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
