import React from "react";
import { Table, TitleContainer } from "../../components";
import { Images } from "../../assets/images";
import "./FileManager.scss"
import { useParams, useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import Layout from '../../Layout';

const FileManager = () => {
  let { sourcename } = useParams();
  const source = useSelector(state => state.source);
  let history = useHistory();
  const onBackHandler = () => {
    history.push("/dashboard");
  };

  return (
    <Layout>
      <div className="FileManagerPage page" >
        <TitleContainer
          name="File Manager"
          img={Images.File}
          onBack={sourcename ? () => {
            onBackHandler();
          } : false}
        />
        <Table name="FileManager" dataSource={source} LoadRecord={(e) => { }} />
      </div>
    </Layout>
  );
};

export default FileManager