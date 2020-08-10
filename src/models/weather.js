const axios = require("axios");
const instance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
});
//const routes = require("./routes");

//app.use(routes);
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
      const { main } = res.data;
      return main;
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
