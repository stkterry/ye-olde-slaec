import React from "react";
import { connect } from "react-redux"
import { Route, Redirect, withRouter } from "react-router-dom";

const mSP = state => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id]
});


const Auth = ({ component: Component, path, loggedIn, exact, currentUser }) => {

  return <Route
    path={ path }
    exact={ exact }
    render={
      props => !loggedIn ? (<Component {...props} />) : (<Redirect to={`/messages/${Math.min(...currentUser.subscribed_channel_ids)}`} />)
    }
  />
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={ path }
    exact={ exact }
    render={
      props => !loggedIn ? <Redirect to ="/" /> : <Component {...props} />
    }
  />
);


export const AuthRoute = withRouter(connect(mSP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSP, null)(Protected));

// { `/messages/${Math.min(...currentUser.subscription_ids)}` }