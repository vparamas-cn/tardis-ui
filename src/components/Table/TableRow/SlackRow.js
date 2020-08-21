import React, { Fragment, useState } from "react";
import "../Table.scss";
import "./Row.scss";
import Button from "../../Button/Button";
import { Images } from "../../../assets/images";
import { useDispatch } from 'react-redux';
import { showHide, ActionUpdate, fetch, alert } from '../../../utils'
import { usePaginationControl, UpdateData, ClearForm } from './ActionControls'
import TagInput from "../../TagInput"
import query from '../../../assets/constant/query'
import FieldHolder from "../../InputText/FieldHolder"
import { ActionSource } from '../../../reducers/slack/actions'

const SourceConfig = props => {
  const dispatch = useDispatch();
  const [reset, setrest] = useState(false)
  const { filterData , page, size, updatecount} = props.dataSource;
  const list = usePaginationControl(page, size, filterData, updatecount);
  const showHideRow = (data) => {
    showHide(data, "slack");
    document.getElementById(`add-slack-${data.id}`).focus();
  };
  const Update = (formid ,id) => {
    let addchannel = document.getElementById(`add-slack-${id}`).value;
    if(addchannel === ""){
      UpdateData(formid ,id , async (data)=>{
        var response = await fetch(query.slackaddupdate(data))
        ActionUpdate(response,data,"Update",(e)=>{
          dispatch(ActionSource(e))
        })
      })
    }
    else{
      alert("error", "Please add the slack channel before update.")
    }
  }
  const Delete = async(data) => {

  }
  

  const Row = props => {
    return (
      <tr>
        <td className="rowarrow" onClick={() => {
          showHideRow(props);
        }}>
          <img alt=""
            src={Images.downarrow}
            className="downarr"
            id={`downimage${props.id}`}
          />
        </td>
        <td>{props.source.source}</td>
        <td>{props.alertLevel.alertLevel}</td>
        <td><div className="centeralign"><div className={props.isActive?`greendot`:'reddot'} />{props.isActive ?"Active":"InActive"}</div></td>
        <td>{<TagInput slackChannels={props.slackChannels} id={props.id} style={{justifyContent:"center"}} />}</td>

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
    return (
      <tr id={`hidden_row${props.id}`} className="hidden_row editcontent">
        <td colSpan="6" className="paddzero">
          <table className="detailtable">
            <tbody>
              <tr>
                <td colSpan="6">
                <form id={`formslack-${props.id}`} autoComplete="off">
                  <div className="detailcontainer">
                    <div className="detailimg centeralign">
                      <img alt="" src={Images.addlist} />
                    </div>
                    <FieldHolder lable="Source">
                    <input
                      type="text"
                      name={"source"}
                      value={props.source.source}
                      className="sourceinput120"
                      disabled={true}
                    />
                    </FieldHolder>
                    <FieldHolder lable="Alert Level">
                    <input
                      type="text"
                      name={"alertLevel"}
                      value={props.alertLevel.alertLevel}
                      className="sourceinput120"
                      disabled={true}
                    />
                    </FieldHolder>
                    <FieldHolder lable="IsActive">
                      <select id={`isActive-${props.id}`} name={`isActive-${props.id}`} className="sourceinput60 customselect">
                        <option value={"true"}>True</option>
                        <option value={"false"}>False</option>
                      </select>
                      </FieldHolder>
                    <FieldHolder lable="Slack Channel">
                    {<TagInput slackChannels={props.slackChannels} id={props.id} edit={true} placeholder="Add item"/>}
                    </FieldHolder>
                    <div className="detailbuttons">
                        <Button class="greenclr" name="Update" onClick={() => { Update(`formslack-${props.id}`,props.id) }} />
                        <Button class="clearbtncolor" name="Clear" onClick={() => { ClearForm(props,"slack");}} />
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
      {list && list.length > 0 ?
        list.map((item, index) => {
          return (
            <Fragment key={`SourceMapConfig-${index}`}>
              <Row {...item} />
              <RowDetails {...item} />
            </Fragment>
          );
        }):
        <tr><td colSpan="6" className="norecord">No Data found!!</td></tr>}
    </tbody>
  );
};

export default SourceConfig;
