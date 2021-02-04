import React from "react";
import { useSelector } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";
import history from "./helpers/history.js";

import IndexPage from "./pages/Index.js";
import LoginPage from "./pages/login.js";
import ProfilePage from "./pages/profile.js";
import RegisterPage from "./pages/register.js";

export default function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute
          exact
          isAuthenticated={isAuthenticated}
          path="/"
          component={IndexPage}
        />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/profile"
          component={ProfilePage}
        />
      </Switch>
    </Router>
  );
}
