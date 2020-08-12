const axios = require("axios");
const cityInfo = require("./cityInfo");
const currentWeather = require("./currentWeather");
const forecastWeather = require("./forecastWeather");

//const routes = require("./routes");
//app.use(routes);
const instance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
});

function filterDataByClass(allInfo) {
  const allInfoData
  return allInfoData
}

/*
Promise.all([
  instance
    .get("weather", {
      params: {
        q: "London,uk",
        units: "metric",
        APPID: "ada4e4cd17a1537327fe70dc3fd9a8f9",
      },
    })
    .then((res) => {
      cityInfo = res.data;
      return cityInfo;
    }),
  instance
    .get("/forecast", {
      params: {
        q: "London,uk",
        units: "metric",
        APPID: "ada4e4cd17a1537327fe70dc3fd9a8f9",
      },
    })
    .then((res) => {
      const { city } = res.data;
      return city;
    }),
]).then((res) => {
  console.log(res);
});
*/
function getInfoByCityName(cityName, countryCode) {
  const reqCity = `${cityName},${countryCode}`;
  const appid = "ada4e4cd17a1537327fe70dc3fd9a8f9";
  const unit= "metric"
  Promise.all([
    instance
    .get("weather", {
      params: {
        q: reqCity,
        units: unit,
        APPID: appid,
      },
    })
    .then((CurrentInfo) => {
      return CurrentInfo;
    }),
  instance
  .get("forscast", {
    params: {
      q: reqCity,
      units: unit,
      APPID: appid,
    },
  })
  .then((forscastInfo) => {
    return forscastInfo;
  }),
])
.then(allInfo =>{
  return allInfo;
})
  

module.exports = {filterDataByClass};
