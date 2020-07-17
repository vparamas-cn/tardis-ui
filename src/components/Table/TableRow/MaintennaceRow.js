import React, { useState, useEffect } from "react";
import "../Table.scss";
import DropDown from "../../DropDown";
import Button from "../../Button/Button";
import DatePicker from "../../InputText/DatePicker";
import {Images} from "../../../assets/images";
import $ from "jquery";

const Maintennace = props => {
  const [data, SetData] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  useEffect(() => {});
  const showHideRow = (selectedrow, arrowimg) => {
    var trd = document.getElementById(selectedrow);
    $(".editcontent:not([id~=" + selectedrow + "])").hide();
    $(".rowarrow > img")
      .removeClass("uparr")
      .addClass("downarr");
    $(`#${selectedrow}`).toggle(500);
    // if (trd.className.indexOf("hidden_row") > -1){
    //   trd.classList.remove("hidden_row");
    // }
    // else{
    //   trd.classList.add("hidden_row");
    // }
    var imageid = document.getElementById(arrowimg);
    if (imageid.className.indexOf("downarr") > -1) {
      imageid.classList.remove("downarr");
      imageid.classList.add("uparr");
    } else {
      imageid.classList.add("downarr");
      imageid.classList.remove("uparr");
    }
  };
  const handleDate = date => {};
  const Row = props => {
    return (
      <tr
        onClick={() => {
          showHideRow(`hidden_row${props.id}`, `downimage${props.id}`);
        }}
      >
        <td className="rowarrow">
          <img
            src={Images.downarrow}
            className="downarr"
            id={`downimage${props.id}`}
          />
        </td>
        <td>Sources Names</td>
        <td>25/06/2020</td>
        <td>Configuration Module</td>
        <td>
          <input
            type="text"
            disabled="disabled"
            placeholder="No Issue to the module"
          />
        </td>
        <td>
          {" "}
          <img
            src={Images.RowEdit}
            className="editimg"
          />
          <span>Edit</span>
        </td>
      </tr>
    );
  };
  const RowDetails = props => {
    return (
      <tr id={`hidden_row${props.id}`} className="hidden_row editcontent">
        <td colspan="6" className="paddzero">
          <table className="detailtable">
            <tr>
              <td colspan="6">
                <div className="detailcontainer">
                  <div className="detailimg centeralign">
                    <img src={Images.addlist} />
                  </div>
                  <div className="detailname">
                    <span className="nametitle">Source Name</span>
                    <span>String_01_File</span>
                  </div>
                  <DatePicker handleDate={e => handleDate(e)} />
                  <DropDown
                    id={`failuredd${props.id}`}
                    class={"failuredd"}
                    imgclass={"centeralign"}
                    imguri={Images.arrowblack}
                    options={["Configuration Module"]}
                  />
                  <input type="text" placeholder="No Issue to the module" />
                  <div className="detailbuttons">
                    <Button class="greenclr" name="Update" />
                    <Button class="clearbtncolor" name="Clear" />
                    <Button
                      class="deletebtn"
                      name="Delete Contact"
                      leftimg={Images.Delete}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    );
  };
  return (
    <tbody>
      {data &&
        data.map((item, index) => {
          return (
            <React.Fragment key={`MaintainanceRow${index}`}>
              <Row {...item} />
              <RowDetails {...item} />
            </React.Fragment>
          );
        })}
    </tbody>
  );
};

export default Maintennace;
