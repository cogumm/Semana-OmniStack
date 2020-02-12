// index, show, store, update, destroy

const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    // Validando se não já existe o email
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    // const user = await User.create({ email });

    return res.json(user);
  }
};
