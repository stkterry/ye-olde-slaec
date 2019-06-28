import { connect } from "react-redux";

import { fetchChannels } from "../../actions/channel_actions"
import { fetchUser } from "../../actions/user_actions";
import NavBar from "./nav_bar";

const mSP = state => ({
  currentUser: state.entities.users[state.session.id],
  channels: Object.values(state.entities.channels)
});

const mDP = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mSP, mDP)(NavBar);