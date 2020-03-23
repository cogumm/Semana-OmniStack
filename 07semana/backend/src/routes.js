const express = require("express");
/*
**** Multer permite que o express entenda o formato do mult part form data
*/
const multer = require("multer");
const uploadConfig = require("./config/upload")

const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");

const routes = new express.Router();
const upload = multer(uploadConfig);

// Rota dos posts
routes.get("/posts", PostController.index);
routes.post("/posts", upload.single("image"), PostController.store);
// Rotas dos likes
routes.post("/posts/:id/like", LikeController.store);

module.exports = routes;