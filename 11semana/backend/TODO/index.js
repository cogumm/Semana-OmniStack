const express = require("express");

const server = express();

/**
 * Utilizando o express para converter o json em objeto do JS.
 */
server.use(express.json());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informção do back-end.
 * POST: Criar uma informação no back-end.
 * PUT: Alterar uma informação no back-end.
 * DELETE: Deletar uma informação no back-end.
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação).
 *               Exemplo: "?nome=Gabriel&idade=31"
 * Route Params: Parâmetros utilizados para identificar recursos.
 *               Exemplo: "/users/:id"
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, MSSQL.
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 *
 * KNext.js
 * https://knexjs.org/
 */

server.post("/users", (req, res) => {
  /**
   * Exemplo de query params

  const params = req.query;
  console.log(params); */

  /**
   * Exemplo de rout params
   * server.get("/users/:id", (req, res)

  const params = req.params;
  console.log(params); */

  /**
   * Exemplo de request body

  const body = req.body;
  console.log(body); */

  return res.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Gabriel F. Vilar"
  });
});

/**
 * Rodando o servidor back-end.
 */
server.listen(3001, () => {
  console.log("Servidor backend inicializado com sucesso na porta 3001");
});
