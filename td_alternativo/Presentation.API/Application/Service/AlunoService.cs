// Service/AlunoService.cs
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Service
{
    public class AlunoService : IAlunoService
    {
        private static List<Aluno> _alunos = new List<Aluno>
            {
                new Aluno { Id = 1, Nome = "João", Curso = "Engenharia", Matricula = "2021001" },
                new Aluno { Id = 2, Nome = "Maria", Curso = "Administração", Matricula = "2021002" }
            };

        public AlunoService()
        {
        }

        public IEnumerable<Aluno> GetAlunos()
        {
            return _alunos;
        }

        public Aluno GetAlunoById(int id)
        {
            return _alunos.FirstOrDefault(a => a.Id == id);
        }

        public Aluno AddAluno(Aluno aluno)
        {
            aluno.Id = _alunos.Count > 0 ? _alunos.Max(a => a.Id) + 1 : 1;
            _alunos.Add(aluno);
            return aluno;
        }

        public void UpdateAluno(int id, Aluno alunoAtualizado)
        {
            var aluno = _alunos.FirstOrDefault(a => a.Id == id);
            if (aluno != null)
            {
                aluno.Nome = alunoAtualizado.Nome;
                aluno.Curso = alunoAtualizado.Curso;
                aluno.Matricula = alunoAtualizado.Matricula;
            }
        }

        public void DeleteAluno(int id)
        {
            var aluno = _alunos.FirstOrDefault(a => a.Id == id);
            if (aluno != null)
            {
                _alunos.Remove(aluno);
            }
        }
    }
}

