import React from "react";
import "./TitleContainer.scss";
import InputButton from "../InputText/InputWithButton";
import Button from "../Button/Button";

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
        <Button
          class={"backoption centeralign"}
          name={"Back"}
          leftimg={require("../../assets/images/Back.svg")}
          onClick={() => {}}
        />
        <div className="title-divder centeralign">
          <span />
        </div>
        <Button
          class={"title centeralign"}
          name={props.name}
          leftimg={props.img}
          onClick={() => {}}
        />
      </div>
      <div className="centeralign">
        <InputButton
          placeholder={"Search"}
          btnclass={"searchbtn"}
          ButtonClick={text => {}}
          btnimg={require("../../assets/images/Search.svg")}
        />
        <Button
          class={"fullscreenicon"}
          leftimg={require("../../assets/images/Fullscreen.svg")}
          onClick={() => {
            fullscreen();
          }}
        />
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
