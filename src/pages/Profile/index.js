import React, {Fragment} from "react";
import {  TitleContainer } from "../../components";
import {Images} from "../../assets/images";
import "./Profile.scss"
const Profile = () => {
  const onBackHandler = (page)=> {

  }
  return (
    <div className="ProfilePage page" >
      <TitleContainer
        name="User Profile"
        img={Images.Admin}
        onBack={() => {
          onBackHandler();
        }}
      />
     
      
    </div>
  );
};

export default Profile;