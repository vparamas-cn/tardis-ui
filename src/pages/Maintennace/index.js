import React from "react";
import { Table, TitleContainer } from "../../components";
import FilterContainer from "./Components/FilterContainer"
import { Images } from "../../assets/images";
import "./Maintennace.scss"
import { connect, useSelector } from "react-redux";
import Layout from '../../Layout';
const Maintennace = () => {
  const maintennace = useSelector(state => state.maintennace);
  return (
    <Layout>
      <div className="MaintennacePage page" >
        <TitleContainer
          name="Maintennace"
          img={Images.Maintennace}
        />
        <FilterContainer LoadRecord={(data) => { }}/>
        <Table name="Maintennace" dataSource={maintennace} LoadRecord={(data) => { }}/>
      </div>
    </Layout>
  );
};

export default Maintennace;
