import React , { useEffect }from "react";
import "./SourceMap.scss";
import FilterContainer from "./Components/FilterContainer";
import { Table, TitleContainer } from "../../../../components";
import { Images } from "../../../../assets/images";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { SourceMapRecords, UpdateFilterPagination } from "../../../../reducers/mapSource/actions"
import { paginationFilter } from '../../../../utils'

const SourceMap = ({SourceMapRecords, UpdateFilterPagination}) => {
  let history = useHistory();
  const data = useSelector(state => state.map);

  useEffect(() => {
    SourceMapRecords();
    if(data.data.length> 0){
      let result = paginationFilter(data)
      result.page = 1;
      result.filter={};
      UpdateFilterPagination(result)
    }
  }, [SourceMapRecords])

  const onBackHandler = page => {
    history.push("/Configurations");
  };

  const LoadRecord = (filterdata) =>{
    filterdata = {...data,...filterdata}
    let result = paginationFilter(filterdata)
    UpdateFilterPagination(result)
  }

  return (
    <div className="SourceMappage page">
      <TitleContainer
        name="Source Map Configuration"
        img={Images.map}
        onBack={() => {
          onBackHandler();
        }}
      />
      <FilterContainer LoadRecord={(data)=>LoadRecord(data)}/>
      <Table name="SourceMapConfig" dataSource={data} LoadRecord={(data)=>LoadRecord(data)}/>
    </div>
  );
};

export default connect(
  null, { SourceMapRecords,UpdateFilterPagination }
)(SourceMap);

