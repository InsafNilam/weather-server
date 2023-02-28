const asyncHandler = require("express-async-handler");

//import mongoose model
const Weather = require("../Models/weatherModel");

const createWeather = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { latitude, longitude } = req.body;

  Weather.findOne({ userId, latitude, longitude })
    .then((weather) => {
      if (weather)
        return res
          .status(400)
          .json({ msg: "You have already added the weather coordinates" });

      const newWeather = new Weather({
        userId: userId,
        latitude,
        longitude,
      });

      newWeather.save();

      return res
        .status(200)
        .json({ msg: "Weather Coordinates has been added" });
    })
    .catch((e) => console.log(e));
});

const getWeather = asyncHandler(async (req, res) => {
	const userId = await req.user.id;
	Weather.find({ userId: userId }, (err, doc) => {
    if (!err) res.send(doc);
    else
      console.log(
        "Error in Retrieving Weather Details :" +
          JSON.stringify(err, undefined, 2)
      );
  });
});

const deleteWeather = asyncHandler(async (req, res) => {
  Weather.findByIdAndDelete(req.params.id, (err, doc) => {
    if (!err) res.send(doc);
    else
      console.log(
        "Error in Deleting Weather Details :" +
          JSON.stringify(err, undefined, 2)
      );
  });
});

module.exports = {
  getWeather,
  createWeather,
  deleteWeather,
};
