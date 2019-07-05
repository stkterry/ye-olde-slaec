import { connect } from "react-redux";

import { fetchChannels, createChannel } from "../../actions/channel_actions"
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import NavBar from "./nav_bar";

const mSP = state => ({
  currentUser: state.entities.users[state.session.id],
  users: Object.values(state.entities.users),
  channels: Object.values(state.entities.channels)
});

const mDP = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
  fetchChannels: () => dispatch(fetchChannels()),
  fetchUser: id => dispatch(fetchUser(id)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mSP, mDP)(NavBar);