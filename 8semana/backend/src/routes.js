const express = require("express");
const routes = express.Router();
const DevController = require("./controllers/DevController");

/* routes.get("/", (req, res) => {
    return res.json({ message: "Estou vivo!" });
}); */

/* routes.post("/devs", (req, res) => {
    //console.log(req.body);
    //return res.json({ ok: true });
});
 */

routes.post("/devs", DevController.store);

module.exports = routes;
