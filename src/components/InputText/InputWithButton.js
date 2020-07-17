import React, { useState } from "react";
import "./InputText.scss";

const InputButton = props => {
  const [text, SetText] = useState("");
  const TextChange = e => {
    SetText(e.target.value);
  };
  return (
    <div className="buttonwrapper">
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={e => {
          TextChange(e);
        }}
      />
      <div
        className={props.btnclass}
        onClick={() => {
          props.ButtonClick(text);
        }}
      >
        <img src={props.btnimg} />
      </div>
    </div>
  );
};

export default InputButton;
