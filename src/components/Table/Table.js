import React, { useState, useEffect, Fragment } from "react";
import "./Table.scss";
import { TableHeader } from "../../assets/constant";
import MaintennaceRow from "./TableRow/MaintennaceRow";
import Pagination from "./Pagination";
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
          {props.name == "Maintennace" ? <MaintennaceRow /> : null}
        </table>
      </section>
      <Pagination rowcount={5} noofpage={5} />
    </Fragment>
  );
};

export default Table;
