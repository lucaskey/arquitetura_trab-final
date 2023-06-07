import React from 'react';
import ItemPedidoForm from '../components/ItemPedidoForm';
import itemPedidoService from '../services/itemPedidoService';

const ItemPedidoDao = () => {
  const handleCriarItemPedido = (itemPedidoData) => {
    itemPedidoService.criarItemPedido(itemPedidoData);
  };

  return (
    <div>
      <h1>ItemPedidoDao</h1>
      <ItemPedidoForm criarItemPedido={handleCriarItemPedido} />
    </div>
  );
};

export default ItemPedidoDao;
