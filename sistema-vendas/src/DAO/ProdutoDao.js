import React from 'react';
import ProdutoForm from '../components/ProdutoForm';
import produtoService from '../services/produtoService';

const ProdutoDao = () => {
  const handleCriarProduto = (produtoData) => {
    produtoService.criarProduto(produtoData);
  };

  return (
    <div>
      <h1>ProdutoDao</h1>
      <ProdutoForm criarProduto={handleCriarProduto} />
    </div>
  );
};

export default ProdutoDao;
