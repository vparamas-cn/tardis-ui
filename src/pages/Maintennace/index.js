import React from "react";
import { Table, TitleContainer, FilterContainer } from "../../components";
import {Images} from "../../assets/images";

const Maintennace = () => {
  return (
    <React.Fragment>
      <TitleContainer
        name="Maintennace"
        img={Images.Maintennace}
      />
      <FilterContainer name="Maintennace" />
      <Table name="Maintennace" />
    </React.Fragment>
  );
};

export default Maintennace;
