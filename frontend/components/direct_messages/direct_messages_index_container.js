import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { fetchChannels, fetchChannel, deleteChannel } from "../../actions/channel_actions";
import DirectMessagesIndex from "./direct_messages_index";


const mSP = state => ({
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
  channels: Object.values(state.entities.channels)
});

const mDP = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  deleteChannel: channelId => dispatch(deleteChannel(channelId))
  // fetchChannel: channelId => dispatch(fetchChannel(channelId))
  
});

export default withRouter(connect(mSP, mDP)(DirectMessagesIndex));

