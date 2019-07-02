import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { fetchChannels } from "../../actions/channel_actions";
import ChannelIndex from "./channel_index";


const mSP = state => ({
  currentUser: state.entities.users[state.session.id],
  channels: Object.values(state.entities.channels)
});

const mDP = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels())
});

export default withRouter(connect(mSP, mDP)(ChannelIndex));

