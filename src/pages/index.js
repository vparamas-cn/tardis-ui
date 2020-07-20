import React from "react";
import "./main.scss";
import { Header, Bottom } from "../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maintennace from "./Maintennace";
import Support from "./Support";

function Main(props) {
  return (
    <Router>
      <div className="tardis-container">
        <Header />
        <main id="maincontent">
          <Switch>
            <Route path="/Maintennace" children={<Maintennace />} />
            <Route path="/Support-Link" children={<Support />} />
          </Switch>
        </main>
        <Bottom />
      </div>
    </Router>
  );
}

export default Main;
