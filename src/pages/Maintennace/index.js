import React, {Fragment} from "react";
import { Table, TitleContainer, FilterContainer } from "../../components";
import {Images} from "../../assets/images";

const Maintennace = () => {
  return (
    <Fragment>
      <TitleContainer
        name="Maintennace"
        img={Images.Maintennace}
      />
      <FilterContainer name="Maintennace" />
      <Table name="Maintennace" />
    </Fragment>
  );
};

export default Maintennace;
