import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

// Test imports...
import * as SessionApiUtil from "./util/session_api_util";
import * as SessionActions from "./actions/session_actions";
// End test imports

document.addEventListener("DOMContentLoaded", () => {

  window.postUser = SessionApiUtil.postUser;
  window.deleteUser = SessionApiUtil.deleteUser;
  window.postSession = SessionApiUtil.postSession;
  window.deleteSession = SessionApiUtil.deleteSession;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;
  window.signup = SessionActions.signup;
  window.rmAccount = SessionActions.rmAccount;

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root)
});

