const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);
    // Contador de likes
    post.likes += 1;
    await post.save();

    // Enviando em tempo real
    req.io.emit('like', post);

    return res.json(post);
  },
};
