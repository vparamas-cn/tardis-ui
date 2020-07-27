import React from "react";
import { TitleContainer } from "../../components";
import {Images} from "../../assets/images";
import "./Dashboard.scss"
const Dashborad = () => {
  const onBackHandler = (page)=> {

  }
  return (
    <div className="Dashboradpage page" >
      <TitleContainer
        name="Dashborad"
        img={Images.Dashboard}
        onBack={() => {
          onBackHandler();
        }}
        onSearch={(text)=>{
          
        }}
      />
     
      
    </div>
  );
};

export default Dashborad