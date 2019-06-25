import { connect } from "react-redux";
import Splash from './splash';
import { logout } from "../../actions/session_actions";

const mSP = ({ session, entities: { users } }) => (
  { currentUser: users[session.id] }
);

const mDP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mSP, mDP)(Splash);