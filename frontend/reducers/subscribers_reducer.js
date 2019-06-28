import {
  RECEIVE_SUBSCRIBER,
  REMOVE_SUBSCRIBER
} from "../actions/subscriber_actions";
import merge from "lodash/merge";
import { type } from "os";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (type.action) {
    case RECEIVE_SUBSCRIBER:
      return merge({}, state, { [action.subscriber.id]: action.subscriber });
    case REMOVE_SUBSCRIBER:
      let newState = merge({}, state);
      delete newState[action.subscriberId];
      return newState;
    default:
      return state;
  }
}