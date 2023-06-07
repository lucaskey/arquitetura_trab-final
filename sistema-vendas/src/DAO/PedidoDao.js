import React from 'react';
import PedidoForm from '../components/PedidoForm';
import pedidoService from '../services/pedidoService';

const PedidoDao = () => {
  const handleCriarPedido = (pedidoData) => {
    pedidoService.criarPedido(pedidoData);
  };

  return (
    <div>
      <h1>PedidoDao</h1>
      <PedidoForm criarPedido={handleCriarPedido} />
    </div>
  );
};

export default PedidoDao;
