import React, { useState, useEffect } from "react";
import "./Table.scss";
import { TableHeader } from "../../assets/constant";
import MaintennaceRow from "./TableRow/MaintennaceRow";
import Pagination from "./Pagination";
const Table = props => {
  const [header, SetHeader] = useState(TableHeader[props.name]);
  const [data, SetData] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  useEffect(() => {});

  return (
    <React.Fragment>
      <section className="tablescroll">
        <table className="maintable">
          <thead>
            <tr>
              {header &&
                header.map((item, index) => {
                  return <th key={`th ${index}`}>{item}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return <MaintennaceRow key={`td ${index}`} {...item} />;
              })}
          </tbody>
        </table>
      </section>
      <Pagination />
    </React.Fragment>
  );
};

export default Table;
