import React, {useState, useEffect} from "react";
import { Images } from "../../../../../assets/images";
import {
  Button,
  DropDown,
  SelectSearch,
  TagInput
} from "../../../../../components";
import "../Slack.scss";
import SVG from 'react-inlinesvg';

const AddSlack = props => {

  const [sourcelist, setSource] = useState([]);
  const [alertLevelList, setalertLevel] = useState([]);
  const {source, alertLevel} = props;

  const submit = () =>{
    const form = document.getElementById("addmapsource")
    var data = Object.values(form).reduce((obj,field) => { obj[field.name ? field.name: "unnamed"] = field.value; return obj }, {});
    delete data.unnamed;
    data.isoptional = (data.isoptional === "True"); 
    props.onSubmit(data)
  }

  useEffect(() => {
    if(source && alertLevel)
    {
      let result=[];
      source.forEach((e)=>{
        result.push({name:e.source,value:e.source})
      })
      setSource(result);
      result=[];
      alertLevel.forEach((e)=>{
        result.push(e.alertLevel)
      })
      setalertLevel(result);
    }
  }, [source, alertLevel])

  return (
    <div className="modal-main">
      <div className="modal-title">
        <div className="title-left centeralign">
          <div className="detailimg centeralign">
            <SVG className="slackadd" src={Images.slack} />
          </div>
          <span>Add Item</span>
        </div>
        <div
          className="title-close"
          onClick={() => {
            props.closepop();
          }}
        >
          <img alt="" src={Images.close} />
        </div>
      </div>
      <div className="modal-content">
        <form id="addslack" className="addform-container" autoComplete="off" >
          <div className="controls">
            <div className="source1">
              <div className="slack">
                <span>SOURCES</span>
                <SelectSearch
                  options={sourcelist}
                  value=""
                  disabled={false} name="source"
                />
              </div>
            </div>
            <div className="source2">
            <div>
                <span>ALERT LEVEL</span>
                <DropDown
                  id={"alertLevel"}
                  class={"sourceadddropdown"}
                  imguri={Images.arrowblack}
                  options={alertLevelList}
                  onChange={(data) => { }}
                />
              </div>
            </div>
            
          </div>
          <div className="tagcontainer">
                <TagInput edit={true} id={"addslack"}/>
            </div>
        </form>
      </div>
      <Button class="modaladdbtn" name="Add Slack Item" loading={props.isLoading} onClick={() => {submit()}} />
    </div>
  );
};

export default AddSlack;
