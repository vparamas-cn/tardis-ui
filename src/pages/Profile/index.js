import React from "react";
import { TitleContainer } from "../../components";
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
        <div>
          <div>
            
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Profile;