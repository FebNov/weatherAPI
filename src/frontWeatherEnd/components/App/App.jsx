import React from "react";
import Header from "../Header";
import ForecastTable from "../Forecast";
import "./App.scss";
const App = () => (
  <div className="project--wrapper">
    <Header></Header>
    <ForecastTable></ForecastTable>
  </div>
);

export default App;
