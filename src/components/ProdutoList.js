import React, { useEffect, useState } from 'react';
import { getProdutos, deleteProduto } from '../services/produtoService';

const ProdutoList = ({ onSelectProduto }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await getProdutos();
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduto(id);
      fetchProdutos();
    } catch (error) {
      console.error('Erro ao deletar produto', error);
    }
  };

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.descricao} - {produto.valor}
            <button onClick={() => onSelectProduto(produto)}>Editar</button>
            <button onClick={() => handleDelete(produto.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProdutoList;
