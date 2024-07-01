import React, { useState } from 'react';
import alunoService from '../services/alunoService';

const AlunoForm = ({ fetchAlunos }) => {
  const initialFormState = { nome: '', matricula: '', curso: '' };
  const [aluno, setAluno] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAluno({ ...aluno, [name]: value });
    fetchAlunos();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await alunoService.create(aluno);
    setAluno(initialFormState);
    fetchAlunos();
  };

  return (
    <div className="container mt-4">
      <h2>Cadastrar Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={aluno.nome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="matricula" className="form-label">Matrícula:</label>
          <input
            type="text"
            className="form-control"
            id="matricula"
            name="matricula"
            value={aluno.matricula}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="curso" className="form-label">Curso:</label>
          <input
            type="text"
            className="form-control"
            id="curso"
            name="curso"
            value={aluno.curso}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  );
};

export default AlunoForm;
