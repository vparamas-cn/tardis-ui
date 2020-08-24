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
  const map = useSelector(state => state.map);
  const {data} = map;
  
  useEffect(() => {
    SourceMapRecords();
  }, [])

  useEffect(() => {
    if(data.length> 0){
      let result = paginationFilter(map)
      UpdateFilterPagination(result)
    }
  }, [data])

  const onBackHandler = () => {
    history.push("/Configurations");
  };

  const LoadRecord = (filterdata) =>{
    filterdata = {...map,...filterdata}
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
      <FilterContainer LoadRecord={(e)=>LoadRecord(e)}/>
      <Table name="SourceMapConfig" dataSource={map} LoadRecord={(e)=>LoadRecord(e)}/>
    </div>
  );
};

export default connect(
  null, { SourceMapRecords,UpdateFilterPagination }
)(SourceMap);

