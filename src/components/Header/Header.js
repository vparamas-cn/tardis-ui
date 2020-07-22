import React from "react";
import "./Header.scss";
import Profile from "./Profile";
import DropDown from "../DropDown";
import Button from "../Button/Button";
import {Images} from "../../assets/images";
import { useHistory } from "react-router-dom";


const Header = () => {
  
  let history = useHistory();

  return (
    <section className="top-container">
      <div className="profilecontainer">
        <Profile
          img={Images.profile}
          name={"George Williams"}
        />
        <div className="profilemenus">
          <Button
            class={"profilemenu centeralign"}
            name="Edit Profie"
            leftimg={Images.Edit}
            onClick={() => {history.push("/Profile")}}
          />
          <Button
            class={"profilemenu centeralign"}
            name="Logout"
            leftimg={Images.Logout}
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="righttopcontainer">
        <DropDown
          id={"timedd"}
          class={"rttimezone centeralign"}
          imgclass={"rttimezonearrow centeralign"}
          imguri={Images.whitedownarrow}
          options={["(UTC.08.00) Pacific Time (US & CANADA)"]}
        />
        <div className="rtnotify">
          <img src={Images.Notification} />
        </div>
        <div className="rtprofile">
          <img
            src={Images.profile}
            className="righttopimg"
          />
          <DropDown
            id={"profiledd"}
            class={"rtholder centeralign"}
            profilename={"George"}
            imguri={Images.whitedownarrow}
            options={["Logout"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
