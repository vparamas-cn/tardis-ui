import React, { useState, useEffect, Fragment } from "react";
import "../Table.scss";
import DropDown from "../../DropDown";
import Button from "../../Button/Button";
import DatePicker from "../../InputText/DatePicker";
import { Images } from "../../../assets/images";

const Maintennace = props => {
  const [data, setData] = useState([
    { id: 1, sourcename: "Sources Names", logdate: "25/06/2020", reason:"Configuration Module", comments: "" },
    { id: 2, sourcename: "Sources Names", logdate: "25/06/2020", reason:"Configuration Module", comments: "" },
    { id: 3, sourcename: "Sources Names", logdate: "25/06/2020", reason:"Configuration Module", comments: "" },
  ]);
  useEffect(() => {
   
    
  }, [props]);
  const Update = (formid) => {
    const form = document.getElementById(formid)
    var data = Object.values(form).reduce((obj, field) => { obj[field.name] = field.value; return obj }, {});
    console.log(data);
  }
  const ClearForm = (formid) => {
    document.getElementById(formid).reset();
  }
  const Delete = (id) => {

  }
  const showHideRow = (selectedrow, arrowimg) => {
    var trd = document.getElementById(selectedrow);
    if (trd.className.indexOf("hidden_row") > -1) {
      trd.classList.remove("hidden_row");
    }
    else {
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
  
  const Row = props => {
    return (
      <tr
        onClick={() => {
          showHideRow(`hidden_row${props.id}`, `downimage${props.id}`);
        }}
      >
        <td className="rowarrow">
          <img alt=""
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
          <img alt="" src={Images.RowEdit} className="editimg" />
          <span>Edit</span>
        </td>
      </tr>
    );
  };
  const RowDetails = props => {
    return (
      <tr id={`hidden_row${props.id}`} className="hidden_row editcontent">
        <td colSpan="6" className="paddzero">
          <table className="detailtable">
            <tbody>
              <tr>
                <td colSpan="6">
                  <form id={`formmaintainence-${props.id}`}>
                    <div className="detailcontainer">
                      <div className="detailimg centeralign">
                        <img alt="" src={Images.addlist} />
                      </div>
                      <div className="detailname">
                        <span className="nametitle">Source Name</span>
                        <span>String_01_File</span>
                      </div>
                      <DatePicker name={`logdate-${props.id}`} />
                      <DropDown
                        id={`failuredd${props.id}`}
                        class={"failuredd"}
                        imgclass={"centeralign"}
                        imguri={Images.arrowblack}
                        options={["Configuration Module"]}
                      />
                      <input type="text" name="comments" placeholder="No Issue to the module" />
                      <div className="detailbuttons">
                        <Button class="greenclr" name="Update" onClick={() => { Update(`formmaintainence-${props.id}`) }} />
                        <Button class="clearbtncolor" name="Clear" onClick={() => { ClearForm(`formmaintainence-${props.id}`) }} />
                        <Button
                          class="deletebtn"
                          name="Delete Contact"
                          leftimg={Images.Delete}
                          onClick={() => { Delete(props.id) }}
                        />
                      </div>
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  };
  return (
    <tbody>
      {data && data.length > 0?
        data.map((item, index) => {
          return (
            <Fragment key={`MaintainanceRow-${index}`}>
              <Row {...item} />
              <RowDetails {...item} />
            </Fragment>
          );
        }):
        <tr><td colSpan="6" className="norecord">No Data found!!</td></tr>
        }

    </tbody>
  );
};

export default Maintennace;
