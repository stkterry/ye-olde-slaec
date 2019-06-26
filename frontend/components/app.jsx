import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import AuthRoute from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import LostAndFound from "./lost_and_found/lost_and_found_container";

const App = () => (
  <div>

    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Route path="/" exact={true} component={SplashContainer} />
      <Route path="*" exact={true} component={LostAndFound}/>
    </Switch>


  </div>
);

export default App;