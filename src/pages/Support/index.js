import React, { useState } from "react";
import "./Support.scss";
import { TextInput, Textarea, Button, TitleContainer } from "../../components";
import { Images } from "../../assets/images";

const Support = props => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    queries: "",
    info: ""
  });
  const bgimage = {
    width: "50%",
    marginTop: 60,
    height: 400,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Images.SupportBG})`
  };
  const Submit = () => {
    console.log(data);
  };

  return (
    <div className="Support-page page">
      <TitleContainer name="Support Link" img={Images.Support} 
        onSearch={(text)=>{
          
        }}/>
      <div className="centeralign">
        <div style={bgimage} />
        <div className="formcontainer">
          <img alt="" src={Images.supportform} className="formdesign" />
          <div className="heading">
            <h3>Need a help? Don't worry just Contact us</h3>
            <span>
              Please Indicate the nature of your Inquiry and fill in the form
              below
            </span>
          </div>
          <div className="inputcontainer">
            <TextInput
              lable="Full Name"
              required={true}
              OnChange={e => {
                setData({ ...data, name: e });
              }}
            />
            <TextInput
              lable="Email"
              required={true}
              OnChange={e => {
                setData({ ...data, email: e });
              }}
            />
            <TextInput
              lable="Phone"
              required={true}
              OnChange={e => {
                setData({ ...data, phone: e });
              }}
            />
            <TextInput
              lable="Queries"
              required={true}
              OnChange={e => {
                setData({ ...data, queries: e });
              }}
            />
            <Textarea
              lable="Additional Information"
              required={false}
              rows={13}
              cols={22}
              OnChange={e => {
                setData({ ...data, info: e });
              }}
            />
          </div>
          <div className="btncontainer centeralign">
            <Button
              class="supportbtn"
              name="Request Information"
              onClick={() => {
                Submit();
              }}
            />
            <span className="content">
              This site is protected by reCAPTCHA and the Google <br /> Privacy
              Policy and Terms of Service apply
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
