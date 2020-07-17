import React, {useState}from "react";
import "./Pagination.scss";
import DropDown from "../../DropDown"

const Pagination =(props)=> {
  const [selection, SetSelection] =useState(1);
  const {rowcount , noofpage} =props;
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
          <div className="prev"><img src={require("../../../assets/images/prev.svg" )}/></div>         
          <div className="pageno selectedpageno">1</div>
          <div className="pageno">2</div>
           <div className="pageno">3</div>
          <div className="pageno">4</div>
           <div className="pageno">5</div>
          <div className="next"><img src={require("../../../assets/images/next.svg" )}/></div>
        </div>
      </div>
  );
}

export default Pagination;