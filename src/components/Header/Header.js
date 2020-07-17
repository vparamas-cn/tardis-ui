import React from "react";
import "./Header.scss";
import Profile from "./Profile";
import DropDown from "../DropDown";
import Button from "../Button/Button";

const Header = () => {
  return (
    <section className="top-container">
      <div className="profilecontainer">
        <Profile
          img={require("../../assets/images/profile.png")}
          name={"George Williams"}
        />
        <div className="profilemenus">
          <Button
            class={"profilemenu centeralign"}
            name="Edit Profie"
            leftimg={require("../../assets/images/Edit.svg")}
            onClick={() => {}}
          />
          <Button
            class={"profilemenu centeralign"}
            name="Logout"
            leftimg={require("../../assets/images/Logout.svg")}
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="righttopcontainer">
        <DropDown
          id={"timedd"}
          class={"rttimezone centeralign"}
          imgclass={"rttimezonearrow centeralign"}
          imguri={require("../../assets/images/whitedownarrow.svg")}
          options={["(UTC.08.00) Pacific Time (US & CANADA)"]}
        />
        <div className="rtnotify">
          <img src={require("../../assets/images/Notification.svg")} />
        </div>
        <div className="rtprofile">
          <img
            src={require("../../assets/images/profile.png")}
            className="righttopimg"
          />
          <DropDown
            id={"profiledd"}
            class={"rtholder centeralign"}
            profilename={"George"}
            imguri={require("../../assets/images/whitedownarrow.svg")}
            options={["Logout"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
