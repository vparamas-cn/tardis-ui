import React from "react";
import { Table, TitleContainer, Tabs } from "../../components";
import FilterContainer from "./Components/FilterContainer";
import { Images } from "../../assets/images";
import "./Admin.scss";

const Admin = () => {
 
  return (
    <div className="AdminPage page">
      <TitleContainer
        name="Manage Permissions"
        img={Images.Admin}
      />
      <FilterContainer />
      <Tabs>
        <div label="ALL USERS" ><Table name="Admin" /></div>
        <div label="ACTIVE USERS" ><Table name="Admin" /></div>
        <div label="INACTIVE USERS" ><Table name="Admin" /></div>
        <div label="GROUPED USERS" ><Table name="Admin" /></div>
      </Tabs>
    </div>
  );
};

export default Admin;
