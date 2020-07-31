import React  from "react";
import {  TitleContainer } from "../../components";
import {Images} from "../../assets/images";
import "./Profile.scss"
const Profile = () => {
 
  return (
    <div className="ProfilePage page" >
      <TitleContainer
        name="User Profile"
        img={Images.Admin}
        onSearch={(text)=>{
          
        }}
      />
     
      
    </div>
  );
};

export default Profile;