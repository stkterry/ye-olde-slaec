import {
  RECEIVE_ALL_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from "../actions/message_actions";
import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import merge from "lodash/merge";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return merge({}, state, action.messages);
    case RECEIVE_MESSAGE:
      return merge({}, state, { [action.message.id]: action.message })
    case REMOVE_MESSAGE:
      const newState = merge({}, state);
      delete newState[action.messageId];
      return newState;
    case RECEIVE_CHANNEL:
      return merge({}, state, action.messages);
    default:
      return state;
  }
}