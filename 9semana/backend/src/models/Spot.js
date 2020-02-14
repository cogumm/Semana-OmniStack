const db = require("mongoose");

const SpotSchema = new db.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: db.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// Campo virtual
SpotSchema.virtual("thumbnail_url").get(function() {
  return `http://localhost:3001/files/${this.thumbnail}`;
});

module.exports = db.model("Spot", SpotSchema);
