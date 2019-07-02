import React from "react";
import { connect } from "react-redux";
import { updateChannel } from "../../../actions/channel_actions";
import ChannelHeader from "./channel_header";

const mSP = (state, ownProps) => {
  // console.log(state.entities)
  return {
    channel: ownProps.channel,
    members: Object.values(state.entities.users)
  }
}

const dSP = dispatch => ({
  updateChannel: channel => dispatch(updateChannel(channel))
});

export default connect(mSP, dSP)(ChannelHeader);
