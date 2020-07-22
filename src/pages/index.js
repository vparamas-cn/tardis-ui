import React from "react";
import "./main.scss";
import { Header, Bottom } from "../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maintennace from "./Maintennace";
import Support from "./Support";
import Configurations from "./Configuration"
import Source from "./Configuration/SubPages/Source"
import SourceMap from "./Configuration/SubPages/SourceMap"
import SlackIntegration from "./Configuration/SubPages/Slack"
import Profile from "./Profile"
import Admin from "./Admin"
import FileManager from "./FileManager"
import TrendChart from "./TrendChart"

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
            <Route path="/SourceMapConfigurations" children={<SourceMap />} />
            <Route path="/SlackIntegration" children={<SlackIntegration />} />
            <Route path="/Profile" children={<Profile />} />
            <Route path="/Admin" children={<Admin />} />
            <Route path="/FileManager" children={<FileManager />} />
            <Route path="/TrendChart" children={<TrendChart />} />
          </Switch>
        </main>
        <Bottom />
      </div>
    </Router>
  );
}

export default Main;
