import React from "react";
import "./Bottom.scss";

const Menu = props => {
  return (
    <div
      className={`menu centeralign ${props.selection ? "selectionmenu" : ""}`}
      onClick={() => {
        props.onSelection(props);
      }}
    >
      <img src={props.image} class="menuimg" />
      <span>{props.name}</span>
      {props.notify ? <span class="notifydot" /> : null}
    </div>
  );
};

export default Menu;
