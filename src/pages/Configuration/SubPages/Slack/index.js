import React from "react";
import "./Slack.scss";
import FilterContainer from "./Components/FilterContainer";
import { Table, TitleContainer } from "../../../../components";
import { Images } from "../../../../assets/images";
import { useHistory } from "react-router-dom";

const Slack = () => {
  let history = useHistory();
  const onBackHandler = page => {
    history.push("/Configurations");
  };
  return (
    <div className="Slackpage page">
      <TitleContainer
        name="Slack Integration"
        img={Images.slack}
        onBack={() => {
          onBackHandler();
        }}
        onSearch={(text)=>{
          
        }}
      />
      <FilterContainer />
      <Table name="SlackIntegration" />
    </div>
  );
};

export default Slack;