import React, { useState, Fragment } from "react";
import "./Table.scss";
import { TableHeader } from "../../assets/constant";
import MaintennaceRow from "./TableRow/MaintennaceRow";
import SourceConfig from "./TableRow/SourceConfig";
import SourceMapConfig from "./TableRow/SourceMapConfig";
import SlackRow from "./TableRow/SlackRow";
import Pagination from "./Pagination";
import AdminRow from "./TableRow/AdminRow"
import Loader from '../Loader'

const Table = props => {
  const [header, SetHeader] = useState(TableHeader[props.name]);
  if(props.dataSource && props.dataSource.isLoading)
  return <Loader />
  return (
 
    <Fragment>
      <section className="tablescroll">
        <table className="maintable">
          <thead>
            <tr>
              {header &&
                header.map((item, index) => {
                  return <th key={`th-${index}`}>{item}</th>;
                })}
            </tr>
          </thead>
          {
          props.name === "Maintennace" ? (
            <MaintennaceRow />
          ) : props.name === "SourceConfig" ? (
            <SourceConfig dataSource={props.dataSource && props.dataSource.data} />
          ) : props.name === "SourceMapConfig" ? (
            <SourceMapConfig dataSource={props.dataSource && props.dataSource.data} />
          ) : props.name === "SlackIntegration" ? (
            <SlackRow />
          ) : props.name === "Admin" ? (
            <AdminRow />
          ) :null }
        </table>
      </section>
      <Pagination dataSource={props.dataSource || {count:5,totalPage:1, totalrow:10, currentpage:1} } LoadRecord={(data)=>props.LoadRecord(data)} />
    </Fragment>
  );
};

export default Table;
