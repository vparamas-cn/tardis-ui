import React from "react";
import "./Bottom.scss";
import SVG from 'react-inlinesvg';

const Menu = props => {
  return (
    <div
      className={`menu centeralign ${props.selection ? "selectionmenu" : ""}`}
      onClick={() => {
        props.onSelection(props);
      }}
    >
      <SVG src={props.image} class={props.name =="File Manager" ? 'menufileimg': "menuimg"}/>
      <span>{props.name}</span>
      {props.notify ? <span class="notifydot" /> : null}
    </div>
  );
};

export default Menu;
