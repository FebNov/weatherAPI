const weatherModel = require("../models/weather");

function getInfoByCityName(req, res) {
  const { city, countryCode } = req.query;
  const info = weatherModel.getInfoByCityName(city, countryCode);
  console.log(res.json(info));
  return res.json(info);
}
module.exports = {
  getInfoByCityName,
};
