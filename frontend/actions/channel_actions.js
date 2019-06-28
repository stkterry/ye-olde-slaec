import {
  getChannels,
  getChannel,
  postChannel,
  patchChannel,
  deleteChannel 
} from "../util/channel_api_util";


export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels: channels
});

const receiveChannel = dat => ({
  type: RECEIVE_CHANNEL,
  channel: dat.channel,
  users: dat.users,
  messages: dat.messages
});

const removeChannel = channelId => ({
  type: REMOVE_CHANNEL,
  channelId: channelId
});

export const fetchChannels = () => dispatch => getChannels()
  .then(channels => dispatch(receiveAllChannels(channels)));

export const fetchChannel = id => dispatch => getChannel(id)
  .then(dat => dispatch(receiveChannel(dat)));

export const createChannel = channel => dispatch => postChannel(channel)
  .then(channel => dispatch(receiveChannel(channel)));
  
export const updateChannel = channel => dispatch => patchChannel(channel)
  .then(channel => dispatch(receiveChannel(channel)));

export const deleteChannel = channelId => dispatch => deleteChannel(channelId)
  .then( () => dispatch(removeChannel(channelId)));
