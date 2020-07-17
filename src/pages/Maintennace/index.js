import React from "react";
import { Table,TitleContainer,FilterContainer } from "../../components";

const Maintennace = () => {
  return (
    <React.Fragment>
      <TitleContainer name="Maintennace" img={require("../../assets//images/Maintennace.svg")}/>
      <FilterContainer name="Maintennace"/>
      <Table name="Maintennace"/>     
    </React.Fragment>
  );
};

export default Maintennace;
