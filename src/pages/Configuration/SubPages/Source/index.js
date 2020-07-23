import React, {useState} from "react";
import "./Source.scss";
import FilterContainer from "./Components/FilterContainer";
import { Table, TitleContainer } from "../../../../components";
import { Images } from "../../../../assets/images";
import { useHistory } from "react-router-dom";

const Source = () => {
  let history = useHistory();
  const [searchtxt, setSearch] = useState("");
  const onBackHandler = page => {
    history.push("/Configurations");
  };
  return (
    <div className="Sourcepage page">
      <TitleContainer
        name="Source Configuration"
        img={Images.Settings}
        onBack={() => {
          onBackHandler();
        }}
        onSearch={(text)=>{
          setSearch(text)
        }}
      />
      <FilterContainer />
      <Table name="SourceConfig" search={searchtxt}/>
    </div>
  );
};

export default Source;
