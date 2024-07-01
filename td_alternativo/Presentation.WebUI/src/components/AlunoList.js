import React, { useState, useEffect } from 'react';
import alunoService from '../services/alunoService';
import AlunoForm from './AlunoForm';

const AlunoList = () => {
  const [alunos, setAlunos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ nome: '', matricula: '', curso: '' });

  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    const data = await alunoService.getAll();
    setAlunos(data);
  };

  const handleDelete = async (id) => {
    await alunoService.remove(id);
    fetchAlunos();
  };

  const handleEdit = async (aluno) => {
    setEditingId(aluno.id);
    setEditForm({ nome: aluno.nome, matricula: aluno.matricula, curso: aluno.curso });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ nome: '', matricula: '', curso: '' });
  };

  const handleUpdate = async () => {
    await alunoService.update(editingId, editForm);
    setEditingId(null);
    setEditForm({ nome: '', matricula: '', curso: '' });
    fetchAlunos();
  };

  const handleChangeEditForm = (event) => {
    const { name, value } = event.target;
    setEditForm({ ...editForm, [name]: value });
  };

  return (
    <>
      <AlunoForm fetchAlunos={fetchAlunos} />
      <div className="container mt-4">
        <h2>Lista de Alunos</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Curso</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.id}</td>
                <td>{editingId === aluno.id ? (
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    value={editForm.nome}
                    onChange={handleChangeEditForm}
                  />
                ) : (
                  aluno.nome
                )}</td>
                <td>{editingId === aluno.id ? (
                  <input
                    type="text"
                    className="form-control"
                    name="matricula"
                    value={editForm.matricula}
                    onChange={handleChangeEditForm}
                  />
                ) : (
                  aluno.matricula
                )}</td>
                <td>{editingId === aluno.id ? (
                  <input
                    type="text"
                    className="form-control"
                    name="curso"
                    value={editForm.curso}
                    onChange={handleChangeEditForm}
                  />
                ) : (
                  aluno.curso
                )}</td>
                <td>
                  {editingId === aluno.id ? (
                    <>
                      <button className="btn btn-success" onClick={handleUpdate}>Salvar</button>
                      <button className="btn btn-secondary ms-2" onClick={handleCancelEdit}>Cancelar</button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-primary" onClick={() => handleEdit(aluno)}>Editar</button>
                      <button className="btn btn-danger ms-2" onClick={() => handleDelete(aluno.id)}>Excluir</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AlunoList;
