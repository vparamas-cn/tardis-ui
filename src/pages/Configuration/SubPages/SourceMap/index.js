import React from "react";
import "./SourceMap.scss";
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
    <div className="SourceMappage page">
      <TitleContainer
        name="Source Map Configuration"
        img={Images.map}
        onBack={() => {
          onBackHandler();
        }}
      />
      <FilterContainer />
      <Table name="SourceMapConfig" />
    </div>
  );
};

export default Source;
