import React, { useState, useEffect, useRef } from "react";
import "./DropDown.scss";
import InputButton from "./InputText/InputWithButton";
import { Images } from "../assets/images";


const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = event => {
       
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        if(event.target && event.target.className && typeof event.target.className =="string"  && event.target.className.indexOf("dontclose") >-1){
          return;
        }
        handler(event);
      };

      document.addEventListener('mousedown', listener);
      

      return () => {
        document.removeEventListener('mousedown', listener);
       
      };
    },
    [ref, handler]
  );
}

const DropDown = props => {
  const ref = useRef();
  const [selectedoption, SetOption] = useState("");
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (props.options && props.options.length > 0) {
      SetOption(props.options[0]);
    }
  });
  useOnClickOutside(ref, () => {
    setOpen(false)
  });
  const onDropdown = () => {
    setOpen(!isOpen)
  };
  const onSelectedItem = (e,item) => {
    SetOption(item)
  }
  return props.profilename ? (
    <div
      id={props.id} ref={ref}
      className={`wrapper-dropdown ${props.class} ${isOpen?"active":""}`}
      onClick={() => onDropdown()}
    >
      <span class="rtname">{props.profilename}</span>
      <img src={props.imguri} />
      <ul className="dropdown">
        {props.options.map((item, index) => {
          return (
            <li key={"dd" + index}>
              <a>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div
      id={props.id} ref={ref}
      className={`wrapper-dropdown ${props.class} ${isOpen?"active":""}`}
      onClick={() => onDropdown()}
    >
      {props.search ? (
        <div className="centeralign">
          <img src={require("../assets/images/Search.svg")} />{" "}
          <span>{props.label ? props.label : selectedoption}</span>
        </div>
      ) : (
        <span>{props.label ? props.label : selectedoption}</span>
      )}
      {props.imgclass ? (
        <div className={props.imgclass}>
          <img src={props.imguri} />
        </div>
      ) : (
        <img src={props.imguri} />
      )}
      <ul className="dropdown dontclose">
        {props.search ? <li className="searchinput dontclose" id="searchinput">
          <InputButton
          placeholder={"Search"}
          id ={`filtersearch-${props.id}`}
          btnclass={"searchbtn dontclose"}
          ButtonClick={text => {}}
          btnimg={Images.Search}
        />
          </li>:null}
        {props.options.map((item, index) => {
          return (
            <li key={"dd" + index} className="dontclose" onClick={(e)=>{onSelectedItem(e.item)}}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
