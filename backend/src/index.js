const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

// Suporte ao protocolo http e websocket
const server = require("http").Server(app);
const io = require("socket.io")(server);

// Conecção com o banco de dados
mongoose.connect("", {
    useNewUrlParser: true,
});

/*
 Permite que envie a informção do io em tempo real para todas as rotas,
 assim tem acesso ao req.io dentro de todos os Controllers.
*/
app.use((req, res, next) => {
    req.io = io;
    next();
});

// O cors permite que todas as URLs de diferentes IPs e servidor possam acessar o backend
app.use(cors());

// Rota para acessar arquivos estáticos, nesse caso os arquivos de uploads
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads", "resized")));

// Arquivo de declaração das rotas da aplicação
app.use(require("./routes"));

server.listen(3000);