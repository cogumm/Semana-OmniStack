const express = require("express");
const routes = express.Router();
// Importação dos Controllers
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

/**
 * login e logout
 */
routes.post("/sessions", SessionController.create);

/**
 * Rota para as ONGs
 */
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

/**
 * Rota do prerfil da ONG
 */
routes.get("/profile", ProfileController.index);

/**
 * Rota para os casos (incidents)
 */
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
