import React from "react";
import "./Support.scss";
import { Table, TitleContainer, FilterContainer } from "../../components";
import { Images } from "../../assets/images";

const Support = props => {
  var bgimage = {
    width: "50%",
    marginTop: 60,
    height: 400,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Images.SupportBG})`
  };
  return (
    <div className="Support-page">
      <TitleContainer name="Support Link" img={Images.Support} />
      <div className="centeralign">
        <div style={bgimage} />
        <div className="formcontainer" >
            <div className="heading">
                <h3>Need a help? Don't worry just Contact us</h3>
                <span>Please Indicate the nature of your Inquiry and fill in the form below</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
