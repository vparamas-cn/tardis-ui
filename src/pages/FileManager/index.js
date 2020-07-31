import React from "react";
import { Table, TitleContainer } from "../../components";
import {Images} from "../../assets/images";
import "./FileManager.scss"
const FileManager = () => {

  return (
    <div className="FileManagerPage page" >
      <TitleContainer
        name="File Manager"
        img={Images.File}
        onSearch={(text)=>{
          
        }}
      />
     
      
    </div>
  );
};

export default FileManager