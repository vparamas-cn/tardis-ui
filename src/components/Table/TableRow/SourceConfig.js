import React, { Fragment, useEffect, useState } from "react";
import "../Table.scss";
import "./Row.scss"
import Button from "../../Button/Button";
import TimePicker from "../../TimePicker";
import { Images } from "../../../assets/images";
import { useDispatch } from 'react-redux';
import FieldHolder from "../../InputText/FieldHolder"
import query from '../../../assets/constant/query'
import { showHide, ActionUpdate, fetch} from '../../../utils'
import { ActionSource } from '../../../reducers/configuration/actions'
import { usePaginationControl, UpdateData, ClearForm } from './ActionControls'

const SourceConfig = props => {
  const dispatch = useDispatch();
  const { filterData ,sourceType, page, size, updatecount} = props.dataSource;
  const list = usePaginationControl(page, size, filterData, updatecount);
  const Update = (formid ,id) => {
    UpdateData(formid ,id , async (data)=>{
      var response = await fetch(query.updateSource(data))
      ActionUpdate(response,data,"Update",(e)=>{
        dispatch(ActionSource(e))
      })
    })
  }
  const Delete = async(data) => {
    var response = await fetch(query.deleteSource(data))
    ActionUpdate(response,data,"Delete",(e)=>{dispatch(ActionSource(e)); })
  }
  const showHideRow = (data) => {
     showHide(data,"source");
  };

  const Row = props => {
    const { source, description, alias, availabilitySchedule, numPrevDays, isactive, type, dashTriggerId } = props;
    return (
      <tr >
        <td className="rowarrow" onClick={() => {
          showHideRow(props);
        }}>
          <img alt=""
            src={Images.downarrow}
            className="downarr"
            id={`downimage${props.id}`}
          />
        </td>
        <td>{source}</td>
        <td>{description}</td>
        <td>{alias}</td>
        <td>
          {type && type.type}
        </td>
        <td><div className="centeralign"><div className={isactive?`greendot`:'reddot'} />{isactive ?"Active":"InActive"}</div></td>
        <td>{numPrevDays}</td>
        <td>{dashTriggerId}</td>
        <td>{availabilitySchedule}</td>
        <td onClick={() => {
          showHideRow(props);
        }}>
          <div id={`edittd-${props.id}`}>
            <img alt="" src={Images.RowEdit} className="editimg" />
            <span>Edit</span>
          </div>
          <img alt="" src={Images.close} className="editimg closetd" id={`closetd-${props.id}`} />
        </td>
      </tr>
    );
  };
  const RowDetails = props => {
    const { source ,availabilitySchedule} = props;
    return (
      <tr id={`hidden_row${props.id}`} className="hidden_row editcontent">
        <td colSpan="10" className="paddzero">
          <table className="detailtable">
            <tbody>
              <tr>
                <td colSpan="10">
                  <form id={`formsource-${props.id}`} autoComplete="off">
                    <div className="detailcontainer">
                      <div className="detailimg centeralign">
                        <img alt="" src={Images.addlist} />
                      </div>
                      <div className="detailname">
                        <span className="nametitle">Source Name</span>
                        <span>{source}</span>
                        <input type="hidden" name="source" value={source} />
                      </div>
                      <FieldHolder lable="Description">
                      <input type="text" id={`description-${props.id}`} name={`description-${props.id}`} className="sourceinput120" maxLength={255}/>
                      </FieldHolder>
                      <FieldHolder lable="Alias">
                      <input type="text" id={`alias-${props.id}`} name={`alias-${props.id}`}  className="sourceinput120" />
                      </FieldHolder>
                      <FieldHolder lable="Type">
                      <select id={`type-${props.id}`} name={`type-${props.id}`} className="customselect130" disabled>
                        {sourceType.map((e,i)=>{
                          return <option key={i} value={e.type}>{e.type}</option>
                        })}
                      </select>
                      </FieldHolder>
                      <FieldHolder lable="IsActive">
                      <select id={`isactive-${props.id}`} name={`isactive-${props.id}`} className="sourceinput60 customselect">
                        <option value={"true"}>True</option>
                        <option value={"false"}>False</option>
                      </select>
                      </FieldHolder>
                      <FieldHolder lable="NumPrevDays">
                      <input type="number" id={`numPrevDays-${props.id}`}  name={`numPrevDays-${props.id}`} className="sourceinput60" />
                      </FieldHolder>
                      <FieldHolder lable="DashTriggerId">
                      <input type="text" id={`dashTriggerId-${props.id}`} disabled={props.type && props.type.type === "Dashboard"?false:true} name={`dashTriggerId-${props.id}`} className="sourceinput120" />
                      </FieldHolder>
                      <FieldHolder lable="AvailabilitySchedule">
                      <TimePicker time={availabilitySchedule} className="sourceinput120"  name={`availabilitySchedule-${props.id}`} />
                      </FieldHolder>
                      <div className="detailbuttons fieldholder">
                        <Button class="greenclr" name="Update" onClick={() => { Update(`formsource-${props.id}`,props.id) }} />
                        <Button class="clearbtncolor" name="Clear" onClick={() => { ClearForm(props,"source") }} />
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
    {list && list.length > 0?
      list.map((item, index) => {
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
