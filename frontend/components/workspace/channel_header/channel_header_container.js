import React from "react";
import { connect } from "react-redux";

import { deleteSubscriber } from "../../../actions/subscriber_actions";
import { updateChannel } from "../../../actions/channel_actions";
import ChannelHeader from "./channel_header";

const mSP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channel: ownProps.channel,
    members: Object.values(ownProps.members)
  }
}

const dSP = dispatch => ({
  updateChannel: channel => dispatch(updateChannel(channel)),
  deleteSubscriber: (channelId, userId) => dispatch(deleteSubscriber(channelId, userId))
});

export default connect(mSP, dSP)(ChannelHeader);
