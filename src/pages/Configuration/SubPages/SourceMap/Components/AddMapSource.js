import React from "react";
import { Images } from "../../../../../assets/images";
import {
  Button,
  RadioBtn,
  SelectSearch
} from "../../../../../components";
import "../SourceMap.scss";
import { useDispatch } from 'react-redux';
import { AddSourceMap } from '../../../../../reducers/mapSource/actions'

const options = [
  { name: "String_1_Source", value: "1" },
  { name: "String_1_Source", value: "2" }
];
const disabled=false;
const AddMapSource = props => {
  const dispatch = useDispatch();
  const submit = () =>{
    const form = document.getElementById("addmapsource")
    var data = Object.values(form).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {});
    data.isoptional = (data.isoptional == "True"); 
    console.log(data);
    dispatch(AddSourceMap(data))
  }
  return (
    <div className="modal-main">
      <div className="modal-title">
        <div className="title-left centeralign">
          <div className="detailimg centeralign">
            <img alt="" src={Images.addlist} />
          </div>
          <span>Add Map Source</span>
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
        <form id="addmapsource" className="addform-container">
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
              <div className="isoptional-container">
                <span>ISOPTIONAL</span> <RadioBtn name="isoptional" disabled={disabled} options={["True", "False"]} />
              </div>
           
            </div>
            <div className="source2">
            <div>
                <span>CHILD SOURCES</span>
                <SelectSearch
                  options={options}
                  value="1"
                  disabled={disabled} name="childSource"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Button class="modaladdbtn" name="Add Map Source" onClick={() => {submit()}} />
    </div>
  );
};

export default AddMapSource;
