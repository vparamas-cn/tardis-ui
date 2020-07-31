import React from "react";
import "./Button.scss";
import Loader from "../Loader";

const Button = props => {
  if(props.loading)
  return (
    <div
    className={`detailbtn centeralign ${props.class}`}
    onClick={() => {
      props.onClick();
    }}
  >
    <Loader small={true}/>
    </div>
  )
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
