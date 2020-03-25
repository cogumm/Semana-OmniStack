require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const server = express();

/**
 * Utilizando o express para converter o json em objeto do JS.
 */
server.use(express.json());

/**
 * Rotas da aplicação.
 */
server.use(routes);

/**
 * Rodando o servidor back-end.
 */
server.listen(process.env.PORT_APP, () => {
  console.log(
    "Servidor backend inicializado com sucesso na porta " + process.env.PORT_APP
  );
});
