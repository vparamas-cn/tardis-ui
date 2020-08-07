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
  const [disabled, setDisabled] = useState(false)
  const [types, setType] = useState(sourcetype)
  const [dashdisable, setDashDisable] = useState(true)
  const {data, Type} = props
  const submit = () => {
    const form = document.getElementById("addsource")
    var formdata = Object.values(form).reduce((obj, field) => { obj[field.name ? field.name : "unnamed"] = field.value; return obj }, {});
    delete formdata.unnamed;
    formdata.isactive = (formdata.isactive === "True");
    props.onSubmit(formdata)
  }

  useEffect(() => {
    if (data) {
      setDisabled(true)
      for (var x of Object.keys(data)) {
        try {
          let name = `${x}`;
          document.getElementById(name).value = typeof data[x] == "object" && x === "type" ? data[x].type : data[x];
        }
        catch (e) { }
      }
    }
    if (Type) {
      let result = [];
      Type.forEach((e) => {
        result.push(e.type)
      })
      setType(result);
    }
  }, [data, Type])

  return (
    <div className="modal-main">
      <div className="modal-title">
        <div className="title-left centeralign">
          <div className="detailimg centeralign">
            <img alt="" src={Images.addlist} />
          </div>
          <span>{data ? data.source : "Add Source"}</span>
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
                <input type="text" name={"source"} id={"source"} autoComplete="off" disabled={disabled} className={"sourceadddropdown"} />
              </div>
              {!data ? <div className="isactive">
                <span>IsActive</span> <RadioBtn name="isactive" disabled={disabled} options={["True", "False"]} />
              </div> :
                <div className="activecnt">
                  <span>IsActive</span>
                  <input type="text" disabled value={data.isactive ? "Active" : "InActive"} className={"sourceadddropdown"} />
                </div>
              }
              <div className="paddingdiv">
                <span>TYPE</span>
                {!data ? <DropDown
                  id={"type"}
                  disabled={disabled}
                  class={"sourceadddropdown"}
                  imguri={Images.arrowblack}
                  options={types}
                  onChange={(data) => { data === "Dashboard" ? setDashDisable(false) : setDashDisable(true) }}
                /> :
                  <input type="text" disabled value={data.type.type} className={"sourceadddropdown"} />
                }
              </div>
              <div className="paddingdiv">
                <span>DASH-TRIGGER ID</span>
                <input type="text" name={"dashTriggerId"} id={"dashTriggerId"} disabled={dashdisable} className={"sourceadddropdown"} />
              </div>

              <div className="paddingdiv">
                <span>AVAILABLITY_SCHEDULE</span>
                <TimePicker time={data ? data.availabilitySchedule : ""} className="addtimepicker" name="availabilitySchedule" disabled={disabled} />
              </div>
            </div>
            <div className="source2">
              <div className="description-container">
                <span>DESCRIPTION</span>
                <textarea rows="5" cols="22" name="description" id="description" disabled={disabled} maxLength={255} />
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
      {!data ? <Button class="modaladdbtn" name="Add New Source" loading={props.isLoading} onClick={() => { submit() }} /> : <Button class="modaladdbtn" name="Done" onClick={() => { props.closepop() }} />}
    </div>
  );
};

export default AddModalSource;
