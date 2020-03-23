const Dev = require("../models/Dev");

module.exports = {
    async store(req, res) {
        //console.log(req.params.devID);
        //console.log(req.headers.user);
        //console.log(req.io, req.connectedUsers);

        const { user } = req.headers;
        const { devID } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devID);

        if (!targetDev) {
            return res.status(400).json({ error: "Dev não existe!" });
        }

        if (targetDev.likes.includes(loggedDev._id)) {
            //console.log("Deu bom!");
            // Utilizando o websocket
            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[devID];

            // Avisando ao usuário logado que ele deu um "match"
            if (loggedSocket) {
                req.io.to(loggedSocket).emit("match", targetDev);
            }
            // Avisando que ele recebeu um match
            if (targetSocket) {
                req.io.to(targetSocket).emit("match", loggedDev);
            }
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};
