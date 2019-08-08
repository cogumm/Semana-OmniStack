const express = require("express");
const db = require("mongoose");
const server = express();
const routes = require("./routes");

// Conecção com o banco de dados
db.connect(
    "mongodb+srv://semana:semana@mrmeeseeks-2yyps.mongodb.net/SemanaOmniStack?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    }
);

server.use(express.json());
server.use(routes);

server.listen(3001, () => {
    console.log("Servidor backend inicializado com sucesso na porta 3001");
});
