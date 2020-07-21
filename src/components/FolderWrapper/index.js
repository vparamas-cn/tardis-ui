import React from "react";
import { Images } from "../../assets/images";
import SVG from 'react-inlinesvg';
import "./FolderWrapper.scss";
const FolderWrapper = props => {
  return (
    <div
      className={`folder-container ${props.selection
        ? "selected"
        : "unselected"}`}
    >
      <div className="topcontainer">
        <div className="whitecontainer" />
      </div>
      <div className="main-container">
        <div className="first-container">
          <div className="imgholder centeralign">
            <SVG src={props.img} />
          </div>
          <span>{props.titlename}</span>
        </div>
        <div className="second-container">
          <div className="folderview">
            <span className="folder">Folder</span>
            <span className="viewname">{props.subname}</span>
          </div>
          <div className="knowmore centeralign" onClick={()=>{props.OnClick()}}>Know More <SVG src={Images.folderarrow} /></div>
        </div>
      </div>
    </div>
  );
};

export default FolderWrapper;
