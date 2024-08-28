import axios from 'axios';

const API_URL = 'http://localhost:8080/api/produtos';

export const getProdutos = () => axios.get(API_URL);
export const getProdutoById = (id) => axios.get(`${API_URL}/${id}`);
export const createProduto = (produto) => axios.post(API_URL, produto);
export const updateProduto = (id, produto) => axios.put(`${API_URL}/${id}`, produto);
export const deleteProduto = (id) => axios.delete(`${API_URL}/${id}`);
