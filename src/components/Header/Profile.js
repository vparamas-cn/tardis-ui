import React, { useEffect } from "react";
import "./Header.scss";

const Profile = props => {
  useEffect(() => {
    var c = document.getElementById("ProfileCanvas");
    var ctx = c.getContext("2d");
    var array = [
      {
        startangle: 0.85 * Math.PI,
        endangle: 0.995 * Math.PI,
        color: "#ffffff"
      },
      {
        startangle: 0.995 * Math.PI,
        endangle: 1.0125 * Math.PI,
        color: "#3976EB"
      },
      {
        startangle: 1.0125 * Math.PI,
        endangle: 1.1575 * Math.PI,
        color: "#ffffff"
      },
      {
        startangle: 1.1575 * Math.PI,
        endangle: 1.175 * Math.PI,
        color: "#3976EB"
      },
      {
        startangle: 1.175 * Math.PI,
        endangle: 1.32 * Math.PI,
        color: "#4a97ff"
      },
      {
        startangle: 1.32 * Math.PI,
        endangle: 1.3375 * Math.PI,
        color: "#3976EB"
      },
      {
        startangle: 1.3375 * Math.PI,
        endangle: 1.4825 * Math.PI,
        color: "#4a97ff"
      },
      {
        startangle: 1.4825 * Math.PI,
        endangle: 1.5 * Math.PI,
        color: "#3976EB"
      },
      {
        startangle: 1.5 * Math.PI,
        endangle: 1.645 * Math.PI,
        color: "#4a97ff"
      },
      {
        startangle: 1.645 * Math.PI,
        endangle: 1.6625 * Math.PI,
        color: "#3976EB"
      },
      {
        startangle: 1.6625 * Math.PI,
        endangle: 1.8093 * Math.PI,
        color: "#4a97ff"
      },
      {
        startangle: 1.8093 * Math.PI,
        endangle: 1.825 * Math.PI,
        color: "#3976EB"
      },
      {
        startangle: 1.825 * Math.PI,
        endangle: 1.97 * Math.PI,
        color: "#4a97ff"
      },
      {
        startangle: 1.97 * Math.PI,
        endangle: 1.9875 * Math.PI,
        color: "#3976EB"
      },
      {
        startangle: 1.9875 * Math.PI,
        endangle: 0.1475 * Math.PI,
        color: "#4a97ff"
      },
      {
        startangle: 1.1475 * Math.PI,
        endangle: 0.165 * Math.PI,
        color: "#3976EB"
      }
    ];
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
    <React.Fragment>
      <div className="profile centeralign">
        <img src={props.img} />
        <span>{props.name}</span>
      </div>
      <canvas id="ProfileCanvas" width="220" height="260" />
    </React.Fragment>
  );
};

export default Profile;
