import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Main from "./pages";
import ScrollToTop from './ScrollController';
import { isDev } from './utils'
import { Security } from '@okta/okta-react';
const config = {
  clientId: '{clientId}',
  issuer: 'https://${yourOktaDomain}/oauth2/default',
  redirectUri: 'http://localhost:3000/',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};
function App() {
  return (
    <Router>
      <ScrollToTop />
      {isDev() ?
        <Switch>
          <Route path="/" children={<Main />} />
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
