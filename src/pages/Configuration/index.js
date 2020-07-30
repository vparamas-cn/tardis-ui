import React from "react";
import { Images } from "../../assets/images";
import { TitleContainer, FolderWrapper } from "../../components";
import "./Configuration.scss";
import { useHistory } from "react-router-dom";

const Configuration = () => {
  let history = useHistory();
  const onPagenavigation = (page) =>{
    if(page === "Source")
    {
        history.push("/source-configurations");
    }
     if(page === "SourceMap")
    {
        history.push("/source-map-configurations");
    }
     if(page === "Slack")
    {
        history.push("/slack-integration");
    }
  }  
  const onBackHandler = (page)=> {

  }
  return (
    <div className="Configuration-page page">
      <TitleContainer name="Configurations" img={Images.Settings} onBack={()=>{onBackHandler()}} onSearch={(text)=>{
        
        }}/>
      <div className="quickaccess">
        <div className="titlequick">
          <span>Quick Access</span>
        </div>
        <div className={`folder-wrapper`}>
          <FolderWrapper
            titlename="Source Configuration"
            subname="Configuration"
            selection={true}
            img={Images.Settings}
            OnClick={()=>{onPagenavigation("Source")}}
          />
          <FolderWrapper
            titlename="Map Configuration"
            subname="Configuration"
            selection={false}
            img={Images.map}
            OnClick={()=>{onPagenavigation("SourceMap")}}
          />
          <FolderWrapper
            titlename="Slack Intergration"
            subname="Configuration"
            selection={false}
            img={Images.slack}
            OnClick={()=>{onPagenavigation("Slack")}}
          />
         
        </div>
      </div>
    </div>
  );
};

export default Configuration;
