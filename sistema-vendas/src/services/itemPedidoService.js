const criarItemPedido = async (itemPedidoData) => {
    try {
      // Lógica para enviar os dados do item do pedido para o servidor
      console.log('Dados do item do pedido:', itemPedidoData);
      // Simular requisição assíncrona para o servidor
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Item do pedido criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar item do pedido:', error);
    }
  };
  
  export default {
    criarItemPedido,
  };
  