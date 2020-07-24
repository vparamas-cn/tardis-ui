import React, { useState, useEffect, Fragment } from "react";
import "../Table.scss";
import "./Row.scss"
import DropDown from "../../DropDown";
import Button from "../../Button/Button";
import TimePicker from "../../TimePicker";
import { Images } from "../../../assets/images";

const SourceConfig = props => {
  const [data, SetData] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]);
  const [detailinput, SetDetail] = useState([]);
  useEffect(() => { });
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
        <td>Sources_File_01</td>
        <td> <input
          type="text"
          disabled="disabled"

        /></td>
        <td>Source</td>
        <td>
          Type_01
        </td>
        <td><div className="centeralign"><div className={`greendot`} />Active</div></td>
        <td>025555</td>
        <td>Date_Source_name</td>
        <td>15:12:12</td>
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
        <td colSpan="10" className="paddzero">
          <table className="detailtable">
            <tbody>
              <tr>
                <td colSpan="10">
                  <form id={`formsource-${props.id}`}>
                    <div className="detailcontainer">
                      <div className="detailimg centeralign">
                        <img alt="" src={Images.addlist} />
                      </div>
                      <div className="detailname">
                        <span className="nametitle">Source Name</span>
                        <span>String_01_File</span>
                      </div>
                      <input type="text" name={`description${props.id}`} className="sourceinput120" />
                      <input type="text" name={`alias${props.id}`} className="sourceinput60" />
                      <input type="text" name={`type${props.id}`} className="sourceinput60" />
                      <DropDown
                        id={`activedd${props.id}`}
                        class={"failuredd sourceinput60"}
                        imgclass={"centeralign"}
                        imguri={Images.arrowblack}
                        options={["True", "False"]}
                      />
                      <input type="number" name={`num${props.id}`} className="sourceinput60" />
                      <input type="text" name={`dash${props.id}`} className="sourceinput120" />
                      <TimePicker className="sourceinput120" name={`avia${props.id}`} />

                      <div className="detailbuttons">
                        <Button class="greenclr" name="Update" onClick={() => { Update(`formsource-${props.id}`) }} />
                        <Button class="clearbtncolor" name="Clear" onClick={() => { ClearForm(`formsource-${props.id}`) }} />
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
