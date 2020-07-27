import React, { useState, Fragment } from "react";
import "./Table.scss";
import { TableHeader } from "../../assets/constant";
import MaintennaceRow from "./TableRow/MaintennaceRow";
import SourceConfig from "./TableRow/SourceConfig";
import SourceMapConfig from "./TableRow/SourceMapConfig";
import SlackRow from "./TableRow/SlackRow";
import Pagination from "./Pagination";
import AdminRow from "./TableRow/AdminRow"
const Table = props => {
  const [header, SetHeader] = useState(TableHeader[props.name]);
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
          {props.name === "Maintennace" ? (
            <MaintennaceRow filtertext={props.filtertext}/>
          ) : props.name === "SourceConfig" ? (
            <SourceConfig filtertext={props.filtertext}/>
          ) : props.name === "SourceMapConfig" ? (
            <SourceMapConfig filtertext={props.filtertext}/>
          ) : props.name === "SlackIntegration" ? (
            <SlackRow filtertext={props.filtertext}/>
          ) : props.name === "Admin" ? (
            <AdminRow filtertext={props.filtertext}/>
          ) :null}
        </table>
      </section>
      <Pagination rowcount={5} noofpage={5} />
    </Fragment>
  );
};

export default Table;
