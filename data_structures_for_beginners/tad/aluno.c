// Fonte do arquivo aluno.c:
#include <stdio.h>
#include <stdlib.h>
#include "aluno.h"
struct aluno
{
    char *nome;
    int matricula;
    float nota1;
    float nota2;
    float notaFinal;
    int quantidadeFaltas;
};

Aluno *criaAluno()
{
    return (Aluno *)malloc(sizeof(Aluno));
}


Aluno **criaTurma(int n)
{
    Aluno** turma = (Aluno**) malloc(sizeof(Aluno*)*n);
    
   int i = 0;

    for(i = 0; i < n; i++)
        turma[i] = criaAluno();

    return turma;
}

char *getNome(Aluno *aluno)
{
    return aluno->nome;
}
void setNome(Aluno *aluno, char *nome)
{
    aluno->nome = nome;
}
int getMatricula(Aluno *aluno)
{
    return aluno->matricula;
}
void setMatricula(Aluno *aluno, int matricula)
{
    aluno->matricula = matricula;
}
float getNota1(Aluno *aluno)
{
    return aluno->nota1;
}
void setNota1(Aluno *aluno, float nota1)
{
    aluno->nota1 = nota1;
}
float getNota2(Aluno *aluno)
{
    return aluno->nota2;
}

void setNota2(Aluno *aluno, float nota2)
{
    aluno->nota2 = nota2;
}

float getNotaFinal(Aluno *aluno)
{
    return aluno->notaFinal;
}
void setNotaFinal(Aluno *aluno, float notaFinal)
{
    aluno->notaFinal = notaFinal;
}
int getQuantidadeFaltas(Aluno *aluno)
{
    return aluno->quantidadeFaltas;
}
void setQuantidadeFaltas(Aluno *aluno, int quantidadeFaltas)
{
    aluno->quantidadeFaltas = quantidadeFaltas;
}
float calcularMedia(Aluno *aluno)
{
    return (aluno->nota1 + aluno->nota2) / 2;
}