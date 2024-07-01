# Projeto CRUD de Alunos em React com Backend em C#

Este projeto é um exemplo simples de uma aplicação de CRUD (Create, Read, Update, Delete) de alunos, utilizando React para o frontend e C#/.NET para o backend. A aplicação permite gerenciar informações básicas de alunos como nome, matrícula e curso.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `backend/`: Contém a aplicação backend em C#/.NET.
  - `Domain/`: Define as entidades e modelos de dados.
  - `Service/`: Implementa a lógica de negócio da aplicação.
  - `Presentation.API/`: Projeto de API REST em ASP.NET Core.
  - `Presentation.WebUI/`: Frontend da API em ASP.NET Core MVC.

- `frontend/`: Contém a aplicação frontend em React.
  - `public/`: Arquivos estáticos públicos (HTML, ícones, etc.).
  - `src/`: Código-fonte React.
    - `components/`: Componentes React reutilizáveis.
    - `services/`: Serviços para interação com a API backend.
    - `AlunoList.js`: Componente para listar alunos.
    - `AlunoForm.js`: Componente para adicionar e editar alunos.
    - `App.js`: Ponto de entrada da aplicação React.
    - `index.js`: Arquivo de inicialização do React.

## Como Rodar a Aplicação

### Backend (C#/.NET)

1. **Pré-requisitos**:
   - Visual Studio 2019+ ou Visual Studio Code com extensões do .NET instaladas.
   - .NET 6 SDK.

2. **Passos**:
   - Abra a solução `backend/CRUDAlunos.sln` no Visual Studio ou no Visual Studio Code.
   - Configure o projeto `Presentation.API` como projeto de inicialização.
   - Certifique-se de que o projeto está configurado para rodar em `http://localhost:5000`.
   - Pressione F5 para rodar o backend. A API estará acessível em `http://localhost:5000`.

### Frontend (React)

1. **Pré-requisitos**:
   - Node.js e npm instalados globalmente.

2. **Passos**:
   - Abra um terminal e navegue até a pasta `frontend/`.
   - Instale as dependências do projeto com o comando:
     ```
     npm install
     ```
   - Após a instalação, inicie a aplicação com o comando:
     ```
     npm start
     ```
   - Acesse a aplicação no navegador em `http://localhost:3000`.

### Notas Adicionais

- Certifique-se de que o backend esteja rodando antes de iniciar o frontend, pois o frontend faz chamadas à API para funcionar corretamente.
- Para configurações de ambiente diferentes (como URLs da API), ajuste os arquivos de configuração conforme necessário.

Este README fornece uma visão geral da estrutura do projeto e instruções básicas para rodar tanto o backend quanto o frontend localmente. Personalize conforme as necessidades específicas do seu projeto.
