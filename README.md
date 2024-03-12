# Teste de Backend com Node.js, Express, e Typescript

## Descrição

Este teste é projetado para avaliar habilidades em desenvolver uma API RESTful usando Node.js, Express, e Typescript. O foco está em permitir o registro de usuários e possibilitar que cada usuário crie posts. O projeto utilizará MongoDB como banco de dados e o Prisma como ORM. Além disso, o projeto deve ser configurável para execução em um ambiente Dockerizado, utilizando `docker compose`, incluindo o banco de dados. Os testes unitários devem ser implementados usando Jest. A escolha da arquitetura do projeto é deixada ao seu critério, permitindo a liberdade de aplicar a abordagem que considerar mais adequada.

## Instruções

Você deverá criar um fork deste projeto, e desenvolver em cima do seu fork. Use o README principal do seu repositório para nos contar como foi resolver seu teste, as decisões tomadas, como você organizou e separou seu código e, principalmente, as instruções de como rodar seu projeto e se você conseguir explicar como fazer isso, você já começou bem!

## Requisitos Funcionais

1. **Cadastro de Usuários:**
   - Implementar um endpoint para o cadastro de novos usuários.
   - Os usuários devem fornecer um nome, email (único no sistema) e senha para o registro.

2. **Autenticação:**
   - Implementar autenticação JWT para os usuários, gerando um token JWT no login.

3. **Criação de Posts:**
   - Permitir que usuários autenticados criem posts.
   - Cada post deve conter um título e um corpo de texto e estar vinculado ao usuário que o criou.

## Requisitos Não Funcionais

1. **Arquitetura:**
   - A escolha da arquitetura do software fica a critério do candidato. Recomenda-se documentar a abordagem escolhida e justificar as decisões arquiteturais tomadas.

2. **Prisma e MongoDB:**
   - Utilizar o Prisma como ORM para interagir com o MongoDB.

3. **Docker:**
   - Fornecer um arquivo `docker-compose.yml` para orquestrar a aplicação e o MongoDB.
   - Utilizar o comando `docker compose up` para iniciar o ambiente de desenvolvimento.

4. **Testes Unitários:**
   - Implementar testes unitários usando Jest para garantir a qualidade e a correção do código.

## Entrega

- O código deve ser disponibilizado em um repositório Git (ex: GitHub, GitLab).

## Critérios de Avaliação

- Qualidade do código e uso apropriado do Typescript.
- Implementação dos requisitos funcionais e não funcionais.
- Cobertura e qualidade dos testes unitários com Jest.
- Documentação do projeto, incluindo instruções de configuração e execução.
- A escolha e justificativa da arquitetura adotada, avaliando a adequação da solução ao problema e a eficácia em atender aos requisitos do projeto.

Desejamos a todos sucesso e um desenvolvimento produtivo!
