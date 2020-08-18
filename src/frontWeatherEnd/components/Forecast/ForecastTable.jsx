import React from "react";
import "./Forecast.scss";

//传入getInfoByCityName res[1].data /// 传入预测数据，分别对应温度与城市名

const ForecastTable = (props) => (
  <div className="forecastweather--container">
    <ul className="forecastweather--flexbox">
      <li>
        <p className="forecastweather--date">8月22号星期五</p>
      </li>
      <li>
        <p className="forecastweather--type">晴天</p>
      </li>
      <li>
        <p>
          <span className="forecastweather--numberr__max">25摄氏度C</span>
          <span className="forecastweather--number__min">/15摄氏度C</span>
        </p>
      </li>
    </ul>
  </div>
);

export default ForecastTable;
