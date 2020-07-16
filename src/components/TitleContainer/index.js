import React from "react";
import "./TitleContainer.scss";
import InputButton from "../InputText/InputWithButton"

const TitleContainer = props => {
  const fullscreen = () => {
    var mainscreen = document.getElementById("maincontent");
    if (mainscreen.className.indexOf("fullscreen") > -1) {
      mainscreen.classList.remove("fullscreen");
      mainscreen.classList.add("originalscreen");
    } else {
      mainscreen.classList.add("fullscreen");
      mainscreen.classList.remove("originalscreen");
    }
  };
  return (
    <div className="container-title">
      <div className="title-left">
        <div className="backoption centeralign">
          <img src={require("../../assets/images/Back.svg")} />
          <span>Back</span>
        </div>
        <div className="title-divder centeralign">
          <span />
        </div>
        <div className="title centeralign">
          <img src={props.img} />
          <span>{props.name}</span>
        </div>
      </div>
      <div className="centeralign">
        <InputButton placeholder={"Search"} btnclass={"searchbtn"} ButtonClick={(text)=>{}}  btnimg={require("../../assets/images/Search.svg")}/>
        <div
          className="fullscreenicon"
          onClick={() => {
            fullscreen();
          }}
        >
          <img src={require("../../assets/images/Fullscreen.svg")} />
        </div>
        <div className="cursorpointer">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
