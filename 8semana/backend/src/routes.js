const express = require("express");
const routes = express.Router();
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DisLikeController = require("./controllers/DislikeController");

/* routes.get("/", (req, res) => {
    return res.json({ message: "Estou vivo!" });
}); */

/* routes.post("/devs", (req, res) => {
    //console.log(req.body);
    //return res.json({ ok: true });
});
 */

routes.post("/devs", DevController.store);
routes.post("/devs/:devID/likes", LikeController.store);
routes.post("/devs/:devID/dislikes", DisLikeController.store);

module.exports = routes;
