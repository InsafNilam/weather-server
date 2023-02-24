const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: [true, "Latitude is required"],
  },
  longitude: {
    type: Number,
    required: [true, "Longitude is required"],
  },
});

module.exports = Topic = mongoose.model("weather", weatherSchema);
