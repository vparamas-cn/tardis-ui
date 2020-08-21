import React, { useState, useEffect, useRef, Fragment } from "react";
import "./DropDown.scss";
import { Images } from "../../assets/images";
import useOnClickOutside from "./OutClickhandler";
import Checkbox from "../Checkbox"
import TagInput from "../TagInput"
import RadioBtn from "../RadioBtn"
import { Multiselect } from '../Multiselect';
import Button from "../Button/Button"

const DropDown = props => {
  const ref = useRef();
  const multiselectRef = useRef();
  const [selectedoption, setOption] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [listoption, setList] = useState([]);
  const [multilist, setMulti] = useState([]);
  const [slacktag, settags] = useState("");
  const { options, label, value, reset, radiobtn, checkbox, tags } = props
  useEffect(
    () => {
      if (options && options.length > 0) {
        setOption(options[0]);
        setList(options);
      }
      if (label) {
        setOption(label);
      }
      if (value && !radiobtn && !checkbox) {
        setOption(value);
      }
      if (reset && multiselectRef.current) {
        multiselectRef.current.resetSelectedValues();
      }
    },
    [value, reset]
  );
  useOnClickOutside(ref, () => {
    setOpen(false);
  });
  const onDropdown = e => {
    if (typeof e.target.className === "string" && e.target.className.indexOf("opendropdown") > -1 && !props.disabled && options !== undefined) {
      setOpen(!isOpen);
      setList(options);
      props.onClick && props.onClick()
      // if (props.multi) {
      //   multiselectRef.current.searchBox.current.focus();
      // }
    }
  };

  const onSelectedItem = (e, item) => {
    setOption(item);
    setOpen(false);
    props.onChange && props.onChange(item)
  };
  const onMultiSelectRemove = (data) => {
    setMulti(data)
  }
  const onTagsSelectRemove = (data) => {
    settags(data)
  }
  return (
    <div
      id={props.id}
      ref={ref}
      className={`wrapper-dropdown opendropdown ${props.class} ${isOpen
        ? "active"
        : ""} ${props.disabled ? "disabled" : ""}`}
      onClick={e => onDropdown(e)}
    >
      {props.search ? (
        <div className="centeralign opendropdown">
          <img alt=""
            className="opendropdown"
            src={Images.Search}
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
      <ul className={`dropdown dontclose ${props.multi ? "" : "normaldd"}`}>
        {props.multi ? (
          <Fragment>
            {multilist && multilist.length > 0 ? <div className="buttoncontainer"><Button
              class="greenclr"
              name="Apply"
              onClick={() => {
                props.onFilterselect(multilist)
                document.getElementById(props.id).click()
              }} /><Button
                class="redclr"
                name="Reset"
                onClick={() => {
                  multiselectRef.current.resetSelectedValues();
                  props.onFilterselect([]);
                  setMulti([])
                }} /></div> : null}
            <Multiselect
              options={listoption}
              placeholder="Search"
              showCheckbox={props.search}
              singleSelect={!props.search}
              onSelect={(e) => onMultiSelectRemove(e)}
              onRemove={(e) => onMultiSelectRemove(e)}
              displayValue={props.displaynode}
              ref={multiselectRef}
              disable={props.disabled}
              closeIcon={"close"}
              closeOnSelect={false}
            />

          </Fragment>
        )
          :
          tags ?
            <Fragment>
              {slacktag && slacktag.length > 0 ? <div className="buttoncontainer"><Button
                class="greenclr"
                name="Apply"
                onClick={() => {
                  props.onFilterselect(slacktag)
                  document.getElementById(props.id).click()
                }} /><Button
                  class="redclr"
                  name="Reset"
                  onClick={() => {
                    props.onFilterselect("");
                    settags("")
                  }} /></div> : null}
              <TagInput edit={true} id={props.id} inputstyle={{ width: 215 }} reset={reset} onChange={(e) => {onTagsSelectRemove(e) }} style={{ flexWrap: "wrap-reverse" }} />
            </Fragment>
            : radiobtn && options ?
              <li
                className={`dontclose radiofilter`}
              >
                <RadioBtn name="isactive" options={options} value={value} onChange={(e) => props.onChange(e)} />
              </li>

              :
              listoption.length > 0 ? (
                listoption.map((item, index) => {
                  if (checkbox) {
                    return (
                      <li
                        key={"checkbox-" + index}
                        className={`dontclose li`}
                        onClick={() => {
                          props.onChange && props.onChange(item)
                        }}
                      >
                        <Checkbox name={item} label={item} class="dontclose" />
                      </li>
                    )
                  }
                  else {
                    if (props.displaynode)
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
  )
};

export default DropDown;
