const express = require("express");

const server = express();

server.get("/", (request, response) => {
  return response.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Gabriel F. Vilar"
  });
});

server.listen(3001, () => {
  console.log("Servidor backend inicializado com sucesso na porta 3001");
});
