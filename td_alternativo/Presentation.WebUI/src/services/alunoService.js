// Presentation.WebUI/src/services/alunoService.js
import axios from 'axios';

const apiUrl = 'http://localhost:5190/api/alunos'; // URL do seu back-end API

const getAll = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${apiUrl}/${id}`);
  return response.data;
};

const create = async (newAluno) => {
  const response = await axios.post(apiUrl, newAluno);
  return response.data;
};

const update = async (id, aluno) => {
  const response = await axios.put(`${apiUrl}/${id}`, aluno);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${apiUrl}/${id}`);
  return response.data;
};

const alunoService = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default alunoService;

