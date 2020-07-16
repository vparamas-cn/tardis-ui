import React from "react";
import "./Button.scss";

const Button =(props)=> {
 
  return (
    <div className={`detailbtn centeralign ${ props.class}`} onClick={()=>{props.onClick()}}>
        {props.leftimg ? <img src={props.leftimg} />:null}
        <span>{props.name}</span>
        {props.rightimg ? <img src={props.rightimg} />:null}
    </div>
  );
}

export default Button;