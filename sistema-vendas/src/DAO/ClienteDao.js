import React from 'react';
import ClienteForm from '../components/ClientForm';
import clienteService from '../services/clientService';

const ClienteDao = () => {
  const handleCriarCliente = (clienteData) => {
    clienteService.criarCliente(clienteData);
  };

  return (
    <div>
      <h1>ClienteDao</h1>
      <ClienteForm criarCliente={handleCriarCliente} />
    </div>
  );
};

export default ClienteDao;
