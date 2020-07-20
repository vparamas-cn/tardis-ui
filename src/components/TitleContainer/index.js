import React from "react";
import "./TitleContainer.scss";
import InputButton from "../InputText/InputWithButton";
import Button from "../Button/Button";
import { Images } from "../../assets/images";

const TitleContainer = props => {
  const fullscreen = () => {
    var mainscreen = document.getElementById("maincontent");
    if (mainscreen.className.indexOf("fullscreen") > -1) {
      mainscreen.classList.remove("fullscreen");
      mainscreen.classList.add("originalscreen");
      document.body.style.overflowY  ="auto";
    } else {
      mainscreen.classList.add("fullscreen");
      mainscreen.classList.remove("originalscreen");
      document.body.style.overflowY  ="hidden";
    }
  };
  return (
    <div className="container-title">
      <div className="title-left">
        <Button
          class={"backoption centeralign"}
          name={"Back"}
          leftimg={Images.Back}
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
          id ={"tablesearch"}
          btnclass={"searchbtn"}
          ButtonClick={text => {}}
          btnimg={Images.Search}
        />
        <Button
          class={"fullscreenicon"}
          leftimg={Images.Fullscreen}
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
