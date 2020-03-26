/**
 * Controlador responsável por realizar o login de uma ONG (Usuário);
 */

const crypto = require("crypto");
// Importando a conexão com o db
const db = require("../database/database");

/**
 * Solução do Thiago para o ID randômico.
 * Linik da postagem original: https://github.com/ThiagoTeodoro/semanaOminiStack_11/tree/develop#realizei-uma-correção-de-logica-na-minha-opnião-necessária
 */

/**
 * Função para gerar um id Randomico.
 *
 */
function generateRandomicId() {
  return crypto.randomBytes(4).toString("HEX");
}

/**
 * Função responsável por obter uma ONG pelo Id.
 *
 * @param {*} id
 */
async function getOngById(id) {
  return await db("ongs")
    .select("*")
    .where({ id: id })
    .first();
}

module.exports = {
  /**
   * Controlador para listagem de todas as ongs cadastradas.
   */
  async index(req, res) {
    const ongs = await db("ongs").select("*");

    return res.json(ongs);
  },

  /**
   * Controlador para criação de uma nova Ong.
   *
   * @param {*} req
   * @param {*} res
   */
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    //Gerando Primeiro Id Randomico
    let id = generateRandomicId();

    //Verificando se o id gerado já não existe no banco de dados
    let ongWithIdExist = await getOngById(id);

    //Loop de segurança que vai checar Equanto a Ong existir com aquele id de seleção,
    //Ele vai ficar gerando novs Id's e checando novamente, dessa forma garantimos que
    //O id será unico no Banco de dados.
    while (ongWithIdExist) {
      console.log("ONG com esse ID já existe. Solicitando novo ID");
      id = generateRandomicId();
      ongWithIdExist = await getOngById(id);
    }

    await db("ongs").insert({
      id: id,
      name: name,
      email: email,
      whatsapp: whatsapp,
      city: city,
      uf: uf
    });

    return res.json({ id: id });
  }
};
