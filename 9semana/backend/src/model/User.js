const db = require("mongoose");

const UserSchema = new db.Schema({
  email: String
});

module.exports = db.model("User", UserSchema);
