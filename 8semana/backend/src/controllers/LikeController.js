const Dev = require("../models/Dev");

module.exports = {
    async store(req, res) {
        //console.log(req.params.devID);
        //console.log(req.headers.user);
        const { user } = req.headers;
        const { devID } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devID);

        if (!targetDev) {
            return res.status(400).json({ error: "Dev não existe!" });
        }

        if (targetDev.likes.includes(loggedDev._id)) {
            console.log("Deu bom!");
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};
