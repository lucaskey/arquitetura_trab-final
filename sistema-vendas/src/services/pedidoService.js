const criarCliente = async (clienteData) => {
    try {
      // Lógica para enviar os dados do cliente para o servidor
      console.log('Dados do cliente:', clienteData);
      // Simular requisição assíncrona para o servidor
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Cliente criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
    }
  };
  
  export default {
    criarCliente,
  };
  