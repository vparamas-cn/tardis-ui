import React from "react";
import "./Button.scss";

const Button = props => {
  return (
    <div
      className={`detailbtn centeralign ${props.class}`}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.leftimg ? <img alt="" src={props.leftimg} /> : null}
      {props.name ? <span>{props.name}</span> : null}
      {props.rightimg ? <img alt="" src={props.rightimg} /> : null}
    </div>
  );
};

export default Button;
