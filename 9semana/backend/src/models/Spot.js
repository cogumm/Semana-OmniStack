const db = require("mongoose");

const SpotSchema = new db.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: db.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = db.model("Spot", SpotSchema);
