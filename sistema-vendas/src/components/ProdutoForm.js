import React, { useState } from 'react';

const ProdutoForm = ({ criarProduto }) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handlePrecoChange = (event) => {
    setPreco(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    criarProduto({ nome, preco });
    setNome('');
    setPreco('');
  };

  return (
    <div>
      <h2>Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={handleNomeChange} />
        </div>
        <div>
          <label>Preço:</label>
          <input type="text" value={preco} onChange={handlePrecoChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default ProdutoForm;
