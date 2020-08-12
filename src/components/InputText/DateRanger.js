import React, { useState } from "react";
import "./InputText.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDateRanger = props => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = dates => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      props.onChange({start:start,end:end})
    };
    return (
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    );
};

export default CustomDateRanger;
