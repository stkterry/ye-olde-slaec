import {
  getMessages,
  getMessage,
  postMessage,
  patchMessage,
  deleteMessage
} from "../util/message_api_util";

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages: messages
});

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message: message
});

const removeMessage = messageId => ({
  type: REMOVE_MESSAGE,
  messageId: messageId
});

export const fetchMessages = channelId => dispatch => getMessages(channelId, id)
  .then(messages => dispatch(receiveAllMessages(messages)));

export const fetchMessage = (channelId, id) => dispatch => getMessage(channelId, id)
  .then(message => dispatch(receiveMessage(message)));

export const createMessage = (channelId, message) => dispatch => postMessage(channelId, message)
  .then(message => dispatch(receiveMessage(message)));

export const updateMessage = (channelId, message) => dispatch => patchMessage(channelId, message)
  .then(message => dispatch(receiveMessage(message)));

export const deleteMessage = (channelId, id) => dispatch => deleteMessage(channelId, id)
  .then( () => dispatch(removeMessage(id)));