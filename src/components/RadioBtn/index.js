import React, { useState, useEffect } from "react";
import "./RadioBtn.scss";
import RadioBtn from "./Radio";
const RadioGroup = props => {
  const [selectedIndex, setIndex] = useState(0);
  const [selectedValue, setValue] = useState("");
  const [options, setOption] = useState(props.options);

  useEffect(()=>{
    setIndex(0)
    setValue(props.options[0])
  },[props])

  const toggleRadioBtn = index => {
    if(!props.disabled){
    setIndex(index);
    setValue(options[index]);
    setOption(options);
    }
  };

  const allOptions = options.map((option, i) => {
    return (
      <RadioBtn
        key={i}
        isChecked={selectedIndex === i}
        text={option}
        value={option}
        index={i}
        handler={() => toggleRadioBtn(i)}
      />
    );
  });

  return <div className="radio-container">{allOptions}<input type="hidden" value={selectedValue} name={props.name}/></div>;
};

export default RadioGroup;
