import React from "react";
import { Images } from "../../../../../assets/images";
import {
  DropDown,
  Button,
  RadioBtn,
  TimePicker,
  SelectSearch
} from "../../../../../components";
import "../Source.scss";
import { useDispatch } from 'react-redux';
import { AddSource } from '../../../../../reducers/configuration/actions'

const options = [
  { name: "String_1_Source", value: "1" },
  { name: "String_1_Source", value: "2" }
];
const disabled=false;
const AddModalSource = props => {
  const dispatch = useDispatch();
  const submit = () =>{
    const form = document.getElementById("addsource")
    var data = Object.values(form).reduce((obj,field) => { obj[field.name ? field.name: "unnamed"] = field.value; return obj }, {});
    delete data.unnamed;
    data.isactive = (data.isactive == "True"); 
    console.log(data);
    dispatch(AddSource(data))
  }
  return (
    <div className="modal-main">
      <div className="modal-title">
        <div className="title-left centeralign">
          <div className="detailimg centeralign">
            <img alt="" src={Images.addlist} />
          </div>
          <span>Add Source</span>
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
        <form id="addsource">
          <div className="controls">
            <div className="source1">
              <div>
                <span>SOURCES</span>
                <SelectSearch
                  options={options}
                  value="1"
                  disabled={disabled} name="sources"
                />
              </div>
              <div className="isactive">
                <span>IsActive</span> <RadioBtn name="isactive" disabled={disabled} options={["True", "False"]} />
              </div>
              <div className="paddingdiv">
                <span>TYPE</span>
                <DropDown
                  id={"type"}
                  disabled={disabled}
                  class={"sourceadddropdown"}
                  imguri={Images.arrowblack}
                  options={["Datasource", "Datasource Group", "Dashboard"]}
                />
              </div>
              <div className="paddingdiv">
                <span>DASH-TRIGGER ID</span>
                <input type="text" name={"dashTriggerId"} disabled={disabled} className={"sourceadddropdown"} />
              </div>

              <div className="paddingdiv">
                <span>AVAILABLITY_SCHEDULE</span>
                <TimePicker className="addtimepicker" name="availabilitySchedule" disabled={disabled} />
              </div>
            </div>
            <div className="source2">
              <div className="description-container">
                <span>DESCRIPTION</span>
                <textarea rows="5" cols="19" name="description" disabled={disabled}/>
              </div>

              <div className="paddingdiv">
                <span>ALIAS</span>
                <input type="text" disabled={disabled} name={"alias"} className={"sourceadddropdown"} />
              </div>
              <div className="paddingdiv">
                <span>NUM PREV DAYS</span>
                <input type="number" name={"numPrevDays"} disabled={disabled} className={"sourceadddropdown"} />
              </div>
              <div className="paddingdiv">
                <div className={"extraheight"} />
                <DropDown
                  id={"timezone"}
                  disabled={disabled}
                  class={"sourceaddtzdropdown"}
                  imguri={Images.whitedownarrow}
                  imgclass={"timezonearrow centeralign"}
                  options={["(UTC-08:00) Pacific Time"]}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Button class="modaladdbtn" name="Add New Source" onClick={() => {submit()}} />
    </div>
  );
};

export default AddModalSource;
