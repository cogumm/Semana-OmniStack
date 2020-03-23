const db = require("mongoose");

const BookingSchema = new db.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: db.Schema.Types.ObjectId,
    ref: "User"
  },
  spot: {
    type: db.Schema.Types.ObjectId,
    ref: "Spot"
  }
});

module.exports = db.model("Booking", BookingSchema);
