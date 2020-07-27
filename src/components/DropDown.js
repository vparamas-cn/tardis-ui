import React, { useState, useEffect, useRef } from "react";
import "./DropDown.scss";
import InputButton from "./InputText/InputWithButton";
import { Images } from "../assets/images";
import useOnClickOutside from "./OutClickhandler";
import Checkbox from "./Checkbox"
import RadioBtn from "./RadioBtn"

const DropDown = props => {
  const ref = useRef();
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
    }
  };
  const onSelectedItem = (e, item) => {
    setOption(item);
    setOpen(false);
  };
  const onSearch = text => {
    let filterdata = props.options;
    if (text && text.length > 0 && text.trim() !== "") {
      filterdata = props.options.filter(
        item => item.toLowerCase().indexOf(text.toLowerCase()) > -1
      );
    }
    setList(filterdata);
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
        <ul className="dropdown dontclose">
          {props.search ? (
            <li className="searchinput dontclose" id="searchinput">
              <InputButton
                placeholder={"Search"}
                id={`filtersearch-${props.id}`}
                btnclass={"searchbtn dontclose"}
                ButtonClick={text => {
                  onSearch(text);
                }}
                btnimg={Images.Search}
              />
            </li>
          ) : null}
          {props.radiobtn ?
            <li
              className={`dontclose radiofilter`}
            >
              <RadioBtn name="isactive" options={props.options} />
            </li>

            : 
          listoption.length > 0 ? (
            listoption.map((item, index) => {
              if (props.checkbox) {
                return (
                  <li
                    key={"checkbox-" + index}
                    className={`dontclose`}
                  >
                    <Checkbox name={item} label={item} class="dontclose" />
                  </li>
                )
              }
              else {
                return (
                  <li
                    key={"dd" + index}
                    className={`dontclose ${selectedoption === item ? "foucs" : ""}`}
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
