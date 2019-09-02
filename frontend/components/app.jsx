import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import {AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";

import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";

import WorkspaceShowContainer from "./workspace/workspace_show_container";

import LostAndFound from "./lost_and_found/lost_and_found_container";

const App = () => (
  <div>

    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      
      <ProtectedRoute exact={true} path={`/messages/:channelId`} component={WorkspaceShowContainer} />
      <Route path="/" exact={true} component={SplashContainer} />
      <Route path="*" exact={true} component={LostAndFound} />
    </Switch>

  </div>
);

export default App;