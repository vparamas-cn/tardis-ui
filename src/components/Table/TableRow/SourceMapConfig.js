import React, { useState, useEffect, Fragment } from "react";
import "../Table.scss";
import "./Row.scss";
import DropDown from "../../DropDown";
import Button from "../../Button/Button";
import { Images } from "../../../assets/images";

const SourceConfig = props => {
  const [data, SetData] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  useEffect(() => { });
  const showHideRow = (selectedrow, arrowimg) => {
    var trd = document.getElementById(selectedrow);
    if (trd.className.indexOf("hidden_row") > -1) {
      trd.classList.remove("hidden_row");
    } else {
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
        <td>DateSource_Source_name</td>
        <td>True</td>

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
        <td colSpan="5" className="paddzero">
          <table className="detailtable">
            <tbody>
              <tr>
                <td colSpan="5">
                  <div className="detailcontainer">
                    <div className="detailimg centeralign">
                      <img alt="" src={Images.addlist} />
                    </div>

                    <input
                      type="text"
                      value="Source_name"
                      className="sourceinput120"
                    />
                    <input
                      type="text"
                      value="Date_source_name"
                      className="sourceinput120"
                    />

                    <DropDown
                      id={`optiondd${props.id}`}
                      class={"failuredd sourceinput120"}
                      imgclass={"centeralign"}
                      imguri={Images.arrowblack}
                      options={["True", "False"]}
                    />

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
            <Fragment key={`SourceMapConfig-${index}`}>
              <Row {...item} />
              <RowDetails {...item} />
            </Fragment>
          );
        })}
    </tbody>
  );
};

export default SourceConfig;
