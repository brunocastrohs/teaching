#include <stdio.h>
#include <stdlib.h>
#include "aluno.h"
int main()
{
    Aluno **turma = criaTurma(5);
    setNome(turma[0], "Joao");
    setNota1(turma[0], 5);
    setNota2(turma[0], 8);
    float media = calcularMedia(turma[0]);
    char *nome = getNome(turma[0]);
    printf("A media de %s foi: %f", nome, media);

    return 1;
}
