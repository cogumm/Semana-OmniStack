/**
 * Controlador responsável pelos casos de uma ONG.
 */
const db = require("../database/database");

module.exports = {
  /**
   * Controlador para listagem de todas os casos cadastradas.
   */
  async index(req, res) {
    /**
     * Paginação dos casos para retornar de 5 em 5.
     * /incidents?page=X
     */
    const { page = 1 } = req.query;

    /**
     * Query para retornar a quantidade de casos de cada ONG.
     */
    const [count] = await db("incidents").count();

    // console.log(count);

    const incidents = await db("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    // Mostrando no front-end o total de casos de cada ONG.
    res.header("X-Total-Count", count["count(*)"]);

    return res.json(incidents);
  },

  /**
   * Controlador para criação de um novo caso.
   *
   * @param {*} req
   * @param {*} res
   */
  async create(req, res) {
    const { title, description, value } = req.body;
    // Retornando o id da ONG
    const ong_id = req.headers.authorization;

    const [id] = await db("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  },

  /**
   * Controlador para deletar um caso.
   *
   * @param {*} req
   * @param {*} res
   */
  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await db("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: "Operação não autorizado." });
    }

    await db("incidents")
      .where("id", id)
      .delete();

    return res.status(204).send();
  }
};
