import React, { useEffect, Fragment } from "react";
import "./Header.scss";
import { array } from "../../assets/constant"

const Profile = props => {
  useEffect(() => {
    var c = document.getElementById("ProfileCanvas");
    var ctx = c.getContext("2d");
    
    for (var i = 0; i < 15; i++) {
      ctx.beginPath();
      ctx.arc(
        c.width / 2,
        c.height / 2,
        60,
        array[i].startangle,
        array[i].endangle
      );
      ctx.strokeStyle = array[i].color;
      ctx.lineWidth = 4;
      ctx.stroke();
    }
  });
  return (
    <Fragment>
      <div className="profile centeralign">
        <img alt="" src={props.img} />
        <span>{props.name}</span>
      </div>
      <canvas id="ProfileCanvas" width="220" height="260" />
    </Fragment>
  );
};

export default Profile;
