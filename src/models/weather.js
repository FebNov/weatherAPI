const axios = require("axios");
const city = require("./cityInfo");
const currentWeather = require("./currentWeather");
const forecastWeather = require("./forecastWeather");
const { request } = require("express");

//const routes = require("./routes");
//app.use(routes);
const unit = "metric";
const appid = "ada4e4cd17a1537327fe70dc3fd9a8f9";
const reqCity = "Brisbane,au";

const instance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
});

function filterDataByClass(allInfo) {
  const rawData = allInfo[0].data;
  const cityInfo = new city(rawData);
  const currentWeatherInfo = new currentWeather(rawData);
  // const rawForecastData = allInfo[1].data;
  //// console.log(rawForecastData);
  // const forecastWeatherInfo = new forecastWeather(rawForecastData);
  /// console.log(forecastWeatherInfo);
  return { cityInfo, currentWeatherInfo };
}
function getCurrentWeather() {
  // const reqCity = `${cityName},${countryCode}`;
  return instance
    .get("/weather", {
      params: {
        q: reqCity,
        units: unit,
        APPID: appid,
      },
    })
    .then((res) => {
      return res;
    });
}
function getForecastWeather() {
  //api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={your api key}
  //const reqCity = `${cityName},${countryCode}`;
  const cnt = 1;
  instance
    .get("/forecast", {
      params: {
        q: reqCity,
        units: unit,
        cnt: cnt,
        APPID: appid,
      },
    })
    .then((res) => {
      //  const listtry = res.data.list[5]
      const list = res.data.list;
      let try1 = {};
      try1 = list;
      console.log(try1[0]);
      const forecastWeatherInfo = new forecastWeather(try1[0]);
      console.log(forecastWeatherInfo);
      return try1;
      //  console.log(list);
    });
}

function getInfoByCityName() {
  Promise.all([getCurrentWeather(), getForecastWeather()]).then((res) => {
    const finalInfo = filterDataByClass(res);
    //  console.log(finalInfo);
    return finalInfo;
  });
}
module.exports = { getInfoByCityName };
