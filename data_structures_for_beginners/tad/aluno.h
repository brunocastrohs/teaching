/* Tipo exportado*/
typedef struct aluno Aluno;
/* A composição da estrutura Aluno (struct aluno) não é exportada pelo
módulo. Dessa forma, os demais módulos que usarem esse TAD não poderão
acessar
diretamente os campos dessa estrutura. Os arquivos que usarem esse TAD só
terão acesso às
informações que possam ser obtidas através das funções exportadas pelo
arquivo
aluno.h. */
/** Dessa forma se faz necessário termos uma função para criar o nosso
TAD */
/* Função construtora de Aluno na memória do computador*/
Aluno *criaAluno();
Aluno **criaTurma(int n);

/** E também, funções para acessar os atríbutos do nosso TAD e passar
valores pare estes atríbutos */
char *getNome(Aluno *aluno);
void setNome(Aluno *aluno, char *nome);
int getMatricula(Aluno *aluno);
void setMatricula(Aluno *aluno, int matricula);
float getNota1(Aluno *aluno);
void setNota1(Aluno *aluno, float nota1);
float getNota2(Aluno *aluno);
void setNota2(Aluno *aluno, float nota2);
float getNotaFinal(Aluno *aluno);
void setNotaFinal(Aluno *aluno, float notaFinal);
int getQuantidadeFaltas(Aluno *aluno);
void setQuantidadeFaltas(Aluno *aluno, int quantidadeFaltas);
float calcularMedia(Aluno *aluno);