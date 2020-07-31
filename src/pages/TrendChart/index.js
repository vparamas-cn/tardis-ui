import React from "react";
import { Images } from "../../assets/images";
import { TitleContainer, FolderWrapper } from "../../components";
import "./Chart.scss";

const Chart = () => {
  const onPagenavigation = page => {};
  return (
    <div className="Chart-page page">
      <TitleContainer
        name="Chart"
        img={Images.Chart}
        onSearch={(text)=>{
          
        }}
      />
      <div className="quickaccess">
        <div className="titlequick">
          <span>Quick Access</span>
        </div>
        <div className={`folder-wrapper`}>
          <FolderWrapper
            titlename="General Status"
            subname="Trends"
            selection={true}
            img={Images.Settings}
            OnClick={() => {
              onPagenavigation("General");
            }}
          />
          <FolderWrapper
            titlename="Failure Reason"
            subname="Trends"
            selection={false}
            img={Images.Settings}
            OnClick={() => {
              onPagenavigation("Failure");
            }}
          />
          <FolderWrapper
            titlename="Total Statistics"
            subname="Trends"
            selection={false}
            img={Images.slack}
            OnClick={() => {
              onPagenavigation("Statistics");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
