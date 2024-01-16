# API-RESTful-SelecaoFutebol
**Descrição:**
Este projeto é uma API RESTful desenvolvida em Node.js, Express e MySQL, focada no gerenciamento de informações sobre seleções de futebol. O código-fonte está organizado seguindo boas práticas de arquitetura, utilizando padrões como Singleton e Repository para modularização eficiente.

**Tecnologias Utilizadas:**

- **Node.js:** Ambiente de execução JavaScript do lado do servidor.
- **Express:** Framework web para Node.js, simplificando o desenvolvimento de APIs.
- **MySQL:** Sistema de gerenciamento de banco de dados relacional para armazenamento estruturado.

**Principais Características:**

1. **Roteamento (routes.js):**
    - Definição de rotas para operações CRUD relacionadas às seleções de futebol.
2. **Conexão com o Banco de Dados (conexao.js):**
    - Configuração da conexão com o MySQL, estabelecendo parâmetros essenciais.
3. **Consulta ao Banco de Dados (consulta.js):**
    - Função genérica para execução de consultas SQL, promovendo reutilização de código.
4. **Repositório das Seleções (SelecaoRepository.js):**
    - Métodos dedicados às operações de banco de dados, como criar, listar, buscar por ID, atualizar e deletar seleções.
5. **Controllers (SelecaoController.js):**
    - Implementação de controllers para lidar com requisições HTTP, interagindo com o repositório.

**Desafios Enfrentados:**

- Estruturação do código para seguir boas práticas e modularização eficiente.
- Implementação de testes para garantir a robustez da aplicação.

**Aprendizados Adquiridos:**

- Aprofundamento nas tecnologias Node.js, Express e MySQL.
- Experiência na aplicação de padrões de design como Singleton e Repository.

**Conclusão:**
Este projeto reflete meu comprometimento com o aprendizado contínuo e a aplicação prática de conhecimentos em um ambiente real. Estou aberto a colaborações e feedbacks construtivos.
