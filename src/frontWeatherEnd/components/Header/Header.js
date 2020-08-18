import React from "react";
import CurrentTable from "./Current";
import SearchCity from "./SearchCity/SearchCity";

//传入getInfoByCityName res[1].data /// 传入预测数据，分别对应温度与城市名

const Header = (props) => (
  <div>
    <SearchCity />
    <CurrentTable></CurrentTable>;
  </div>
);

export default Header;
