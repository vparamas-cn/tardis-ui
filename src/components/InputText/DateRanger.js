import React, { useState, Fragment } from "react";
import "./InputText.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useOnClickOutside from "../DropDown/OutClickhandler"

const CustomDateRanger = props => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [show, setShow] = useState(false);
    const onChange = dates => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      props.onChange({start:start,end:end})
    };
    const onCalendarClick = () => {
      setShow(true)
    }
    useOnClickOutside(props.refer, () => {
      setShow(false);
  });
    return (
      <Fragment>
      {show?<DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />:null}
      <div onClick={()=>onCalendarClick()}>{props.children}</div>
      </Fragment>
    );
};

export default CustomDateRanger;
