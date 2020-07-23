import React from "react";
import { Table, TitleContainer } from "../../components";
import FilterContainer from "./Components/FilterContainer"
import {Images} from "../../assets/images";
import "./Maintennace.scss"
const Maintennace = () => {
  const onBackHandler = (page)=> {

  }
  return (
    <div className="MaintennacePage page" >
      <TitleContainer
        name="Maintennace"
        img={Images.Maintennace}
        onBack={() => {
          onBackHandler();
        }}
        onSearch={(text)=>{
          
        }}
      />
      <FilterContainer />
      <Table name="Maintennace" />
    </div>
  );
};

export default Maintennace;
