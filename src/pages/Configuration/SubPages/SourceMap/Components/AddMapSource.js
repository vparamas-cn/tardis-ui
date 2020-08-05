import React, {useState, useEffect} from "react";
import { Images } from "../../../../../assets/images";
import {
  Button,
  RadioBtn,
  SelectSearch
} from "../../../../../components";
import "../SourceMap.scss";


const AddMapSource = props => {

  const [sourcelist, setSource] = useState([]);
  const [childsourcelist, setChild] = useState([]);

  const submit = () =>{
    const form = document.getElementById("addmapsource")
    var data = Object.values(form).reduce((obj,field) => { obj[field.name ? field.name: "unnamed"] = field.value; return obj }, {});
    delete data.unnamed;
    data.isoptional = (data.isoptional === "True"); 
    props.onSubmit(data)
  }

  useEffect(() => {
    if(props.source && props.childSource)
    {
      let result=[];
      props.source.forEach((e)=>{
        result.push({name:e.source,value:e.source})
      })
      setSource(result);
      result=[];
      props.childSource.forEach((e)=>{
        result.push({name:e.source,value:e.source})
      })
      setChild(result);

    }
  }, [props])

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
        <form id="addmapsource" className="addform-container" autoComplete="off" >
          <div className="controls">
            <div className="source1">
              <div>
                <span>SOURCES</span>
                <SelectSearch
                  options={sourcelist}
                  value=""
                  disabled={false} name="source"
                />
              </div>
              <div className="isoptional-container">
                <span>ISOPTIONAL</span> <RadioBtn name="isoptional" disabled={false} options={["True", "False"]} />
              </div>
           
            </div>
            <div className="source2">
            <div>
                <span>CHILD SOURCES</span>
                <SelectSearch
                  options={childsourcelist}
                  value=""
                  disabled={false} name="childSource"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Button class="modaladdbtn" name="Add Map Source" loading={props.isLoading} onClick={() => {submit()}} />
    </div>
  );
};

export default AddMapSource;
