import React from "react";
import "./FilterContainer.scss";
import DropDown from "../DropDown";
import Button from "../Button/Button";
import SelectSearch from "react-select-search";
import DatePicker from "../InputText/DatePicker";

const options = [
  { name: "String_1_Source", value: "1" },
  { name: "String_1_Source", value: "2" }
];
const AddMaintennace = props => {
  const handleDate = date => {};
  return (
    <div className="modal-main">
      <div className="modal-title">
        <div className="title-left centeralign">
          <div className="detailimg centeralign">
            <img src={require("../../assets/images/addlist.svg")} />
          </div>
          <span>Add Item</span>
        </div>
        <div
          className="title-close"
          onClick={() => {
            props.closepop();
          }}
        >
          <img src={require("../../assets/images/close.svg")} />
        </div>
      </div>
      <div class="modal-content">
        <div class="controls">
          <div class="c1">
            <div>
              <span>VARIOUS SOURCES</span>
              <SelectSearch
                options={options}
                value="1"
                name="sources"
                search={true}
                placeholder="Search"
              />
            </div>
            <div>
              <span>LOG DATE</span>
              <div class="logdate">
                <DatePicker handleDate={e => handleDate(e)} />
              </div>
            </div>

            <div>
              <span>FAILURE REASONS</span>
              <DropDown
                id={"addreasondd"}
                class={"ddfailure"}
                imguri={require("../../assets/images/arrowblack.svg")}
                options={["Reason", "Reason1", "Reason2"]}
              />
            </div>
          </div>
          <div>
            <span>COMMENTS</span>
            <textarea rows="13" cols="23" />
          </div>
        </div>
      </div>
      <Button class="modaladdbtn" name="Add Item" onClick={() => {}} />
    </div>
  );
};

export default AddMaintennace;
