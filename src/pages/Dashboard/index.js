import React from "react";
import { TitleContainer } from "../../components";
import {Images} from "../../assets/images";
import "./Dashboard.scss"
const Dashborad = () => {
 
  return (
    <div className="Dashboradpage page" >
      <TitleContainer
        name="Dashborad"
        img={Images.Dashboard}
        onSearch={(text)=>{
          
        }}
      />
     
      
    </div>
  );
};

export default Dashborad