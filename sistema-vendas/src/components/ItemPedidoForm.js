import React, { useState } from 'react';

const ItemPedidoForm = ({ criarItemPedido }) => {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleProdutoChange = (event) => {
    setProduto(event.target.value);
  };

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    criarItemPedido({ produto, quantidade });
    setProduto('');
    setQuantidade('');
  };

  return (
    <div>
      <h2>Item do Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Produto:</label>
          <input type="text" value={produto} onChange={handleProdutoChange} />
        </div>
        <div>
          <label>Quantidade:</label>
          <input type="number" value={quantidade} onChange={handleQuantidadeChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default ItemPedidoForm;
