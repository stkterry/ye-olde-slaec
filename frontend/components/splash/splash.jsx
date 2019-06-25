import React from "react";
import SplashDefaultLinks from "./splash_default_links";
import { Link } from "react-router-dom";

// import Sig
// import SessionForm from "../session/session_form";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: ""};

    this.update = this.update.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value })
  }

  render() {
    const { currentUser, logout } = this.props;

    const splashHeader = (currentUser) ? (
      <header className="splash-header">
        <SplashDefaultLinks />
        <nav className="splash-header-right">
          <button>Future Workspaces Button</button>
        </nav>
      </header>
    ):(
      <header className="splash-header">
        <SplashDefaultLinks />
        <nav className="splash-header-right">
          <Link className="splash-header-login" to="/login">Sign In</Link>
          <Link className="splash-header-login" to="/signup">GET STARTED</Link>
        </nav>
      </header>
    );

    return (
      <div>
        { splashHeader }
        <div className="splash-body">
          <p>Some Stuff Here Always</p>
        </div>



      </div>
    )
  }

}

export default Splash;

// const Greeting = ({ currentUser, logout }) => {
//   const loggedInMessage = () => (
//     <div className="loggedInMessage">
//       <h3 className="loggedInMessage-H3">
//         Greeting Test, {currentUser.username}
//       </h3>
//       <button
//         className="loggedInMessage-button"
//         onClick={logout}
//       >Logout!
//       </button>
//     </div>
//   )
//   const loggedOutMessage = () => (
//     <nav className="loggedOutMessage">
//       <Link to="/login">Login</Link>
//       <p> or </p>
//       <Link to="/logout">Logout</Link>
//     </nav>
//   )

//   return currentUser ? loggedInMessage() : loggedOutMessage();

// };

// export default Greeting;