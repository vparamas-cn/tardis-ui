import React, { useEffect } from "react";
import "./Source.scss";
import FilterContainer from "./Components/FilterContainer";
import { Table, TitleContainer } from "../../../../components";
import { Images } from "../../../../assets/images";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { SourceRecords } from "../../../../reducers/configuration/actions"
import query from '../../../../assets/constant/query'

const Source = ({ SourceRecords }) => {
  const data = useSelector(state => state.source);
  useEffect(() => {
    SourceRecords(query.source(data));
  }, [SourceRecords])

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
      <Table name="SourceConfig" dataSource={data} LoadRecord={(data)=>SourceRecords(data)}/>
    </div>
  );
};


export default connect(
  null, { SourceRecords }
)(Source);
