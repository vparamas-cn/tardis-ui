import React, { useState, useEffect } from "react";
import "./Pagination.scss";
import { Images } from "../../../assets/images";

const Pagination = props => {

  const { count, totalPage, totalrow, currentpage } = props.dataSource;

  const [selection, SetSelection] = useState(currentpage);
  const [pagecount, SetCount] = useState([]);
  const [rowcount, setRowCount] = useState(count)
  useEffect(
    () => {
      let i = 1;
      var nopage = [];
      while (totalPage >= i) {
        nopage.push(i);
        i++;
      }
      SetCount(nopage);
    },
    [props]
  );
  const SelectPage = page => {
    SetSelection(page);
    props.LoadRecord({ count: count, page: page })
  };
  const Previous = () => {
    if (selection > 1) SetSelection(selection - 1);
  };
  const Next = () => {
    if (totalPage > selection) SetSelection(selection + 1);
  };
  const onPageSelection = (e) => {
    let count = e.target.value;
    setRowCount(count)
    count = count != "all" ? parseInt(count) : totalrow;
    props.LoadRecord({ count: count, page: selection })

  }
  return (
    <div className="pagination">
      <div className="leftpaginiation">
        <span>Show</span>
        <label>
          <select value={rowcount} onChange={(e) => { onPageSelection(e) }}>
            <option value={"5"}>5</option>
            <option value={"10"}>10</option>
            <option value={"25"}>25</option>
            <option value={"50"}>50</option>
            <option value={"75"}>75</option>
            <option value={"100"}>100</option>
            <option value={"125"}>125</option>
            <option value={"150"}>150</option>
            <option value={"175"}>175</option>
            <option value={"200"}>200</option>
            <option value={"all"}>All</option>
          </select>
        </label>
        <span>entries</span>
      </div>
      {pagecount > 1 ?
        <div className="rightpaginiation">
          <div
            className="prev"
            onClick={() => {
              Previous();
            }}
          >
            <img alt="" src={Images.prev} />
          </div>
          {pagecount &&
            pagecount.map((item, index) => {
              return (
                <div
                  key={`pageno${index}`}
                  className={`pageno ${selection === item
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
          <div
            className="next"
            onClick={() => {
              Next();
            }}
          >
            <img alt="" src={Images.next} />
          </div>
        </div> : null}
    </div>
  );
};

export default Pagination;
