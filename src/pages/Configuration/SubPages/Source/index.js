import React from "react";
import "./Source.scss"
import { Table, TitleContainer, FilterContainer } from "../../../../components";
import {Images} from "../../../../assets/images";

const Source = () => {
  return (
    <div className="Sourcepage page" >
      <TitleContainer
        name="Source Configuration"
        img={Images.Settings}
      />
    </div>
  );
};

export default Source;
