import React from "react";
import { TitleContainer, ProfileInput } from "../../components";
import { Images } from "../../assets/images";
import "./Profile.scss"
import Layout from '../../Layout';
const Profile = () => {

  return (
    <Layout>
      <div className="ProfilePage page" >
        <TitleContainer
          name="User Profile"
          img={Images.Admin}
          onSearch={(text) => {

          }}
        />
        <div className="profiledetails">
          <div className="avatar">
            GW
          </div>
          <div className="profileinput-holder">
            <ProfileInput lable="User Name" img={Images.Admin} />
            <ProfileInput lable="Email address" img={Images.Admin}/>
           </div>
        </div>

      </div>
    </Layout>
  );
};

export default Profile;