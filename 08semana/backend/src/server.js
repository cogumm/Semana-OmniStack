const express = require("express");
const db = require("mongoose");

const cors = require("cors");
const routes = require("./routes");

const app = express();
// Aceitando tanto conexões websocket quanto http
const server = require("http").Server(app);
const io = require("socket.io")(server);

const connectedUsers = {};
io.on("connection", socket => {
    /* console.log("Nova conexão", socket.id);

    socket.on("hello", message => {
        console.log(message);
    });

    setTimeout(() => {
        socket.emit("world", {
            message: "Backend -> Frontend!"
        });
    }, 5000); */
    const { user } = socket.handshake.query;
    //console.log(user, socket.id);

    connectedUsers[user] = socket.id;
});

// Conecção com o banco de dados
db.connect(
    "mongodb+srv://semana:semana@mrmeeseeks-2yyps.mongodb.net/SemanaOmniStack?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3001, () => {
    console.log("Servidor backend inicializado com sucesso na porta 3001");
});
