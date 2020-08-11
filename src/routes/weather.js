const express = require("express");
const validateId = require("../middleware/validateId");
const router = express.Router();

const {
  getCurrentWeatherData,
  getCityInfo,
  getForecastWeatherData,
  //function from the weather.js
} = require("../controllers/weather");
const { Router } = require("express");

router.get("", getCurrentWeatherData);
router.get("", getCityInfo);
router.get("", getForecastWeatherData);
//router.get("/id", validateId, getPostById);

module.exports = router;
