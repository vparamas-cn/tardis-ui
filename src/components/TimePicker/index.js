import React, { useState } from "react";
import "./TimePicker.scss";
import TimePicker from "react-time-picker";

const CustomTimePicker = props => {
  const [time, setTime] = useState("10:50:10");
  return (
    <TimePicker
      onChange={time => setTime(time)}
      value={time} 
      className={`CustomTimePicker ${props.className?props.className:"" }`}
      clearIcon={null}
      clockClassName={"CustomClock"}
      format="HH:mm:ss"
    />
  );
};

export default CustomTimePicker;
