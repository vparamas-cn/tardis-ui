import React, { useState, useEffect } from "react";
import "./Pagination.scss";
import DropDown from "../../DropDown";
import {Images} from "../../../assets/images";

const Pagination = props => {
  const [selection, SetSelection] = useState(1);
  const [pagecount, SetCount] = useState([]);
  const { rowcount, noofpage } = props;
  useEffect(
    () => {
      let i = 1;
      var nopage = [];
      while (noofpage > i) {
        nopage.push(i);
        i++;
      }
      SetCount(nopage);
    },
    [noofpage]
  );
  const SelectPage = page => {
    SetSelection(page);
  };
  return (
    <div className="pagination">
      <div className="leftpaginiation">
        <span>Show</span>
        <select value={rowcount}>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
        </select>
        <span>entries</span>
      </div>
      <div className="rightpaginiation">
        <div className="prev">
          <img src={Images.prev} />
        </div>
        {pagecount &&
          pagecount.map((item, index) => {
            return (
              <div
                key={`pageno${index}`}
                className={`pageno ${selection == item
                  ? "selectedpageno"
                  : ""}`}
                onClick={() => {
                  SelectPage(item);
                }}
              >
                {item}
              </div>
            );
          })}
        <div className="next">
          <img src={Images.next} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
