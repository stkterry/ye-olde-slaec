import {
  postSubscriber,
  deleteSubscriber
} from "../util/subscriber_api_util";
import { recieveChannel } from "../actions/channel_actions";

export const RECEIVE_ALL_SUBSCRIBERS = "RECEIVE_ALL_SUBSCRIBERS";
export const REMOVE_SUBSCRIBER = "REMOVE_SUBSCRIBER";

export const createSubscriber = (channelId, subscriber) => dispatch => 
  postSubscriber(channelId, subscriber)
    .then(dat => dispatch(recieveChannel(dat)));

export const deleteSubscriber = (channelId, id) => dispatch =>
  deleteSubscriber(channelId, id)
    .then(dat => dispatch(recieveChannel(dat)));