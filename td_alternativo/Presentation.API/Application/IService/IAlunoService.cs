// Service/IAlunoService.cs
using Domain;
using System.Collections.Generic;

namespace Service
{
    public interface IAlunoService
    {
        IEnumerable<Aluno> GetAlunos();
        Aluno GetAlunoById(int id);
        Aluno AddAluno(Aluno aluno);
        void UpdateAluno(int id, Aluno aluno);
        void DeleteAluno(int id);
    }
}

