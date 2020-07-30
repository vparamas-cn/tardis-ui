import React, { useState, Fragment } from "react";
import "../Table.scss";
import "./Row.scss";
import Button from "../../Button/Button";
import FieldHolder from "../../InputText/FieldHolder"
import { Images } from "../../../assets/images";
import { useDispatch } from 'react-redux';
import { ActionSource} from '../../../reducers/mapSource/actions'

const SourceConfig = props => {
  const dispatch = useDispatch();
  const [data, SetData] = useState(
    props.dataSource || []
  );
  const Update = (formid, id) => {
    const form = document.getElementById(formid)
    var data = Object.values(form).reduce((obj, field) => { obj[field.name ? field.name.replace(`-${id}`, "") : "unnamed"] = field.value; return obj }, {});
    delete data.unnamed;
    if(data.source !="" && data.childSource !="")
    dispatch(ActionSource(data))
  }
  const ClearForm = (formid) => {
    document.getElementById(formid).reset();
  }
  const Delete = (data) => {
    dispatch(ActionSource(data))
  }
  const showHideRow = (selectedrow, arrowimg, data) => {
    var trd = document.getElementById(selectedrow);
    var isopen =false;
    if (trd.className.indexOf("hidden_row") > -1) {
      trd.classList.remove("hidden_row");
      isopen =true;
    }
    else {
      trd.classList.add("hidden_row");
      isopen =false;
    }
    var imageid = document.getElementById(arrowimg);
    if (imageid.className.indexOf("downarr") > -1) {
      imageid.classList.remove("downarr");
      imageid.classList.add("uparr");
    } else {
      imageid.classList.add("downarr");
      imageid.classList.remove("uparr");
    }
    if(isopen)
    for(var x of Object.keys(data))
    {
      try{
      let name = `${x}-${data.id}`;
      document.getElementById(name).value = data[x];
      }
      catch(e)
      {}
    }
  };

  const Row = props => {
    const { source, childSource, isoptional } = props;
    return (
      <tr
        onClick={() => {
          showHideRow(`hidden_row${props.id}`, `downimage${props.id}`,props);
        }}
      >
        <td className="rowarrow">
          <img alt=""
            src={Images.downarrow}
            className="downarr"
            id={`downimage${props.id}`}
          />
        </td>
        <td>{source}</td>
        <td>{childSource}</td>
        <td>{isoptional ? "True" : "False"}</td>

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
                          id={`source-${props.id}`}
                          name={`source-${props.id}`}
                          className="sourceinput120"
                        />
                      </FieldHolder>
                      <FieldHolder lable="Child Source">
                        <input
                          type="text"
                          id={`childSource-${props.id}`}
                          name={`childSource-${props.id}`}
                          className="sourceinput120"
                        />
                      </FieldHolder>
                      <FieldHolder lable="Isoptional">
                        <select id={`isoptional-${props.id}`} name={`isoptional-${props.id}`} className="sourceinput120 customselect">
                          <option value={"true"}>True</option>
                          <option value={"false"}>False</option>
                        </select>
                      </FieldHolder>
                      <div className="detailbuttons fieldholder">
                        <Button class="greenclr" name="Update" onClick={() => { Update(`formsourcemap-${props.id}`, props.id) }} />
                        <Button class="clearbtncolor" name="Clear" onClick={() => { ClearForm(`formsourcemap-${props.id}`) }} />
                        <Button
                          class="deletebtn"
                          name="Delete Contact"
                          leftimg={Images.Delete}
                          onClick={() => { Delete(props) }}
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
              <Row {...item} id={index+1} />
              <RowDetails {...item} id={index+1}/>
            </Fragment>
          );
        })}
    </tbody>
  );
};

export default SourceConfig;
