const weatherModel = require("../models/weather");

function getInfoByCityName(req, res) {
  /* const { city, countryCode } = req.params;
  const cityInfo = weatherModel
    .getInfoByCityName(city, countryCode)
    .then((res) => {
      return res.json(cityInfo);
    });
}   
*/
  
  const try1try = weatherModel.getInfoByCityName();
  return res.json(try1try);
}
module.exports = {
  getInfoByCityName,
};
