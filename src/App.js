import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Main from "./pages";
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = 'Token 1c50e0aa64ec84880f0da736740373efc6c16785';
axios.defaults.headers.common['Content-Type'] = 'application/json';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" children={<Main />} />
      </Switch>
    </Router>
  );
}

export default App;
