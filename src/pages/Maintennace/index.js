import React, { useState} from "react";
import { Table, TitleContainer } from "../../components";
import FilterContainer from "./Components/FilterContainer"
import {Images} from "../../assets/images";
import "./Maintennace.scss"
const Maintennace = () => {
  const[searchtxt, setSearch] = useState("")
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
          setSearch(text)
        }}
      />
      <FilterContainer />
      <Table name="Maintennace" filtertext={searchtxt} />
    </div>
  );
};

export default Maintennace;
