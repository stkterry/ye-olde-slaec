import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import ChannelsReducer from "./channels_reducer";
import MessagesReducer from "./messages_reducer";
import SubscribersReducer from "./subscribers_reducer";

export default combineReducers({
  users: usersReducer,
  channels: ChannelsReducer,
  messages: MessagesReducer,
  subscribers: SubscribersReducer
});