import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Maintennace from "./Maintennace";
import Support from "./Support";
import Configurations from "./Configuration"
import Source from "./Configuration/SubPages/Source"
import SourceMap from "./Configuration/SubPages/SourceMap"
import SlackIntegration from "./Configuration/SubPages/Slack"
import Profile from "./Profile"
import Admin from "./Admin"
import Details from "./Dashboard/Details"
import TrendChart from "./TrendChart"
import Dashboard from "./Dashboard"; 
import Customized from "./Dashboard/Customized"
import NotFound from './NotFound'
import ParticularTrend from './TrendChart/ParticularSource'
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = 'Token 1c50e0aa64ec84880f0da736740373efc6c16785';
axios.defaults.headers.common['Content-Type'] = 'application/json';
function Main(props) {
  return (
    <Router>
          <Switch>
            <Redirect exact from="/" to="dashboard" />
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
            <Route path="/source-details/:sourcename?" children={<Details />} />
            <Route path="/trend-chart" children={<TrendChart />} />
            <Route path="/trend-source-chart/:sourcename" children={<ParticularTrend />} />
            <Route component={NotFound}/>
          </Switch>
    </Router>
  );
}

export default Main;
