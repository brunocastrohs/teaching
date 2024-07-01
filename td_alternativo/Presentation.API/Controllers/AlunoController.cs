// Presentation.API/Controllers/AlunosController.cs
using Domain;
using Microsoft.AspNetCore.Mvc;
using Service;
using System.Collections.Generic;

namespace Presentation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {
        private readonly IAlunoService _alunoService;

        public AlunosController(IAlunoService alunoService)
        {
            _alunoService = alunoService;
        }

        [HttpGet]
        public IEnumerable<Aluno> Get()
        {
            return _alunoService.GetAlunos();
        }

        [HttpGet("{id}")]
        public ActionResult<Aluno> GetById(int id)
        {
            var aluno = _alunoService.GetAlunoById(id);
            if (aluno == null)
            {
                return NotFound();
            }
            return aluno;
        }

        [HttpPost]
        public ActionResult<Aluno> Post(Aluno aluno)
        {
            var novoAluno = _alunoService.AddAluno(aluno);
            return CreatedAtAction(nameof(GetById), new { id = novoAluno.Id }, novoAluno);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Aluno aluno)
        {
            _alunoService.UpdateAluno(id, aluno);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _alunoService.DeleteAluno(id);
            return NoContent();
        }
    }
}

