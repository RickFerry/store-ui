import React from 'react';

const ProdutoDetails = ({ produto }) => {
  if (!produto) return null;

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <p><strong>ID:</strong> {produto.id}</p>
      <p><strong>Nome:</strong> {produto.nome}</p>
      <p><strong>Descrição:</strong> {produto.descricao}</p>
      <p><strong>Valor:</strong> {produto.valor}</p>
    </div>
  );
};

export default ProdutoDetails;
