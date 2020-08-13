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
  //const rawForecastData = allInfo[1].data;
  //const forecastWeatherInfo = new forecastWeather(rawForecastData);
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
      //  const listtry = res.data.list[5];
      const tmrData = res.data;
      const forecastWeatherInfo = new forecastWeather(tmrData);
      console.log(forecastWeatherInfo);
      return tmrData;
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
