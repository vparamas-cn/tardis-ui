import React, { useState, useEffect ,Fragment} from "react";
import "../Table.scss";
import "./Row.scss"
import DropDown from "../../DropDown";
import Button from "../../Button/Button";
import DatePicker from "../../InputText/DatePicker";
import { Images } from "../../../assets/images";

const SourceConfig = props => {
  const [data, SetData] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]);
  useEffect(() => {});
  const showHideRow = (selectedrow, arrowimg) => {
    var trd = document.getElementById(selectedrow);
    if (trd.className.indexOf("hidden_row") > -1){
      trd.classList.remove("hidden_row");
    }
    else{
      trd.classList.add("hidden_row");
    }
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
        <td>Sources_File_01</td>
        <td> <input
            type="text"
            disabled="disabled"
           
          /></td>
        <td>Source</td>
        <td>
          Type_01
        </td>
        <td>Inactive</td>
        <td>025555</td>
        <td>Date_Source_name</td>
        <td>15:12:12</td>
        <td>
          <img src={Images.RowEdit} className="editimg" />
          <span>Edit</span>
        </td>
      </tr>
    );
  };
  const RowDetails = props => {
    return (
      <tr id={`hidden_row${props.id}`} className="hidden_row editcontent">
        <td colspan="10" className="paddzero">
          <table className="detailtable">
            <tr>
              <td colspan="10">
                <div className="detailcontainer">
                  <div className="detailimg centeralign">
                    <img src={Images.addlist} />
                  </div>
                  <div className="detailname">
                    <span className="nametitle">Source Name</span>
                    <span>String_01_File</span>
                  </div>
                  <input type="text"  className="sourceinput120"/>
                  <input type="text" value="Alias"  className="sourceinput60"/>
                  <input type="text"  value="Type" className="sourceinput60" />
                  <DropDown
                    id={`activedd${props.id}`}
                    class={"failuredd sourceinput60"}
                    imgclass={"centeralign"}
                    imguri={Images.arrowblack}
                    options={["True","False"]}
                  />
                   <input type="text" value={"02555"} className="sourceinput60"/>
                  <input type="text"  value={"Date_Source_name"}  className="sourceinput120"/>
                   <input type="text"  value={"15:12:12"} className="sourceinput60"/>
                  
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
            <Fragment key={`SourceConfig-${index}`}>
              <Row {...item} />
              <RowDetails {...item} />
            </Fragment>
          );
        })}
    </tbody>
  );
};

export default SourceConfig;
