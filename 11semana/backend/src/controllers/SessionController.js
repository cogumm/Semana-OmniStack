/**
 * Controlador responsável pelo login e logout das ONGs no aplicativo.
 */
const db = require("../database/database");
module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await db("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return res.status(400).json({ error: "Não existe uma ONG com este ID." });
    }

    return res.json(ong);
  }
};
