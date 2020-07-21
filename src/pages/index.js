import React from "react";
import "./main.scss";
import { Header, Bottom } from "../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maintennace from "./Maintennace";
import Support from "./Support";
import Configurations from "./Configuration"
import Source from "./Configuration/SubPages/Source"

function Main(props) {
  return (
    <Router>
      <div className="tardis-container">
        <Header />
        <main id="maincontent">
          <Switch>
            <Route path="/Maintennace" children={<Maintennace />} />
            <Route path="/Support-Link" children={<Support />} />
            <Route path="/Configurations" children={<Configurations />} />
            <Route path="/Configurations" children={<Configurations />} />
            <Route path="/SourceConfigurations" children={<Source />} />
          </Switch>
        </main>
        <Bottom />
      </div>
    </Router>
  );
}

export default Main;
