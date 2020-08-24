import React from "react";
import { Table, TitleContainer } from "../../components";
import {Images} from "../../assets/images";
import "./FileManager.scss"
import { useParams, useHistory } from "react-router-dom";
const FileManager = () => {
  let { sourcename } = useParams();

  let history = useHistory();
  const onBackHandler = () => {
    history.push("/dashboard");
  };
  
  return (
    <div className="FileManagerPage page" >
      <TitleContainer
        name="File Manager"
        img={Images.File}
        onBack={sourcename ?() => {
           onBackHandler();
        }:false}
      />
    </div>
  );
};

export default FileManager