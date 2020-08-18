import React from "react";
import "./SearchCity.scss";
const SearchCity = () => (
  <div className="inputcityname--wrapper">
    <div className="cityfullname">
      <input
        className="city--inputarea"
        type="text"
        name="cityfullname"
        value=""
      />
      <input type="button" value="something"></input>
    </div>
  </div>
);

export default SearchCity;
