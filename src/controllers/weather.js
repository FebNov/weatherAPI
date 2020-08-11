const weatherModel = require("../models/weather");

function getCityInfo(req, res) {
  const { city, countryCode } = req.params;
  const cityInfo = weatherModel.getCityInfo(city, countryCode).then((res) => {
    return res.json(cityInfo);
  });
}
function getCurrentWeatherData(req, res) {
  const { city, countryCode } = req.params;
  const currentWeatherData = weatherModel.getCurrentWeatherData();
  return res.json(currentWeatherData);
}
function getForecastWeatherData(req, res) {
  const currentWeatherData = weatherModel.getForecastWeatherData();
  return res.json(getForecastWeatherData);
}

/*
function updatePostById(req, res) {
  const { id } = req.query;
  const { author, content } = req.body;
  const newPost = postModel.updatePostById(id, { author, content });
  return res.json(newPost);
}
*/
module.exports = {
  getCurrentWeatherData,
  getCityInfo,
  getForecastWeatherData,
};
