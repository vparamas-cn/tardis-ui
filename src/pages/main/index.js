import React from "react";
import "./main.scss";
import { Header, Bottom } from "../../components";
import Maintennace from "../Maintennace";

function Main() {
  return (
    <div className="tardis-container">
      <Header />
       <main id="maincontent">
         <Maintennace/>
       </main>
      <Bottom />
    </div>
  );
}

export default Main;
