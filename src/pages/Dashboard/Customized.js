import React from "react";
import { TitleContainer } from "../../components";
import { Images } from "../../assets/images";
import { useHistory } from "react-router-dom";
import "./Customized.scss"
import Layout from '../../Layout';

const Customized = () => {
  let history = useHistory();
  const onBackHandler = () => {
    history.push("/dashboard");
  }
  return (
    <Layout>
      <div className="CustomizedPage page" >
        <TitleContainer
          name="Customized Dashboard"
          onBack={() => {
            onBackHandler();
          }}
        />
      </div>
    </Layout>
  );
};

export default Customized;