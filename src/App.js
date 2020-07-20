import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Main from "./pages";

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
