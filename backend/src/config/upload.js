const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    // Configurando o destino onde salvar os arquivos
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(req, file, cb) {
      cb(null, file.originalname);
    },
  }),
};
