import React, { useState, Fragment } from "react";
import "../Table.scss";
import "./Row.scss"
import DropDown from "../../DropDown";
import Button from "../../Button/Button";
import TimePicker from "../../TimePicker";
import { Images } from "../../../assets/images";
import { useDispatch } from 'react-redux';
import { ActionSource } from '../../../reducers/configuration/actions'
import query from '../../../assets/constant/query'

const SourceConfig = props => {
  const dispatch = useDispatch();
  const [data, SetData] = useState(
    props.dataSource || []
  );

  const Update = (formid ,id) => {
    const form = document.getElementById(formid)
    var data = Object.values(form).reduce((obj, field) => { obj[field.name ? field.name.replace(`-${id}`,""): "unnamed"] = field.value; return obj }, {});
    delete data.unnamed;
    dispatch(ActionSource(query.updateSource(data)))
  }
  const ClearForm = (formid) => {
    document.getElementById(formid).reset();
  }
  const Delete = (data) => {
    dispatch(ActionSource(query.deleteSource(data)))
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
    const { source, description, alias, availabilitySchedule, numPrevDays, isactive, type, dashTriggerId } = props;
    return (
      <tr
        onClick={() => {
          showHideRow(`hidden_row${props.id}`, `downimage${props.id}`, props);
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
        <td> <input
          type="text"
          disabled="disabled"
          value={description}
        /></td>
        <td>{alias}</td>
        <td>
          {type}
        </td>
        <td><div className="centeralign"><div className={isactive?`greendot`:'reddot'} />{isactive ?"Active":"InActive"}</div></td>
        <td>{numPrevDays}</td>
        <td>{dashTriggerId}</td>
        <td>{availabilitySchedule}</td>
        <td>
          <img alt="" src={Images.RowEdit} className="editimg" />
          <span>Edit</span>
        </td>
      </tr>
    );
  };
  const RowDetails = props => {
    const { source ,availabilitySchedule } = props;
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
                        <span>{source}</span>
                      </div>
                      <input type="text" id={`description-${props.id}`} name={`description-${props.id}`} className="sourceinput120" maxLength={255}/>
                      <input type="text" id={`alias-${props.id}`} name={`alias-${props.id}`}  className="sourceinput60" />
                      <input type="text" id={`type-${props.id}`} name={`type-${props.id}`} className="sourceinput60" />
                      <select id={`isactive-${props.id}`} name={`isactive-${props.id}`} className="sourceinput60 customselect">
                        <option value={"true"}>True</option>
                        <option value={"false"}>False</option>
                      </select>
                      <input type="number" id={`numPrevDays-${props.id}`}  name={`numPrevDays-${props.id}`} className="sourceinput60" />
                      <input type="text" id={`dashTriggerId-${props.id}`} name={`dash-${props.id}`} className="sourceinput120" />
                      <TimePicker time={availabilitySchedule} className="sourceinput120"  name={`availabilitySchedule-${props.id}`} />
                      <div className="detailbuttons">
                        <Button class="greenclr" name="Update" onClick={() => { Update(`formsource-${props.id}`,props.id) }} />
                        <Button class="clearbtncolor" name="Clear" onClick={() => { ClearForm(`formsource-${props.id}`) }} />
                        <Button
                          class="deletebtn"
                          name="Delete Contact"
                          leftimg={Images.Delete}
                          onClick={() => { Delete({source:props.source}) }}
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
          <Fragment key={`SourceConfig-${index}`}>
            <Row {...item} id={index+1} />
            <RowDetails {...item} id={index+1}/>
          </Fragment>
        );
      }):
      <tr><td colSpan="10" className="norecord">No Data found!!</td></tr>
      }
  </tbody>
  );
};

export default SourceConfig;
