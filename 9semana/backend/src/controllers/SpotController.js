const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;

    // Retornando só os Spots da tecnologia
    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    // Validando o usuário
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ errpr: "User does not exists" });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map(tech => tech.trim()),
      price
    });

    return res.json(spot);

    /* const { filename } = req.file;
    console.log(filename);

    return res.json({ message: true });  */
  }
};
