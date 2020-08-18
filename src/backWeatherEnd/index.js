const express = require("express");
const app = express();

const routes = require("./router");

app.use(express.json());

app.use(routes);
app.listen(3000, () => {
  console.log("Listen Port 3000");
});
