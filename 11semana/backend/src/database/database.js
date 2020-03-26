const knex = require("knex");
const configDB = require("../../knexfile");

const connection = knex(configDB.development);

module.exports = connection;
