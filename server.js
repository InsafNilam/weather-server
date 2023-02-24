require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const connection = require("./DB");

//import routers by creating constant variables
const userRouter = require("./Routes/userRoutes");
const weatherRouter = require("./Routes/weatherRoutes");

// database connection
connection();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 8000;

// routes
app.use("/api/user", userRouter);
app.use("/api/weather", weatherRouter);

app.listen(port, (err) => {
  if (err) console.log("Error ocuured in starting the server:", err);
  console.log(`DevX Server is listening on port ${port}...`);
});
