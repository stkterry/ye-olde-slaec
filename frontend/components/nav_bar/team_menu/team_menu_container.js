import { connect } from "react-redux"
import TeamMenu from "./team_menu";
import { logout } from "../../../actions/session_actions";

const mSP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSP, mDP)(TeamMenu);