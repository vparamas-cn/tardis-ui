import React, { useState, useEffect } from "react";
import { Images } from "../../../../../assets/images";
import {
  DropDown,
  Button,
  RadioBtn,
  TimePicker
} from "../../../../../components";
import "../Source.scss";
import { sourcetype } from '../../../../../assets/constant'

const AddModalSource = props => {
  const [disabled , setDisabled] =useState(false)
  const [types , setType] =useState(sourcetype)
  const submit = () =>{
    const form = document.getElementById("addsource")
    var data = Object.values(form).reduce((obj,field) => { obj[field.name ? field.name: "unnamed"] = field.value; return obj }, {});
    delete data.unnamed;
    data.isactive = (data.isactive === "True"); 
    props.onSubmit(data)
  }

  useEffect(()=>{
    if(props.data){
      setDisabled(true)
      for (var x of Object.keys(props.data)) {
        try {
          let name = `${x}`;
          document.getElementById(name).value = typeof props.data[x] == "object" ? props.data[x].source : props.data[x];
        }
        catch (e) { }
      }
    }
    if(props.Type)
    {
      let result = [];
      props.Type.forEach((e)=>{
        result.push(e.type)
      })
      setType(result);
    }
  },[props])

  return (
    <div className="modal-main">
      <div className="modal-title">
        <div className="title-left centeralign">
          <div className="detailimg centeralign">
            <img alt="" src={Images.addlist} />
          </div>
          <span>{props.data ? props.data.source :"Add Source"}</span>
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
        <form id="addsource" autoComplete="off">
          <div className="controls">
            <div className="source1">
              <div>
                <span>SOURCE</span>
                <input type="text" name={"source"} id= {"source"}autocomplete="off" disabled={disabled} className={"sourceadddropdown"} />
              </div>
              {!props.data?<div className="isactive">
                <span>IsActive</span> <RadioBtn name="isactive" disabled={disabled} options={["True", "False"]} />
              </div>: 
              <div className="activecnt">
                <span>IsActive</span>
                <input type="text" disabled value={props.data.isactive? "Active": "InActive"} className={"sourceadddropdown"} />
              </div>
              }
              <div className="paddingdiv">
                <span>TYPE</span>
                <DropDown
                  id={"type"}
                  disabled={disabled}
                  class={"sourceadddropdown"}
                  value={props.data?props.data.type:false}
                  imguri={Images.arrowblack}
                  options={types}
                />
              </div>
              <div className="paddingdiv">
                <span>DASH-TRIGGER ID</span>
                <input type="text" name={"dashTriggerId"} id={"dashTriggerId"} disabled={disabled} className={"sourceadddropdown"} />
              </div>

              <div className="paddingdiv">
                <span>AVAILABLITY_SCHEDULE</span>
                <TimePicker time={props.data?props.data.availabilitySchedule:""} className="addtimepicker" name="availabilitySchedule" disabled={disabled} />
              </div>
            </div>
            <div className="source2">
              <div className="description-container">
                <span>DESCRIPTION</span>
                <textarea rows="5" cols="22" name="description" id="description" disabled={disabled} maxLength={255}/>
              </div>

              <div className="paddingdiv">
                <span>ALIAS</span>
                <input type="text" disabled={disabled} name={"alias"} id={"alias"} className={"sourceadddropdown"} />
              </div>
              <div className="paddingdiv">
                <span>NUM PREV DAYS</span>
                <input type="number" name={"numPrevDays"} id={"numPrevDays"} disabled={disabled} className={"sourceadddropdown"} />
              </div>
              <div className="paddingdiv">
                <div className={"extraheight"} />
                <DropDown
                  id={"timezone"}
                  class={"sourceaddtzdropdown"}
                  label={"(UTC-08:00) Pacific Time"}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {!props.data?<Button class="modaladdbtn" name="Add New Source" loading={props.isLoading} onClick={() => {submit()}} /> :<Button class="modaladdbtn" name="Done"  onClick={() => {props.closepop()}} />}
    </div>
  );
};

export default AddModalSource;
