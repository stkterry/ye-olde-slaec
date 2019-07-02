import React from "react";
import { connect } from "react-redux"

import { 
  fetchChannels,
   fetchChannel,
   updateChannel,
   deleteChannel
  } from "../../actions/channel_actions";
import { fetchUsers, updateUser } from "../../actions/user_actions";
import { fetchMessages } from "../../actions/message_actions";
import { createSubscriber, deleteSubscriber } from "../../actions/subscriber_actions";

import WorkspaceShow from "./workspace_show";

const mSP = (state, ownProps) => {
  return ({
    channel: state.entities.channels[ownProps.match.params.channelId],
    channelId: ownProps.match.params.channelId,
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    messages: Object.values(state.entities.messages),
  });
};

const mDP = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchChannel: channelId => dispatch(fetchChannel(channelId)),
  updateChannel: channel => dispatch(updateChannel(channel)),
  deleteChannel: channelId => dispatch(deleteChannel(channelId)),
  fetchMessages: channelId => dispatch(fetchMessages(channelId)),
  fetchUsers: () => dispatch(fetchUsers()),
  updateUser: user => dispatch(updateUser(user)),
  createSubscriber: (channelId, subscriber) => dispatch(createSubscriber(channelId, subscriber)),
  deleteSubscriber: (channelId, subscriberId) => dispatch(deleteSubscriber(channelId, subscriberId))
});

export default connect(mSP, mDP)(WorkspaceShow);