const express = require("express");
const SessionController = require("./controllers/SessionContoller");

const routes = express.Router();

routes.post("/sessions", SessionController.store);

module.exports = routes;
