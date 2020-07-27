import React from "react";
import "./TitleContainer.scss";
import InputButton from "../InputText/InputWithButton";
import Button from "../Button/Button";
import { Images } from "../../assets/images";
import { SearchBar } from "../../assets/constant"

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
  const SearchField = (text) =>{
    if(SearchBar.indexOf(text.name) > -1)
    return (
      <InputButton
          placeholder={"Search"}
          id ={"tablesearch"}
          btnclass={"searchbtn"}
          ButtonClick={text => {props.onSearch(text)}}
          btnimg={Images.Search}
        />
    )
    else
    return null
  }
  return (
    <div className="container-title">
      <div className="title-left">
        <Button
          class={"backoption centeralign"}
          name={"Back"}
          leftimg={Images.Back}
          onClick={() => {props.onBack()}}
        />
        <div className="title-divder centeralign">
          <span />
        </div>
        <Button
          class={`title centeralign ${props.name}`}
          name={props.name}
          leftimg={props.img}
          onClick={() => {}}
        />
      </div>
      <div className="centeralign">
        <SearchField name={props.name}/>
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
