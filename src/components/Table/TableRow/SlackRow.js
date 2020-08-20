import React, { Fragment } from "react";
import "../Table.scss";
import "./Row.scss";
import Button from "../../Button/Button";
import { Images } from "../../../assets/images";
import { showHide, alert } from '../../../utils'
import { UpdateData, ClearForm } from './ActionControls'
import TagInput from "../../TagInput"
import FieldHolder from "../../InputText/FieldHolder"

const SourceConfig = props => {
  const { data } = props.dataSource;

  const showHideRow = (data) => {
    showHide(data, "slack");
    document.getElementById(`add-slack-${data.id}`).focus();
  };
  const Update = (formid ,id) => {
    UpdateData(formid ,id , async (data)=>{
      
    })
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
        <td>{<TagInput slackChannels={props.slackChannels} id={props.id} style={{justifyContent:"center"}} />}</td>

        <td onClick={() => {
          showHideRow(props);
        }}>
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
                <form id={`formslack-${props.id}`} autoComplete="off">
                  <div className="detailcontainer">
                    <div className="detailimg centeralign">
                      <img alt="" src={Images.addlist} />
                    </div>
                    <FieldHolder lable="Source">
                    <input
                      type="text"
                      value={props.source.source}
                      className="sourceinput120"
                      disabled={true}
                    />
                    </FieldHolder>
                    <FieldHolder lable="Alert Level">
                    <input
                      type="text"
                      value={props.alertLevel.alertLevel}
                      className="sourceinput120"
                      disabled={true}
                    />
                    </FieldHolder>
                    <FieldHolder lable="Slack Channel">
                    {<TagInput slackChannels={props.slackChannels} id={props.id} edit={true}/>}
                    </FieldHolder>
                    <div className="detailbuttons">
                        <Button class="greenclr" name="Update" onClick={() => { Update(`formslack-${props.id}`,props.id) }} />
                        <Button class="clearbtncolor" name="Clear" onClick={() => { ClearForm(`formslack-${props.id}`) }} />
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
      {data && data.length > 0 ?
        data.map((item, index) => {
          return (
            <Fragment key={`SourceMapConfig-${index}`}>
              <Row {...item} />
              <RowDetails {...item} />
            </Fragment>
          );
        }):
        <tr><td colSpan="5" className="norecord">No Data found!!</td></tr>}
    </tbody>
  );
};

export default SourceConfig;
