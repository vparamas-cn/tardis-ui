import React, {Fragment} from "react";
import { Table, TitleContainer, FilterContainer } from "../../components";
import {Images} from "../../assets/images";
import "./Maintennace.scss"
const Maintennace = () => {
  return (
    <div className="MaintennacePage">
      <TitleContainer
        name="Maintennace"
        img={Images.Maintennace}
      />
      <FilterContainer name="Maintennace" />
      <Table name="Maintennace" />
    </div>
  );
};

export default Maintennace;
