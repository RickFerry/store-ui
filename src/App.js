import React, { useState } from 'react';
import ProdutoList from './components/ProdutoList';
import ProdutoForm from './components/ProdutoForm';
import ProdutoDetails from './components/ProdutoDetails';

function App() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const handleProdutoSelect = (produto) => {
    setProdutoSelecionado(produto);
  };

  const handleProdutoSave = () => {
    setProdutoSelecionado(null);
  };

  return (
    <div className="App">
      <h1>Gerenciamento de Produtos</h1>
      <ProdutoForm produtoSelecionado={produtoSelecionado} onProdutoSave={handleProdutoSave} />
      <ProdutoList onSelectProduto={handleProdutoSelect} />
      <ProdutoDetails produto={produtoSelecionado} />
    </div>
  );
}

export default App;
