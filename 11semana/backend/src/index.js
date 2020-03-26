require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const server = express();

// Cors da aplicação.
server.use(cors());

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
