import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Main from "./pages";
import Dev from "./pages/dev";
import ScrollToTop from './ScrollController';
import { isDev } from './utils'
import { Security } from '@okta/okta-react';
const config = {
  clientId: process.env.CLIENT_ID,
  issuer: process.env.ISSUER,
  redirectUri: window.location.origin,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck:false
};
function App() {
  return (
    <Router>
      <ScrollToTop />
      {isDev() ?
        <Switch>
          <Route path="/" children={<Dev />} />
        </Switch> :
        <Security {...config}>
          <Switch>
            <Route path="/" children={<Main />} />
          </Switch>
        </Security>}
    </Router>
  );
}

export default App;
