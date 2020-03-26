/**
 * Controlador responsável pelo perfil de uma ONG.
 */
const db = require("../database/database");

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await db("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.json(incidents);
  }
};
