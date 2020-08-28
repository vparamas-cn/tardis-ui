import React from "react";
import { Table, TitleContainer } from "../../components";
import { Images } from "../../assets/images";
import { useParams, useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import Layout from '../../Layout';

const Detail = () => {
  let { sourcename } = useParams();
  const source = useSelector(state => state.source);
  let history = useHistory();
  const onBackHandler = () => {
    history.push("/dashboard");
  };

  return (
    <Layout>
      <div className="DetailPage page" >
        <TitleContainer
          name="Health Dashboard"
          img={Images.Dashboard}
          onBack={() => {
            onBackHandler();
          }}
        />
        <Table name="SourceDetailed" dataSource={source} LoadRecord={(e) => { }} />
      </div>
    </Layout>
  );
};

export default Detail