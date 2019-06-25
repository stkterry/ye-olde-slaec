import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthRoute from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";

const App = () => (
  <div>
    <header>
    <h1>Slaec</h1>
    {/* <GreetingContainer /> */}
    </header>
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Route path="/" component={SplashContainer} />
    </Switch>


  </div>
);

export default App;