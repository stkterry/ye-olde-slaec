import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";


const mSP = ({ session, entities: { users } }) => (
  { currentUser: users[session.id] }
);

const mDP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mSP, mDP)(Greeting);