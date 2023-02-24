const express = require("express");
const auth = require("../Middleware/auth");

const router = express.Router();
const {
  getWeather,
  createWeather,
  deleteWeather,
} = require("../Controllers/weatherController");

router.get("/get-weather", auth, getWeather);
router.post("/add-weather", auth, createWeather);
router.delete("/delete-weather/:id", auth, deleteWeather);

module.exports = router;
