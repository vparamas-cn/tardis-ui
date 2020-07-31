import React, { useState, useEffect } from "react";
import "./Pagination.scss";
import { Images } from "../../../assets/images";

const Pagination = props => {

  const { size, totalPage, totalrow, currentpage } = props.dataSource;

  const [selection, SetSelection] = useState(currentpage);
  const [rowcount, setRowCount] = useState(size == totalrow ? "all" : size);
  const [pagecount, SetCount] = useState();
  const [upperbound, setUpper] = useState();
  const [lowerbound, setLower] = useState();
  const [isPrevBtnActive, setIsPrevActive] = useState('disabled');
  const [isNextBtnActive, setIsNextActive] = useState('');
  useEffect(()=>{
    setUpper(5)
    setLower(0)
    SetCount(5)
  },[props])
  const setPrevAndNextBtnClass = (listid) => {
    setIsNextActive('disabled');
    setIsPrevActive('disabled');
    if (totalPage === listid && totalPage > 1) {
      setIsPrevActive('');
    }
    else if (listid === 1 && totalPage > 1) {
      setIsNextActive('');
    }
    else if (totalPage > 1) {
      setIsNextActive('');
      setIsPrevActive('');
    }
    props.LoadRecord({ size: size, page: listid })
  }

  const btnPrevClick = () => {

    if ((selection) % pagecount === 0) {
      setUpper(upperbound - pagecount);
      setLower(lowerbound - pagecount);
      console.log(upperbound - pagecount)
    }
    let listid = selection - 1;
    SetSelection(listid);
    setPrevAndNextBtnClass(listid);
  }
  const btnNextClick = () => {
   
    if ((selection) % pagecount === 0) {
      setUpper(upperbound + pagecount);
      setLower(lowerbound + pagecount);
      console.log(upperbound + pagecount)
    }
    let listid = selection + 1;
    SetSelection(listid);
    setPrevAndNextBtnClass(listid);
  }

  const SelectPage = page => {
    SetSelection(page);
    props.LoadRecord({ size: size, page: page })
    setPrevAndNextBtnClass(page);
  };

  const onPageSelection = (e) => {
    let count = e.target.value;
    setRowCount(count)
    count = count != "all" ? parseInt(count) : totalrow;
    props.LoadRecord({ size: count, page: selection })

  }
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalrow / size); i++) {
    pageNumbers.push(i);
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
      <div className="rightpaginiation">
        <div
          className="prev"
          onClick={() => {
            isPrevBtnActive !== 'disabled' && btnPrevClick()
          }}
        >
          <img alt="" src={Images.prev} />
        </div>
        {pageNumbers &&
          pageNumbers.map((item, index) => {
            if (item === 1 && selection === 1) {
              return (
                <div
                  key={`pageno${index}`}
                  className={`pageno ${item == selection ? "selectedpageno":""}`}
                  onClick={() => {
                    SelectPage(item);
                  }}
                >
                  {item}
                </div>
              )
            }
            else if ((item < upperbound + 1) && item > lowerbound) {
              return (
                <div
                  key={`pageno${index}`}
                  className={`pageno ${item == selection ? "selectedpageno":""}`}
                  onClick={() => {
                    SelectPage(item);
                  }}
                >
                  {item}
                </div>
              )
            }
          })}
        <div
          className="next"
          onClick={() => {
            isNextBtnActive !== 'disabled' && btnNextClick()
          }}
        >
          <img alt="" src={Images.next} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
