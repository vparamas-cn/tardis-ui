import React, { useState } from "react";
import "./RadioBtn.scss";
import RadioBtn from "./Radio";
const RadioGroup = props => {
  const [selectedIndex, setIndex] = useState(null);
  const [selectedValue, setValue] = useState(null);
  const [options, setOption] = useState(props.options);

  const toggleRadioBtn = index => {
    setIndex(index);
    setValue(options[index]);
    setOption(options);
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

  return <div className="radio-container">{allOptions}</div>;
};

export default RadioGroup;
