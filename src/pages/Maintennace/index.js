import React from "react";
import { Table, TitleContainer } from "../../components";
import FilterContainer from "./Components/FilterContainer"
import {Images} from "../../assets/images";
import "./Maintennace.scss"
const Maintennace = () => {
  return (
    <div className="MaintennacePage page" >
      <TitleContainer
        name="Maintennace"
        img={Images.Maintennace}
      />
      <FilterContainer />
      <Table name="Maintennace" />
    </div>
  );
};

export default Maintennace;
