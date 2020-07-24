import React, { useState, useEffect } from "react";
import "./TimePicker.scss";
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const CustomTimePicker = props => {
  const [time, setTime] = useState(null);
  useEffect(()=>{
    if(props.time)
    {
      setTime(props.time)
    }
  },[props])
  return (
    <TimePicker
    showSecond={true}
    defaultValue={moment()}
    name={props.name}
    disabled={props.disabled}
    value={time}
    className={`CustomTimePicker ${props.className?props.className:"" }`}
    onChange={time => setTime(time)}
    inputIcon={<FontAwesomeIcon icon={faClock} size="lg" />}
  />
   
  );
};

export default CustomTimePicker;
