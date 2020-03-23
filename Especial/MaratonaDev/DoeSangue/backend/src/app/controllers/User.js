import User from '../schemas/User';

module.exports = {
    async index(req, res) {
        try {
          const users = await User.find();

          return res.status(200).json(users);
        } catch (error) {
          // console.log(error);
          return res
            .status(400)
            .json({ message: 'Não foi possível carregar as informações' });
        }
      },

      async store(req, res) {
        try {
          const { name, email, blood } = req.body;

          if(!name || !email || !blood ) {
              return res.status(400).json({ message: 'Preencha todos os campos.' });
          }

          const user = await User.create(req.body);

          return res.status(200).json(user);
        } catch (error) {
          //console.log(error);
          return res.status(500).json({ message: 'Erro ao cadastrar informações' });
        }
      },

      async delete(req, res) {
        try {
          const { id } = req.params;
          const user = await User.findByIdAndDelete(id);

          return res.status(200).json(user);
        } catch (error) {
          // console.log(error);
          return res
            .status(400)
            .json({ message: 'Não foi possível apagar.' });
        }
      },
}
