import React, { useState } from "react";
import "./InputText.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = props => {
  const [startDate, SetDate] = useState(new Date());
  const handleChange = date => {
    SetDate(date)
    props.handleDate && props.handleDate(date);
  };
  return (
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        name={props.name} 
        customInput={props.customDesign ? props.customDesign : null}
      />
  );
};

export default CustomDatePicker;
