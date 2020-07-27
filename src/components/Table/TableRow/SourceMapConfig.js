import React, { useState, useEffect, Fragment } from "react";
import "../Table.scss";
import "./Row.scss";
import DropDown from "../../DropDown";
import Button from "../../Button/Button";
import FieldHolder from "../../InputText/FieldHolder"
import { Images } from "../../../assets/images";

const SourceConfig = props => {
  const [data, SetData] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
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
          <div className="action-td-container">
            <div className="edit-action"><img alt="" src={Images.RowEdit} className="editimg" />
              <span>Edit</span></div>
            <Button
              class="deletebtn"
              name="Delete"
              leftimg={Images.Delete}
              onClick={() => { Delete(props.id) }}
            />
          </div>
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
                  <form id={`formsourcemap-${props.id}`}>
                    <div className="detailcontainer">
                      <div className="detailimg centeralign">
                        <img alt="" src={Images.addlist} />
                      </div>

                      <FieldHolder lable="Source">
                        <input
                          type="text"
                          name="source"
                          className="sourceinput120"
                        />
                      </FieldHolder>
                      <FieldHolder lable="Child Source">
                        <input
                          type="text"
                          name="childsource"
                          className="sourceinput120"
                        />
                      </FieldHolder>
                      <FieldHolder lable="Isoptional">
                        <DropDown
                          id={`optiondd${props.id}`}
                          class={"failuredd sourceinput120"}
                          imgclass={"centeralign"}
                          imguri={Images.arrowblack}
                          options={["True", "False"]}
                        />
                      </FieldHolder>
                      <div className="detailbuttons fieldholder">
                        <Button class="greenclr" name="Update" onClick={() => { Update(`formsourcemap-${props.id}`) }} />
                        <Button class="clearbtncolor" name="Clear" onClick={() => { ClearForm(`formsourcemap-${props.id}`) }} />
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
