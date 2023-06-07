const criarProduto = async (produtoData) => {
    try {
      // Lógica para enviar os dados do produto para o servidor
      console.log('Dados do produto:', produtoData);
      // Simular requisição assíncrona para o servidor
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Produto criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };
  
  export default {
    criarProduto,
  };
  