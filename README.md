CatalogLessons

Sistema para cadastro e listagem de módulos e aulas. 

O sistema contém as seguintes funcionalidades:
  Cadastro de aulas e módulos;
  Atualização e deleção de Aula e módulo; 
  Listagem de Módulos e Aulas;
  Login de usuário;

🛠️ O projeto foi desenvolvido em duas partes: Back e Frontend:

 O backend foi desenvolvido em NODDEJS e também usei o Express para gerenciar as requisições HTTP. também usei Sequelize um ORM para trabalhar com o banco de dados.
 Como banco de dados em si, usei o Postgres.
 Padrão de projeto MVC 
 Autenticação JWT
  
  Rotas: 
  
  Cadastro de usuário: TIPO: POST, Rota: /users
  Cadastro de sessão: TIPO: POST, Rota: /sessios
  Cadastro de módulos: TIPO: POST, Rota: /modules
  Cadastro de aulas: TIPO: POST, Rota: /lessons
  
  Atualização de Módulo: TIPO: PUT, Rota: /modules/:id
  Atualização de aula: TIPO: PUT, Rota: /modules/:module_id/lessons
  
  Deletar Módulo: TIPO: DELETE, Rota: /modules/:id
  Deletar Aula: TIPO: DELETE, Rota: /lessons/:id
  
  Listar aulas de um determinado módulo: TIPO: GET, Rota: /modules/:module_id/lessons
  Listar Módulos: TIPO: GET, Rota: /modules
  
 Frontend foi realizado em ReactJs. 
 Styled components para a stilização do projeto
 
 Rotas publicas do frontend: 
 
 listar módulos e aulas: "/"
 Login: "/login"
 
 Rotas Privadas:
 
 Cadastrar Aula: "/lessons"
 Cadastrar Modulo: "/modulos"
 
 O sistema está fazendo a contagem de todas as aulas de um determinado módulo e a exibição por ordem alfabética de módulos e aulas.
 
 A funcionalidade de Deletar módulo está com um bug que não foi reparado ainda 
 A funcionalidade de Atualizar não foi implementada
 
 

✒️ Autor
Dyego Kleodon
