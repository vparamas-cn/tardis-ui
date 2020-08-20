import React from "react";
import "./main.scss";
import { Header, Bottom, Aside } from "../components";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
import Dashboard from "./Dashboard"; 
import Customized from "./Dashboard/Customized"

function Main(props) {
  return (
    <Router>
      <div className="tardis-container">
        <Header />
        <main id="maincontent">
          <Switch>
            <Route path="/dashboard" children={<Dashboard />} />
            <Route path="/customized-dashboard" children={<Customized />} />
            <Route path="/maintennace" children={<Maintennace />} />
            <Route path="/support-link" children={<Support />} />
            <Route path="/configurations" children={<Configurations />} />
            <Route path="/source-configurations" children={<Source />} />
            <Route path="/source-map-configurations" children={<SourceMap />} />
            <Route path="/slack-integration" children={<SlackIntegration />} />
            <Route path="/profile" children={<Profile />} />
            <Route path="/admin" children={<Admin />} />
            <Route path="/file-manager" children={<FileManager />} />
            <Route path="/trend-chart" children={<TrendChart />} />
          </Switch>
          <Redirect strict from="/" to="configurations" />
        </main>
        <Bottom />
        <Aside />
      </div>
      <div id="snackbar">Some text some message..</div>
    </Router>
  );
}

export default Main;
