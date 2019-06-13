const multer = require("multer");
const path = require("path");

module.exports = {
    storage: new multer.diskStorage({
        // Configurando o destino onde salvar os arquivos
        destination: path.resolve(__dirname, "..", "..", "uploads"),
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    })
};