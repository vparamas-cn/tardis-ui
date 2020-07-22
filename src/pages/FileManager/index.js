import React from "react";
import { Table, TitleContainer } from "../../components";
import {Images} from "../../assets/images";
import "./FileManager.scss"
const FileManager = () => {
  const onBackHandler = (page)=> {

  }
  return (
    <div className="FileManagerPage page" >
      <TitleContainer
        name="File Manager"
        img={Images.File}
        onBack={() => {
          onBackHandler();
        }}
      />
     
      
    </div>
  );
};

export default FileManager