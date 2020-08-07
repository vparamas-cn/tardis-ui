import React, { useEffect } from "react";
import "./Source.scss";
import FilterContainer from "./Components/FilterContainer";
import { Table, TitleContainer } from "../../../../components";
import { Images } from "../../../../assets/images";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { SourceRecords, UpdateFilterPagination } from "../../../../reducers/configuration/actions"
import { paginationFilter } from '../../../../utils'

const Source = ({ SourceRecords, UpdateFilterPagination }) => {
  const data = useSelector(state => state.source);

  useEffect(() => {
    SourceRecords();
    if(data.data.length> 0){
      let result = paginationFilter(data)
      result.page = 1;
      result.filter={};
      UpdateFilterPagination(result)
    }
  }, [])

  const LoadRecord = (filterdata) =>{
      filterdata = {...data,...filterdata}
      let result = paginationFilter(filterdata)
      UpdateFilterPagination(result)
  }

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
      <FilterContainer LoadRecord={(data)=>LoadRecord(data)}/>
      <Table name="SourceConfig" dataSource={data} LoadRecord={(data)=>LoadRecord(data)}/>
    </div>
  );
};


export default connect(
  null, { SourceRecords, UpdateFilterPagination }
)(Source);
