import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./helpers/history.js";

import IndexPage from "./pages/Index.js";
import LoginPage from "./pages/login.js";
import RegisterPage from "./pages/register.js";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}
