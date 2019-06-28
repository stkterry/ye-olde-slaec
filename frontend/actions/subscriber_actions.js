import {
  postSubscriber,
  deleteSubscriber as delSubscriber
} from "../util/subscriber_api_util";
import { receiveChannel } from "../actions/channel_actions";

export const RECEIVE_SUBSCRIBER = "RECEIVE_SUBSCRIBER";
export const REMOVE_SUBSCRIBER = "REMOVE_SUBSCRIBER";

const receiveSubscriber = subscriber => ({
  type: RECEIVE_SUBSCRIBER,
  subscriber: subscriber
})

const removeSubscriber = subscriberId => ({
  type: REMOVE_SUBSCRIBER,
  subscriberId: subscriberId
});

export const createSubscriber = (channelId, subscriber) => dispatch => 
  postSubscriber(channelId, subscriber)
    .then(dat => dispatch(receiveChannel(dat)));

export const deleteSubscriber = (channelId, id) => dispatch =>
  delSubscriber(channelId, id)
    .then(dat => dispatch(receiveChannel(dat)));