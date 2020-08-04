import React, { useState, useEffect, useRef } from "react";
import "./DropDown.scss";
import InputButton from "./InputText/InputWithButton";
import { Images } from "../assets/images";
import useOnClickOutside from "./OutClickhandler";
import Checkbox from "./Checkbox"
import RadioBtn from "./RadioBtn"
import { Multiselect } from 'multiselect-react-dropdown';

const DropDown = props => {
  const ref = useRef();
  const multiselectRef = useRef();
  const [selectedoption, setOption] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [listoption, setList] = useState([]);
  useEffect(
    () => {
      if (props.options && props.options.length > 0) {
        setOption(props.options[0]);
        setList(props.options);
      }
      if (props.label) {
        setOption(props.label);
      }
      if(props.value && !props.radiobtn)
      {
        setOption(props.value);
      }
      if(props.reset)
      {
        multiselectRef.current.resetSelectedValues();
      }
    },
    [props]
  );
  useOnClickOutside(ref, () => {
    setOpen(false);
  });
  const onDropdown = e => {
    if (e.target.className.indexOf("opendropdown") > -1 && !props.disabled) {
      setOpen(!isOpen);
      setList(props.options);
      props.onClick && props.onClick()
    }
  };
 
  const onSelectedItem = (e, item) => {
    setOption(item);
    setOpen(false);
    props.onChange && props.onChange(item)
  };
 
  return props.profilename ? (
    <div
      id={props.id}
      ref={ref}
      className={`wrapper-dropdown opendropdown ${props.class} ${isOpen
        ? "active"
        : ""}`}
      onClick={e => onDropdown(e)}
    >
      <span className="rtname opendropdown">{props.profilename}</span>
      <img alt="" className="opendropdown" src={props.imguri} />
      <ul className="dropdown">
        {props.options.map((item, index) => {
          return (
            <li
              key={"dd" + index}
              onClick={e => {
                onSelectedItem(e, item);
              }}
            >
              <a>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
      <div
        id={props.id}
        ref={ref}
        className={`wrapper-dropdown opendropdown ${props.class} ${isOpen
          ? "active"
          : ""}`}
        onClick={e => onDropdown(e)}
      >
        {props.search ? (
          <div className="centeralign opendropdown">
            <img alt=""
              className="opendropdown"
              src={require("../assets/images/Search.svg")}
            />{" "}
            <span className="opendropdown">{selectedoption}</span>
          </div>
        ) : (
            <span className="opendropdown">{selectedoption}</span>
          )}
        {props.imgclass ? (
          <div className={`opendropdown ${props.imgclass}`}>
            <img alt="" className="opendropdown" src={props.imguri} />
          </div>
        ) : (
            <img alt="" className="opendropdown" src={props.imguri} />
          )}
        <input type="hidden" name={props.id} value={selectedoption} />
        <ul className={`dropdown dontclose ${props.multi?"":"normaldd"}`}>
          {props.multi ? (
           <Multiselect
            options={listoption} 
            placeholder="Search"
            showCheckbox ={props.search}
            singleSelect= {!props.search}
            onSelect={props.onFilterselect}
            onRemove={props.onFilterselect}
            displayValue={props.displaynode} 
            ref={multiselectRef}
            />)
          :
          props.radiobtn ?
            <li
              className={`dontclose radiofilter`}
            >
              <RadioBtn name="isactive" options={props.options} value={props.value} onChange={(e)=>props.onChange(e)} />
            </li>

            : 
          listoption.length > 0 ? (
            listoption.map((item, index) => {
              if (props.checkbox) {
                return (
                  <li
                    key={"checkbox-" + index}
                    className={`dontclose li`}
                  >
                    <Checkbox name={item} label={item} class="dontclose" />
                  </li>
                )
              }
              else {
                if(props.displaynode)
                item = item[props.displaynode]
                return (
                  <li
                    key={"dd" + index}
                    className={`dontclose li ${selectedoption === item ? "foucs" : ""}`}
                    onClick={e => {
                      onSelectedItem(e, item);
                    }}
                  >
                    {item}
                  </li>
                );
              }
            })
          ) : (
              <li>No data found</li>
            )}
        </ul>
      </div>
    );
};

export default DropDown;
