import React from "react";
import "./CurrentTable.scss";
//传入getInfoByCityName res[0].data /// 传入预测数据，分别对应温度与城市名

const CurrentTable = (props) => (
  <div className="currentweather--container">
    <div className="currentweather--info">
      <p className="currentweather--number">25摄氏度C</p>
      <p>
        <span className="currentweather--numberr__max">25摄氏度C</span>
        <span className="currentweather--number__min">/15摄氏度C</span>
      </p>

      <p className="currentweather--type">晴天</p>
      <p>
        <span className="cityname">Brisbane</span>
        <span className="city--ofcountry">Au</span>
      </p>
    </div>
  </div>
);
export default CurrentTable;
