import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER
} from "../actions/user_actions";
import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import merge from "lodash/merge";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      return merge({}, { [action.currentUser.id]: action.currentUser })
    case RECEIVE_CHANNEL:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;