import React , { useEffect }from "react";
import "./SourceMap.scss";
import FilterContainer from "./Components/FilterContainer";
import { Table, TitleContainer } from "../../../../components";
import { Images } from "../../../../assets/images";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { SourceMapRecords } from "../../../../reducers/mapsource/actions"

const SourceMap = () => {
  let history = useHistory();
  const data = useSelector(state => state.sourcemap);
  useEffect(() => {
    SourceMapRecords({ page: 1, count: 5 });
  }, [SourceMapRecords])
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
      <Table name="SourceMapConfig" dataSource={data} LoadRecord={(data)=>SourceMapRecords(data)}/>
    </div>
  );
};

export default connect(
  null, { SourceMapRecords }
)(SourceMap);

