import React from "react";
import { Images } from "../../../../../assets/images";
import {
  DropDown,
  Button,
  RadioBtn,
  TimePicker
} from "../../../../../components";
import SelectSearch from "react-select-search";
import "../Source.scss";

const options = [
  { name: "String_1_Source", value: "1" },
  { name: "String_1_Source", value: "2" }
];
const AddSource = props => {
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
      <div class="modal-content">
        <div class="controls">
          <div class="source1">
            <div>
              <span>SOURCES</span>
              <SelectSearch
                options={options}
                value="1"
                name="sources"
                search={true}
                placeholder="Search"
              />
            </div>
            <div className="isactive">
              <span>IsActive</span> <RadioBtn options={["True", "False"]} />
            </div>
            <div className="paddingdiv">
              <span>TYPE</span>
              <DropDown
                id={"addtypedd"}
                class={"sourceadddropdown"}
                imguri={Images.arrowblack}
                options={["Type", "Type2", "Type3"]}
              />
            </div>
            <div className="paddingdiv">
              <span>DASH-TRIGGER ID</span>
              <input type="text" className={"sourceadddropdown"} />
            </div>

            <div className="paddingdiv">
              <span>AVAILABLITY_SCHEDULE</span>
              <TimePicker className="addtimepicker" />
            </div>
          </div>
          <div className="source2">
            <div className="description-container">
              <span>DESCRIPTION</span>
              <textarea rows="5" cols="23" />
            </div>

            <div className="paddingdiv">
              <span>ALIAS</span>
              <input type="text" className={"sourceadddropdown"} />
            </div>
            <div className="paddingdiv">
              <span>NUM PREV DAYS</span>
              <input type="text" className={"sourceadddropdown"} />
            </div>
            <div className="paddingdiv">
              <div className={"extraheight"} />
              <DropDown
                id={"addreasondd"}
                class={"sourceaddtzdropdown"}
                imguri={Images.whitedownarrow}
                imgclass={"timezonearrow centeralign"}
                options={["(UTC-08:00) Pacific Time"]}
              />
            </div>
          </div>
        </div>
      </div>
      <Button class="modaladdbtn" name="Add New Source" onClick={() => {}} />
    </div>
  );
};

export default AddSource;
