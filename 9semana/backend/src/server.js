const express = require("express");
const db = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

// GET, POST, PUT, DELETE
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

// Conexão com o banco de dados
db.connect(
  "mongodb+srv://semana:semana@mrmeeseeks-2yyps.mongodb.net/SemanaOmniStack9?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001, () => {
  console.log("Servidor backend inicializado com sucesso na porta 3001");
});
