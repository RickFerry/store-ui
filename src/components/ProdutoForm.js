import React, { useState, useEffect } from 'react';
import { createProduto, updateProduto } from '../services/produtoService';

const ProdutoForm = ({ produtoSelecionado, onProdutoSave }) => {
  const [produto, setProduto] = useState({ nome: '', descricao: '', valor: '' });

  useEffect(() => {
    if (produtoSelecionado) {
      setProduto(produtoSelecionado);
    }
  }, [produtoSelecionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (produto.id) {
        await updateProduto(produto.id, produto);
      } else {
        await createProduto(produto);
      }
      onProdutoSave();
      setProduto({ nome: '', descricao: '', valor: '' });
    } catch (error) {
      console.error('Erro ao salvar produto', error);
    }
  };

  return (
    <div>
      <h2>{produto.id ? 'Editar Produto' : 'Adicionar Produto'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={produto.nome}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        <input
          type="text"
          name="descricao"
          value={produto.descricao}
          onChange={handleChange}
          placeholder="Descrição"
        />
        <input
          type="number"
          name="valor"
          value={produto.valor}
          onChange={handleChange}
          placeholder="Valor"
          required
        />
        <button type="submit">{produto.id ? 'Atualizar' : 'Criar'}</button>
      </form>
    </div>
  );
};

export default ProdutoForm;
