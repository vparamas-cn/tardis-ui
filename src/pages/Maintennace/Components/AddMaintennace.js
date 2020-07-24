import React from "react";
import "./FilterContainer.scss";
import {Images} from "../../../assets/images";
import { DropDown, Button, DatePicker  } from "../../../components"
import SelectSearch from "react-select-search";

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
            <img alt="" src={Images.addlist} />
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
        <div className="controls">
          <div className="c1">
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
              <div className="logdate">
                <DatePicker handleDate={e => handleDate(e)} />
              </div>
            </div>

            <div>
              <span>FAILURE REASONS</span>
              <DropDown
                id={"addreasondd"}
                class={"ddfailure"}
                imguri={Images.arrowblack}
                options={["Reason", "Reason1", "Reason2"]}
              />
            </div>
          </div>
          <div className="c2">
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
