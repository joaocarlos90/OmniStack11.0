const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


//rota criada/recurso banco entidade

//metodo http 
//get, utiliza quando precisamos buscar u9ma informação do backend, utiliza para qualquer retorno de informação
//post utiliza quando quiser criar uma informação no backend / alterar uma informação
//put alterar uma informação no backend
//delete deletar uma informação no backend
/**
 * tipos de parametros
 * query params: parametros nomeados enviados na rota apos "?" e geralmente servem para filtro, paginação
 * route params: parametros utilizados para identificar recursos, identifica dado de um unico usuario por exemplo
 * request body: corpo da requisição utilizado para criar ou alterar recurso
 * 
 * instalar o nodemon npm install nodemon -D para monitorar apenas o codigo enquanto estiver em desenvolvimento
 * para rodar o nodemon bastar executar o comando "npm start"
 * 
 * Para banco de dados da aplicação relacional
 * SQL, MySql, SQLite, Pstgre, Oracle, Microsoft SQL Server
 * Para banco de dados nao relacional
 * NoSql, MongoDB, CouchDB
 * Escolha para o programa "SQLite" e armazenado como um arquivo na aplicação.
 * para utilizar o banco de dados podemos, instalar:
 * 
 * Driver: select * from users
 * QueryBuilder: table ('users').select('*').where()
 * 
 * instalar o knex para criar migrations
 * 
 * entidades:
 * *****ongs
 * *****caso(incident)
 * 
 * 
 * funcionalidades da entidade
 * *****login
 * *****cadastro de ong
 * *****logout 
 * *****cadastrar novos casos
 * *****deletar casos
 * *****listar os casos existentes especificos de ong
 * **************************************************
 * 
 * mobo
 * *****listar todos os casos
 * *****entrar em contato com a ong
 */

//local onde acesso a aplicação porta 3333
app.listen(3333);