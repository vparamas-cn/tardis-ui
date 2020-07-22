import React from "react";
import "./Source.scss";
import FilterContainer from "./Components/FilterContainer";
import { Table, TitleContainer } from "../../../../components";
import { Images } from "../../../../assets/images";
import { useHistory } from "react-router-dom";

const Source = () => {
  let history = useHistory();
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
      />
      <FilterContainer />
      <Table name="SourceConfig" />
    </div>
  );
};

export default Source;
