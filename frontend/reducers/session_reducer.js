import merge from "lodash/merge";

import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const nullify = { id: null };

const sessionReducer = (state = nullify, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return nullify;
    default:
      return state;
  }

}

export default sessionReducer;