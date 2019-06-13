const Post = require("../models/Post");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
    // Rota index retorna todos os pots em ordes desc
    async index(req, res) {
        const posts = await Post.find().sort("-createdAt");

        return res.json(posts);
    },

    // Rota store
    async store(req, res) {
        // console.log(req.body);
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        // Recebendo os dados do arquivo
        const [name] = image.split(".");
        const filename = `${name}.jpg`;

        // Redimencionando a imagem para 500px
        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70})
            .toFile(
                path.resolve(req.file.destination, "resized", filename)
            )

        // Deletando o arquivo original
        fs.unlinkSync(req.file.path);

        // Salvando no db
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: filename,
        })

        // Enviando em tempo real
        req.io.emit("post", post);
        return res.json(post);
    }
};