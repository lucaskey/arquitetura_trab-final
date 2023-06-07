import React, { useState } from 'react';

const ClienteForm = ({ criarCliente }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    criarCliente({ nome, email });
    setNome('');
    setEmail('');
  };

  return (
    <div>
      <h2>Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={handleNomeChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default ClienteForm;
